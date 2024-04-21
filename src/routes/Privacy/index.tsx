import {
    Container
} from "@mui/material"
import logo from '../../logo.png';
import './style.css';

import "@fontsource-variable/outfit"

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Page() {
    return (
        <div className="root">
            <Header />
            <div className="page-content centered">
                <div className="checkersBox">
                    <h1>Privacy Policy</h1>
                    <p>Thank you for visiting our website minershaven.dev. We understand the importance of privacy and are committed to protecting your personal information.</p>
                </div>
                <div className="checkersBox">
                    <h1>Information Collection and Use:</h1>
                    <p>We may collect personal information from you when you voluntarily submit it to us, such as when you fill out a contact form or send us an email. This information may include your name, email address, and any other details you provide.</p>
                </div>
                <div className="checkersBox">
                    <h1>Use of Your Information:</h1>
                    <p>We will only use the information you provide to respond to your inquiries or requests. Your information will not be shared with any third parties without your explicit consent, except as required by law.</p>
                </div>
                <div className="checkersBox">
                    <h1>Data Retention:</h1>
                    <p>We will retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.</p>
                </div>
                <div className="checkersBox">
                    <h1>Your Rights:</h1>
                    <p>You have the right to request access to and correction of your personal information. You may also request that we delete your personal information at any time, except where we are required to retain it by law.</p>
                </div>
                <div className="checkersBox">
                    <h1>Changes to This Policy:</h1>
                    <p>We may update this privacy policy from time to time. Any changes will be posted on this page, and the revised policy will be effective immediately upon posting.</p>
                </div>
                <div className="checkersBox">
                    <h1>Contact Us:</h1>
                    <p>If you have any questions or concerns about this privacy policy, please contact the site developer. (scottricity on Discord)</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
