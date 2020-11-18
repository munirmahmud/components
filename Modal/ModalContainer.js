import React, { useState } from 'react';
import Modal from './Modal';
import './Modal.styles.css';

const ModalContainer = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prevState => !prevState);
    };

    return (
        <div className="container">
            <button className="btn btn-black" onClick={openModal}>Open Modal</button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}

export default ModalContainer
