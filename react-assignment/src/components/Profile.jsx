import React,{useState} from 'react'

function Profile() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
  return (
    <div className="max-w-md mx-auto p-6 bg-green-100 rounded-lg shadow-md">
      <input type="text" placeholder="Enter your name" className="w-full p-2 text-black bg-white border border-green-300 p-2 text-lg mb-3" onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder="Enter your email"  className="w-full p-2 text-black bg-white border border-green-300 p-2 text-lg mb-3" onChange={(e)=>setEmail(e.target.value)}/>

      <p className="text-lg font-medium text-gray-700">Name:{name}</p>
      <p className="text-lg font-medium text-gray-700">Email:{email}</p>
    </div>
  )
}

export default Profile
