import styled from "styled-components";

function Button({ className, children, ...props }) {
  return (
    <ButtonWrapper className={`${className}`} {...props}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  border-radius: 20px;
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-CTA);
  color: var(--color-white);
  padding: 0.5rem 1.5rem;
  font-weight: bold;
`;

export default Button;
