import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SearchContext } from "../ecommerce/context/SearchProvider";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navbarstyles.css";
import { useLocation } from "react-router-dom";

export function NavbarComponent() {
  const { categories } = useContext(SearchContext);
  const { pathname } = useLocation();


  return (
    <>
      <Navbar className="total-width nav-main" bg="none" data-bs-theme="dark">
        <Container className="">
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={'/'}>
              <Nav.Link href="#home">Home</Nav.Link>
            </NavLink>
            <NavLink to={'/shopping-cart'}>
            <Nav.Link href="#features">Shopping</Nav.Link>
            </NavLink>
          </Nav>
          <Navbar.Collapse id="basic-navbar-nav">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories &&
                categories.map((category, index) => (
                  <NavDropdown.Item
                    href={`/${category}`}
                    key={`${category}_${index}`}
                    value={category}
                  >
                    {category[0].toUpperCase() +
                      category.substring(1, category.length)}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </Navbar.Collapse>

          {
            (!pathname?.includes('/auth')) && <ul className="user-auth">
            <NavLink to={"auth/login"}>Login</NavLink>
            <NavLink to={"auth/register"}>Register</NavLink>
          </ul>
          }

          <Nav.Link href="#pricing"></Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}
