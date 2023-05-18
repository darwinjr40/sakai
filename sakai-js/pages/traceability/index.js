import React from "react";
import { Banner } from "./Banner";
import { Section } from "./Section";

const Page = () => {
  return (
    <div className="w-[100%] border md:w-[70vw] min-h-[100vh] m-auto">
      <Banner />
      <Section />
    </div>
  );
};

export default Page;
