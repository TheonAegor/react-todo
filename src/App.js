import { Component } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import TodoList from "./components/todoList/TodoList";
import TodoAdd from "./components/todoAdd/TodoAdd";

const date1 = new Date(2021, 7, 19, 14, 5);
const date2 = new Date(2021, 7, 19, 15, 23);

const initialData = [
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
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: initialData };
    this.setDone = this.setDone.bind(this);
    this.add = this.add.bind(this);
  }

  setDone = (key) => {
    const todo = this.state.data.find((elem) => elem.key === key);
    todo.done = true;
    this.setState((state) => ({}));
  };

  delete = (key) => {
    const newData = this.state.data.filter((elem) => elem.key !== key);
    this.setState((state) => ({ data: newData }));
  };

  add = (todo) => {
    this.state.data.push(todo);
    this.setState((state) => ({}));
  };

  render() {
    return (
      <HashRouter>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                'navbar-item is-uppercasee' + 
                (isActive ? ' is-active' : '')} >
              Todos
            </NavLink>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <NavLink
                to="/add"
                className={({ isActive }) => 
                  'navbar-item' + (isActive ? ' is-active' : '')}>
                  Создать дело
              </NavLink>
            </div>
          </div>
        </nav>
        <main className="context px-6 mt-6">
          <Routes>
            <Route
              path="/"
              element={
                <TodoList
                  list={this.state.data}
                  setDone={this.setDone}
                  delete={this.delete}
                ></TodoList>
              }
            />
            <Route path="/add" element={<TodoAdd add={this.add} />} />
          </Routes>
        </main>
      </HashRouter>
    );
  }
}