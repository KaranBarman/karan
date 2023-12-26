"use client";

import Footer from "@/components/Footer";
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
        <div className="py-6">
          <h2 className="text-white text-2xl font-semibold pb-3">
            Karan Barman
          </h2>
          <p className="text-muted-foreground">
            Full stack software developer with expertise in front-end and
            back-end development.
          </p>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
}
