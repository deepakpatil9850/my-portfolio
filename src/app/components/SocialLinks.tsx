import Link from "next/link";
import React from "react";

type SocialLinksProps = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  href: string | "";
  target?: "_blank" | "_parent" | "_self" | "_top";
};

const SocialLinks = ({icon, href, children, target}: SocialLinksProps) => {
  return (
    <div>
      <Link
        href={href}
        className="inline-flex gap-3 bg-tertiary border border-background rounded-3xl px-4 py-2 text-foreground hover:text-primary duration-400  group"
        target={target}
      >
        <span className="text-theme group-hover:text-cyan-500 group-hover:duration-400">
          {icon}
        </span>
        {children}
      </Link>
    </div>
  );
};

export default SocialLinks;
