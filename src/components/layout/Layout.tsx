import Footer from "@/components/ui/footer";
import React, { FC, ReactNode } from "react";
import Navbar from "../ui/navbar";

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
