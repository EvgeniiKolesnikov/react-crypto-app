// import Cryptocurrencies from './components/Cryptocurrencies';
// import CryptoDetails from './components/CryptoDetails';
// import Exchanges from './components/Exchanges';
// import Homepage from './components/Homepage';
// import Navbar from './components/Navbar';
// import News from './components/News';

import { Layout, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from './components';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        
        <div className='footer'>
          <h5 className='ant-typography'
            style={{ textAlign: 'center', color: 'white' }}
          >
            Crypto <br />
            All rights not reserved. 
          </h5>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
