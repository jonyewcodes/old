"use client";

import React, { useState, useEffect } from "react";
import { IgrFinancialChart, IgrFinancialChartModule } from "igniteui-react-charts";
import StocksHistory from "../services/StocksHistory";

IgrFinancialChartModule.register();

const CandleChart = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
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
        chartTitle=""
        subtitle=""
        yAxisTitle=""
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
        negativeOutlines="#FF004F"
        dataSource={data}
      />
    </div>
  );
};

export default CandleChart;
