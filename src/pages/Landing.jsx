import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>

      <div className="container-fluid d-flex align-items-center" style={{ height: '85vh' }}>
        <Row>
          <Col className='p-5' sm={12} md={6}>
            <h2>
              <i className="fa-solid fa-radio fa-bounce text-info"></i>
              Media Player 2024
            </h2>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aperiam, amet id consequatur at delectus, quos incidunt nostrum eum unde! A dolorem est consectetur voluptates harum qui repellendus sequi.</p>
            <div className="d-grid">
              <Link to={'/log'} className='btn btn-info'>Let's Go</Link>
            </div>
          </Col>

          <Col className='py-4' sm={12} md={6}>
            <img style={{ 'width': '95vh' }} src="https://hound-studio.com/wp-content/uploads/2023/10/The-Best-Music-for-your-Explainer-video_V-3.png" alt="introimg" className='img-fluid rounded' />
          </Col>
        </Row>
      </div>

      <div className="container-fluid my-5">
        <h3 className='my-3 text-center'>Features</h3>
        <div className="p-4 d-flex justify-content-around">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://i.gifer.com/fyFl.gif" />
            <Card.Body>
              <Card.Title>Upload Youtub Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/77098/screenshots/2485682/main-icons_2.gif" />
            <Card.Body>
              <Card.Title>Add Categories</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/437703/screenshots/3458035/aprli20search-gif2.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>

      <div className="p-5">
        <Row>
          <Col sm={12} md={7}>
            <h4>Simple and Faster</h4>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aperiam, amet id consequatur at delectus, quos incidunt nostrum eum unde! A dolorem est consectetur voluptates harum qui repellendus sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum aut iusto est mollitia deleniti ea sequi non reiciendis recusandae eos molestias, rerum corporis consectetur aliquid ullam quisquam! Minus, quia!</p>
          </Col>
          <Col sm={12} md={5}>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/5r25Y9Vg2P4?si=AYI5ZcLqzxvklFVW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Landing