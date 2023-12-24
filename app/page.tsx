"use client";

import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <MaxWidthWrapper>
        <Projects />
        <Skills />
      </MaxWidthWrapper>
    </div>
  );
}
