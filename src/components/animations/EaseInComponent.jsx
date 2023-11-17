import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function EaseInComponent({ children, invertDirection = false }) {
  const controls = useAnimation();
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              x: 0,
              transition: {
                opacity: { duration: 0.5 },
                x: { type: "keyframes", stiffness: 100, damping: 10 },
              },
            });
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
  }, [controls]);

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, x: invertDirection ? 50 : -50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export default EaseInComponent;
