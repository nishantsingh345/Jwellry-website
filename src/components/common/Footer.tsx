import React from "react";
import { Section } from "../Layout";
import { WalletIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaAddressBook,
  FaPinterest,
  FaLocationArrow,
} from "react-icons/fa";

import { GrLocation } from "react-icons/gr";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-white py-4">
      <Section>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 py-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold  text-xl">Logo</h1>
            <p className="text-justify">
              We are a team of designers and developers that create high quality HTML Template &
              Woocommerce, Shopify Theme.
            </p>
            <div className="grid grid-cols-4 gap-3">
              <Link href="https:/www.facebook.com/profile.php?id=100089457668487">
                <FaFacebook size={30} className=" cursor-pointer " />
              </Link>

              <Link href="https:/www.instagram.com/yuvaudyami/">
                <FaInstagram size={30} className=" cursor-pointer" />
              </Link>

              <Link href="https:/www.linkedin.com/in/yuva-udyami-45463a261/">
                <FaLinkedin size={30} className=" cursor-pointer" />
              </Link>

              <Link href="https:/twitter.com/UdyamiYuva">
                <FaTwitter size={30} className=" cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold  text-xl">Product</h1>
            <ul className="flex flex-col gap-2">
              <Link href="/privacy">Prices drop</Link>
              <Link href="/terms">New Product</Link>
              <Link href="/refund">Best sales</Link>

              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/about">Contact us</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold  text-xl">ABOUT US</h1>
            <div className="flex flex-col gap-2 ">
              <div className="flex  gap-2">
                <GrLocation size={40} className="text-dark" />
                <p className="text-justify">
                  <span className="font-bold">Address:</span>
                  The Barn, Ullenhall, Henley in Arden B578 5CC, England
                </p>
              </div>
              <div className="flex items-center gap-2">
                <GrLocation size={25} className="text-dark" />
                <p>
                  <span className="font-bold">Call Us:</span> +123 321 345
                </p>
              </div>

              <p>
                <span className="font-bold">Email:</span>info@yourdomain.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-xl">SIGN UP FOR NEWSLATTER</h1>
            <p>Subscribe to our newsletters now and stay up-to-date with new collections</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Footer;
