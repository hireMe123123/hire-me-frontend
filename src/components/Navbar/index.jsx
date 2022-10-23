import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo.png";
import SigninModal from "../AuthModal/Signin";
import SignupModal from "../AuthModal/Signup";
import noPhoto from "../../assets/img/no-photo.png";
import { Container, NavDropdown, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { getDataUserById } from "../../stores/actions/user";

function NavbarHeader() {
  //   const dispatch = useDispatch;
  const isLogin = localStorage.getItem("token");
  const [modalShow, setModalShow] = useState(false);
  const [signInShow, setSignInShow] = useState(false);
  //   const user = useSelector((state) => state.auth);
  const userCompany = useSelector((state) => state.company);
  const userJobseeker = useSelector((state) => state.user);
  const checkData =
    Object.keys(userCompany.data).length > 0
      ? userCompany.data[0].image
      : Object.keys(userJobseeker.data).length > 0
      ? userJobseeker.data[0].image
      : false;
  const userImage = checkData
    ? `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${checkData}`
    : noPhoto;
  //   const userImage =
  //   Object.keys(userCompany.data).length > 0 ?
  //       userCompany.data[0].image
  //   ? `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${userCompany.data[0].image}`
  //           : Object.keys(userJobseeker.data).length > 0 ?
  //               userJobseeker.data[0].image
  //   ? `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${userJobseeker.data[0].image}`
  //   : noPhoto;

  // "https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/" +
  // user.data[0]?.image;

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
                  <img
                    src={userImage}
                    style={{ width: "44px" }}
                    className="rounded-circle"
                  ></img>
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
              <Button
                variant="light"
                onClick={() => setSignInShow(true)}
                className="color-purple border-purple me-3 fw-bold"
              >
                Masuk
              </Button>
              <SigninModal
                show={signInShow}
                onHide={() => setSignInShow(false)}
              />

              <Button
                onClick={() => setModalShow(true)}
                className="text-white background-purple border-purple fw-bold"
                style={{ backgroundColor: "#5e50a1" }}
              >
                Daftar
              </Button>
              <SignupModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              {/* <ButtonSmall
                content={"Masuk"}
                classElement={"color-purple border-purple me-3 fw-bold"}
                navigateAuth={"signin"}
              />
              <ButtonSmall
                content={"Daftar"}
                classElement={"text-white background-purple fw-bold"}
                navigateAuth={"signup"}
              /> */}
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
