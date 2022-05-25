import React from "react";
import store from "../../store";
import { setDone, deleteTodo } from "../../actionCreators";
import { selectList } from "../../selectors";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";

function TodoListUnconnected(props) {
  const data = selectList(store.getState());
  const [,setFlag] =  useState(false)

  function refresh() {
    setFlag((flag) => !flag)
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(refresh)
    return ()=>{unsubscribe()}
  }, [])
  return (
    <section>
      <h1>Дела</h1>
      <table className="table is-hoverable is-fullwidth">
        <tbody>
          {props.list.map((item) => (
            <tr key={item.key}>
              <td>
                {item.done && <del>{item.title}</del>}
                {!item.done && item.title}
              </td>
              <td>
                <button
                  className="button is-success"
                  title="Пометить как сделанное"
                  disabled={item.done}
                  onClick={() => props.setDone(item.key)}
                >
                  &#9745;
                </button>
              </td>
              <td>
                <button
                  className="button is-danger"
                  title="Удалить"
                  onClick={() => props.delete(item.key)}
                >
                  &#9746;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

const actionBroker = (dispatch) => ({
	setDone: (key) => {dispatch({ type: 'todos/setDone', payload: key})},
	delete: (key) => {dispatch({ type: 'todos/delete', payload: key})}
});

const dataReceiver = (state) => ({list: state.data})
const connectTodoList = connect(dataReceiver, actionBroker)
const TodoList = connectTodoList(TodoListUnconnected)
export default TodoList;
