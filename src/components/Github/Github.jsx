import React, { useEffect, useState } from 'react'
import {useLoaderData} from "react-router-dom";

const Github = () => {

    const data = useLoaderData();

    // const [data, setData] = useState(0);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/supratim50')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='mt-2' src={data.avatar_url} alt="Git Picture" width={200} />
    </div>
  )
}

export default Github