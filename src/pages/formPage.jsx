import GeneralInfo from "../components/general";
import EducationInfo from "../components/education";
import Experience from "../components/experience";
import Project from "../components/projects";
import Display from "../components/display2";
//import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Form({name,setName,email,setEmail,phone,setPhone,educationState,setEducationState,educationList,setEducationList,experienceState,setExperienceState,experience,setExperience,stillWorking,setStillWorking,projectState,setProjectState,myProjects,setMyProjects})
{
  /*
    //for GeneralInfo component
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    //for EducationInfo component
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
    //for Experience component
    const [experienceState, setExperienceState] = useState({
        title: "",
        companyName: "",
        startM: "January",
        startY: "2024",
        endM: "January",
        endY: "2024",
        stillWorking: false
    });
    const [experience, setExperience] = useState([]); // it's a list
    const [stillWorking, setStillWorking] = useState(false);
    //for Project component
    const [projectState, setProjectState] = useState({
        title: "",
        description: ""
    });
    const [myProjects, setMyProjects] = useState([]); //it's a list
  */
    const navigate = useNavigate();
    return (
        <>
        <GeneralInfo 
          name={name} 
          setName={setName} 
          email={email} 
          setEmail={setEmail} 
          phone={phone} 
          setPhone={setPhone}
          display={<Display name={name} email={email} phone={phone} educationList={educationList} experience={experience} myProjects={myProjects}/>}/>
        <EducationInfo 
          educationState={educationState}
          setEducationState={setEducationState}
          educationList={educationList}
          setEducationList={setEducationList}
          display={<Display name={name} email={email} phone={phone} educationList={educationList} experience={experience} myProjects={myProjects}/>}/>
        <Experience 
          experienceState={experienceState}
          setExperienceState={setExperienceState}
          experience={experience}
          setExperience={setExperience}
          stillWorking={stillWorking}
          setStillWorking={setStillWorking}
          display={<Display name={name} email={email} phone={phone} educationList={educationList} experience={experience} myProjects={myProjects}/>}/>
        <Project 
          projectState={projectState}
          setProjectState={setProjectState}
          myProjects={myProjects}
          setMyProjects={setMyProjects}
          display={<Display name={name} email={email} phone={phone} educationList={educationList} experience={experience} myProjects={myProjects}/>}/>
        <Button 
          variant="contained" 
          size="large" 
          onClick={() => navigate("/cv")}
          sx={{display: "block", marginTop: "10px", marginBottom: "10px", width: "50vw", marginLeft: "25%"}}>Submit</Button>
        </>
    );
}

export default Form;