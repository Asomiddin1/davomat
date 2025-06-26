import { BookOpenIcon } from '@heroicons/react/24/outline';
import React from 'react'
import Header from '../footer/Header';
import StudentInfo from '../footer/StudentInfo';
import MetricsGrid from '../footer/MetricsGrid';
import CourseList from '../footer/CourseList';

const ParentsPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Header />
        <main className="mt-8 space-y-8">
          <StudentInfo />
          <MetricsGrid />
          <CourseList />
        </main>
      </div>
    </div>
  );
}

export default ParentsPanel