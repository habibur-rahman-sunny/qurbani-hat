import React from 'react';
import Navbar from '../component/Shared/Navbar/Navbar';

const authLayout = ({children}) => {
    return (
        <div>
            <main>
                <Navbar></Navbar>
                {children}
            </main>
        </div>
    );
};

export default authLayout;