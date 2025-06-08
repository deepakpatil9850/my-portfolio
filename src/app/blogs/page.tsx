import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center">
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
