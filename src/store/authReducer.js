const SET_USER = "SET_USER";

const initialState = {
  user: { name: "Username", role: "" },
  isAuth: false,
  sumOrders: 0,
  customersLength: 0,
  tableDataArr: [],
  chartObject: 0,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_USER:
    //   // console.log("fffff");
    //   return {
    //     ...state,
    //     user: action.user,
    //     isAuth: true,
    //   };
    case "SAVE_USER":
      // console.log(action.payload.user);
      return {
        ...state,
        user: action.payload.user,
        isAuth: true
      };
    case "RESET_USER":
      return {
        ...state,
        user: {},
        isAuth: false,
      };
    case "TOTAL_SALES":
      // console.log(action.payload.data.totalOrders);
      // console.log(action.payload.data.customersLength);
      console.log(action.payload);
      const tableDataArr = [...action.payload.data.tableData];

      for (const doc of tableDataArr) {
        doc.id = tableDataArr.indexOf(doc);
        doc.totalSales =
          "$" +
          Math.floor(
            doc.totalSales.reduce(function (prev, curr) {
              return prev + Number(curr.price) * Number(curr.quantity);
            }, 0)
          );
      }
      const totalTableSales = tableDataArr.reduce(function (prev, curr) {
        return prev + Number(curr.totalSales.slice(1));
      }, 0);

      return {
        ...state,
        sumOrders: action.payload.data.totalOrders,
        customersLength: action.payload.data.customersLength,
        tableDataArr,
        totalTableSales,
        chartObject: action.payload.data.chartObject,
      };
    default:
      return state;
  }
};
