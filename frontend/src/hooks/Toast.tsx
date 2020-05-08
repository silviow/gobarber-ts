import React, { createContext, useContext, useState, useCallback } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
    id: string;
    title: string;
    description?: string;
    type?: 'default' | 'success' | 'error';
}

interface ToastContextData {
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<ToastMessage[]>([]);

    const addToast = useCallback(
        ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
            const id = uuid();

            const toast = {
                id,
                type,
                title,
                description,
            };

            setMessages((oldMessagesInState) => [...oldMessagesInState, toast]);
        },
        [],
    );
    const removeToast = useCallback((id: string) => {
        setMessages((oldMessagesInState) =>
            oldMessagesInState.filter((message) => message.id !== id),
        );
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    );
};

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return context;
}

export { ToastProvider, useToast };
