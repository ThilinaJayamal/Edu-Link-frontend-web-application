import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function DisplayStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [academicYear, setAcademicYear] = useState('');

  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const images = [img1, img2, img3];
      const uploadedUrls = [];

      for (let img of images) {
        const data = new FormData();
        data.append("file", img);
        data.append("upload_preset", "cloudinary_img");
        data.append("cloud_name", "dyytzd4h6");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dyytzd4h6/image/upload",
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: false,
          }
        );
        uploadedUrls.push(res.data.secure_url);
      }

      console.log({ name, email, contact, academicYear, uploadedUrls });
      toast.success("Updated successfully!");
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-4 pb-16'>
      <form className='flex flex-col gap-4 max-w-xl mx-auto' onSubmit={onSubmit}>
        <h3 className='text-2xl mb-8 text-gray-600 text-center'>Student Update/Delete </h3>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Full Name</label>
          <input type="text" placeholder='Full Name' required
            className='p-2 flex-1 rounded-md ring-1 ring-gray-200'
            onChange={(e) => setName(e.target.value)} />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Email Address</label>
          <input type="email" placeholder='Email Address' required
            className='p-2 flex-1 rounded-md ring-1 ring-gray-200'
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Contact Number</label>
          <input type="text" placeholder='Contact Number' required
            className='p-2 flex-1 rounded-md ring-1 ring-gray-200'
            onChange={(e) => setContact(e.target.value)} />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Academic Year</label>
          <input type="text" placeholder='Academic Year' required
            className='p-2 flex-1 rounded-md ring-1 ring-gray-200'
            onChange={(e) => setAcademicYear(e.target.value)} />
        </div>

        <p className='text-sm text-red-600 mt-4'>*Upload 3 different angle photos of the student.</p>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>IMAGE 1</label>
          <input type="file" required
            className='rounded-md bg-white p-2 ring-1 ring-gray-200'
            onChange={(e) => setImg1(e.target.files[0])} />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>IMAGE 2</label>
          <input type="file" required
            className='rounded-md bg-white p-2 ring-1 ring-gray-200'
            onChange={(e) => setImg2(e.target.files[0])} />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>IMAGE 3</label>
          <input type="file" required
            className='rounded-md bg-white p-2 ring-1 ring-gray-200'
            onChange={(e) => setImg3(e.target.files[0])} />
        </div>

        <div className='flex justify-between gap-8 mt-4'>
          <button className='bg-red-700 hover:bg-red-800 text-white p-2 rounded-md flex-1'>
            Delete
          </button>
          <button type="submit" disabled={loading}
            className='bg-[#4169e1] hover:bg-[#234ed2] text-white p-2 rounded-md flex-1'>
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DisplayStudent;
