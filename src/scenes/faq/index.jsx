import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme , ExpandMoreIcon } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions"></Header>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                    An important QUestion
                    </Typography>

                </AccordionSummary>
            </Accordion>

        </Box>

    )
}

export default FAQ