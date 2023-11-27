import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DentistaDetail = () => {
    const [users, setDentista] = useState({})
    const params = useParams()
    console.log(params)
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}/`


    useEffect(() => {
        axios(url)
        .then(res => setDentista(res.data))
    }, [])

  return (
    <div className='list'>
        <h3>{users.name}</h3>
        <h3>{users.email}</h3>
        <h3>{users.phone}</h3>
        <h3>{users.website}</h3>
    </div>
  )
}

export default DentistaDetail