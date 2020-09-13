import React, { useEffect, useState } from 'react';
import wissam from '../../images/wissam.jpg';

const Me = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('http://localhost:1337/')
        .then(res => res.json())
        .then(res => setText(res.data[0].msg));
    });
    return (
        <main>
            <h1>Min me-app</h1>
            <img className="me" src={wissam} alt="Me" />
            <p>{text}</p>
        </main>
    );
}
export default Me;
