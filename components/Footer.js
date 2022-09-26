import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="mt-2 text-md p-3">
      <p> © {new Date().getFullYear()} - love.evenjust.com - Love Calculator</p>
      <div className="mt-2 text-md flex justify-center p-2">
        <Link href="/">
          <a className="px-2 border-r-2">HomePage</a>
        </Link>
        <Link href="/terms">
          <a className="px-2">Terms of Use</a>
        </Link>
      </div>
    </div>
  );
};
