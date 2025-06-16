import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5 bg-background text-primary rounded-3xl p-8 mb-6">
      <div className=" grid justify-center">
        <Image
          width={300}
          height={300}
          alt="Deepak Pic"
          src="/deepak.jpg"
          className="rounded-4xl"
        />
      </div>
      <div className=" md:col-span-2 text-justify md:border-l-2 md:pl-6 grid  gap-2 tracking-tight text-sm">
        <p>
          Hi, My name is <span className="text-theme">Deepak Patil</span>,
          I&apos;m an experienced Software Engineer that crafts things for the
          Web, heavy focused on front-end development, enthusiastic and
          fascinated on user interfaces.
        </p>
        <p>
          I hold a <span className="text-theme">MCA</span> degree from{" "}
          <span className="text-theme">Govt. College of Engineering Karad</span>
          , which gave me the foundation I needed — but most of what I&apos;ve
          learned has come from building real projects, solving real problems,
          and constantly challenging myself to get better.
        </p>
        <p>
          For me, frontend development is more than just writing code —
          it&apos;s about creating meaningful digital experiences that feel
          smooth, intuitive, and enjoyable to use. I take pride in attention to
          detail, whether it&apos;s fine-tuning a UI animation or optimizing
          performance for a better user experience.
        </p>
        <p>
          I love learning new things, experimenting with design systems, and
          staying up-to-date with the latest tech trends. You&apos;ll often find
          me geeking out over design inspiration, trying out new libraries, or
          tweaking my side projects late into the night (usually with coffee by
          my side ☕).
        </p>
      </div>
    </div>
  );
};

export default page;
