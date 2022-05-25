import store from "./store";
import { bindActionCreators } from "redux";

function setDoneTodoUnbound(key) {
    return { type: 'todos/setDone', payload: key}
}

function addTodoUnbound(todo) {
    return ({
      type: "todos/add",
      payload: todo,
    });
}

function deleteTodoUnbound(key) {
   return ({
      type: "todos/delete",
      payload: key,
    });
}

export const setDone = bindActionCreators(setDoneTodoUnbound, store.dispatch)
export const addTodo = bindActionCreators(addTodoUnbound, store.dispatch)
export const deleteTodo = bindActionCreators(deleteTodoUnbound, store.dispatch)