import React from "react";
import Image from "../images/Person.png";
import Button from "./HeaderButton";
import linkedInLogo from "../icons/LinkedIn.png";
import mailLogo from "../icons/Mail.png";

function Info() {
    return (
        <header>
            <img className="person-image" src={Image} />
            <div className="header--info">
                <h1 className="name">Laura Smith</h1>
                <span className="profession">Frontend Developer</span>
                <a className="website" href="/">
                    laurasmith.website
                </a>
                <div className="header--buttons">
                    <Button
                        BGColor="white"
                        textColor="black"
                        iconURL={mailLogo}
                        text="Email"
                    />
                    <Button
                        BGColor="#5093E2"
                        textColor="white"
                        iconURL={linkedInLogo}
                        text="LinkedIn"
                    />
                </div>
            </div>
        </header>
    );
}

export default Info;
