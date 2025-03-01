export default class StocksHistory {
  public static async getMultipleStocks(): Promise<StockItem[]> {
    const google = await this.getGoogleStock();
    return google;
  }

  public static async getGoogleStock(): Promise<StockItem[]> {
    const url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
    const response = await fetch(url);
    const jsonData = (await response.json()) as RawStockRecord[];
    const stockData = this.convertData(jsonData);
    return stockData;
  }

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

interface RawStockRecord {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface StockItem {
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  date: Date;
}