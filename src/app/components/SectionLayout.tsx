import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
  heading?: string;
  id?: string;
}

const SectionLayout = ({heading, children, id}: SectionLayoutProps) => {
  return (
    <section className="my-10 sm:my-10 md:my-15  sm:mx-5 md:mx-10" id={id}>
      <h1 className="text-2xl  md:text-3xl mb-3 sm:mb-5 md:mb-8">{heading}</h1>
      {children}
    </section>
  );
};

export default SectionLayout;
