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
import validateLogin from "@/validations/validateLogin";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm(
    initialState,
    validateLogin,
    handleLogin
  );
  const [error, setError] = useState(false);

  const { email, password } = values;

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  }

  return (
    <>
      <LoginContainer>
        <BackgroundLeft />
        <FormContainer onSubmit={handleSubmit}>
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

          <InputContainer>
            <Label htmlFor="email">Password</Label>
            <TextInput
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </InputContainer>
          {errors.password && <Error>{errors.password}</Error>}
          {error && <Error>{error}</Error>}
          <ButtonForm onClick={handleLogin}>Ingresar</ButtonForm>
        </FormContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
