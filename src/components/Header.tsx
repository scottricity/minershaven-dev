import brandTitle from "../images/logo.png"
import { Container, Paper, Box, AppBar, Grid, Menu, Typography, List, ListItem, Divider, Toolbar, styled } from "@mui/material"

type C_HeaderProps = {
    float?: boolean;
}

function Header(props: KVProps & C_HeaderProps) {

    let leftItems = []
    let rightItems = []

    if (props.children) {
        let children: React.ReactNode[] = Array.of(props.children)
        if (Array.isArray(children[0])) {
            children[0].forEach((node, index, list) => {
                let equation = (index) % 2
                if (equation === 0) {
                    leftItems.push(node)
                } else {
                    rightItems.push(node)
                }
            })
        } else {
            rightItems.push(children)
        }
    }

    return (
        <div>
            <AppBar
                position="relative"
                elevation={1}
                sx={{
                    alignItems: "center",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px"
                }}>
                <Box sx={{
                    backgroundColor: "rgba(0, 0, 0, 0%)",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                }}>
                    {leftItems.map(e => e)}
                    <a href="/"><img alt="Logo" className="brandTitle" src={brandTitle} /></a>
                    {rightItems.map(e => e)}
                </Box>
            </AppBar>
        </div>
    )
}

export default Header