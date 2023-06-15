import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from './Header.module.scss'

export function Header() {
  const expand = false
  return (
    <Navbar bg="primary" variant="dark" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">Test Task</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
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
              <Nav.Link className={styles.link} href="/">
                Главная
              </Nav.Link>
              <Nav.Link className={styles.link} href="/about">
                Обо мне
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
