import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
//import Divider from '@mui/material/Divider';
//import ListItemText from '@mui/material/ListItemText';
//import { useState } from 'react';
/*
function Resultant(props)
{
    return(
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                  primary={props.school} //school
                  secondary={ // your degree and your field of study
                    <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          display="block"
                        >
                            {props.degree + "-" + props.study}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                            {props.startM + " " +  props.startY + "-" + props.endM + " " + props.endY}
                        </Typography>
                    </>
                  }
                />
            </ListItem>
            <Divider component="li" />
        </>
    );
}
*/
function EducationInfo({educationState,setEducationState,educationList,setEducationList,display})
{
    {
    /*
    const [educationState, setEducationState] = useState({
    school: "",
    degree: "",
    study: "",
    startM: "January",
    startY: "2024",
    endM: "January",
    endY: "2024"
    });

    const [educationList, setEducationList] = useState([]);
    */
    }

   const months = [
        {
          value: 'January',
          label: 'January',
        },
        {
          value: 'February',
          label: 'February',
        },
        {
          value: 'March',
          label: 'March',
        },
        {
          value: 'April',
          label: 'April',
        },
        {
            value: 'May',
            label: 'May',
        },
        {
            value: 'June',
            label: 'June',
        },
        {
            value: 'July',
            label: 'July',
        },
        {
            value: 'August',
            label: 'August',
        },
        {
            value: 'September',
            label: 'September',
        },
        {
            value: 'October',
            label: 'October',
        },
        {
            value: 'November',
            label: 'November',
        },
        {
            value: 'December',
            label: 'December',
        },
   ];

    const years = []; // from 2024 to 1980
    for(let x=2024; x>=1980; x--)
    {
        years.push(
            {
                label: x.toString(),
                value: x.toString()
            }
        )
    }

    function handleSubmit(e)
    {
        // so this handleSubmit should create a 
        // <Resultant school={school} degree={degree} study={study} startM={startM} startY={startY} endM={endM} endY={endY}/>
        // inside the below list
        e.preventDefault();
        setEducationList(prevList => [...educationList, educationState]);
        setEducationState({
            school: "",
            degree: "",
            study: "",
            startM: "January",
            startY: "2024",
            endM: "January",
            endY: "2024"
        });
    }
    return (
        <Box sx={{margin: "0", height: "100vh", width: "100vw", display: "flex", flexDirection: "row"}}>
            <Box sx={{height: "100vh", width: "50vw", backgroundColor: "#f50057", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Box component="form" sx={{width: "40vw"}} onSubmit={handleSubmit}>
                    <Typography variant="h2">Education Info</Typography>
                    <TextField
                     value={educationState.school}
                     onChange={(e) => setEducationState(prevState => ({ ...prevState, school: e.target.value }))}
                     id="school"
                     label="School"
                     variant="outlined"
                     sx = {{display: "block", marginTop: "20px", marginBottom: "20px"}}
                     fullWidth/>
                    <TextField
                     value={educationState.degree}
                     onChange={(e) => setEducationState(prevState => ({...prevState, degree: e.target.value}))}
                     id="degree" label="Degree" variant="outlined" sx = {{display: "block", marginTop: "20px", marginBottom: "20px"}} fullWidth/>
                    <TextField
                     value={educationState.study}
                     onChange={(e) => setEducationState(prevState => ({...prevState, study: e.target.value}))}
                     id="fieldOfStudy" label="Field Of Study" variant="outlined" sx = {{display: "block", marginTop: "20px", marginBottom: "20px"}} fullWidth/>
                    <Typography variant="h5" sx={{marginBottom: "20px"}}>Started When?</Typography>
                    <TextField
                     value={educationState.startM}
                     onChange={(e) => setEducationState(prevState => ({...prevState, startM: e.target.value}))}
                     id="startMonth" select label="Month" helperText="">
                        {months.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                     value={educationState.startY}
                     onChange={(e) => setEducationState(prevState => ({...prevState, startY: e.target.value}))}
                     id="startYear" select label="Year" helperText="">
                        {years.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                       ))}
                    </TextField>
                    <Typography variant="h5" sx={{marginBottom: "20px", marginTop: "20px"}}>Till When?</Typography>
                    <TextField
                     value={educationState.endM}
                     onChange={(e) => setEducationState(prevState => ({...prevState, endM: e.target.value}))}
                     id="endMonth" select label="Month" helperText="">
                        {months.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                       ))}
                    </TextField>
                    <TextField
                     value={educationState.endY}
                     onChange={(e) => setEducationState(prevState => ({...prevState, endY: e.target.value}))}
                     id="endYear" select label="Year" helperText="">
                        {years.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    <Button variant="contained" size="large" type="submit" sx={{display: "block", marginTop: "20px", width: "10vw"}}>Add</Button>
                </Box>
            </Box>
            {
            /*
            <Box sx={{height: "100vh", width: "50vw", backgroundColor: "#ffeb3b", overflow: "auto"}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        educationList.map((element, index) => (
                            <Resultant key={index} {...element} />
                        ))
                    }
                </List>
            </Box>
            */
            }
            {display} {/* It's a component */}
        </Box>
    );
}

export default EducationInfo;