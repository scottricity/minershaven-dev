import { Box, Button, Container, CssBaseline, Grid, Icon, ListItem, Paper, Stack, Typography, styled } from "@mui/material"
import { useFloating, useHover } from '@floating-ui/react';
import logo from '../../images/logo.png';
import underconstruction from "../../images/under construction.png"

import './style.css';

import "@fontsource-variable/outfit"

import Header from "../../components/Header";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function Home() {
    return (
        <Grid2 sx={{
            display: "flex",
            height: "100vh",
            flex: 1,
            flexDirection: "column"
        }}>
            <main className="scene-background">
                <Container maxWidth="sm">
                    <Header>
                        <ListItem>
                            <Button>h</Button>
                        </ListItem>
                        <ListItem>
                            <Button>h</Button>
                        </ListItem>
                    </Header>
                </Container>
                <Container sx={{minHeight: "90vh"}}>

                </Container>
            </main>
            <Container>
                <Typography fontFamily={"Outfit Variable"}>
                    <a href="/privacy">Privacy Policy</a>
                </Typography>
            </Container>
        </Grid2>
    );
}

export default Home;
