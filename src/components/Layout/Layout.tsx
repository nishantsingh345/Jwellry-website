import Head from "next/head";
import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <div className="antialiased mx-auto font-[quicksand]">
      <Head>
        <title>Jwellry-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
