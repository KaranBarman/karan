import { ContactForm } from "@/components/ContactForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const page = () => {
  return (
    <MaxWidthWrapper className="">
      <div className="px-4 py-8  my-auto max-auto">
        <h1 className="text-white">Contact us</h1>
        <p className="text-muted-foreground">Please fill in the form below</p>
        <ContactForm />
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
