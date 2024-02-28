import './ButtonPlay.scss';
import play_img from './ButtonPlayImg/icon-arrowSolid_right.svg';

export const ButtonPlay = ({ onClick }) => {
  return (
    <button className="button_play" onClick={onClick}>
      <img src={play_img} alt="play" />
    </button>
  );
};