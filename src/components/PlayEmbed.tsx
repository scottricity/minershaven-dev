import { green, purple } from "@mui/material/colors"
import brandTitle from "../images/logo.png"
import { Button, ButtonProps, Container, Grid, Link, List, ListItem, Typography, styled } from "@mui/material"

const PlayButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[400],
    },
  }));

function PlayEmbed() {
    return (
        <Container sx={{backdropFilter: "blur(1px)"}}>
            <PlayButton
            sx={{fontFamily: "Outfit Variable", fontWeight: "bolder", fontSize: 30, margin: 2, paddingRight: "10px", paddingLeft: "10px"}}
            href="https://www.roblox.com/games/258258996">PLAY</PlayButton>
        </Container>
    )
}

export default PlayEmbed