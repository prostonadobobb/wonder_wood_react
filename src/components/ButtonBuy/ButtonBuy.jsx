import './ButtonBuy.scss';

export const ButtonBuy = ({ product, title }) => {
  console.log(product);
  return (
    <button type='submit'  className="button_buy">
      {title}
    </button>
  );
};