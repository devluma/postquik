import React, { useState } from "react";

import { Chart } from "react-google-charts";

import ContentHeader from "src/components/ContentHeader";

import * as S from "./styles";

const Dashboard: React.FC = () => {
  const [dataPieChart, setDataPieChart] = useState([
    ["Linguagens", "Quantidade"],
    ["React", 100],
    ["Angular", 80],
    ["Vue", 50],
  ]);

  const [dataScatterChart, setDataScatterChart] = useState([
    ["Generation", "Descendants"],
    [0, 1],
    [1, 33],
    [2, 269],
    [3, 2013],
  ]);

  const [scatterChartOptions, setScatterChartOptions] = useState({
    hAxis: { title: "Generation", minValue: 0, maxValue: 3 },
    vAxis: { title: "Descendants", minValue: 0, maxValue: 2100 },
    trendlines: {
      0: {
        type: "exponential",
        visibleInLegend: true,
      },
    },
  });

  const [dataSteppedAreaChart, setDataSteppedAreaChart] = useState([
    ["Style", "Colonial", "Victorian", "Modern", "Contemporary"],
    ["2013", 5.2, 3.6, 2.8, 2],
    ["2014", 5.6, 4.0, 2.8, 3],
    ["2015", 7.2, 2.2, 2.2, 6.0],
    ["2016", 8.0, 1.7, 0.8, 4.0],
  ]);

  const [steppedAreaChartOptions, setSteppedAreaChartOptions] = useState({
    isStacked: "relative",
    legend: { position: "top", maxLines: 3 },
    vAxis: {
      minValue: 0,
      ticks: [0, 0.3, 0.6, 0.9, 1],
    },
  });

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#4E41F0" />
      <S.Content>
        <S.Row>
          <Chart
            chartType="ScatterChart"
            data={dataScatterChart}
            width="100%"
            height="400px"
            options={scatterChartOptions}
            legendToggle
          />
        </S.Row>
      </S.Content>

      <S.Content>
        <S.Column>
          <Chart
            chartType="PieChart"
            data={dataPieChart}
            width="100%"
            height="200px"
            legendToggle
          />
        </S.Column>

        <S.Column>
          <Chart
            chartType="PieChart"
            data={dataPieChart}
            width="100%"
            height="200px"
            legendToggle
          />
        </S.Column>

        <S.Column>
          <Chart
            chartType="PieChart"
            data={dataPieChart}
            width="100%"
            height="200px"
            legendToggle
          />
        </S.Column>

        <S.Column>
          <Chart
            chartType="PieChart"
            data={dataPieChart}
            width="100%"
            height="200px"
            legendToggle
          />
        </S.Column>
      </S.Content>

      <S.Content>
        <S.Row>
          <Chart
            chartType="SteppedAreaChart"
            data={dataSteppedAreaChart}
            width="100%"
            height="200px"
            options={steppedAreaChartOptions}
            legendToggle
          />
        </S.Row>
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
