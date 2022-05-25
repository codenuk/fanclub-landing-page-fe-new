import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { config, useSpring } from "react-spring";
import { SlideUpWrapper } from "./slideUp.styles";
import { useMobileMatches } from "../../hooks";

type SlideUpProps = {};

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  const [animatedStyle, api] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(10%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
    config: config.molasses,
    pause: true,
  }));

  const { animatedStyles } = useMobileMatches(animatedStyle);

  useEffect(() => {
    if (inView) {
      api.resume();
    }
  }, [api, inView]);

  return (
    <SlideUpWrapper style={animatedStyles} ref={wrapperRef}>
      {children}
    </SlideUpWrapper>
  );
};

SlideUp.defaultProps = {};

export default SlideUp;
