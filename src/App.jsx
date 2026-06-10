import { useState } from 'react';
import './App.css';

export default function MyComponent(){

  const course_attributes = [
    "Course Name",
    "Day",
    "Start",
    "End",
  ]

return (
  /* RETURNING JSX  */
  <>
  <div id="main-page-div">
    <h1>College Schedule Builder</h1>
    <h2>Add a Course</h2>
      <div className="input-row"> 
        {course_attributes.map((course_attribute) => (
          <input 
          key={course_attribute}
          type="text"
          placeholder={course_attribute}
          />
        ))}
        <button type="submit">+Add</button>

        {/* <h3>Course Name</h3> */}
        {/* <input type="text" 
            name="course-name" 
            placeholder="Enter course name">

        </input>
        <input type="text" name="date" placeholder="Enter course name"></input>
        <button>Add Course</button> */}
        {/* Implementing a Shortcut*/}



      </div>
  </div>
  </>
  );
}