import './LoginPage.css';

import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';

import { LoginContext } from '../../contexts/LoginContext';

const clientId = '623866705146-nimciplbdvmnt2q23j7dtiuohlp1ogjs.apps.googleusercontent.com';

const Login = () => {
    const {setUsername} = useContext(LoginContext);
    let navigate = useNavigate();
    
    const onLoginSuccess = (res) => {
        setUsername(res.profileObj.name)
        navigate('/gallery')
    }

    return (
        <div className='loginBtn'>
            <GoogleLogin
                clientId={clientId}
                render={(renderProps) => <button onClick={renderProps.onClick} className='loginButton'>Login</button>}
                onSuccess={onLoginSuccess}
                // onFailure={onFailureSuccess}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login;