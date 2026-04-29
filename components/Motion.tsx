"use client";

import type { ReactNode } from "react";
import type { MotionStyle } from "framer-motion";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type MotionTag = "div" | "section" | "article" | "aside" | "li";

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  li: motion.li,
};

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  y = 22,
  id,
}: {
  as?: MotionTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();
  const Component = motionTags[as];

  return (
    <Component
      initial={reduceMotion ? false : { opacity: 0.94, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -80px 0px" }}
      transition={{
        type: "spring",
        stiffness: 92,
        damping: 20,
        mass: 0.85,
        delay,
      }}
      className={className}
      id={id}
    >
      {children}
    </Component>
  );
}

export function FloatOnScroll({
  children,
  className,
  distance = 24,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(rawY, { stiffness: 80, damping: 24, mass: 0.7 });
  const style: MotionStyle = reduceMotion ? { position: "relative" } : { position: "relative", y };

  return (
    <motion.div
      ref={ref}
      style={style}
      className={className ? `relative ${className}` : "relative"}
    >
      {children}
    </motion.div>
  );
}
