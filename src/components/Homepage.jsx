import { Col, Row, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import { Cryptocurrencies, Loader, News} from '.';

export const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  // console.log(data);
  if (isFetching) return <Loader />;

  return (
    <>
      <h2 className='ant-typography  heading'>
        Global Crypto Stats
      </h2>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24h Volume'
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className='home-heading-container'>
        <h2 className='ant-typography home-title'>
          Top 10 Cryptocurrencies in the world
        </h2>
        <h3 className='ant-typography show-more'>
          <Link to='/cryptocurrencies'>Show more</Link>
        </h3>
      </div>
      <Cryptocurrencies simplified />

      <div className='home-heading-container'>
        <h2 className='ant-typography home-title'>
          Latest Crypto News
        </h2>
        <h3 className='ant-typography show-more'>
          <Link to='/news'>Show more</Link>
        </h3>
      </div>
      <News simplified />

    </>
  );
};
