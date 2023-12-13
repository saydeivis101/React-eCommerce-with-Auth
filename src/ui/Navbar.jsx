import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SearchContext } from '../ecommerce/context/SearchProvider';
import {useContext} from 'react'

export function NavbarComponent(){

  const {categories} = useContext(SearchContext);

  return (
    <>
      <Navbar className='total-width nav-main' bg="none" data-bs-theme="dark">
        <Container className=''>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Shopping</Nav.Link>
          </Nav>
          <Navbar.Collapse id="basic-navbar-nav">
              <NavDropdown title="Categories" id="basic-nav-dropdown">

              {categories &&
              categories.map((category, index) => (
                <NavDropdown.Item href={`/${category}`} key={`${category}_${index}`} value={category}>
                  {category[0].toUpperCase() +
                    category.substring(1, category.length)}
                </NavDropdown.Item>
              ))}
              </NavDropdown>
          </Navbar.Collapse>
          <Nav.Link href="#pricing"></Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}
