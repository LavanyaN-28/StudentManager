import React, { useState } from 'react';
 
import AddStudent from './components/Students/AddStudent';
import StudentList from './components/Students/StudentList';

function App() {

  const [studentList,setStudentList] = useState([]);
  const [count,setCount] = useState(0)

  const addStudentHandler = (studentName,studentMobile,studentAddress)=> {
    setStudentList(prevStudentList => {
      setCount(count+1);
      return [...prevStudentList,{name : studentName, mobile : studentMobile, address : studentAddress, id : Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddStudent onAddStudent={addStudentHandler}/>
      <StudentList students={studentList}/>
      <div>
      <label>Total Students: </label>
      <input type='text' value={count} onChange={addStudentHandler}></input>
    </div>
    </div>
  );
}

export default App;
