import React from 'react'
import CustomButton from "./CustomButton"
import { ThemeProvider } from '@mui/material/styles'
import { Theme } from './Theme'
const CustomTheme = () => {
  return (
    <ThemeProvider theme={Theme}>
        <CustomButton/>
    </ThemeProvider>
  )
}

export default CustomTheme