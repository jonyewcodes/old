"use client";

import React, { useState, useEffect } from "react";
import { IgrFinancialChart, IgrFinancialChartModule } from "igniteui-react-charts";
import StocksHistory, { StockItem } from "../services/StocksHistory";

// Register the Ignite UI module
IgrFinancialChartModule.register();

export default function CandleChart() {
  // Instead of `any[]`, we define StockItem[]
  const [data, setData] = useState<StockItem[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // getMultipleStocks returns a Promise<StockItem[]>
    StocksHistory.getMultipleStocks().then((stocks) => {
      setData(stocks);
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "600px", margin: 0, padding: 0 }}>
      <IgrFinancialChart
        width="100%"
        height="100%"
        chartType="Candle"
        isToolbarVisible={false}
        xAxisLabelVisibility="Collapsed"
        yAxisLabelVisibility="Collapsed"
        xAxisMajorStroke="transparent"
        yAxisMajorStroke="transparent"
        xAxisMinorStroke="transparent"
        yAxisMinorStroke="transparent"
        xAxisTickLength={0}
        yAxisTickLength={0}
        leftMargin={0}
        rightMargin={0}
        topMargin={0}
        bottomMargin={0}
        toolTipType="None"
        isSeriesHighlightingEnabled={false}
        isHorizontalZoomEnabled={false}
        isVerticalZoomEnabled={false}
        zoomSliderType="None"
        thickness={2.5}
        brushes="#3D9796"
        outlines="#3D9796"
        negativeBrushes="transparent"
        negativeOutlines="#ffffff"
        dataSource={data}
      />
    </div>
  );
}
