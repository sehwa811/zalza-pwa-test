import { useState } from 'react';

import { Container, Form, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const PasswordPage = () => {
    const [show, setShow] = useState(false);
    const gotoMain = useNavigate();

    const handleClick = (e:any) => {
        e.preventDefault();
        setShow(true);
    }

  return (
    <Container fluid className="mt-5">
      <Form>
        <Form.Group className="d-flex flex-column justify-content-center align-items-center">
          <Form.Label>로그인이 필요해요.</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력해주세요."
          ></Form.Control>
          <Button type="submit" onClick={handleClick}>
            로그인
          </Button>
        </Form.Group>
        <Link to={"#"}>비밀번호를 잊으셨나요?</Link>
      </Form>

      <Modal show={show}>
        <Modal.Body>
            입력하신 이메일로 임시 비밀번호를 전송했습니다.
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>{setShow(false); gotoMain("/main")}}>확인</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PasswordPage;
