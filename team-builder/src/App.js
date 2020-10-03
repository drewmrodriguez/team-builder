import React, { useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Members from "./components/Member";
import './App.css';



function App() {
  const [members, setMembers] = useState([]);

  const addNewMember = member => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember} />
      <Members membersList={members} />
    </div>
  );
}

export default App;
