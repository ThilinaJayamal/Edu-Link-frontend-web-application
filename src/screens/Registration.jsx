import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Registration() {
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [academicYear, setAcademicYear] = useState("");

  const [loading, setLoading] = useState(false);

  const uploadImage = (img) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "cloudinary_img");
    data.append("cloud_name", "dyytzd4h6");

    return axios.post("https://api.cloudinary.com/v1_1/dyytzd4h6/image/upload", data, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: false,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const responses = await Promise.all([
        uploadImage(img1),
        uploadImage(img2),
        uploadImage(img3)
      ]);

      const uploadedUrls = responses.map(res => res.data.secure_url);

      console.log({ name, email, contact, academicYear, uploadedUrls });
      toast.success("Student registration successfully done!");

      // Reset form state
      setName(""); setEmail(""); setContact(""); setAcademicYear("");
      setImg1(null); setImg2(null); setImg3(null);
      e.target.reset();
    } catch (error) {
      toast.error(error?.response?.data?.error?.message || error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-4 pb-24'>
      <form className='flex flex-col gap-4 max-w-xl mx-auto' onSubmit={onSubmit}>
        <h3 className='text-2xl mb-8 text-gray-600 text-center'>Student Registration</h3>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Full Name</label>
          <input type="text" required placeholder='Full Name' className='p-2 flex-1 
          rounded-md ring-1 ring-gray-200' onChange={(e) => setName(e.target.value)} value={name} />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Email Address</label>
          <input type="email" required placeholder='Email Address'
            className='p-2 flex-1 rounded-md ring-1 ring-gray-200'
            onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Contact Number</label>
          <input type="text" required placeholder='Contact Number'
            className='p-2 flex-1 rounded-md ring-1 ring-gray-200'
            onChange={(e) => setContact(e.target.value)} value={contact} />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>Academic Year</label>
          <input type="text" required placeholder='Academic Year'
            className='p-2 flex-1 rounded-md ring-1 ring-gray-200'
            onChange={(e) => setAcademicYear(e.target.value)} value={academicYear} />
        </div>

        <p className='text-sm text-red-600 mt-4'>*Upload 3 different angle photos of the student.</p>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>IMAGE 1</label>
          <input type="file" className='rounded-md bg-white p-2 ring-1 ring-gray-200'
            onChange={(e) => setImg1(e.target.files[0])} accept='image/*' required />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>IMAGE 2</label>
          <input type="file" className='rounded-md bg-white p-2 ring-1 ring-gray-200'
            onChange={(e) => setImg2(e.target.files[0])} accept='image/*' required />
        </div>

        <div className='flex flex-col gap-2 sm:items-center sm:flex-row'>
          <label className='w-36'>IMAGE 3</label>
          <input type="file" className='rounded-md bg-white p-2 ring-1 ring-gray-200'
            onChange={(e) => setImg3(e.target.files[0])} accept='image/*' required />
        </div>

        <div className='flex justify-between gap-8 mt-4'>
          <button type="reset" className='bg-transparent text-black border border-gray-900 p-2 rounded-md flex-1'>Clear</button>
          <button type="submit" className='bg-[#4169e1]
           hover:bg-[#234ed2] text-white p-2 rounded-md flex-1' disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
