import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddStudent.module.css';

const AddStudent = (props) => {
  const [enteredStudentName, setEnteredStudentname] = useState('');
  const [studentNameIsValid , setStudentNameIsValid] = useState();
  const [enteredMobile, setEnteredMobile] = useState('');
  const [mobileIsValid , setMobileIsValid] = useState();
  const [enteredAddress,setEnteredAddress] = useState('');
  const [addressIsValid , setAddressIsValid] = useState();
  const [formIsValid,setFormIsValid] = useState(false);
  
  useEffect(() => {
      setFormIsValid(
        enteredStudentName.trim().length !== 0 && enteredMobile.trim().length === 10 && enteredAddress.trim().length !== 0)
  },[enteredStudentName , enteredMobile , enteredAddress])
  

  const nameChangeHandler = (event) => {
    setEnteredStudentname(event.target.value);
  };

  const mobileChangeHandler = (event) => {
    setEnteredMobile(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const validateNameHandler = () => {
    setStudentNameIsValid(enteredStudentName.trim().length !== 0);
  };

  const validateMobileHandler = () => {
    setMobileIsValid(enteredMobile.trim().length === 10);
  };

  const validateAddressHandler = () => {
    setAddressIsValid(enteredStudentName.trim().length !== 0);
  };


  const addStudentHandler = (event) => {
    event.preventDefault();
    props.onAddStudent(enteredStudentName, enteredMobile,enteredAddress);
    setEnteredStudentname('');
    setEnteredMobile('');
    setEnteredAddress('');
  };

  return (
    <React.Fragment>
      <Card className={classes.input}>
        <form onSubmit={addStudentHandler}>
          <div className={`${classes.control} ${
            studentNameIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="studentname">Name: </label>
          <input
            id="studentname"
            type="text"
            value={enteredStudentName}
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
          />
          </div>
          <div
          className={`${classes.control} ${
            mobileIsValid === false ? classes.invalid : ''
          }`}>
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            type="number"
            value={enteredMobile}
            onChange={mobileChangeHandler}
            onBlur={validateMobileHandler}
          />
          </div>
          <div className={`${classes.control} ${
            addressIsValid === false ? classes.invalid : ''
          }`}>
          <label htmlFor="address">Address: </label>
          <input
            id="address"
            type="text"
            value={enteredAddress}
            onChange={addressChangeHandler}
            onBlur={validateAddressHandler}
          />
          </div>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>Add Student</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddStudent;