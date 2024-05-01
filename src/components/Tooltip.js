import React from "react";

const Tooltip = ({ countryName, position }) => {
    return (
        <div
            style={{
                display: position ? "block" : "none",
                position: "fixed",
                left: position?.x,
                top: position?.y,
                backgroundColor: "white",
                padding: "5px",
                border: "1px solid white",
                borderRadius: "4px",
            }}
        >
            {countryName}
        </div>
    );
};

export default Tooltip;
