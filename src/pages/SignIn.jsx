import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleEvent = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5a6268;
  }
`;

export default function SignIn() {
  return (
    <Container>
      <InputGroup>
        <label htmlFor="id">아이디</label>
        <Input type="text" id="id" placeholder="아이디" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">비밀번호</label>
        <Input type="password" id="password" placeholder="비밀번호" />
      </InputGroup>
      <Button onClick={() => {}}>로그인</Button>
      <ToggleEvent onClick={() => {}}>회원가입</ToggleEvent>
    </Container>
  );
}
