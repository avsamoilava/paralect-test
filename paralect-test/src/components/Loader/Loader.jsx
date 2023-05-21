import cl from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={cl['loader']}>
      <div className={cl['d1']}></div>
      <div className={cl['d2']}></div>
      <div className={cl['d3']}></div>
      <div className={cl['d4']}></div>
      <div className={cl['d5']}></div>
    </div>
  );
};
