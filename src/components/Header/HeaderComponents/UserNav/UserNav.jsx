import React from 'react';
// import { useState } from 'react';
// import RegisterForm from 'components/UI/RegisterForm/RegisterForm';
// import LoginForm from 'components/UI/LoginForm/LoginForm';

import { StyledNavLink, Nav, NavItem, NavList } from './UserNav.styled';
import Icon from 'components/UI/Icon/Icon';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'useAuth';

const UserNav = ({ openModal }) => {
  // const {
  // isLoading,
  //   isLoggedIn,
  // } = useAuth();

  const { isLoggedIn } = useAuth();

  // const [isModalOpen, setIsOpen] = useState(false);
  // const [modalRegister, setModalRegister] = useState(true);
  const location = useLocation();
  // console.log(location);
  // function openModal() {
  //   setIsOpen(true);
  //   document.body.style.overflow = 'hidden';
  // }

  // function closeModal() {
  //   setIsOpen(false);
  //   document.body.style.overflow = 'auto';
  // }

  // function changeModalValue() {
  //   setModalRegister(!modalRegister);
  // }

  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            {/* <StyledNavLink

              onClick={openModal}
            > */}
            <StyledNavLink
              // to={'/register'}
              to={isLoggedIn ? '/user' : '/register'}
              state={{ backgroundLocation: location }}
              onClick={openModal}
            >
              <Icon id="user" />
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to={'/favorites'}>
              <Icon id="heart" />
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to={'/cart'}>
              <Icon id="cart" />
            </StyledNavLink>
          </NavItem>
        </NavList>
      </Nav>

      {/* {modalRegister === true ? (
        <RegisterForm
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          changeModalValue={changeModalValue}
        />
      ) : (
        <LoginForm
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          changeModalValue={changeModalValue}
        />
      )} */}
    </>
  );
};

export default UserNav;
