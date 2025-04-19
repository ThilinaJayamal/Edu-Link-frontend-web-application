import React from 'react'
import LockerCard from '../components/LockerCard'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const lockers = [
  { classId: "C101", lockerId: "L001", title: "Math Locker" },
  { classId: "C102", lockerId: "L002", title: "Science Locker" },
  { classId: "C103", lockerId: "L003", title: "History Locker" },
  { classId: "C104", lockerId: "L004", title: "English Locker" },
  { classId: "C105", lockerId: "L005", title: "Art Locker" }
]


function Locker() {
  return (
    <div className='p-4 pb-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

        <div className='p-4 flex justify-center items-center'>
          <Link to={"/add-locker"} className='flex w-14 h-14 rounded-full 
            justify-center items-center bg-purple-950 text-white'>
            <Plus />
          </Link>
        </div>

        {
          lockers.map((item) => (
            <LockerCard key={item.lockerId} title={item.title} classId={item.classId} lockerId={item.lockerId} />
          ))
        }

      </div>
    </div>
  )
}

export default Locker