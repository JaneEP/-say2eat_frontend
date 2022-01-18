import * as React from "react";
import Box from "@mui/material/Box";

import RectangleOrange from "../.././containers/imgDashboard/RectangleOrange.png";
import RectangleLimit from "../totalSales/RectangleLimit.png";
import "../totalSales/TotalSales.scss";

import { connect } from "react-redux";

function TotalCustomers(props) {
  const { customersLength, sumOrders } = props;
  // console.log(props);
  // console.log(customersLength)

  let avgOrders = (sumOrders / customersLength).toFixed(1);

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
        <p className="total-sales">Total customers</p>

        <div className="value-container">
          <div className="data-container">
            <span className="total-sales-sum"> {customersLength}</span>
            <img
              src={RectangleOrange}
              alt={"rectangle"}
              className="rectangleOrange"
            />
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
              <span className="orders">{isNaN(avgOrders) ? 0 : avgOrders } </span>
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
    customersLength: state.auth.customersLength,
    sumOrders: state.auth.sumOrders,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TotalCustomers);
