import { ComponentProps, ComponentPropsWithRef } from "react"
import brandTitle from "../images/logo.png"
import { Container } from "@mui/material"

function ImageSection(props: KVProps) {
    let children = props.children
    return (
        <div
        className="inline-cover"
            style={{
                backgroundRepeat: "no-repeat",
                backgroundImage: props.image ? `url(./images/${props.image})` : "none",
                backgroundSize: "100%, 100%",
                backgroundColor: "var(--darkBackground)",
                height: "100%",
                width: "100%"
            }}>
            {children}
        </div>
    )
}

export default ImageSection