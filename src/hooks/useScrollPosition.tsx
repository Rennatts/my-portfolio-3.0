import { useState, useEffect, useRef } from 'react';

function useScrollPosition(imageRef: any, blackHoleRef: any) {
  const [yPosition, setYPosition] = useState(0);
  const [astronautOpacity, setAstronautOpacity] = useState(1);
  const prevYPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setYPosition(currentScrollPosition);

      if (imageRef.current && blackHoleRef.current) {
        const blackHolePosition = blackHoleRef.current.getBoundingClientRect().top + currentScrollPosition;
        const astronautBottomPosition = imageRef.current.offsetTop + imageRef.current.offsetHeight;

        if (astronautBottomPosition > blackHolePosition) {
          setAstronautOpacity(0);
        } else {
          setAstronautOpacity(1);
        }
      }

      prevYPosition.current = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imageRef, blackHoleRef]);

  return { yPosition, astronautOpacity, setAstronautOpacity };
}

export default useScrollPosition;
