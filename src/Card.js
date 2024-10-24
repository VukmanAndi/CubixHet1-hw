import { useState } from 'react';

function Card({ label, onChange }) {
    return (
        <div>
            <button onClick={onChange}><img src={label} /></button>
        </div>
    );
}

export default Card;