import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import { useState } from 'react';
//import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
//import Divider from '@mui/material/Divider';
//import ListItemText from '@mui/material/ListItemText';

/*
function Resultant(props)
{
    return(
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                  primary={props.title} //title
                  secondary={
                    <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          display="block"
                        >
                            {props.description}
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
function Project({projectState,setProjectState,myProjects,setMyProjects,display})
{
    {
    /*
    const [projectState, setProjectState] = useState({
        title: "",
        description: ""
    });
    const [myProjects, setMyProjects] = useState([]);
    */
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        setMyProjects(prevList => [...prevList, projectState]);
        setProjectState({
            title: "",
            description: ""
        });
    }

    return (
        <Box sx={{margin: "0", height: "100vh", width: "100vw", display: "flex", flexDirection: "row"}}>
            <Box sx={{height: "100vh", width: "50vw", backgroundColor: "#f50057", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Box component="form" sx={{width: "40vw"}} onSubmit={handleSubmit}>
                    <Typography variant="h2">Projects</Typography>
                    <TextField 
                     value={projectState.title}
                     onChange={(e) => setProjectState(prevState => ({...prevState, title: e.target.value}))}
                     id="title" label="Title" variant="outlined" sx = {{display: "block", marginTop: "20px", marginBottom: "20px"}} fullWidth/>
                    <TextField 
                     value={projectState.description}
                     onChange={(e) => setProjectState(prevState => ({...prevState, description: e.target.value}))}
                     id="description" label="Description" multiline rows={4} defaultValue="" fullWidth/>
                    <Button type="submit" variant="contained" size="large" sx={{display: "block", marginTop: "20px", width: "10vw"}}>Add</Button>
                </Box>
            </Box>
            {
            /*
            <Box sx={{height: "100vh", width: "50vw", backgroundColor: "#ffeb3b"}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        myProjects.map((element, index) => (
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

export default Project;