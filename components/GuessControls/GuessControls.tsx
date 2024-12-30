import {FC, useState} from 'react';
import {Box, Button} from "@mui/material";
import {GuessChoice} from "@/helpers/consts";
import * as React from "react";
import GuessRadio from "@/components/GuessControls/components/GuessRadio";
import GuessSlider from "@/components/GuessControls/components/GuessSlider";

interface IGuessControlsProps {
    handlePlayClick: (choice: GuessChoice, guess: number) => void;
}

export const DEFAULT_SLIDER_VALUE = 20;

const GuessControls: FC<IGuessControlsProps> = ({handlePlayClick}) => {
    const [choice, setChoice] = useState<GuessChoice>(GuessChoice.UNDER)
    const [guess, setGuess] = useState<number>(DEFAULT_SLIDER_VALUE)

    const handleChoiceChange = (value: GuessChoice) => {
        setChoice(value)
    }
    const handleGuessChange = (value: number | number[]) => {
        const guess = Array.isArray(value) ? value[0] : value;
        setGuess(guess)
    }

    return (
        <Box sx={{width: 320, display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center'}}>
            <GuessRadio choice={choice} handleChoiceChange={handleChoiceChange}/>
            <GuessSlider guess={guess} handleGuessChange={handleGuessChange}/>
            <Button
                variant="contained"
                sx={{background: '#9C27B0'}}
                onClick={() => handlePlayClick?.(choice, guess)}
                fullWidth
            >
                Play
            </Button>
        </Box>
    );
};

export default GuessControls;