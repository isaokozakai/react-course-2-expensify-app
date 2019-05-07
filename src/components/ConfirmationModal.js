import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => (
  <Modal
    appElement={document.getElementById('app')}
    isOpen={props.modalIsOpen}
    contentLabel="Confirmation"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Are you sure you want to remove this expense?</h3>
    <button
      className="button button--confirmation button--secondary"
      onClick={props.closeModal}
    >
      No
    </button>
    <button
      className="button button--confirmation"
      onClick={props.onRemove}
    >
      Yes
    </button>
  </Modal>
)

export default ConfirmationModal;