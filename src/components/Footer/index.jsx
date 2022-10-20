import { Container } from "react-bootstrap";
import logoFooter from "../../assets/img/logo-footer.png";

function Footer() {
  return (
    <footer className="background-purple" style={{ paddingTop: "70px" }}>
      <Container>
        <img
          src={logoFooter}
          alt=""
          height={50}
          style={{ marginBottom: "30px" }}
        />
        <p className="text-white fs-18px" style={{ marginBottom: "67px" }}>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. In euismod ipsum et dui <br />
          rhoncus auctor.
        </p>

        <div
          className="border-top d-flex justify-content-between"
          style={{ paddingTop: "30px" }}
        >
          <p className="text-white fs-18px">
            2020 Pewworld. All right reserved
          </p>

          <div className="d-flex gap-5">
            <p className="text-white fs-18px">Telepon</p>
            <p className="text-white fs-18px">Email</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
