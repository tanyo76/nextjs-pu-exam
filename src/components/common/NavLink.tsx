"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => {
  const path = usePathname();

  const activeClass = path?.startsWith(href)
    ? "underline text-gray-900"
    : "text-gray-900";
  return (
    <li className="mx-4">
      <Link href={href} className={activeClass}>
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
