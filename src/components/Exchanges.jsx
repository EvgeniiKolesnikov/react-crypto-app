import { Collapse, Row, Col, Avatar } from 'antd';
import { useGetExchangesQuery } from '../services/cryptoApi';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import { Loader } from '.';

const { Panel } = Collapse;

export const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  // console.log(data);
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesList.map((exchange, i) => (
          <Col span={24} key={i}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <span className='ant-typography'>
                        <strong>{exchange.rank}.</strong>
                      </span>
                      <Avatar
                        className='exchange-image'
                        src={exchange.iconUrl}
                      />
                      <span className='ant-typography'>
                        <strong>{exchange.name}</strong>
                      </span>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};
