import React, { useCallback, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import './Modal.styles.css';


const Modal = ({showModal, setShowModal}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });


    const closeModal = () => {
        setShowModal(prev => !prev);
    };

    const closeModalOutsideClick = e => {
        if(modalRef.current === e.target)   {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
        {showModal && (
            <div className="modal__container" ref={modalRef} onClick={closeModalOutsideClick}>
                <animated.div style={animation}>
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
                </animated.div>
            </div>
        )}
        </>
    );
};

export default Modal;
