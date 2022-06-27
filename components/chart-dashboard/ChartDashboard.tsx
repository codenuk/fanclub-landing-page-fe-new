import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Chart from 'chart.js/auto';
import { useMediaQuery } from "@mui/material";

function ChartDashboard({ dataEarn, dataRedeem, labels }: any) {
  const [chartRef, setChartRef] = useState<any>(null);
  const isMounted = useRef(false);
  const isIpadBelow = useMediaQuery("(max-width:992px)");

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (chartRef && isMounted.current) {
      const showingLabel =
        labels || [...new Array(17)].map((_, index) => `${index + 1}`);
      const context = chartRef.getContext("2d");
      // const gradient1 = context.createLinearGradient(0, 0, 0, 700);
      // gradient1.addColorStop(0, "#8E25F7");
      // gradient1.addColorStop(0.3, "#9F62DB");
      // gradient1.addColorStop(1, "#BCA2D6");

      // const gradient2 = context.createLinearGradient(0, 0, 0, 700);
      // gradient2.addColorStop(0, "#F63AB2");
      // gradient2.addColorStop(0.3, "#F37DC8");
      // gradient2.addColorStop(1, "#F4A9D9");

      const chart = new Chart(chartRef, {
        type: "line",
        data: {
          labels: showingLabel,
          datasets: [
            {
              tension: 0.5,
              fill: false,
              // backgroundColor: '#FFFFFF',
              label: "ยอด Earn",
              data: dataEarn,
              pointBorderColor: "#8E25F7",
              borderColor: "#8E25F7",
              borderWidth: 2,
            },
            {
              tension: 0.5,
              fill: false,
              // backgroundColor: '#FFFFFF',
              label: "ยอด Redeem",
              data: dataRedeem,
              pointBorderColor: "#F63AB2",
              borderColor: "#F63AB2",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          animation: false,
          maintainAspectRatio: false,
          interaction: {
            intersect: false,
          },
          scales: {
            y: {
              beginAtZero: false,
              ticks: {
                padding: isIpadBelow ? 8 : 16,
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            x: {
              ticks: {
                padding: isIpadBelow ? 8 : 16,
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [chartRef, dataEarn, dataRedeem, labels]);

  return (
    <div
      style={{
        display: "block",
        position: "relative",
        height: isIpadBelow ? "200px" : "300px",
      }}
    >
      <canvas id="chart" ref={setChartRef} />
    </div>
  );
}

ChartDashboard.propTypes = {
  dataEarn: PropTypes.arrayOf(PropTypes.number),
  dataRedeem: PropTypes.arrayOf(PropTypes.number),
  labels: PropTypes.arrayOf(PropTypes.string),
};

ChartDashboard.defaultProps = {
  dataEarn: [],
  dataRedeem: [],
  labels: null,
};

export default React.memo(ChartDashboard);
