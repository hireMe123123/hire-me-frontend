import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo.png";
import ButtonSmall from "../../components/Buttons/ButtonSmall";
import { Container } from "react-bootstrap";

function NavbarHeader() {
  const isLogin = localStorage.getItem("token");

  return (
    <Navbar bg="white" expand="lg" className="my-4">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" height={35} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${
            isLogin ? "justify-content-between" : "justify-content-end"
          }`}
        >
          {isLogin ? (
            <>
              <Nav className="pl-120px">
                <Nav.Link href="#home" className={`fw-bold fs-6`}>
                  Home
                </Nav.Link>
              </Nav>
              <ButtonSmall
                content={"Profile"}
                classElement={"text-white background-purple fw-bold"}
              />
            </>
          ) : (
            <>
              <ButtonSmall
                content={"Masuk"}
                classElement={"color-purple border-purple me-3 fw-bold"}
                navigateAuth={"signin"}
              />
              <ButtonSmall
                content={"Daftar"}
                classElement={"text-white background-purple fw-bold"}
                navigateAuth={"signup"}
              />
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
