import './ButtonCallback.scss';

export const ButtonCallback = ({ title, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  );
};