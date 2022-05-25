import React from "react";

function Panel(props) {
    function handleDivClick(e) {
        console.log(props.title);
    }

    return (
        <div onClick={handleDivClick}>
            <h6>{props.title}</h6>
            {props.children}
        </div>
    )
}

export default Panel;