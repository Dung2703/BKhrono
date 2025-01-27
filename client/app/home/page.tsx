'use client';
import React, { useState } from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';
import Input from './Input';

const HomePage = () => {
  const [courses, setCourses] = useState<string[]>([])

  const addCourse = (course: string) => {
    if (course.trim() !== '') {
      setCourses((prevCourses) => [...prevCourses, course.trim()])
    }
  }

  return (
    <div>
      <h1>HomePage</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <TopBar />
      </div>
      <div className="content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <SideBar items={courses} />
        <div style={{ marginLeft: '50px' }}>
         <Input addCourse={addCourse}></Input>
        </div>
      </div>
    </div>
  )
}

export default HomePage