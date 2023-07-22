import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.spinner}>
    {' '}
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
