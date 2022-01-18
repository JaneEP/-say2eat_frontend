import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import "../../containers/DashboardContainer.scss";
import { connect } from "react-redux";

const columns = [
  { field: "orderPOS_ID", headerName: "Rank", width: 280 },
  { field: "_id", headerName: "Item", width: 300 },
  { field: "totalOrders", headerName: "Order(Total)", width: 260 },
  { field: "totalSales", headerName: "Sales(Total)", width: 230 },
];

function Table(props) {
  const { tableDataArr } = props;
  // const rows = [
  //   {
  //     id: 1,
  //     rank: "#1234500",
  //     item: "userName",
  //     orderTotal:  sumOrders ,
  //     salesTotal: "$35000",
  //   },
  // ]

  return (
    <Box
      sx={{
        p: 2,
        mt: 2,
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <p className="total-sales">Total sales</p>
      <div className="wrapper-table" style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={tableDataArr}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          disableSelectionOnClick={true}
            hideFooterSelectedRowCount={true}
        />
      </div>
    </Box>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    customersLength: state.auth.customersLength,
    tableDataArr: state.auth.tableDataArr,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
