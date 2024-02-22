import './ButtonPlay.scss';
import play_img from './ButtonPlayImg/icon-arrowSolid_right.svg';

export const ButtonPlay = () => {
  return (
    <button className="button_play">
      <img src={play_img} alt="play" />
    </button>
  );
};