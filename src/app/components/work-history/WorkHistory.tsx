import React from "react";

import Image from "next/image";
import SectionLayout from "../SectionLayout";
import Link from "next/link";

const WorkHistory = () => {
  return (
    <SectionLayout heading="Work Experience">
      <div className="border border-tertiary rounded-4xl p-5 md:p-10 bg-background text-justi fy tracking-tight">
        <Link
          href="https://shilprawebtechnologies.com/"
          target="_blank"
          className="cursor-pointer"
        >
          <div className="flex text-primary mb-5">
            <div className="flex justify-center items-center">
              <Image
                src="/company-logo.png"
                width={100}
                height={100}
                alt="Shilpra Web Technologies"
                className="mr-5"
              />
            </div>
            <div>
              <h4 className="font-mono text-foreground tracking-tight font-bold text-left">
                Shilpra Web Technologies
              </h4>
              <h6 className="font-nova text-primary ">Software Developer</h6>
              <time className="text-sm text-primary mt-2 tracking-widest uppercase">
                Jan - 2024 to <span className="text-theme">Present</span>
              </time>
            </div>
          </div>
        </Link>
        <div className=" sm:ml-20 md:ml-30">
          <ul className=" sm:list-disc text-primary">
            <li>
              <p>Assist in project planning and scope definition. </p>
            </li>
            <li>
              <p>Develop and implement feature using React and TypeScript.</p>
            </li>
            <li>
              <p>
                Collaborating closely with the team to support projects through
                all phases of delivery.
              </p>
            </li>
            <li>
              <p>
                Integrate front-end components with back-end services,
                collaborating with back-end developers to ensure seamless
                communication and data exchange.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};

export default WorkHistory;
