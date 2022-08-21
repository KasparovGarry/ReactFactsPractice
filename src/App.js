import React from "react";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Paragraph from "./components/Paragraph";

function App() {
    return (
        <div className="card">
            <Info />
            <Paragraph
                type="about"
                text="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
            />
            <Paragraph
                type="interests"
                text="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
            />
            <Footer />
        </div>
    );
}

export default App;
