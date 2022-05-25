import React from "react";
import store from "../../store";
import { setDone, deleteTodo } from "../../actionCreators";
import { selectList } from "../../selectors";
import { useEffect } from "react";
import { useState } from "react";

export default function TodoList(props) {
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
          {data.map((item) => (
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
                  onClick={() => setDone(item.key)}
                >
                  &#9745;
                </button>
              </td>
              <td>
                <button
                  className="button is-danger"
                  title="Удалить"
                  onClick={() => deleteTodo(item.key)}
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
