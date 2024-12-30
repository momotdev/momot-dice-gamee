'use client'
import {FC, PropsWithChildren} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {SnackbarProvider} from 'notistack'


const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider
                autoHideDuration={3000}
                style={{width: '600px', height: '48px'}}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                              {children}
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default Providers;
