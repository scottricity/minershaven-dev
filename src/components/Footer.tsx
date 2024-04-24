import brandTitle from "../images/logo.png"
import { Container, Grid, Link, List, ListItem, Typography } from "@mui/material"

function Footer() {
    return (
        <Container
            component={"footer"}>
            <Grid container>
                <Grid item>
                    <Typography>
                        <a href="/privacy" className="footer-link">Privacy Policy</a>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer