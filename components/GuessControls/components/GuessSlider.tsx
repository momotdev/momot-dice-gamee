import {FC} from 'react';
import {Box, Slider} from "@mui/material";
import * as React from "react";
import {DEFAULT_SLIDER_VALUE} from "@/components/GuessControls/GuessControls";

const marks = [
    {value: 0, label: '0'},
    {value: 20},
    {value: 40},
    {value: 60},
    {value: 80},
    {value: 100, label: '100'},
];

interface IGuessSliderProps {
    guess: number | number[];
    handleGuessChange: (value: number | number[]) => void;
}

const GuessSlider: FC<IGuessSliderProps> = ({guess, handleGuessChange}) => {
    return (
        <Box sx={{width: 320}}>
            <Slider
                aria-label="Custom marks"
                defaultValue={DEFAULT_SLIDER_VALUE}
                step={1}
                value={guess}
                onChange={(_, value) => handleGuessChange(value)}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={100}
                sx={{
                    color: '#9C27B0',
                    '& .MuiSlider-thumb': {
                        height: '12px',
                        width: '12px',
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: `0px 0px 0px 8px #9C27B030`,

                        },
                        '&.Mui-active': {
                            boxShadow: `0px 0px 0px 14px #9C27B030`,
                        },
                    },
                    '& .MuiSlider-rail': {
                        height: '2px',
                    },
                    '& .MuiSlider-track': {
                        height: '2px',
                    },
                }}
            />
        </Box>
    );
};

export default GuessSlider;