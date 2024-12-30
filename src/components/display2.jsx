import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function EducationResultant(props) {
    return (
        <Card variant="outlined" sx={{ mb: 2, boxShadow: 'none', border: '1px solid #ddd' }}>
            <CardContent>
                <Typography variant="h6">{props.school}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.degree} - {props.study}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.startM} {props.startY} - {props.endM} {props.endY}
                </Typography>
            </CardContent>
        </Card>
    );
}

function ExperienceResultant(props) {
    return (
        <Card variant="outlined" sx={{ mb: 2, boxShadow: 'none', border: '1px solid #ddd' }}>
            <CardContent>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.companyName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.startM} {props.startY} - {props.endM} {props.endY}
                </Typography>
            </CardContent>
        </Card>
    );
}

function ProjectResultant(props) {
    return (
        <Card variant="outlined" sx={{ mb: 2, boxShadow: 'none', border: '1px solid #ddd' }}>
            <CardContent>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

function Display({ name, email, phone, educationList, experience, myProjects }) {
    return (
        <Box 
            sx={{ 
                //height: '100vh', 
                width: '50vw', 
                overflowY: 'auto', 
                position: 'sticky', 
                top: 0, 
                bgcolor: '#ffffff', 
                padding: '2rem',
                '@media print': {
                    bgcolor: '#ffffff',
                    width: '100%',
                    padding: 0,
                    overflow: 'visible',
                    boxShadow: 'none'
                }
            }}
        >
            <Paper 
                sx={{ 
                    p: 4, 
                    boxShadow: 'none', 
                    '@media print': { 
                        boxShadow: 'none',
                        padding: 0
                    }
                }}
            >
                <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                    {name}
                </Typography>

                <Grid container sx={{ mb: 3 }} justifyContent="space-between">
                    <Grid item>
                        <Typography variant="body1">{email}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">{phone}</Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ mb: 3 }} />
                
                <Typography variant="h5" gutterBottom>
                    Education
                </Typography>
                <List sx={{ mb: 4 }}>
                    {educationList.map((element, index) => (
                        <EducationResultant key={index} {...element} />
                    ))}
                </List>

                <Divider sx={{ mb: 3 }} />
                
                <Typography variant="h5" gutterBottom>
                    Experience
                </Typography>
                <List sx={{ mb: 4 }}>
                    {experience.map((element, index) => (
                        <ExperienceResultant key={index} {...element} />
                    ))}
                </List>

                <Divider sx={{ mb: 3 }} />
                
                <Typography variant="h5" gutterBottom>
                    Projects
                </Typography>
                <List sx={{ mb: 4 }}>
                    {myProjects.map((element, index) => (
                        <ProjectResultant key={index} {...element} />
                    ))}
                </List>
            </Paper>
        </Box>
    );
}

export default Display;
