import { Box, Container, Grid, Icon, Paper, Stack, Typography } from "@mui/material"

import logo from '../../images/logo.png';
import underconstruction from "../../images/under construction.png"

import './style.css';

import "@fontsource-variable/outfit"

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageSection from "../../components/ImageSection";

function Home() {
    return (
        <div className="root">
            <ImageSection>
                <Header float />
                <Container sx={{width: "100%"}}>
                    <Paper sx={{ backgroundColor: "rgba( 17, 17, 17, 70%)", p: 2, textAlign: "center" }}>
                        <img src={underconstruction} width={400} style={{opacity: 1}}/>
                    </Paper>
                </Container>
            </ImageSection>
            <Footer />
        </div>
    );
}

export default Home;
