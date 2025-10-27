// data.ts — updated to match Bharath Kumar Gajula's resume

import { CgWorkAlt } from "react-icons/cg";
import { FaAws, FaReact, FaRaspberryPi } from "react-icons/fa";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGatsbyLine,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript,
} from "react-icons/tb";

import React from "react";
import { StaticImageData } from "next/image";

// ---------- PROFILE ----------
export const profile = {
  // Update to your own hosted avatar if you want it displayed
  avatar: "https://avatars.githubusercontent.com/u/124872329",
  email: "bharathkumar07.gajula@gmail.com",
  name: "Bharath Kumar Gajula",
  title: "ASIC/FPGA Design Verification Engineer",
  experience: "2+ years",
  likes:
    "building secure, high-performance digital systems (ASIC/FPGA RTL, SV, SVA, UVM, hardware security)",
  // Ensure this is available under /public or use a shareable link
  resumeLink: "/Bharath_Kumar_Gajula_Resume.pdf",
  linkedInLink: "https://www.linkedin.com/in/bharath-kumar-gajula-828224231",
  githubLink: "#",
} as const;

// ---------- NAV ----------
export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
] as const;

// ---------- TYPES ----------
type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: StaticImageData; // optional
  url: string;
};

// ---------- EXPERIENCE (from resume) ----------
export const experiencesData = [
  {
    title: "Graduate Research Assistant",
    location: "University of Florida",
    description:
      "Architected Verilog/SystemVerilog modules for FPGA-based cryptographic identity validation and secure SVID issuance (SPIFFE/SPiRE). Built secure boot & attestation RTL (eFUSE key access, AIK signature, workload hashing) achieving 100% functional coverage in UVM. Integrated SPIRE agent plugins on FPGA hosts (Docker, SVA, bitstream signing) with <18% latency overhead.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 – Present",
  },
  {
    title: "Associate Software Engineer, DevOps",
    location: "Infor",
    description:
      "Automated CI/CD using Python to accelerate deployments by ~50% and reduce manual steps. Delivered infra enhancements with a 12-member team to improve reliability and scale. Streamlined Jenkins/Docker workflows, reducing build failures by ~35%.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2021 – Aug 2023",
  },
  {
    title: "Undergraduate Research Scholar — Project SATYAM",
    location: "B V Raju Institute of Technology",
    description:
      "Integrated a structured real-time posture dataset with LabVIEW software, improving processing efficiency by ~30%. Optimized pattern recognition to reduce false positives and improved real-time response by ~55%.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 – May 2020",
  },
] as const;

// ---------- PROJECTS (from resume) ----------
export const projectsData: Project[] = [
  {
    title: "Constrained-Random Verification of FPGA RTL with AXI & UVM",
    description:
      "Developed UVM env with reusable sequences, monitors, and scoreboards; achieved ~100% functional coverage and caught corner-case bugs pre-silicon. Built constrained-random + directed test benches for AXI-based DUTs using SVA & functional coverage.",
    tags: ["UVM", "AXI", "SVA", "Constrained-Random", "Functional Coverage"],
    url: "#",
  },
  {
    title: "Formal Verification of the Binary Adder",
    description:
      "Parameterized bit-vector adder verified via ACL2 theorem proving; exercised carry-overflow and edge cases; automated scenario generation for broader state coverage.",
    tags: ["ACL2", "Formal Methods", "Bit-vector Arithmetic"],
    url: "#",
  },
  {
    title: "Fault-Tolerant Security Fabric on FPGA",
    description:
      "Implemented TMR-based fault-tolerant logic with dynamic reconfiguration on FPGA; achieved 100% functional coverage and identified failure modes via fault injection and regression.",
    tags: ["FPGA", "TMR", "Reliability", "Coverage"],
    url: "#",
  },
  {
    title: "4×2 SRAM Array (Full-Custom) — Cadence",
    description:
      "Designed full-custom SRAM layout with decoder, precharge, and sense amps. Verified with DRC, LVS, and transient analysis; integrated support blocks into the array.",
    tags: ["SRAM", "Cadence", "DRC/LVS", "Analog/Mixed-Signal"],
    url: "#",
  },
  {
    title: "1D Convolution Accelerator on Zedboard",
    description:
      "Pipelined accelerator with DMA-AXI on Zynq; ~3× performance via optimized memory/dataflow; validated through RTL simulation and hardware-in-the-loop testing.",
    tags: ["Zynq", "DMA-AXI", "HIL", "Acceleration"],
    url: "#",
  },
  {
    title: "Explored RISC-V Architecture using gem5",
    description:
      "Simulated RISC-V/x86/ARM in gem5; evaluated cache hierarchies and custom workloads; tuned caches and validated correctness across ISAs.",
    tags: ["gem5", "RISC-V", "Microarchitecture", "Caches"],
    url: "#",
  },
];

// ---------- SKILLS (mapped to existing icon set) ----------
export const skillsData = [
  // HDL / RTL (generic icon as placeholder)
  { name: "SystemVerilog", icon: RiDatabase2Line },
  { name: "Verilog", icon: RiDatabase2Line },
  { name: "VHDL", icon: RiDatabase2Line },
  { name: "FSMs", icon: RiDatabase2Line },
  { name: "CDC", icon: RiDatabase2Line },
  { name: "DFT", icon: RiDatabase2Line },
  { name: "Low Power Design", icon: RiDatabase2Line },

  // Verification
  { name: "UVM", icon: RiDatabase2Line },
  { name: "Assertions (SVA)", icon: RiDatabase2Line },
  { name: "Constrained-Random", icon: RiDatabase2Line },
  { name: "Code/Functional Coverage", icon: RiDatabase2Line },
  { name: "Testbenches", icon: RiDatabase2Line },

  // EDA Tools
  { name: "Cadence Virtuoso", icon: RiDatabase2Line },
  { name: "Synopsys VCS", icon: RiDatabase2Line },
  { name: "ModelSim", icon: RiDatabase2Line },
  { name: "Vivado", icon: RiDatabase2Line },

  // Programming
  { name: "Python", icon: TbBrandPython },
  { name: "C", icon: RiDatabase2Line },
  { name: "C++", icon: RiDatabase2Line },
  { name: "TCL", icon: RiDatabase2Line },
  { name: "LabVIEW", icon: RiDatabase2Line },

  // Platforms
  { name: "Zedboard / Zynq FPGA", icon: FaRaspberryPi },
  { name: "AWS", icon: FaAws },
  { name: "Azure", icon: RiDatabase2Line },
];
