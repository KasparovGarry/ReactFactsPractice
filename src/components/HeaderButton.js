import React from "react";

function HeaderButton(props) {
    const buttonStyle = {
        backgroundColor: `${props.BGColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "115px",
        height: "45px",
        padding: "9px 12px",
        margin: "0 10px",
        color: `${props.textColor}`,
        fontSize: "16px",
        fontWeight: "500",
        borderRadius: "8px",
    };

    return (
        <a href="/" style={buttonStyle}>
            <img src={props.iconURL} />
            <span>{props.text}</span>
        </a>
    );
}

export default HeaderButton;
