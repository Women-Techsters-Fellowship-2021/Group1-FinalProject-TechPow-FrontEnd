import React, { useState } from 'react';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const overrride = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

function Loader() {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#fff");
    return (
        <div className="sweet-loading">
            <button onClick={() => setLoading(!loading)}>
                Toggle Loader
            </button>
            <input 
                value={color} 
                onChange={(input) => setColor(input.target.value)} 
                placeholder="Color of the loader" 
            />

            <ClipLoader color={color} loading={loading} css={overrride} size={150} />
        </div>
    );
}

export default Loader;