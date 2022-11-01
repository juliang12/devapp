import StateProvider from "@/context/StateProvider";
import { FC } from "react";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
