import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from '../services/cryptoApi';
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  NumberOutlined,
  CheckOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { Col, Row, Select } from 'antd';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import { LineChart, Loader } from '.';

const { Option } = Select;

export const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });

  // console.log(data);
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  const time = ['24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
    {
      title: '24h Volume',
      value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Market Cap',
      value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: 'Aprroved Supply',
      value: cryptoDetails.approvedSupply ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Total Supply',
      value: `$ ${millify(cryptoDetails.totalSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <h2 className='ant-typography coin-name'>
          {data?.data?.coin.name} ({data?.data?.coin.slug}) Price
        </h2>
        <p>
          {cryptoDetails.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </Col>
      <Select
        defaultValue='7d'
        className='select-timeperiod'
        placeholder='Select Timeperiod'
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>

      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails.price)}
        coinName={cryptoDetails.name}
      />

      <Col className='stats-container'>
        <Col className='coin-value-statistics'>
          <Col className='coin-value-statistics-heading'>
            <h3 className='ant-typography coin-details-heading'>
              {cryptoDetails.name} Value Statistics
            </h3>
            <p>
              An overview showing the statistics of {cryptoDetails.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {stats.map(({ icon, title, value }, i) => (
            <Col className='coin-stats' key={i}>
              <Col className='coin-stats-name'>
                <span className='ant-typography'>{icon}</span>
                <span className='ant-typography'>{title}</span>
              </Col>
              <span className='ant-typography stats'>{value}</span>
            </Col>
          ))}
        </Col>
        <Col className='other-stats-info'>
          <Col className='coin-value-statistics-heading'>
            <h3 className='ant-typography coin-details-heading'>
              Other Stats Info
            </h3>
            <p>
              An overview showing the statistics of {cryptoDetails.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {genericStats.map(({ icon, title, value }, i) => (
            <Col className='coin-stats' key={i}>
              <Col className='coin-stats-name'>
                <span className='ant-typography'>{icon}</span>
                <span className='ant-typography'>{title}</span>
              </Col>
              <span className='ant-typography stats'>{value}</span>
            </Col>
          ))}
        </Col>
      </Col>

      <Col className='coin-desc-link'>
        <Row className='coin-desc'>
          <h3 className='ant-typography coin-details-heading'>
            What is {cryptoDetails.name}?
          </h3>
          {HTMLReactParser(cryptoDetails.description)}
        </Row>
        <Col className='coin-links'>
          <h3 className='ant-typography coin-details-heading'>
            {cryptoDetails.name} Links
          </h3>
          {cryptoDetails.links?.map((link, i) => (
            <Row className='coin-link' key={i}>
              <h5 className='ant-typography link-name'>
                {link.type}
              </h5>
              <a href={link.url} target='_blank' rel='noreferrer'>
                {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
};
