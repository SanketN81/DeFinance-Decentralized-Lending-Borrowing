import React from 'react';
import NavBar from '../components/NavBar';
import Intro from '../components/introSection'

const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    padding: "3em",
    gap: "1em",
    backgroundColor: "black",
    color: '#fff',
};

const textStyle = {
    fontSize: "1.2em",
    textAlign: "justify",
    textJustify: "inter-word",
    maxWidth: "20em",
};



const LandingPage = () => {
    return (
        <main >
            <NavBar />

            <section id="home" style={sectionStyle}>
                <Intro />
            </section>
            {/* <section id="assets" style={{ ...sectionStyle, alignItems: "flex-end" }}>
                <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>Assets</h1>
                <h1 style={textStyle}>Offering seamless lending and borrowing solutions on the blockchain. Empowering users with financial freedom, security, and flexibility</h1>
            </section>
            <section id="flashLoan" style={sectionStyle}>
                <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>Flash Loan</h1>
                <h1 style={textStyle}>Offering seamless lending and borrowing solutions on the blockchain. Empowering users with financial freedom, security, and flexibility</h1>
            </section>
            <section id="digitalVaults" style={{ ...sectionStyle, alignItems: "flex-end" }}>
                <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>Digital Vaults</h1>
                <h1 style={textStyle}>Offering seamless lending and borrowing solutions on the blockchain. Empowering users with financial freedom, security, and flexibility</h1>
            </section>
            <section id="faqs" style={sectionStyle}>
                <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>FAQs</h1>
                <h1 style={textStyle}>Offering seamless lending and borrowing solutions on the blockchain. Empowering users with financial freedom, security, and flexibility</h1>
            </section> */}

        </main>

    );
};

export default LandingPage;
