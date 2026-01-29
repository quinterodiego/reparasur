"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul";
}

export default function StaggerChildren({
  children,
  className = "",
  as: Tag = "div",
}: StaggerChildrenProps) {
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerItem = item;
