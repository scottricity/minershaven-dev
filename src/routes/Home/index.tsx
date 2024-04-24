import { Box, Container, CssBaseline, Grid, Icon, Paper, Stack, Typography, styled } from "@mui/material"
import logo from '../../images/logo.png';
import underconstruction from "../../images/under construction.png"

import './style.css';

import "@fontsource-variable/outfit"

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import Stats from "../../components/Stats";
import PlayEmbed from "../../components/PlayEmbed";

function Home() {
    return (
        <main className="root">
            <Header float />
            <Box className="content" flex={0} minHeight={"90vh"} sx={{
                paddingTop: '20vh',
                backgroundImage: "url(./images/map_scene1.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain auto",
            }}>
                <Stats />
                <br/>
                <center>
                    <PlayEmbed />
                </center>
                <br/>
                <Container>
                    <Paper elevation={1} sx={{ backgroundColor: "rgba(30, 30, 30, 90%)" }}>
                        <Typography fontSize={18} fontFamily={"Outfit Variable"} textAlign={"center"}>
                            Embark on an exhilarating journey deep underground in Miner's Haven!
                            Build, innovate, and thrive as you design your own bustling mining empire amidst a vibrant community of fellow entrepreneurs.
                            Uncover rare ores, craft ingenious contraptions, and watch your fortunes soar in this immersive Roblox experience where the thrill of discovery knows no bounds.
                            <br />
                            Delve into the depths and stake your claim in the ultimate mining adventure!
                        </Typography>
                    </Paper>
                </Container>

            </Box>
            <Footer />
        </main>
    );
}

export default Home;
