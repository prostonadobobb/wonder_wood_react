import './ButtonBuy.scss';

export const ButtonBuy = ({ title }) => {

  return (
    <button type='submit' className="button__buy">
      {title}
    </button>
  );
};