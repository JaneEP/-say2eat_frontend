import * as React from "react";
import Box from "@mui/material/Box";

import Rectangle from "../../containers/./imgDashboard/Rectangle.png";
import RectangleLimit from "./RectangleLimit.png";
import "./TotalSales.scss";

import { connect } from "react-redux";

function TotalSales({ sumOrders, totalTableSales }) {
  // console.log(sumOrders, totalTableSales);

  let avgSumOrders = (totalTableSales / sumOrders).toFixed(1);
  return (
    <Box
      sx={{
        p: 2,
        mt: 2,
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <div className="total-sales-container">
        <p className="total-sales">Total sales</p>

        <div className="value-container">
          <div className="data-container">
            <span className="total-sales-sum"> ${totalTableSales}</span>
            <img src={Rectangle} alt={"rectangle"} className="rectangle" />
            <span className="procent"> 2.5%</span>
          </div>
          <div className="limit-container">
            <img src={RectangleLimit} alt={"limit"} />
          </div>
          <div className="total-orders">
            <div>
              <span className="orders">{sumOrders}</span>
              <span> orders</span>
            </div>
            <div>
              <span className="orders">           
                ${isNaN(avgSumOrders) ? 0 : avgSumOrders } 
              </span>
              <span>Avg.order size</span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    sumOrders: state.auth.sumOrders,
    totalTableSales: state.auth.totalTableSales,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TotalSales);
