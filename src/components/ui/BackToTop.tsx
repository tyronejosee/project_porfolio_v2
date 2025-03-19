"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [showing, setShowing] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
        setShowing(true);
      } else {
        if (direction < 0) {
          setVisible(true);
          setShowing(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    if (showing) {
      const timer = setTimeout(() => {
        setVisible(false);
        setShowing(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showing]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 200,
        }}
        animate={{
          y: visible ? 0 : 200,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex max-w-fit z-40 fixed bottom-4 inset-x-0 mx-auto"
      >
        <Button
          onClick={scrollToTop}
          color="primary"
          aria-label="Back to Top"
          className="text-sm font-medium"
        >
          <ChevronUp size={14} />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
