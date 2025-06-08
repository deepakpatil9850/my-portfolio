import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import {ExternalLink} from "lucide-react";

const Projects = () => {
  return (
    <SectionLayout heading="Projects">
      <div className="grid gap-6 justify-center items-center md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </SectionLayout>
  );
};

const Card = () => {
  return (
    <div className="border border-tertiary  overflow-hidden bg-background rounded-2xl flex flex-col max-w-md min-w-[250px]">
      <Image
        src="/whiteScreen.png"
        width={500}
        height={300}
        alt=""
        className="object-cover"
      />

      <div className="p-2">
        <div className="flex justify-between items-center">
          <h6 className="mb-2">Project title</h6>

          <button className="text-sm py-0.5 px-2 rounded-2xl border">
            source <ExternalLink strokeWidth={1} size={16} className="inline" />
          </button>
        </div>
        <p className="text-justify text-sm text-primary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          explicabo dolore voluptate expedita culpa amet aliquam. Sit eveniet
          voluptas totam repellat commodi ad velit!
        </p>
        <div className="flex flex-wrap gap-1 text-xs mt-1 text-primary">
          <p className="border border-secondary px-2 py-0.5 rounded-4xl">
            javascript
          </p>
          <p className="border border-secondary px-2 py-0.5 rounded-4xl">
            javascript
          </p>{" "}
          <p className="border border-secondary px-2 py-0.5 rounded-4xl">
            javascript
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
