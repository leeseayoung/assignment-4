import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserInfo } from "../lib/auth";
import { useEffect } from "react";

// Navbar styled-component 정의
const Navbar = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// NavItems styled-component 정의
const NavItems = styled.div`
  display: flex;
`;

// NavItem styled-component 정의
const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

// LogoutButton styled-component 정의
const LogoutButton = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

// UserProfile styled-component 정의
const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

// UserAvatar styled-component 정의
const UserAvatar = styled.img`
  width: 50px; /* 이미지 크기 조정 */
  height: 50px; /* 이미지 크기 조정 */
  border-radius: 50%;
  margin-right: 10px;
`;

// UserName styled-component 정의
const UserName = styled.span`
  color: white;
  font-size: 18px; /* 닉네임 폰트 크기 조정 */
`;

// PageContainer styled-component 정의
const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export default function Layout({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        handleLogout();
      }
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/sign_in");
    localStorage.clear();
  };

  return (
    <>
      <Navbar>
        <NavItems>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/profile">내 프로필</NavItem>
        </NavItems>
        {user && (
          <UserProfile>
            <UserAvatar src={user.avatar} alt="user Avatar" />
            <UserName>{user.nickname}</UserName>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </UserProfile>
        )}
      </Navbar>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
}
