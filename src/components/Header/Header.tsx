import { Logo } from './Logo';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.root}>
      <Logo />
      <a href='tel:+74954954954' className={s.tel}>
        +7 (495) 495-49-54
      </a>
    </div>
  );
};
