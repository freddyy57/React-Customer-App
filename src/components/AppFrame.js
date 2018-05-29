import React from 'react';
import AppHeader from './AppHeader';

const AppFrame = ({ header, body }) => {
    return (
        <div>
            <div className="app-frame">
               <AppHeader title={header}/>
               <div>{body}</div>
               <div>&copy; 2018 Alf Leyza</div>
            </div>
        </div>
    );
};


export default AppFrame;