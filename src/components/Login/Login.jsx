import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import useFormValidation from "../../utils/useFormValidation";
import "./Login.css";

export default function Login({ handleLogin }) {
  const { values, errors, isInputValid, isValid, handleChange } = useFormValidation();

  function onLogin(e) {
    e.preventDefault();
    handleLogin(values.password, values.email);
  }

  return (
    <section className="login">
      <h2 className="login__header">Вход</h2>
      <Form name="login" btnTitle="Войти" isValid={isValid} onSubmit={onLogin}>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          isInputValid={isInputValid.email}
          error={errors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          value={values.password}
          onChange={handleChange}
          isInputValid={isInputValid.password}
          error={errors.password}
        />
      </Form>
    </section>
  );
}
