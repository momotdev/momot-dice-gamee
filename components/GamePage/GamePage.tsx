'use client'
import {useState} from 'react';
import {Box} from "@mui/material";
import NumberDisplay from "@/components/NumberDisplay";
import GuessControls from "@/components/GuessControls";
import {GuessChoice} from "@/helpers/consts";
import {compareValues, createResult, generateRandomNumber, getLostMessageByChoice} from "@/helpers";
import {useSnackbar} from 'notistack'
import ResultsTable from "@/components/ResultsTable";
import {DiceResult} from "@/types";


const GamePage = () => {
    const [random, setRandom] = useState(0);
    const [results, setResults] = useState<DiceResult[]>([]);
    const {enqueueSnackbar} = useSnackbar()

    const handlePlayClick = (choice: GuessChoice, guess: number) => {
        const random = generateRandomNumber();
        setRandom(random);

        const isUserWon = compareValues(choice, random, guess);
        const now = new Date();
        const resultItem = createResult(now, `${choice} ${guess}`, random, isUserWon);

        setResults((state) => ([resultItem, ...state]));

        if (isUserWon) {
            enqueueSnackbar('You won!', {
                variant: 'success',
            })
        } else {
            enqueueSnackbar(`You lost! ${getLostMessageByChoice(choice)}`, {
                variant: 'error',
            })
        }

    }

    return (
        <Box>
            <Box sx={{display: 'flex', justifyContent: 'center', my: '20px'}}>
                <NumberDisplay number={random}/>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <GuessControls handlePlayClick={handlePlayClick}/>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', my: '20px'}}>
                <ResultsTable results={results}/>
            </Box>
        </Box>
    );
};

export default GamePage;