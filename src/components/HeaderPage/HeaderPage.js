import './HeaderPage.css';
import { GoogleLogout } from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';

import { LoginContext } from '../../contexts/LoginContext';

const clientId = '623866705146-nimciplbdvmnt2q23j7dtiuohlp1ogjs.apps.googleusercontent.com';

const Header = () => {
    const {username} = useContext(LoginContext)
    let navigate = useNavigate();

    const signOutSuccess = () =>{
        navigate('/')
    } 

    return(
      <header className="header">
          <h1>{username}</h1>
            <GoogleLogout
              clientId={clientId}
              render={() => <button onClick={signOutSuccess} className='logoutButton'>Logout</button>}
            >
            </GoogleLogout>
          
      </header>
    )
}

export default Header