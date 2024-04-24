import { Box, Container, CssBaseline, Grid, Icon, ListItem, Paper, Stack, Typography, styled } from "@mui/material"
import logo from '../../images/logo.png';
import underconstruction from "../../images/under construction.png"

import './style.css';

import "@fontsource-variable/outfit"

import Header from "../../components/Header";

function Home() {
    return (
        <Container>
            <Container maxWidth="sm">
                <Header>
                    <ListItem sx={{ backgroundColor: "rgba(0,0,0,0%)" }}>
                        hi
                    </ListItem>
                    <ListItem>
                        hi
                    </ListItem>
                    <ListItem>
                        hi
                    </ListItem>
                    <ListItem>
                        hi
                    </ListItem>
                </Header>
            </Container>
            <Container>
                hi
            </Container>
        </Container>
    );
}

export default Home;
