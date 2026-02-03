import React from 'react';
import Sidebar from './Sidebar';
import { Toaster } from 'react-hot-toast';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="admin-layout-container">
            <Sidebar />
            <main className="admin-main-content">
                <div className="admin-content-wrapper">
                    {children}
                </div>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        style: {
                            background: 'var(--color-slate-800)',
                            color: '#ffffff',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        },
                        success: {
                            iconTheme: {
                                primary: 'var(--color-accent)',
                                secondary: 'var(--color-dark)',
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: '#EF4444',
                                secondary: '#ffffff',
                            },
                        },
                    }}
                />
            </main>
        </div>
    );
};

export default Layout;
