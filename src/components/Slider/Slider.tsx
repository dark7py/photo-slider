import { useRef, useEffect } from 'react';
import s from './Slider.module.scss';

export const Slider = () => {
  const scrollRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e: { deltaY: number; preventDefault: () => void }) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <div className={s.container} ref={scrollRef}>
      <div className={s.slider}>
        <img
          className={s.element}
          src='src/assets/images/slider-1.png'
          alt='img'
          data-scroll-speed='1'
        />
        <img
          className={s.element}
          src='src/assets/images/slider-2.png'
          alt='img'
          data-scroll-speed='1'
        />
        <img
          className={s.element}
          src='src/assets/images/slider-3.png'
          alt='img'
          data-scroll-speed='1'
        />
        <img
          className={s.element}
          src='src/assets/images/slider-4.png'
          alt='img'
          data-scroll-speed='0.9'
        />
        <img
          className={s.element}
          src='src/assets/images/slider-1.png'
          alt='img'
          data-scroll-speed='0.9'
        />
        <img
          className={s.element}
          src='src/assets/images/slider-2.png'
          alt='img'
          data-scroll-speed='0.8'
        />
        <img
          className={s.element}
          src='src/assets/images/slider-3.png'
          alt='img'
          data-scroll-speed='0.8'
        />
        <img
          className={s.element}
          src='src/assets/images/slider-4.png'
          alt='img'
          data-scroll-speed='0.7'
        />
        <img
          className={s.element}
          src='src/assets/images/slider-1.png'
          alt='img'
          data-scroll-speed='0.7'
        />
      </div>
    </div>
  );
};
