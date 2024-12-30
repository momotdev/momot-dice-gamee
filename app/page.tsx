'use client'

import {Container} from "@mui/material";
import GamePage from "@/components/GamePage";

export default function Home() {
    return (
        <Container sx={{padding: "20px", marginTop: '50px'}}>
            <GamePage/>
        </Container>
    );
}
