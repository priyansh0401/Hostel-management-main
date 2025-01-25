import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./searchBox";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("https://hostel-management-main-testtest.vercel.app/login");
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>BIT MESRA</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ml-auto">
              <NavDropdown title="More">
                <LinkContainer to="https://hostel-management-main-testtest.vercel.app/attendance">
                  <NavDropdown.Item>Attendance</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="https://hostel-management-main-testtest.vercel.app/addStudent">
                  <NavDropdown.Item>Add Student</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="https://hostel-management-main-testtest.vercel.app/analysis">
                  <NavDropdown.Item>View Analysis</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="https://hostel-management-main-testtest.vercel.app/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  {userInfo.isAdmin && (
                    <LinkContainer to="https://hostel-management-main-testtest.vercel.app/userList">
                      <NavDropdown.Item>Users List</NavDropdown.Item>
                    </LinkContainer>
                  )}
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="https://hostel-management-main-testtest.vercel.app/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
