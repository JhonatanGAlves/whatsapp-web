import React from 'react'
import styled from 'styled-components'

const Chat = () => {
  return (
    <StyledChat>
      <img className='photo-chat' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU' alt='Foto do chat' />
      <div className='name-and-last-messenger'>
        <div className='name-hour'>
          <span className='name'>Fulano de Tal</span>
          <span className='hour'>21:05</span>
        </div>
        <div className='last-messenger-notification'>
          <span className='last-messenger'>É isso ai cara, sabe como é né, mané</span>
          <span className='notification'>1</span>
        </div>
      </div>
    </StyledChat>
  )
}

export default Chat

const StyledChat = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 15px;

  :hover {
    background-color: #2A3942;
  }

  .photo-chat {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  .name-and-last-messenger {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 10px;
    padding: 10px 0;
    
    border-bottom: 1px solid #272F34;

    .name-hour {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .name {
        font-family: Arial;
        font-weight: 400;
        font-size: 16px;
        margin: 0;

        color: #e9edef;
      }

      .hour {
        font-family: Arial;
        font-weight: 400;
        font-size: 14px;

        color: #8696a0;
      }
    }

    .last-messenger-notification {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .last-messenger {
        font-family: Arial;
        font-weight: 400;
        font-size: 14px;

        color: #8696a0;
      }

      .notification {
        padding: 3px 0 3px 5px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        font-size: 14px;

        color: #111B21;
        background-color: #33A884;
      }
    }
  }
`