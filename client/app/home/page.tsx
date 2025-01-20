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
      <TopBar />
      <div className="content">
        <SideBar items={courses} />
        <Input addCourse={addCourse}></Input>
      </div>
    </div>
  )
}

export default HomePage