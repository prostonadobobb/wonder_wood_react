import { createPortal } from 'react-dom';
import './ModalVideo.scss';
import ReactPlayer from 'react-player/lazy';
import { useState } from 'react';

export const ModalVideo = ({onClose, showVideo }) => {
  const handleCloseVideo = () => {
    onClose();
  }

  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoReady = () => {
    setVideoLoaded(true);
  };

  

  return createPortal(
    showVideo && (
      <>
        <div className="video">
          {videoLoaded && (
             <button className="video__close" onClick={handleCloseVideo}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" width="512" height="512">
               <path d="M294.111 256.001L504.109 46.003c10.523-10.524 10.523-27.586 0-38.109-10.524-10.524-27.587-10.524-38.11 0L256 217.892 46.002 7.894C35.478-2.63 18.416-2.63 7.893 7.894s-10.524 27.586 0 38.109l209.998 209.998L7.893 465.999c-10.524 10.524-10.524 27.586 0 38.109 10.524 10.524 27.586 10.523 38.109 0L256 294.11l209.997 209.998c10.524 10.524 27.587 10.523 38.11 0 10.523-10.524 10.523-27.586 0-38.109L294.111 256.001z"></path>
             </svg>
           </button>
          )}
         
          
          <ReactPlayer  url='https://www.youtube.com/embed/ZU81igM7qHQ' onReady={handleVideoReady}/>
        </div>

        <div className="modalOverlay" />
        
      </>
    ),
    document.getElementById('root')
  );
};