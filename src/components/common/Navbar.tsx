import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Section } from "../Layout";

type Props = {};

const links = [
  {
    url: "/",
    name: "Home",
  },
];

function Navbar({}: Props) {
  const router = useRouter();
  console.log("router", router);
  return (
    <div className="bg-dark py-6 px-12">
      <div className="justify-between flex items-center">
        <div>
          <Link href="/">
            {" "}
            <a className="text-2xl text-secondary font-bold">Astrology</a>
          </Link>
        </div>
        <div className="flex space-x-3 font-medium text-[15px] cursor-pointer ">
          {links?.map((item, index) => (
            <div key={index}>
              <Link href={item?.url}>
                {" "}
                <a
                  className={` ${
                    item.url === router.pathname
                      ? "text-primary"
                      : "text-white hover:text-primary hover:underline-offset-2 hover:underline"
                  } `}
                >
                  {item?.name}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
