import React, { useEffect, useState } from 'react'
// import dummy from './dummy'

const Page = () => {
    const [data, setData] = useState([1,2,3,4,5,6,7,8,9,10])
    const fetchData = () =>  {
        setData([...data, ...data])
    }
    window.addEventListener('scroll',() => {
        if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            fetchData()
        }
    })
  return (
    <div>{
        data.map((e,index)=> {
            return <h1 key={index} >{e}</h1>
        })
    }
    </div>
  )
}

export default Page