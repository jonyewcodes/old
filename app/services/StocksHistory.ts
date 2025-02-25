// This interface describes one stock record
export interface StockItem {
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  date: Date;
}

// Optional helper interface for attaching dataIntents
interface HasDataIntents {
  __dataIntents?: {
    close?: string[];
  };
}

/**
 * Service class for fetching multiple stock data sets.
 */
export default class StocksHistory {
  /**
   * Combine multiple stock data sets (e.g. Google & Microsoft) into a single array.
   * Instead of returning an array-of-arrays, we flatten them.
   */
  public static async getMultipleStocks(): Promise<StockItem[]> {
    // fetch Google & Microsoft
    const google = await this.getGoogleStock();
    const ms = await this.getMicrosoftStock();
    // combine them into a single array
    return [...google, ...ms];
  }

  /**
   * Example method fetching "Google" data
   */
  public static async getGoogleStock(): Promise<StockItem[]> {
    const url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
    const response = await fetch(url);
    // each JSON record has { date, open, high, low, close, volume }
    const jsonData = await response.json() as RawStockRecord[];
    // convert the raw JSON into typed StockItem
    const stockData = this.convertData(jsonData);
    // attach dataIntents
    (stockData as StockItem[] & HasDataIntents).__dataIntents = {
      close: ["SeriesTitle/Google"],
    };
    return stockData;
  }

  public static async getMicrosoftStock(): Promise<StockItem[]> {
    const url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
    const response = await fetch(url);
    const jsonData = await response.json() as RawStockRecord[];
    const stockData = this.convertData(jsonData);
    (stockData as StockItem[] & HasDataIntents).__dataIntents = {
      close: ["SeriesTitle/Microsoft"],
    };
    return stockData;
  }

  // ... similarly for other methods getTeslaStock(), getAmazonStock() etc. if needed ...

  /**
   * Convert raw JSON data into typed StockItem
   */
  private static convertData(jsonData: RawStockRecord[]): StockItem[] {
    const stockItems: StockItem[] = [];
    for (const rec of jsonData) {
      const [year, month, day] = rec.date.split("-");
      const item: StockItem = {
        date: new Date(+year, +month, +day),
        open: rec.open,
        high: rec.high,
        low: rec.low,
        close: rec.close,
        volume: rec.volume,
      };
      stockItems.push(item);
    }
    return stockItems;
  }
}

/**
 * The shape of each raw JSON record from the remote service
 */
interface RawStockRecord {
  date: string;   // e.g. "2023-01-05"
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}
