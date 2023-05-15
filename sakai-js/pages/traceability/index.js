import React from "react";
import { Banner } from "./Banner";
import { Section } from "./Section";

const Page = () => {
  return (
    <div className=" md:w-[70vw] min-h-[100vh] m-auto">
      <Banner />
      <Section />
    </div>
  );
};

export default Page;
