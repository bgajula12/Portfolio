"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate full-stack web developer currently pursuing a{" "}
        <span className="font-medium">Master’s degree in Computer and Information Sciences</span> at
        the University of Florida, maintaining a strong academic record. I hold a{" "}
        <span className="font-medium">Bachelor’s degree in Computer Science and Engineering</span>, which
        provided me with a solid foundation in software development and system design.
      </p>
      <p className="mb-3">
        My core technical skills include{" "}
        <span className="font-medium">
          React.js, Next.js, Node.js, MongoDB, and AWS
        </span>
        , allowing me to build scalable and efficient applications across{" "}
        <span className="italic">web and cloud platforms</span>. I am also familiar with{" "}
        <span className="font-medium">
          TypeScript, Python (Flask, FastAPI), Docker, and CI/CD practices
        </span>
        . I enjoy working in Agile teams and am always eager to learn new technologies.
      </p>
      <p>
        Currently, I am seeking a <span className="font-medium">full-time software developer</span>{" "}
        role to contribute to innovative projects and grow professionally.
      </p>
      <p className="mt-6 italic">
        When I'm not coding, I enjoy playing video games, watching movies and anime, and taking walks to clear my mind.
      </p>
    </motion.section>
  );
}
