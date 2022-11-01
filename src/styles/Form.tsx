import styled from "styled-components";

export const FormContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 40px;
  max-width: 540px;
  border-radius: 5px;
  border-style: none;
  padding: 5px;
  border: 1px solid #ccc;
`;

export const Label = styled.label`
  width: 100%;
  max-width: 540px;
  text-align: start;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const InputContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonForm = styled.button`
  padding: 10px 45px;
  background-color: black;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 20px;

  &:hover {
    background-color: #292828;
    cursor: pointer;
    transition: ease 0.2s;
  }
`;

export const Error = styled.p`
  width: 100%;
  max-width: 540px;
  background-color: #b60000;
  padding: 0.4rem;
  font-weight: 700;
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin: 0.2rem 0;
  border-radius: 5px;
`;

export const TextDescription = styled.textarea`
  width: 100%;
  max-width: 540px;
  height: 60px;
  border-radius: 5px;
`;
