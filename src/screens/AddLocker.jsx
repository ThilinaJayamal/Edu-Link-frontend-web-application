import React, { useState } from 'react';
import { toast } from 'react-toastify';

function AddLocker() {
  const [lockerId, setLockerId] = useState('');
  const [lockerName, setLockerName] = useState('');
  const [classroomId, setClassroomId] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call or local processing
      console.log({ lockerId, lockerName, classroomId });
      toast.success("Locker added successfully!");

      // Reset form state
      setLockerId('');
      setLockerName('');
      setClassroomId('');
      e.target.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-4 pb-24'>
      <form className='flex flex-col gap-4 max-w-xl mx-auto' onSubmit={onSubmit}>
        <h3 className='text-2xl mb-8 text-gray-600 text-center'>Add Locker</h3>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Locker ID</label>
          <input type="text" required placeholder='Locker ID'
            className='p-2 flex-1 rounded-md ring-1 ring-gray-200'
            onChange={(e) => setLockerId(e.target.value)} value={lockerId} />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Locker Name</label>
          <input type="text" required placeholder='Locker Name'
            className='p-2 flex-1 rounded-md ring-1 ring-gray-200'
            onChange={(e) => setLockerName(e.target.value)} value={lockerName} />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Classroom ID</label>
          <input type="text" required placeholder='Classroom ID'
            className='p-2 flex-1 rounded-md ring-1 ring-gray-200'
            onChange={(e) => setClassroomId(e.target.value)} value={classroomId} />
        </div>

        <div className='flex justify-between gap-8 mt-4'>
          <button type="reset"
            className='bg-transparent text-black border border-gray-900 p-2 rounded-md flex-1'>
            Clear
          </button>
          <button type="submit"
            className='bg-[#4169e1] hover:bg-[#234ed2] text-white p-2 rounded-md flex-1'
            disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLocker;
