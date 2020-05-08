import React, { useEffect } from 'react';
import { FiXCircle, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/Toast';
import { ToastBalloon } from './styles';

interface ToastProps {
    style: object;
    toastData: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ toastData, style }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const toastRemovalTimer = setTimeout(() => {
            removeToast(toastData.id);
        }, 4000);

        /*
            When returning a function within a useEffect, if the component disappears,
            the function is executed. In this case, this behavior was used to cancel
            the timer if the user clicks the remove toast button before automatic removal.
        */
        return (): void => {
            clearTimeout(toastRemovalTimer);
        };
    }, [removeToast, toastData.id]);

    return (
        <ToastBalloon type={toastData.type} style={style}>
            <div id="header">
                <div id="title">
                    {toastData.type === 'success' ? (
                        <FiCheckCircle size={18} />
                    ) : (
                        <FiAlertCircle size={18} />
                    )}
                    <strong>{toastData.title}</strong>
                </div>
                <button
                    type="button"
                    onClick={(): void => removeToast(toastData.id)}
                >
                    <FiXCircle size={18} />
                </button>
            </div>
            {toastData.description && <p>{toastData.description}</p>}
        </ToastBalloon>
    );
};

export default Toast;
