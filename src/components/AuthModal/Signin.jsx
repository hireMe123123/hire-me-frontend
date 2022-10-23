import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonSmall from "../Buttons/ButtonSmall";

function AuthModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <center>
          <h4 className="mb-3">Who will log in?</h4>
          <ButtonSmall
            content={"User"}
            classElement={"color-purple border-purple me-3 fw-bold w-25"}
            navigateAuth={"signin"}
          />
          <ButtonSmall
            content={"Company"}
            classElement={"text-white background-purple fw-bold w-25"}
            navigateAuth={"signin-company"}
          />
        </center>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="white"
          onClick={props.onHide}
          className="color-purple border-purple me-3 fw-bold"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AuthModal;
