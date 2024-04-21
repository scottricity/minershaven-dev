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
                backgroundImage: `url(../images/${props.image ? props.image : 'map_scene1.jpg'})`,
                height: "calc(10vmax + 100%)",
            }}>
            {children}
        </div>
    )
}

export default ImageSection