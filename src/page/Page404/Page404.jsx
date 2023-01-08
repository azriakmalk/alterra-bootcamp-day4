import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const history = useNavigate();
  const [time, setTime] = useState(3);
  useEffect(() => {
    const times = setInterval(()=> {
      setTime((prevState) => {
        return prevState - 1
      });
    },1000);

    setTimeout(()=>{
      clearInterval(times);
      history('/')
    },3000)
  },[])
  return (
    <div className="grid grid-cols-1 h-full w-full content-center justify-items-center">
      <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        404 Not Found
      </h1>
      <input
        className="bg-blue-900 text-white cursor-pointer p-5 mt-10 rounded-full hover:text-blue-200 hover:font-bold hover:text-lg"
        type="button"
        value="Return to Home"
        onClick={()=>history("/")}
      />
      <p className="mt-2 text-blue-400">In {time} Seconds will redirect to Home</p>
    </div>
  );
}
