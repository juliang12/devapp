import styled from "styled-components";
import Background from "@/assets/images/background.jpg";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const BackgroundLeft = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;
