import { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Card from './Card';
import './App.css';

function App() {

  const clientId = '623866705146-nimciplbdvmnt2q23j7dtiuohlp1ogjs.apps.googleusercontent.com';
  let cardsContent = [
    { img: '', title: 'ice', content: 'Ice from Iceberg' },
    { img: '', title: 'nice', content: 'this is text' },
    { img: '', title: 'Nice', content: 'Nice Nice' },
    { img: '', title: 'price', content: 'Price PricePrice' },
    { img: '', title: 'price', content: 'price some text' },
    { img: '', title: 'parrot', content: 'Ice from Iceberg' },
    { img: '', title: 'turtle', content: 'Lorem ipsum' },
    { img: '', title: 'none', content: 'Lorem ipsum' },
    { img: '', title: 'theme', content: 'Lorem ipsum' },
    { img: '', title: 'balon', content: 'ÐLorem' },
    { img: '', title: 'rock', content: 'ILorem' },
    { img: '', title: 'number', content: 'ILorem' },
    { img: '', title: 'sun', content: 'ILorem' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/800px-Full_Moon_Luc_Viatour.jpg', title: 'moon', content: 'ILorem' },
    { img: '', title: 'tree', content: 'ILorem' },
    { img: 'https://i.guim.co.uk/img/media/b3e038f98ce2cde24e5c5bb7e8200e65bbc4ae8c/0_363_5442_3265/master/5442.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=21f465c0b2bb13d012e17bae930d3db1', title: 'sea', content: 'turtle' },
  ];

  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const [showLogoutBtn, setShowLogoutBtn] = useState(false);
  const [navHeader, setNavHeader] = useState(false);
  const [name, setName] = useState('');
  const [search, setSearch] = useState(false);
  const [matrixCards, setMatrixCards] = useState(false);
 



  const [allCards, setAllCards] = useState(cardsContent);
  const onLoginSuccess = (res) => {

    setName(res.profileObj.name)
    setShowLoginBtn(false);
    setShowLogoutBtn(true);
    setNavHeader(true);
    setSearch(true);
    setMatrixCards(true);
  }

  const onFailureSuccess = (res) => {
    console.log('Failure login:', res)
  }

  const signOutSuccess = () => {
    setName('')
    setShowLoginBtn(true);
    setShowLogoutBtn(false);
    setNavHeader(false);
    setSearch(false);
    setMatrixCards(false)
  }

  const onSearch = (e) => {

    let currentWord = e.target.value;

    if (currentWord !== '') {

      let currentCardsContent = cardsContent.filter(x => x.title.toLocaleLowerCase().includes(currentWord.toLocaleLowerCase()));
    
      if (currentCardsContent.length !== 0) {
       
        return setAllCards(currentCardsContent)
        
      } else {
        let currentCardsContent = cardsContent.filter(x => x.content.toLocaleLowerCase().includes(currentWord.toLocaleLowerCase()));
        return setAllCards(currentCardsContent)
      }
    
      
    }else{
      return setAllCards(cardsContent)
    }

  }

  return (
    <div className="App">

      <div className='loginBtn'>
        {
          showLoginBtn ?
            (<GoogleLogin
              clientId={clientId}
              render={(renderProps) => <button onClick={renderProps.onClick} className='loginButton'>Login</button>}
              onSuccess={onLoginSuccess}
              onFailure={onFailureSuccess}
              cookiePolicy={'single_host_origin'}
            />)
            :
            null
        }

      </div>

      {navHeader ?
        (<header className="header">
          <h1>{name}</h1>
          {showLogoutBtn ?
            (<GoogleLogout
              clientId={clientId}
              render={() => <button onClick={signOutSuccess} className='logoutButton'>Logout</button>}
            >
            </GoogleLogout>)
            : null
          }
        </header>) : null
      }

      {search ? (
        <input type='text' name='search' className='dynamicSearch' onBlur={onSearch} />
      ) : null}

      {matrixCards ?
        (<div className='matrixCards'>
          {allCards.map((x, i) => <Card key={i} image={x.img} title={x.title} content={x.content} />)}
        </div>) : null
      }



    </div>
  );
}

export default App;
