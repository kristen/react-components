import React from 'react';
import "./index.css";

interface Props {
    children?: React.ReactNode;
}

const Box: React.FC<Props> = ({children}) => {
    return (
        <div className="empty">
            {children}
        </div>
    )
};

export default Box;
