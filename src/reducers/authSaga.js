import { put, takeEvery, call } from "redux-saga/effects";
import { SAVE_USER, TOTAL_SALES } from "../actions";

const authLogin = async (data) => {
  data = JSON.stringify(data);
  try {
    let responce = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      body: data,
    });

    let result = await responce.json();

    localStorage.setItem("JWT", result.token);
    return result;

    // if (result.status === "success") {
    // localStorage.setItem("JWT", result.token);
    // return result;
    // } else {
    // alert(result.message);
    // }
  } catch (err) {
    console.log("Поймана ошибка:", err);
    // if (err.message.includes("Failed to fetch")) {
    //   alert("Сервер не отвечает. Проверьте сетевое подключение.");
    // } else {
    //   alert("Непредвиденная ошибка!");
    // }
  }
};

const totalSales = async (dataSales) => {
  dataSales = JSON.stringify(dataSales);
  try {
    let responce = await fetch("http://localhost:5001/api/auth/aggregate", {
      method: "POST",
      body: dataSales,
    });

    let resultSales = await responce.json();
    return resultSales;
  } catch (err) {
    console.log("Поймана ошибка:", err);
  }
};

function* loginWorker(action) {
  const dataPayload = yield call(authLogin, action.payload);
  // console.log(dataPayload);
  if (!dataPayload.user) {
    alert("User not found");
  } else {
    yield put(SAVE_USER(dataPayload));
  }
}

function* salesWorker(action) {
  const dataPayloadSales = yield call(totalSales, action.payload);
  yield put(TOTAL_SALES(dataPayloadSales));
  // console.log(action.payload);
  // console.log(dataPayloadSales);
}

export function* rootSaga() {
  yield takeEvery("SET_USER", loginWorker);
  yield takeEvery("CLOSE_CALENDAR", salesWorker);
}
