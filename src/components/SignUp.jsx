import styled from "styled-components";
import Button from "../ui/Button";
import { useState, useEffect } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState();

  useEffect(() => {}, [password]);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setEmailValid(email.includes("@") && email.trim().length > 4);
  };

  const validateEmail = () => {
    setEmailValid(email.includes("@") && email.trim().length > 4);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    setPasswordValid(password.trim().length > 3);
  };

  const validatePassword = () => {
    setPasswordValid(password.trim().length > 3);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert("lol");
  };

  const validForm = passwordValid & emailValid;

  return (
    <Wrapper>
      Join us to receive 10% off your first order.
      <Form onSubmit={formSubmitHandler}>
        <EmailLabel htmlFor="email">Email</EmailLabel>
        <EmailInput
          type="email"
          id="email"
          name="email"
          onChange={emailChangeHandler}
          onBlur={validateEmail}
          isValid={emailValid}
        ></EmailInput>
        {emailValid === false && (
          <ValidationMessage>Please enter a valid email</ValidationMessage>
        )}
        <PasswordLabel htmlFor="password">Password</PasswordLabel>
        <PasswordInput
          type="password"
          id="email"
          name="email"
          onChange={passwordChangeHandler}
          onBlur={validatePassword}
          isValid={passwordValid}
        ></PasswordInput>
        {passwordValid === false && (
          <ValidationMessage>
            Please enter a password with at least 5 characters
          </ValidationMessage>
        )}
        <SubmitButton disabled={!validForm}>Submit</SubmitButton>
      </Form>
    </Wrapper>
  );
}

const ValidationMessage = styled.div`
  color: var(--color-gray-300);
`;

const Wrapper = styled.div`
  padding: 24px 0px;
  border: 1px solid var(--color-gray-300);
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-content: start;
`;

const EmailLabel = styled.label``;

const EmailInput = styled.input`
  background-color: ${(p) =>
    p.isValid === false ? "var(--color-urgent)" : "inherit"};
`;

const PasswordLabel = styled(EmailLabel)``;

const PasswordInput = styled(EmailInput)``;

const SubmitButton = styled(Button)`
  background-color: ${(p) => p.disabled && "var(--color-gray-300)"};
  color: ${(p) => p.disabled && "var(--color-gray-700)"};
`;
