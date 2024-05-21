import React from 'react';
import Image from "next/image";
import { logo } from "../assets";
import Link from 'next/link';

const NavBar = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1em",
            backgroundColor: "rgba(30, 30, 30)",
            color: "rgba(255, 255, 255)",
            width: "100%",
        }}>
            <Link href="/" passHref>
                <Image src={logo} alt="Ether icon" className="w-40 hover:opacity-80" />
            </Link>
            <nav>
                {/* <ul style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "30em",
                }}>
                    <li style={{ cursor: "pointer" }} onClick={() => scrollToSection('home')}>Home</li>
                    <li style={{ cursor: "pointer" }} onClick={() => scrollToSection('assets')}>Assets</li>
                    <li style={{ cursor: "pointer" }} onClick={() => scrollToSection('flashLoan')}>Flash Loan</li>
                    <li style={{ cursor: "pointer" }} onClick={() => scrollToSection('digitalVaults')}>Digital Vaults</li>
                    <li style={{ cursor: "pointer" }} onClick={() => scrollToSection('faqs')}>FAQs</li>
                </ul> */}
            </nav>

            <Link href="/dapp" passHref>
                <button style={{ border: "solid 1px #fff", padding: "10px", borderRadius: "5px" }}>Launch App</button>
            </Link>
        </div>
    );
};

export default NavBar;