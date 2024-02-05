import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useAnimateOnView = (isInView: any) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return controls;
};
