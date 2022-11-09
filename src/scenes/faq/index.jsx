import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions"></Header>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography color={colors.blueAccent[300]} variant="h6">
                    What is the objective of this project?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.grey[300]} variant="h6">
                    Learn about the use of different libraries such as Material UI, formik, yup, fullcalendar & nivo. Also practice certain implementations like dark and light mode, & the use of data grid.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography color={colors.blueAccent[300]} variant="h6">
                    Is this an original project?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.grey[300]} variant="h6">
                    No, I saw a video from EdRoh on how to build a complete react admin dashboard.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography color={colors.blueAccent[300]} variant="h6">
                    Where can I see the code from this dashboard?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.grey[300]} variant="h6">
                    https://github.com/mauro-fernandez/react-admin-dashboard
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
                    <Typography color={colors.blueAccent[300]} variant="h6">
                    Anything else to add?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.grey[300]} variant="h6">
                    Always keep on learning new things, it doesn't matter how much time it takes you ;)
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>

    )
}

export default FAQ