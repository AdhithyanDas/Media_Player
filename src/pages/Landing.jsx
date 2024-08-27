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
              <Link to={'/home'} className='btn btn-info'>Let's Go</Link>
            </div>
          </Col>
          <Col className='py-4' sm={12} md={6}>
            <img src="https://hound-studio.com/wp-content/uploads/2023/10/The-Best-Music-for-your-Explainer-video_V-3.png" alt="introimg" className='img-fluid rounded' />
          </Col>
        </Row>
      </div>

      <div className="container-fluid my-5">
        <h3 className='my-3 text-center'>Features</h3>
        <div className="p-4 d-flex justify-content-around">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_400px.gif" />
            <Card.Body>
              <Card.Title>Upload Youtub Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycPa3j8ddwiE7UR8BZPvlocBS0RSdRz5Aow&s" />
            <Card.Body>
              <Card.Title>Add Categories</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="data:image/jpeg;base64,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" />
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