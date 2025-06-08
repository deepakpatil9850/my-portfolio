import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
