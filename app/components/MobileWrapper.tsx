"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";

export default function MobileWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAskPage = pathname === "/ask";

  if (isAskPage) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="mobile-warning">
        <Link href={"/ask"}>Please access later in a bigger screen size or click on this message to ask anything you want to know about this project.</Link>
      </div>
      <div className="desktop-only">
        {children}
      </div>
    </>
  );
}
