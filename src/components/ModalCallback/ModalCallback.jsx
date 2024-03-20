import { createPortal } from 'react-dom';
import './ModalCallback.scss';
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';


export const ModalCallback = ({ onClose, showModal }) => {
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    setError(true);
  }
  const handleCloseModal = () => {
    onClose();
    setTimeout(() => {
      setError(false);
    }, 1000)
  }
  // modalCallback__content-${state}
  return createPortal(
    <Transition in={showModal} timeout={500} relative mountOnEnter unmountOnExit>
      {state => (
        <>
          <div className={`modalCallback modalCallback-${state}`}>
            <div className={`modalCallback__content `}>
              <button className="modalCallback__close" onClick={handleCloseModal}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" width="512" height="512">
                  <path d="M294.111 256.001L504.109 46.003c10.523-10.524 10.523-27.586 0-38.109-10.524-10.524-27.587-10.524-38.11 0L256 217.892 46.002 7.894C35.478-2.63 18.416-2.63 7.893 7.894s-10.524 27.586 0 38.109l209.998 209.998L7.893 465.999c-10.524 10.524-10.524 27.586 0 38.109 10.524 10.524 27.586 10.523 38.109 0L256 294.11l209.997 209.998c10.524 10.524 27.587 10.523 38.11 0 10.523-10.524 10.523-27.586 0-38.109L294.111 256.001z"></path>
                </svg>
              </button>
              {error ? (
                <div className="modalCallback__error">
                  <h4 className="modalCallback__error-title">Помилка!</h4>
                  <div className="modalCallback__error-text">
                    Ууупссс... Щось пішло не так =( Спробуйте ще раз, чи зателефонуйте:
                    <a href="tel:+380631105646">063-110-56-46, LifeCell</a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="modalCallback__title">
                    Замовити зворотній виклик
                  </div>
                  <form
                    action="/send.php"
                    className="modalCallback__form"
                    method='post'
                    onSubmit={handleSubmit}
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
                        autoFocus
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
                        minLength="10"
                      />
                    </label>
                    <ButtonBuy  title={'Замовити'} />
                  </form>
                </>
              )}
            </div>
            <div className="modalOverlay" />
          </div>


        </>
      )}
    </Transition>,
    document.getElementById('root')
  );
};