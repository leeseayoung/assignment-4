import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    // console.log(id);
    // console.log(password);
    // console.log(nickname);

    if (id.length < 4 || id.length > 10) {
      alert("아이디 4글자 이상 10글자 미만");
      return;
    }
    if (password.length < 4 || password.length > 15) {
      alert("비번은 4글자 이상 15글자 미만");
      return;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1글자 이상 10글자 미만");
      return;
    }
  };

  return (
    <Container>
      <InputGroup>
        <label htmlFor="id">아이디</label>
        <Input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="아이디"
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="password">비밀번호</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="비밀번호"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="nickbame">닉네임</label>
        <Input
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          placeholder="닉네임"
        />
      </InputGroup>
      <Button onClick={handleSignIn}>회원가입</Button>
      <ToggleEvent
        onClick={() => {
          navigate("/sign_in");
        }}
      >
        돌아가기
      </ToggleEvent>
    </Container>
  );
}
