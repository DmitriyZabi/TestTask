import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
  const expand = false
  const [show, setShow] = useState(false)
  const toggleMenu = () => {
    setShow(!show)
  }

  return (
    <Navbar bg="primary" variant="dark" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">Test Task</Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          onClick={toggleMenu}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          show={show}
          onHide={() => {
            setShow(false)
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Меню
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className={`justify-content-end flex-grow-1 pe-3 ${styles.nav}`}
            >
              <Nav.Link
                as={NavLink}
                className={styles.link}
                to="/"
                onClick={toggleMenu}
              >
                Главная
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className={styles.link}
                to="/about"
                onClick={toggleMenu}
              >
                Обо мне
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
