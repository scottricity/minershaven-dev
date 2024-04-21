import brandTitle from "../images/logo.png"
import { Container, Paper, Box, AppBar, Grid, Menu } from "@mui/material"

function Header(props: KVProps) {

    return (
        <Container sx={{ p: props.float ? 5 : 0 }}>
            <AppBar
                position={props.float ? "fixed" : "static"}
                style={{ textAlign: "center", maxWidth: props.float ? "90%" : "100%" }}
                elevation={0}
                sx={{ backgroundColor: "transparent", marginRight: props.float ? "50%" : 0, transform: props.float ? "translate(50%, 10%)" : 0 }}>
                <Paper sx={{ backgroundColor: "rgba(17,17,17, 75%)" }}>
                    <a href="/"><img alt="Logo" className="brandTitle" src={brandTitle} /></a>
                </Paper>
            </AppBar>
        </Container>
    )
}

export default Header