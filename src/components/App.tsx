import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './AppContent';
import AppHeader from './AppHeader';
import PageTitle from './PageTitle';
import styles from '../styles/modules/app.module.scss';

const App = () => {
    return (
        <>
            <div className="container">
                <PageTitle>TODO List</PageTitle>
                <div className={styles.app__wrapper}>
                    <AppHeader />
                    <AppContent />
                </div>
            </div>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        fontSize: '0.8rem',
                    },
                }}
            />
        </>
    );
};

export default App;