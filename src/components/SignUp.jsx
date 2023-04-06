import styled from "styled-components";
import Button from "../ui/Button";
import { useState, useEffect } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState();

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
      <Form onSubmit={formSubmitHandler}>
        <FormHeader>Join us for 10% off</FormHeader>
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
      <OkSignImage>
        <img src="/images/OK-sign-improved.png" alt="hand with cookie"></img>
      </OkSignImage>
    </Wrapper>
  );
}

const OkSignImage = styled.div`
  width: 200px;
  margin: -38px 0px;
`;
const FormHeader = styled.h1`
  /* font-size: clamp(2.5rem, 4vw, 3rem); */
  font-size: clamp(0.8rem, 0.3vw + 1rem, 2rem);
  color: var(--color-white);
`;

const ValidationMessage = styled.div`
  color: var(--color-gray-300);
`;

const Wrapper = styled.div`
  padding: 38px 0px;
  border: 1px solid var(--color-gray-300);
  /* background-color: var(--color-creamV1); */
  background-color: var(--color-CTA);
  margin-left: -30px;
  margin-right: -30px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 38px;
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-content: start;
  gap: 4px;
  color: var(--color-white);
`;

const EmailLabel = styled.label``;

const EmailInput = styled.input`
  background-color: ${(p) =>
    p.isValid === false ? "var(--color-urgent)" : "var(--color-white)"};
`;

const PasswordLabel = styled(EmailLabel)``;

const PasswordInput = styled(EmailInput)`
  background-color: var(--color-white);
`;

const SubmitButton = styled(Button)`
  background-color: ${(p) => p.disabled && "var(--color-gray-300)"};
  color: ${(p) => p.disabled && "var(--color-gray-700)"};
  margin-top: 10px;
`;
