import { useState } from "react";

import "./Profile.css";

function Profile() {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;

    name === "name" ? setName(value) : setEmail(value);
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <label className="profile__field">
            <span className="profile__name">Имя</span>
            <input
              className="profile__input"
              name="name"
              type="text"
              onChange={handleChange}
              value={name || ""}
              minLength="2"
              maxLength="40"
              required
              placeholder="Имя"
            />
          </label>
          <div className="profile__line"></div>
          <label className="profile__field">
            <span className="profile__name">Почта</span>
            <input
              className="profile__input"
              name="email"
              type="text"
              onChange={handleChange}
              value={email || ""}
              minLength="2"
              maxLength="40"
              required
              placeholder="Почта"
            />
          </label>
          <button type="submit" className="profile__btn-edit">
            Редактировать
          </button>
        </form>
        <button className="profile__out">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
