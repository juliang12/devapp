import useForm from "@/hooks/useForm";
import { auth } from "@/services/firebase/firebaseConfig";
import {
  ButtonForm,
  Error,
  FormContainer,
  InputContainer,
  Label,
  TextInput,
} from "@/styles/Form";
import { BackgroundLeft, LoginContainer } from "@/styles/LoginStyles";
import validateCreateAccount from "@/validations/validateCreateAccount";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

const CreateAccount = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm(
    INITIAL_STATE,
    validateCreateAccount,
    createAccount
  );

  const { name, email, password } = values;

  async function createAccount() {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(res.user, { displayName: name });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <LoginContainer>
        <BackgroundLeft />
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="account">Nombre</Label>
            <TextInput
              type="text"
              placeholder="Account Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </InputContainer>
          {errors.name && <Error>{errors.name}</Error>}
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <TextInput
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </InputContainer>
          {errors.email && <Error>{errors.email}</Error>}
          <Label htmlFor="email">Password</Label>
          <InputContainer>
            <TextInput
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </InputContainer>
          {errors.password && <Error>{errors.password}</Error>}
          <ButtonForm>Crear Cuenta</ButtonForm>
        </FormContainer>
      </LoginContainer>
    </>
  );
};

export default CreateAccount;
