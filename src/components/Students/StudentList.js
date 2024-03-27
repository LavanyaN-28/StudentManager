import React from "react";

import Button from "../UI/Button";
import classes from './StudentList.module.css'

const StudentList = (props) => {
  return (
    <ul>
      {props.students.map((student) => (
        <li key={student.id}>
          {student.name} {student.mobile} {student.address}{" "}
          <Button className={classes.btn} onDelete={props.onDeleteStudent}>Delete</Button>{" "}
          <Button className={classes.btn} onEdit={props.onEditStudent}>Edit</Button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
