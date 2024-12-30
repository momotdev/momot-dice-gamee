import {FC} from 'react';
import {Box} from "@mui/material";
import styles from './styles/NumberDisplay.module.scss';

interface INumberDisplayProps {
    number: number;
}

const NumberDisplay: FC<INumberDisplayProps> = ({number}) => {
    return (
        <Box className={styles.container}>
            {number}
        </Box>
    );
};

export default NumberDisplay;