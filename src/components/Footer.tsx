import brandTitle from "../images/logo.png"
import { Container, Grid, List, ListItem, Typography } from "@mui/material"

function Footer() {
    return (
        <Container component={"footer"} sx={{p: 1}}>
            <Grid container flexWrap="wrap" gap={0} flexDirection={"column"}>
                <Grid item>
                    <a href="/privacy" className="footer-link">Privacy Policy</a>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer