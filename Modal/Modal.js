import React from 'react';
import './Modal.styles.css';

const Modal = ({showModal, setShowModal}) => {
    const closeModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
        {showModal && (
            <div className="modal__container">
                <div className="modal__wrapper">
                    <div className="modal__header">
                        <h2>This is a modal</h2>
                    </div>
                    <div className="modal__content">
                        <p>Content goes here </p>
                    </div>
                    <div className="modal__action">
                        <button type="submit" className="btn btn-modal">Save</button>
                        <button type="button" className="btn btn-modal" onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default Modal;
