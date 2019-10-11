import React from 'react';
import Box from "../Box";

export const App: React.FC = () => (
    <div>
        <Box>
            <div className="fill" draggable />
        </Box>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
    </div>
);
