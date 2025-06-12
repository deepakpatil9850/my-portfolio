import React from "react";
import Header from "../components/header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default Layout;
