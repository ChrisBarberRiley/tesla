import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [menu, setMenu] = useState(true);

  return (
    <Container>
      <a href='/'>
        <img src='/assets/images/logo.png' alt='logo' className='logo' />
      </a>

      <Menu>
        <a href='#3'>Model 3</a>
        <a href='#s'>Model s</a>
        <a href='#y'>Model y</a>
      </Menu>

      <RightMenu>
        <a href='#shop'>Shop</a>
        <a href='#account'>Tesla Account</a>
        <BurgerMenu onClick={() => setMenu(!menu)} />
      </RightMenu>

      <Nav show={menu}>
        <CloseWrapper>
          <CloseButton onClick={() => setMenu(!menu)} />
        </CloseWrapper>
        <ul>
          <li>
            <a href='#inv'>Existing Inventory</a>
          </li>
          <li>
            <a href='#inv'>Existing Inventory</a>
          </li>
          <li>
            <a href='#inv'>Existing Inventory</a>
          </li>
          <li>
            <a href='#inv'>Existing Inventory</a>
          </li>
          <li>
            <a href='#inv'>Existing Inventory</a>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-wieght: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-wieght: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const BurgerMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const Nav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  width: 300px;
  z-index: 10;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transform: ${(props) => (props.show ? 'translateX(100%)' : 'translateX(0%)')};
  transition: transform 0.2s ease;

  li {
    list-style: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseButton = styled(CloseIcon)``;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
