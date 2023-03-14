// import Link from "next/link";
// import { useRouter } from "next/router";
// import React from "react";
// import { Section } from "../Layout";

// type Props = {};

// const links = [
//   {
//     url: "/",
//     name: "Home",
//   },
// ];

// function Navbar({}: Props) {
//   const router = useRouter();
//   console.log("router", router);
//   return (
//     <div className="bg-dark py-6 px-12">
//       <div className="justify-between flex items-center">
//         <div>
//           <Link href="/">
//             {" "}
//             <p className="text-2xl text-secondary font-bold">Jwellry</p>
//           </Link>
//         </div>
//         <div className="flex space-x-3 font-medium text-[15px] cursor-pointer ">
//           {links?.map((item, index) => (
//             <div key={index}>
//               <Link href={item?.url}>
//                 {" "}
//                 <p
//                   className={` ${
//                     item.url === router.pathname
//                       ? "text-primary"
//                       : "text-white hover:text-primary hover:underline-offset-2 hover:underline"
//                   } `}
//                 >
//                   {item?.name}
//                 </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import Navlinks from "./Navlinks";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";

// type Props = {};

// const Navbar = (props: Props) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <nav className="bg-dark text-white">
//         <div className="flex items-center justify-around font-medium">
//           <div className="z-50 p-5 md:w-auto w-full flex justify-between">
//             <img
//               className="h-10"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuDT3-FoNTzQD2-04H225A_3qixLm5lGCShcI2X31hvDpUoZtRd6oFaPYUyEfGgu3WU8&usqp=CAU"
//               alt="logo"
//             />
//             <div onClick={() => setOpen(!open)} className="text-3xl">
//               {open ? <FaTimes /> : <FaBars />}
//             </div>
//           </div>
//           <ul className="md:flex hidden items-center uppercase gap-8 font-[poppins]">
//             <li>
//               <Link className="py-7 px-3 inline-block" href="/">
//                 Home
//               </Link>
//             </li>
//             <Navlinks />
//           </ul>
//           {/* Mobile view */}
//           <ul
//             className={`
//             md:hidden bg-black text-white w-full h-full absolute  bottom-0  pl-4 duration-500 ${
//               open ? "left-0" : "lef-[-100%]"
//             }
//         `}
//           >
//             <li>
//               <Link className="py-7 px-3 inline-block" href="/">
//                 Home
//               </Link>
//             </li>
//             <Navlinks />
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Navlinks from "./Navlinks";

const links = [
  {
    url: "/",
    name: "Shop",
  },
  {
    url: "/",
    name: "Blog",
  },
  {
    url: "/",
    name: "Contact",
  },
  {
    url: "/",
    name: "Product",
  },
  {
    url: "/",
    name: "About",
  },
  {
    url: "/",
    name: "Page",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-dark px-10">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 md:p-5 md:w-auto w-full flex justify-between">
          <img
            className="h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuDT3-FoNTzQD2-04H225A_3qixLm5lGCShcI2X31hvDpUoZtRd6oFaPYUyEfGgu3WU8&usqp=CAU"
            alt="logo"
          />
          <div onClick={() => setOpen(!open)} className="text-3xl text-white md:hidden">
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex text-white hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            {links.map((item, index) => (
              <Link key={index} href="/" className="py-7 px-3 inline-block">
                {item?.name}
              </Link>
            ))}
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-dark text-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 flex flex-col
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            {links.map((item, index) => (
              <Link key={index} href="/" className="py-4 px-3 inline-block">
                {item?.name}
              </Link>
            ))}
          </li>
          <div className="py-5"></div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
