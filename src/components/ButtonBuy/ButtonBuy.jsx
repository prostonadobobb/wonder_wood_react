import './ButtonBuy.scss';

export const ButtonBuy = ({ title }) => {
  return (
    <button type='submit' className="button_buy">
      {title}
    </button>
  );
};