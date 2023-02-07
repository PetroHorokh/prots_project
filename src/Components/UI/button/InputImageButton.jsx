import React from 'react';

const InputImageButton = () => {
    return (
        <div>
            <button
                onClick={() => { }}>
                Load Image
            </button>

            <input
                type="file"/>
        </div>
    );
};

export default InputImageButton;