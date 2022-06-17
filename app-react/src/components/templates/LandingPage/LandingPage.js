import React, { useState, useEffect, useContext } from 'react';
import { Wrapper, Header, Logo, Footer, GreenTextWrapper, IconStyleWrapper } from './LandingPage-styled';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import List from 'components/organisms/List/List';
import { Modal } from 'components/molecules/Modal/Modal';
import Login from 'components/organisms/Login/Login';
import '@fontsource/montserrat';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { Redirect } from 'react-router-dom';
import { LinksContext } from 'providers/LinksProvider';

const LandingPage = () => {
  const [shouldRedirect, setRedirect] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [userSelection, setUserSelection] = useState({
    startDate: '',
    endDate: '',
    days: 1,
    adultsNumber: 1,
    kidsNumber: 0,
    selectedRoom: {},
  });
  const [showModal, setShowModal] = useState(false);
  const LinksCtx = useContext(LinksContext);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const onRoomDetailsClickHandler = (selectedRoom) => {
    setUserSelection({ ...userSelection, selectedRoom: selectedRoom });
    setRedirect(true);
  };

  useEffect(() => {
    const getRooms = async () => {
      const response = await fetch(LinksCtx.rooms);
      const data = await response.json();
      const roomsArray = data._embedded.uiRoomList;
      setRooms(roomsArray);
    };

    if (LinksCtx.rooms && rooms.length === 0) {
      getRooms();
    }
  }, [LinksCtx, rooms.length]);

  return (
    <>
      {shouldRedirect ? <Redirect push to={{ pathname: '/steps', state: userSelection }} /> : null}
      <Wrapper>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <Login></Login>
        </Modal>
        <Header>
          <Logo>Bookify</Logo>
          <IconStyleWrapper onClick={openModal}>
            <AccountCircle size="60" />
          </IconStyleWrapper>
        </Header>
        <SearchBar setUserSelection={setUserSelection}></SearchBar>
        <List rooms={rooms} onRoomDetailsClickHandler={onRoomDetailsClickHandler} userSelection={userSelection}></List>
        <Footer>
          <span>Więcej informacji</span>
          <span>
            &copy;2022 <GreenTextWrapper>B</GreenTextWrapper>ookify
          </span>
          <span>Polityka prywatności</span>
        </Footer>
      </Wrapper>
    </>
  );
};

export default LandingPage;
