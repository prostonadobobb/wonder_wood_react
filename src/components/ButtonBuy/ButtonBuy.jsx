import './ButtonBuy.scss';

export const ButtonBuy = ({ product, title }) => {

  return (
    <button type='submit'  className="button_buy">
      {title}
    </button>
  );
};