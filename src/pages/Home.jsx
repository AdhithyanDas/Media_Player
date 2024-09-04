import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideo from '../components/AddVideo'
import Videos from '../components/Videos'
import Catagory from '../components/Category'
import { Link } from 'react-router-dom'

function Home() {

  const [addResponse, setAddResponse] = useState("")
  const [username, setUsername] = useState('')

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('userData'))
    setUsername(user?.username)
  }, [])

  return (
    <>

      <h1>Welcome {username}</h1>
      <div className='d-flex justify-content-between p-4'>
        <h1>Videos</h1>
        <Link to={'/history'}>Watch history</Link>
      </div>

      <div className='container-fluid'>
        <Row>
          <Col sm={12} md={1}>
            <Addvideo response={setAddResponse} />
          </Col>
          <Col sm={12} md={8}>
            <Videos add={addResponse} />
          </Col>
          <Col sm={12} md={3}>
            <Catagory />
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Home