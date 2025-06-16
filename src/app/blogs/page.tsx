import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full h-full justify-center items-center mt-20 sm:mt-5 md:mt-0">
      <Image
        src="/underConstruction.png"
        width={600}
        height={500}
        alt="under construction"
      />
    </div>
  );
};

export default page;
