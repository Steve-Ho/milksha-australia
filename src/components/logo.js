import React from "react"
import { Box } from "@chakra-ui/react"
import { StaticImage } from 'gatsby-plugin-image'


const Logo = (props) => {
    return (
        <Box {...props}>
            <StaticImage src="../images/logo.png" alt="Milksha Australia" />
        </Box>
    )
}

export default Logo