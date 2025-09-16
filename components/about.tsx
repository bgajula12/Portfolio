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
        I’m a Graduate Research Assistant at the{" "}
        <span className="font-medium">University of Florida</span>, completed
        my <span className="font-medium">M.S. in Electrical and Computer
        Engineering</span> (GPA 3.53/4.00). I design and verify reliable
        digital systems—spanning <span className="font-medium">ASIC/FPGA RTL,
        UVM-based verification, and hardware security</span>.
      </p>

      <p className="mb-3">
        My toolkit includes{" "}
        <span className="font-medium">
          SystemVerilog, UVM, Assertions (SVA), constrained-random testing,
          and code/functional coverage
        </span>{" "}
        with EDA experience across{" "}
        <span className="font-medium">
          Cadence Virtuoso, Synopsys VCS, ModelSim, and Vivado
        </span>
        . I enjoy building secure boot and attestation flows, AXI-based
        subsystems, and validating designs end-to-end.
      </p>

      <p>
        I’m seeking a{" "}
        <span className="font-medium">
          full-time role in ASIC/FPGA design and verification
        </span>{" "}
        to apply my security-focused RTL and UVM expertise on
        cutting-edge silicon teams.
      </p>
    </motion.section>
  );
}
