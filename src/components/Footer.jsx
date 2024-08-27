import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-light py-2 container-fluid'>
        <Row className='p-4'>
          <Col sm={12} md={5}>
            <h3>Media Player</h3>
            <p style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima ipsam tempora odio, magni nisi quis facilis molestias illum in distinctio labore quod! Labore reiciendis nihil temporibus rerum exercitationem incidunt.
            </p>
          </Col>

          <Col sm={12} md={2}>
            <h3>Links</h3>
            <div className="d-flex flex-column">
              <Link to={'/'} className='text-decoration-none'>Landing</Link>
              <Link to={'/home'} className='text-decoration-none'>Home</Link>
              <Link to={'/history'} className='text-decoration-none'>Watch History</Link>
            </div>
          </Col>

          <Col sm={12} md={5}>
            <h3>FeedBack</h3>
            <textarea name="" id="" className='form-control'></textarea>
            <button className='btn btn-info mt-3'>Send</button>
          </Col>
        </Row>

        <h6 className='text-center'>MEDIA PLAYER &copy;2024 ALL RIGHT RESERVED</h6>

      </div>
    </>
  )
}

export default Footer