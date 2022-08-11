import React, { useRef, useEffect, useCallback } from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from './Modal-styled.js';
import ModalFooter from 'components/atoms/ModalFooter/ModalFooter';

export const Modal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  });

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>{children}</ModalContent>
            <CloseModalButton aria-label="close modal" onClick={() => setShowModal((prev) => !prev)} />
            <ModalFooter></ModalFooter>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
