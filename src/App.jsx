// AI ASSISTED CODE

import { useState } from 'react';
import './App.css';

export default function MyComponent(){

  const course_attributes = [
    "Course Name",
    "Day",
    "Start Time",
    "End Time"
  ]

  const [courseData, setCourseData] = 
  useState ({"Course Name": "",
    "Day": "",
    "Start Time": "",
    "End Time": ""
  })
  // Enables the Course Name, Day, Start Time, End Time, to be Saved //

  const [course, setCourses] = useState([]);
  // Enables All the Actual Classes to be Saved // 

  const handleInputChange = (attribute, value) => {
    setCourseData(prev => ({...prev, [attribute]: value}));
  };
  // Saves Every Single Key Input //

  const handleCourse = (course_attribute, value) => {
    setCourseData (prev => ({ ...prev, [course_attribute]: value}));
  };
  // => Anonymous Function // 
  const handleAddCourse = () => {
    if (courseData["Course Name"]){
      setCourses(prev =>[...prev , courseData]);
      setCourseData({"Course Name": "", "Day": "", "Start Time": "", "End Time": ""})
    }
  };


return (
  /* RETURNING JSX  */
  /* WE ARE RETURNING WHAT THE USER WILL ACTUALLY SEE */
  <>
  <div id="main-page-div">
    <h1>College Schedule Builder</h1>
    <h2>Add a Course</h2>
      <div className="input-row"> 
        {course_attributes.map((attr) => (
          // MAP IS A LOOP, IT WILL LOOK THROUGH THE LIST AND CREATE A INPUT BOX FOR EACH ATTRIBUTE //
          <input 
          key={attr}
          type="text"
          placeholder={attr}
          value={courseData[attr]}
          onChange={(e) => handleInputChange(attr, e.target.value)}
          />
        ))}
        <button onClick={handleAddCourse}>+Add</button>
      </div>
      {/* THE FOLLOWING DIV WILL DISPLAY THE ACTUAL CLASSES IN A SEPARATE CONTAINER  */}
      <div id="add-course">
        {course.map((item,index) => (
          <div key={index} className="course-item">
            <p>{item["Course Name"]} - {item["Day"]} @ {item["Start Time"]} - {item["End Time"]}</p>
          </div>
        ))}
      </div>

        {/* <h3>Course Name</h3> */}
        {/* <input type="text" 
            name="course-name" 
            placeholder="Enter course name">

        </input>
        <input type="text" name="date" placeholder="Enter course name"></input>
        <button>Add Course</button> */}
        {/* Implementing a Shortcut*/}
  </div>
  </>
  );
}