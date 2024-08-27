import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="bg-body-tertiary p-3">
                <Container>
                    <Navbar.Brand href="#home">
                        <i className="fa-solid fa-radio fa-bounce text-info"></i>
                        {' '}
                        Media Player
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header