import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#1e90ff'
        },
        secondary: {
            main: '#2c8efa'
        },
        error: {
            main: red.A400
        }
    }
})