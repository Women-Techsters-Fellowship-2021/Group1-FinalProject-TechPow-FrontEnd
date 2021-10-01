import React, { useEffect, useRef } from 'react';
//import Button from '../button/Button'; //simple button
//import CloseIcon from '../CloseIcon'; //svg icon
import styles from './style.css';

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
    const modalRef = useRef(null);
    
    useEffect(() => {
            if (show) {
                modalRef.current.classList.add(styles.visible);
            }
            else {
                modalRef.current.classList.remove(styles.visible);
            }
        },[show]);

    return (
        <React.Fragment>
            <div ref={modalRef} style={backdropStyle} className={`${styles.modal__wrap}`}>
                {/* <Button
                    onClick={onClose}
                    style={{ width: 60, height: 40, position: 'absolute', top: 0, right: 0, margin: '1rem' }}
                    className={styles.close__btn}
                >
                    <CloseIcon height="20px" width="20px" className={styles.close__icon} />
                </Button> */}
                <div style={modalStyle} className={styles.modal}>
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;