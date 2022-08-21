import React from "react";

function Paragraph(props) {
    return (
        <div
            className={`paragraph ${props.type}`}
            style={{marginBottom: "30px"}}
        >
            <h2 style={{marginBottom: "15px"}}>
                {props.type[0].toUpperCase() + props.type.substring(1)}
            </h2>

            <p
                style={{
                    fontWeight: "200",
                    fontSize: "16px",
                    lineHeight: "25px",
                }}
            >
                {props.text}
            </p>
        </div>
    );
}

export default Paragraph;
