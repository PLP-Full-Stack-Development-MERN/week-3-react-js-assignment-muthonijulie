import React,{useState} from 'react'

function counter() {
    const [count,setCount]=useState(0);

    function handleClick(){
        setCount((count)=>count+1);
        console.log(count);
    }
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-semibold text-gray-700">Count:{count}</h1>
      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-green-700" onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default counter
