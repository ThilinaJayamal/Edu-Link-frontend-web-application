import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AllStudents() {
    const navigate = useNavigate();
    const studentData = [
        { id: 'S001', name: 'John Doe', year: '2022/2023', email: 'john.doe@example.com' },
        { id: 'S002', name: 'Jane Smith', year: '2021/2022', email: 'jane.smith@example.com' },
        { id: 'S003', name: 'Mike Brown', year: '2023/2024', email: 'mike.brown@example.com' },
        { id: 'S004', name: 'Emily White', year: '2022/2023', email: 'emily.white@example.com' },
        { id: 'S005', name: 'Chris Green', year: '2021/2022', email: 'chris.green@example.com' },
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

            {/* Student Info Table */}
            <table className='w-full bg-white rounded-md overflow-hidden border max-w-4xl mx-auto'>
                <thead>
                    <tr className='font-medium text-md bg-[#4169e1] text-white'>
                        <td className='border px-2 py-4'>Student ID</td>
                        <td className='border px-2 py-4'>Student Name</td>
                        <td className='border px-2 py-4'>Accadamic Year</td>
                        <td className='hidden md:block border px-2 py-4'>Email Address</td>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((student, index) => (
                        <tr key={index} className='text-gray-700 
                        hover:bg-blue-200 cursor-pointer' onClick={() => {
                                navigate(`/students/${student.id}`)
                            }}>
                            <td className='border p-2'>{student.id}</td>
                            <td className='border p-2'>{student.name}</td>
                            <td className='border p-2'>{student.year}</td>
                            <td className='hidden md:block border p-2'>{student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllStudents;
