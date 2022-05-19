import React from "react";

const initialData = {
  title: "",
  desc: "",
  image: "",
};

export default function TodoAdd(props) {
  const [state, setState] = React.useState(initialData);

  function clearFormData() {
    setState(initialData);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const newTodo = { ...state };
    const date = new Date();
    newTodo.done = false;
    newTodo.createdAt = date.toLocaleString();
    newTodo.key = date.getTime();
    props.add(newTodo);
    clearFormData();
    e.target.reset();
  }

  function handleTitleChange(e) {
    state.title = e.target.value;
  }

  function handleDescChange(e) {
    state.desc = e.target.value;
  }

  const handleImageChange = (e) => {
    const cFiles = e.target.files;
    if (cFiles.length) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        state.image = fileReader.result;
      };
      fileReader.readAsDataURL(cFiles[0]);
    } else state.image = "";
  };

  return (
    <section>
      <h1>Создание нового дела</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="field">
          <label htmlFor="" className="label">
            Заголовок
          </label>
          <div className="control">
            <input className="input" onChange={handleTitleChange} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Примечание
          </label>
          <div className="control">
            <textarea
              className="textarea"
              onChange={handleDescChange}
            ></textarea>
          </div>
        </div>
        <div className="field">
          <div className="file">
            <label className="file-label">
              <input
                type="file"
                className="file-input"
                accept="image/*"
                onChange={handleImageChange}
              />
              <span className="file-cta">
                <span className="file-label">Графическая иллюстрация</span>
              </span>
            </label>
          </div>
        </div>
        <div className="field is-grouped is-grouped-right">
          <div className="control">
            <input
              type="reset"
              className="button is-link is-light"
              value="Сброс"
            />
          </div>
          <div className="control">
            <input
              type="submit"
              className="button is-link is-primary"
              value="Создать дело"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
