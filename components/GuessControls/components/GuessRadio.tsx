import {FC} from 'react';
import RadioGroup from "@mui/material/RadioGroup";
import {GuessChoice} from "@/helpers/consts";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import * as React from "react";

interface IGuessRadioProps {
    choice: GuessChoice;
    handleChoiceChange: (value: GuessChoice) => void;
}

const GuessRadio: FC<IGuessRadioProps> = ({choice, handleChoiceChange}) => {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={choice}
                onChange={(_, value) => handleChoiceChange(value as GuessChoice)}
                row
            >
                <FormControlLabel value={GuessChoice.UNDER} control={<Radio sx={{
                    '&.Mui-checked': {
                        color: '#9C27B0',
                    },
                }}/>} label="Under"/>
                <FormControlLabel value={GuessChoice.OVER} control={<Radio sx={{
                    '&.Mui-checked': {
                        color: '#9C27B0',
                    },
                }}/>} label="Over"/>
            </RadioGroup>
        </FormControl>
    );
};

export default GuessRadio;