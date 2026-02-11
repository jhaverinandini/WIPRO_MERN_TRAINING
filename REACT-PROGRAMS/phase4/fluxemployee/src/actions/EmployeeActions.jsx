import dispatcher from "../dispatcher/AppDispatcher";

export default function addEmployee(employeeName) {
  dispatcher.dispatch({
    type: "ADD_EMPLOYEE",
    payload: employeeName
  });
}