export default class StocksHistory {
    public static async getMultipleStocks(): Promise<any[]> {
      const dataSources: any[] = [
        await this.getGoogleStock(),
        await this.getMicrosoftStock(),
      ];
  
      return new Promise<any[]>((resolve, reject) => {
        resolve(dataSources);
      });
    }
  
    public static async getAmazonStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Amazon"]
      };
  
      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }
  
    public static async getTeslaStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Tesla"]
      };
      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }
  
    public static async getMicrosoftStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Microsoft"]
      };
      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }
  
    public static async getGoogleStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Google"]
      };
      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }
  
    public static convertData(jsonData: any[]): StockItem[] {
      let stockItems: StockItem[] = [];
  
      for (let json of jsonData) {
        let parts = json.date.split("-");
        let item = new StockItem();
        item.date = new Date(parts[0], parts[1], parts[2]);
        item.open = json.open;
        item.high = json.high;
        item.low = json.low;
        item.close = json.close;
        item.volume = json.volume;
        stockItems.push(item);
  
      }
  
      return stockItems;
    }
  }
  
  export class StockItem {
    public open?: number;
    public close?: number;
    public high?: number;
    public low?: number;
    public volume?: number;
    public date?: Date;
  }  