import {FC} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {DiceResult} from "@/types";

interface IResultsTableProps {
    results: DiceResult[];
}

const ResultsTable: FC<IResultsTableProps> = ({results}) => {
    if (results.length === 0) return;

    const limitedResults = results.slice(0, 10);

    return (
        <TableContainer sx={{width: '600px'}}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>Guess</TableCell>
                        <TableCell>Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {limitedResults.map((result) => (
                        <TableRow
                            key={result.date.getTime()}
                        >
                            <TableCell>
                                {result.date.toLocaleTimeString()}
                            </TableCell>
                            <TableCell sx={{textTransform: "capitalize"}}>{result.guess.toLowerCase()}</TableCell>
                            <TableCell
                                sx={{color: result.isUserWon ? '#1B5E20' : '#C62828'}}>{result.result}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;