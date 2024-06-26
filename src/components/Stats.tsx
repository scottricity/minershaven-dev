import { ComponentProps, ComponentPropsWithRef, useState, useEffect } from "react"
import brandTitle from "../images/logo.png"
import { Box, Container, Divider, Grid, List, Typography } from "@mui/material"

let template = "{AP}"

function Stats(props: KVProps) {
    const [stats, setStats] = useState({ active: 0, playing: 0 })

    return (
        <Box textAlign={"center"} sx={{ alignItems: "center", p: 2 }}>
            <Container sx={{ display: "flex", flex: 1, alignItems: "center", backdropFilter: "blur(1px)" }}>
                <Container sx={{ flexGrow: 1 }}>
                    <Typography fontSize={45} fontFamily={"Outfit Variable"} fontWeight={"bold"} id="active">{stats.playing}</Typography>
                    <Typography fontSize={25} fontFamily={"Outfit Variable"} fontWeight={"bolder"}>Active Users</Typography>
                </Container>
                <Divider flexItem sx={{
                    marginRight: "-400px",
                    marginLeft: "-400px",
                    border: "solid 2px rgb(30, 30, 30)",
                    borderRadius: "15px",
                    height: 130
                }} textAlign="center" orientation="vertical" />
                <Container sx={{ flexGrow: 1 }}>
                    <Typography fontSize={45} fontFamily={"Outfit Variable"} fontWeight={"bold"} id="total">{stats.active}</Typography>
                    <Typography fontSize={25} fontFamily={"Outfit Variable"} fontWeight={"bolder"}>Total Visits</Typography>
                </Container>
            </Container>
        </Box>
    )
}

export default Stats