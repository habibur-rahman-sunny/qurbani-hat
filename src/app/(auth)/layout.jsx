import React from 'react';
import Navbar from '../component/Navbar/Navbar';

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