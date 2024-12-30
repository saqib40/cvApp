import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
                  primary={props.title} //title
                  secondary={ // your degree and your field of study
                    <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          display="block"
                        >
                            {props.companyName}
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
function Experience({experienceState,setExperienceState,experience,setExperience,stillWorking,setStillWorking,display})
{
    {
    /*
    const [experienceState, setExperienceState] = useState({
        title: "",
        companyName: "",
        startM: "January",
        startY: "2024",
        endM: "January",
        endY: "2024",
        stillWorking: false
    });
    const [experience, setExperience] = useState([]);
    const [stillWorking, setStillWorking] = useState(false);
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
        e.preventDefault();
        setExperience(prevList => [...prevList, experienceState]);
        setExperienceState({
            title: "",
            companyName: "",
            startM: "January",
            startY: "2024",
            endM: "January",
            endY: "2024"
        });
    }
    return (
        <Box sx={{margin: "0", height: "100vh", width: "100vw", display: "flex", flexDirection: "row"}}>
            <Box sx={{height: "100vh", width: "50vw", backgroundColor: "#ffeb3b", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Box component="form" sx={{width: "40vw"}} onSubmit={handleSubmit}>
                    <Typography variant="h2">Experience</Typography>
                    <TextField 
                     value={experienceState.title}
                     onChange={(e) => setExperienceState(prevState => ({ ...prevState, title: e.target.value }))}
                     id="title" label="Title" variant="outlined" sx = {{display: "block", marginTop: "20px", marginBottom: "20px"}} fullWidth/>
                    <TextField 
                     value={experienceState.companyName}
                     onChange={(e) => setExperienceState(prevState => ({ ...prevState, companyName: e.target.value }))}
                     id="companyName" label="Company Name" variant="outlined" sx = {{display: "block", marginTop: "20px", marginBottom: "20px"}} fullWidth/>
                    <Typography variant="h5" sx={{marginBottom: "20px"}}>Started When?</Typography>
                    <TextField 
                     value={experienceState.startM}
                     onChange={(e) => setExperienceState(prevState => ({ ...prevState, startM: e.target.value }))}
                     id="startMonth" select label="Month" defaultValue="January" helperText="">
                        {months.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                     value={experienceState.startY}
                     onChange={(e) => setExperienceState(prevState => ({ ...prevState, startY: e.target.value }))}
                     id="startYear" select label="Year" defaultValue="2024" helperText="">
                        {years.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    <FormControlLabel control={<Checkbox checked={stillWorking} onChange={(e) => setStillWorking(e.target.checked)} />} label="Still Working?" sx={{display: "block", marginTop: "20px", marginBottom: "20px"}}/>
                    {
                        !stillWorking &&
                        <>
                          <Typography variant="h5" sx={{marginBottom: "20px"}}>Till When?</Typography>
                          <TextField value={experienceState.endM} onChange={(e) => setExperienceState(prevState => ({ ...prevState, endM: e.target.value }))} id="endMonth" select label="Month" defaultValue="January" helperText="">
                            {months.map((option) => (
                               <MenuItem key={option.value} value={option.value}>
                                 {option.label}
                               </MenuItem>
                            ))}
                          </TextField>
                          <TextField value={experienceState.endY} onChange={(e) => setExperienceState(prevState => ({ ...prevState, endY: e.target.value }))} id="endYear" select label="Year" defaultValue="2024" helperText="">
                            {years.map((option) => (
                               <MenuItem key={option.value} value={option.value}>
                                 {option.label}
                               </MenuItem>
                            ))}
                          </TextField>
                        </>
                    }
                    <Button type="submit" variant="contained" size="large" sx={{display: "block", marginTop: "20px", width: "10vw"}}>Add</Button>
                </Box>
            </Box>
            {
            /*
            <Box sx={{height: "100vh", width: "50vw", backgroundColor: "#f50057"}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        experience.map((element, index) => (
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

export default Experience;