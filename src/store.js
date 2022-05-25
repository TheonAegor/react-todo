import { createStore } from "redux";
import rootReducer from "./reducer";

console.log("In store.js");

const date1 = new Date(2022, 8, 14, 14, 14);
const date2 = new Date(2022, 8, 15, 15, 15);

const initialData = {
  data: [
    {
      title: "Изучить react",
      desc: "Да поскорее!",
      image: "",
      createdAt: date1.toLocaleString(),
      key: date1.getTime(),
    },
    {
      title: "Написать реакт приложение",
      desc: "Список запланированных дел",
      image: "",
      createdAt: date2.toLocaleString(),
      key: date2.getTime(),
    },
  ],
};

const store = createStore(rootReducer, initialData);
export default store;
