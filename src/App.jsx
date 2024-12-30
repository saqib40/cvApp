import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CV from './pages/cvPage';
import Form from './pages/formPage';
import { useState } from 'react';

function App() {
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
  return (
    <Router>
      <Routes>
        <Route 
         path="/cv" 
         element={
          <CV 
            name={name}
            email={email}
            phone={phone}
            educationList={educationList}
            experience={experience}
            myProjects={myProjects}
          />
         }
        />
        <Route 
         path="/form" 
         element={
          <Form 
            name={name} setName={setName}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
            educationState={educationState} setEducationState={setEducationState}
            educationList={educationList} setEducationList={setEducationList}
            experienceState={experienceState} setExperienceState={setExperienceState}
            experience={experience} setExperience={setExperience}
            stillWorking={stillWorking} setStillWorking={setStillWorking}
            projectState={projectState} setProjectState={setProjectState}
            myProjects={myProjects} setMyProjects={setMyProjects}
          />
         }
        />
      </Routes>
    </Router>
  )
}

export default App
