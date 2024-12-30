import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
//import { useState } from 'react';

function GeneralInfo({name,setName,email,setEmail,phone,setPhone,display})
{
    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    //const [phone, setPhone] = useState("");
    return (
        <Box sx={{margin: "0", height: "100vh", width: "100vw", display: "flex", flexDirection: "row"}}>
            <Box sx={{height: "100vh", width: "50vw", backgroundColor: "#ffeb3b", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Box component="form" style={{width: "40vw"}}>
                    <Typography variant="h2">General Info</Typography>
                    <TextField
                      id="name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      sx = {{display: "block", marginTop: "20px", marginBottom: "20px"}}
                      value={name} // a redundant line below one is sufficient
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      sx = {{display: "block", marginTop: "20px", marginBottom: "20px"}}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      id="phone"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      sx = {{display: "block", marginTop: "20px", marginBottom: "20px"}}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                </Box>
            </Box>
            {
            /*
            <Box sx={{height: "100vh", width: "50vw", backgroundColor: "#f50057"}}>
              <Typography variant="h2">{name}</Typography>
              <Typography variant="h5">{email}</Typography>
              <Typography variant="h5">{phone}</Typography>
            </Box>
            */
            }
            {display} {/* It's a component */}
        </Box>
    );
}

export default GeneralInfo;