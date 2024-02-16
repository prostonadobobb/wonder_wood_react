import './ButtonAbout.scss';

export const ButtonAbout = ({ title }) => {
  return (
    <button className="button_desc">
      {title}
    </button>
  );
};