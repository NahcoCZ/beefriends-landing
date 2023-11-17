import React from "react";

import { motion, useAnimation } from "framer-motion";

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    let currentRef = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIntersecting(entry?.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref && ref?.current) {
      currentRef = ref.current;
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

const LazyShow = ({ children }) => {
  const controls = useAnimation();
  const rootRef = React.useRef(null);
  const onScreen = useOnScreen(rootRef);
  React.useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      className="h-screen snap-start"
      ref={rootRef}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;
