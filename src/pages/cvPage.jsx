import { Box, Button } from "@mui/material";
import Display from "../components/display2";

function CV({name,email,phone,educationList,experience,myProjects})
{
    return (
        <Box sx={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Display name={name} email={email} phone={phone} educationList={educationList} experience={experience} myProjects={myProjects}/>
            <Button
              variant="contained" 
              size="large"
              onClick={() => window.print()}
              sx={{
                display: "block", 
                marginTop: "10px", 
                marginBottom: "10px", 
                width: "50vw",
                '@media print': {
                    display: 'none',
                }
              }}>
              Print
            </Button>
        </Box>
    );
}

export default CV;