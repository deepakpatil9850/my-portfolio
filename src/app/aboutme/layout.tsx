import React from "react";
import Header from "../components/header";
import Footer from "../components/footer/Footer";

interface layoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: layoutProps) => {
  return (
    <section className="">
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
