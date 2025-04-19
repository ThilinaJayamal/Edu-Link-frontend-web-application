import React from 'react';
import { Search } from 'lucide-react';

function Attendance() {

  const attendanceData = [
    { id: 'S001', name: 'John Doe', arrived: '08:00 AM', status: 'Present' },
    { id: 'S002', name: 'Jane Smith', arrived: '08:05 AM', status: 'Late' },
    { id: 'S003', name: 'Mike Brown', arrived: '-', status: 'Absent' },
    { id: 'S004', name: 'Emily White', arrived: '07:58 AM', status: 'Present' },
    { id: 'S005', name: 'Chris Green', arrived: '08:10 AM', status: 'Late' },
  ];

  return (
    <div className='flex flex-col p-4 pb-24'>
      {/* Styled Search Bar */}
      <div className='bg-white px-4 py-2 w-full max-w-md flex justify-between items-center rounded-full shadow-sm mx-auto border focus-within:ring-2 focus-within:ring-blue-500 mb-6'>
        <input
          type="text"
          placeholder="Search student..."
          className='flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent'
        />
        <button className='text-gray-500 hover:text-blue-500'>
          <Search />
        </button>
      </div>

      {/* Attendance Table */}
      <table className='w-full bg-white rounded-md overflow-hidden border max-w-4xl mx-auto'>
        <thead>
          <tr className='font-medium text-md bg-[#4169e1] text-white'>
            <td className='border px-2 py-4'>Student ID</td>
            <td className='border px-2 py-4'>Student Name</td>
            <td className='border px-2 py-4'>Arrived Time</td>
            <td className='border px-2 py-4'>Status</td>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((student, index) => (
            <tr key={index} className='text-gray-700 hover:bg-blue-200'>
              <td className='border p-2'>{student.id}</td>
              <td className='border p-2'>{student.name}</td>
              <td className='border p-2'>{student.arrived}</td>
              <td className='border p-2'>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
