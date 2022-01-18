import * as React from "react";
import Box from "@mui/material/Box";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
  //   maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

function Chart(props) {
  const { chartObject } = props;

  const labels = Object.keys(chartObject);
  const dataChart = Object.values(chartObject);
  // console.log(labels);
  // console.log(dataChart);

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: dataChart,
        backgroundColor: "#3A928C",
        borderRadius: "10",
      },
    ],
  };
  return (
    <Box
      sx={{
        p: 2,
        mt: 2,
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <div>
        <p className="total-sales">Total by Hours</p>
        <Bar options={options} data={data} />
      </div>
    </Box>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    customersLength: state.auth.customersLength,
    sumOrders: state.auth.sumOrders,
    tableDataArr: state.auth.tableDataArr,
    chartObject: state.auth.chartObject,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
