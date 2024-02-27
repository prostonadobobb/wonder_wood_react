import { createPortal } from 'react-dom';
import './ModalCallback.scss';
import React from 'react';
import { Transition } from 'react-transition-group';


export const ModalCallback = ({ onClose, showModal }) => {
  console.log(showModal);

  return createPortal(
    <Transition in={showModal} timeout={100} relative mountOnEnter unmountOnExit>
      {state => (
        <>
        
          <div className={`modalCallback modalCallback-${state}`}>
            <div className={`modalCallback__content modalCallback__content-${state}`}>
              <button className="modalCallback__close" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" width="512" height="512">
                  <path d="M294.111 256.001L504.109 46.003c10.523-10.524 10.523-27.586 0-38.109-10.524-10.524-27.587-10.524-38.11 0L256 217.892 46.002 7.894C35.478-2.63 18.416-2.63 7.893 7.894s-10.524 27.586 0 38.109l209.998 209.998L7.893 465.999c-10.524 10.524-10.524 27.586 0 38.109 10.524 10.524 27.586 10.523 38.109 0L256 294.11l209.997 209.998c10.524 10.524 27.587 10.523 38.11 0 10.523-10.524 10.523-27.586 0-38.109L294.111 256.001z"></path>
                </svg>
              </button>
              <div className="modalCallback__title">
                Замовити зворотній виклик
              </div>
              <form
                action="#"
                className="modalCallback__form"
                method='post'
              >
                <label
                  className="modalCallback__label"
                  htmlFor="modalCallback__name"
                >
                  Ваше Ім'я:
                  <input
                    id="modalCallback__name"
                    type="text"
                    className="modalCallback__input"
                    placeholder="Ім'я"
                    required
                  />
                </label>
                <label
                  className="modalCallback__label"
                  htmlFor="modalCallback__tel"
                >
                  Ваш телефон:
                  <input
                    type="tel"
                    id="modalCallback__tel"
                    className="modalCallback__input"
                    placeholder="Номер телефону"
                    required
                    maxLength="28"
                  />
                </label>
              </form>
            </div>
            <div className="modalOverlay" />
          </div>
      
        
        </>
      )}
    </Transition>, 
    document.getElementById('root')
     
  );
};
