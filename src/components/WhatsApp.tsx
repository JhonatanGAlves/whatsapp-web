import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCommentDots, faEllipsisV, faBellSlash, faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'
import Chat from './Chat'
// import photoPerfil from '../assets/Images/photo-perfil.png'

const WhatsApp = () => {
  return (
    <StyledWhatsApp>
      <div className='sidebar'>
        <header className='sidebar-header'>
          {/* <img src={photoPerfil} alt='Foto de perfil' /> */}
          <img className='header-avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU' alt='Foto de perfil' />
          <div className='header-buttons'>
            <div className='header-btn'>
              <FontAwesomeIcon icon={faSpinner} />
            </div>
            <div className='header-btn'>
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
            <div className='header-btn'>
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>
        </header>
        <div className='sidebar-notification'>
          <FontAwesomeIcon className='bell-icon' icon={faBellSlash} />
          <div className='sidebar-txt-notification'>
            <h4>Receba notificações de novas mensagens</h4>
            <div className='txt-active-notification'>
              <span>Ativar notificações na área de trabalho</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
        <div className='sidebar-container-search'>
          <div className='sidebar-search'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='search' placeholder='Pesquisar ou começar uma nova conversa' />
          </div>
        </div>
        <div className='sidebar-chatlist'>
          <Chat />
        </div>
      </div>
      <div className='content-area'>

      </div>
    </StyledWhatsApp>
  )
}

export default WhatsApp

const StyledWhatsApp = styled.aside`
  display: flex;
  margin: auto;
  width: 1396px;
  height: calc(100% - 38px);

  background-color: #111B21;

  .sidebar {
    display: flex;
    flex-direction: column;
    width: 35%;
    max-width: 415px;
    height: 100%;

    border-right: 1px solid #272F34;

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      height: 60px;

      background-color: #202C33;

      .header-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
      }

      .header-buttons {
        display: flex;

        .header-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;

          svg {
            font-size: 20px;

            color: #AEBAC1;
          }
        }

      }
    }

    .sidebar-notification {
      display: flex;
      align-items: center;
      padding: 13px;

      background-color: #182229;

      svg.bell-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 10px;

        color: #182229;
        background-color: #53BDEB;
      }

      .sidebar-txt-notification {
        display: flex;
        justify-content: left;
        flex-direction: column;
        margin-left: 15px;

        h4 {
          font-family: Arial;
          font-weight: 400;
          font-size: 16px;
          margin: 0;

          color: #e9edef;
        }

        .txt-active-notification {

          span {
            font-family: Arial;
            font-weight: 400;
            font-size: 14px;
  
            color: #8696a0;
            
            :hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }

          svg {
            font-size: 12px;
            margin-left: 5px;

            color: #8696a0;

          }
        }
      }

      :hover {
        cursor: pointer;
      }
    }

    .sidebar-container-search {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 15px;

      border-bottom: 1px solid #272F34;

      .sidebar-search {
        display: flex;
        align-items: center;
        border-radius: 10px;
        padding: 10px 15px;
        width: 100%;

        background-color: #202C33;

        input {
          border: none;
          outline: none;
          margin-left: 20px;
          flex: 1;

          color: #e9edef;
          background-color: transparent;
        }

        input::placeholder {
          color: #698292;
        }

        svg {
          color: #53616A;
        }
      }
    }

    .sidebar-chatlist {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .content-area {

  }
`