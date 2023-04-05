import styled from "styled-components";
import Button from "../ui/Button";
import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState();
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    setEmailValid(email.includes("@") && email.trim().length > 4);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEmailValid(email.includes("@") && email.trim().length > 4);
    console.log("done");
  };

  return (
    <Wrapper>
      <div>Leave us a message!</div>
      <Form onSubmit={formSubmitHandler}>
        <EmailLabel htmlFor="email">Email</EmailLabel>
        <EmailInput
          type="email"
          id="email"
          name="email"
          onChange={emailChangeHandler}
          isValid={emailValid}
          ref={emailRef}
        ></EmailInput>
        {emailValid === false && (
          <ValidationMessage>Please enter a valid email</ValidationMessage>
        )}
        <MessageLabel htmlFor="message">Message</MessageLabel>
        <MessageInput
          type="textarea"
          id="message"
          name="message"
          rows="4"
          cols="50"
        ></MessageInput>
        <SubmitButton>Submit</SubmitButton>
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

const MessageLabel = styled(EmailLabel)``;

const MessageInput = styled.textarea`
  background-color: inherit;
`;

const SubmitButton = styled(Button)`
  background-color: ${(p) => p.disabled && "var(--color-gray-300)"};
  color: ${(p) => p.disabled && "var(--color-gray-700)"};
`;
