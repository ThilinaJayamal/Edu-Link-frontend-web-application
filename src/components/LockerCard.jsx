import React from 'react'
import { KeySquare, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';

function LockerCard({classId,lockerId,title}) {
    const unlockLocker = async () => {
        toast.success("Locker is unlocked successfully!")
        try {

        } catch (error) {

        }
    }
    return (
        <div className='p-4 bg-white rounded-md shadow-sm relative'>
            <h3 className='text-lg font-semibold text-gray-600 mb-2'>{title}</h3>
            <span className='text-sm text-gray-900 block'>LOCKER ID: {lockerId}</span>
            <span className='text-sm text-gray-900 block'>CLASS ID: {classId}</span>
            <button className='px-6 py-2 bg-purple-900 hover:bg-purple-950 mt-4
            text-white rounded-md flex gap-2 items-center' onClick={unlockLocker}>
                <KeySquare /> Unlock
            </button>

            <div className='absolute top-4 right-4'>
                <Trash2 className='text-gray-800 hover:text-red-700 
                cursor-pointer' />
            </div>
        </div>
    )
}

export default LockerCard