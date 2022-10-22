import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo.png";
import ButtonSmall from "../../components/Buttons/ButtonSmall";
import { Container, NavDropdown } from "react-bootstrap";
import noPhoto from "../../assets/img/no-photo.png";
import { useSelector } from "react-redux";

function NavbarHeader() {
  const isLogin = localStorage.getItem("token");

  const user = useSelector((state) => state.user);
  const userImage =
    "https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/" +
    user.data[0]?.image;

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Navbar bg="white" expand="lg" className="my-4">
      <Container>
        <Navbar.Brand href="/">
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
                <Nav.Link href="/home" className={`fw-bold fs-6`}>
                  Home
                </Nav.Link>
              </Nav>
              <NavDropdown
                align="end"
                title={
                  user.data[0]?.image ? (
                    <img
                      src={userImage}
                      alt="No Photo"
                      className="rounded-circle"
                      height={35}
                    />
                  ) : (
                    <img
                      src={
                        // `https://ui-avatars.com/api/?name=${user.data[0].name}&background=random&size=44`
                        noPhoto
                      }
                      alt="No Photo"
                      className="rounded-circle"
                      height={35}
                    />
                  )
                }
                id="dropdown-menu-align-end"
              >
                <NavDropdown.Item href="/user-profile">
                  Detail Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/edit-user">
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="text-danger"
                  onClick={handleLogout}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>

              {/* <ButtonSmall
                content={"Profile"}
                classElement={"text-white background-purple fw-bold"}
                navigateAuth={"user-profile"}
              /> */}
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
