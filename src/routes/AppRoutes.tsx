import { CreateAccount, Layout, Login } from "@/components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Projects from "@/pages/projects/Projects";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
