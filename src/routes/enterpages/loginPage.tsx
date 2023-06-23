import { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const gotoPassword = useNavigate();

  const handleClick = (e: any) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <Container fluid className="mt-5">
      <Form>
        <Form.Group className="d-flex flex-column justify-content-center align-items-center">
          <Form.Label>로그인이 필요해요.</Form.Label>
          <Form.Control
            type="email"
            placeholder="이메일 주소를 입력해주세요."
          ></Form.Control>
          <Button type="submit" onClick={handleClick}>
            계속
          </Button>
        </Form.Group>
      </Form>

      {/* Modal */}
      <Modal show={show}>
        <Modal.Body>이용약관 및 개인정보 보호정책</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setShow(false);
              gotoPassword("/password");
            }}
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

export default LoginPage;
