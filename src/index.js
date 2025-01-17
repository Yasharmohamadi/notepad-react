import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NoteApp from './components/NoteApp/NoteApp'


// FIRST WAY TO USE REACT
// ReactDOM.render(
//     <Main />,
//     document.getElementById('root')
// );

// SECOND WAY TO USE REACT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>

        <NoteApp />

    </React.Fragment>
);