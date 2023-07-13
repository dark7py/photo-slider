import { Slider } from '..';
import './Content.scss';

export const Content = () => {
  return (
    <div className='container'>
      <div className='block'>
        <h1>ut aliquip ex ea commodo consequat</h1>
        <div className='block__item'>
          <img className='image' src='src/assets/images/first_head.png' />
          <div className='text-block'>
            <h2 className='text-block__head'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className='text-block__text'>
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

        <div className='block__item'>
          <div className='text-block'>
            <h2 className='text-block__head'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className='text-block__text'>
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
          <img src='src/assets/images/first_bottom.png' />
        </div>
      </div>

      <div className='block'>
        <h1>Lorem ipsum dolor sit amet</h1>
        <Slider />
      </div>

      <div className='block'>
        <h1>ut aliquip ex ea commodo consequat</h1>
        <div className='block__item'>
          <img className='image' src='src/assets/images/first_head.png' />
          <div className='text-block'>
            <h2 className='text-block__head'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className='text-block__text'>
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

        <div className='block__item'>
          <div className='text-block'>
            <h2 className='text-block__head'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className='text-block__text'>
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
          <img src='src/assets/images/first_bottom.png' />
        </div>
      </div>
    </div>
  );
};
