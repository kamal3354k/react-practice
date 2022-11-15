import React, { useEffect, useState } from 'react'
import { memo } from 'react'

const Child = ({count}) => {
  console.log("child")
    const [data, setdata] = useState([])
    useEffect(() => {
        setdata(count())
    
    }, [count])
    
  return (
    <div>{data?.map((i)=><h1>{i}</h1>)}</div>
  )
}

export default memo(Child)