import React from "react";

function Options({ options }) {
    return options.map((option) => {
        return <option>{option.displayName}</option>
    });
}

export default Options;