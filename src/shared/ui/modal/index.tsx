import React from 'react';
import ModalLib from 'react-modal';
import './modal.scss';

// Yangi portal uchun
ModalLib.setAppElement('#modal')

interface ModalProps {
    isOpen: boolean
    close: () => void
    children?: React.ReactNode
}

const Modal = ({isOpen, close, children}: ModalProps) => {
    return (
        <div>
            <ModalLib
                isOpen={isOpen}
                onRequestClose={close}
                contentLabel="My dialog"
                className="modal"
                overlayClassName="overlay"
                closeTimeoutMS={500}
            >
                {children}
            </ModalLib>
        </div>
    );
};

export default Modal;