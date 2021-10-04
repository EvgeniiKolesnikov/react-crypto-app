import { Line } from 'react-chartjs-2';
import { Col, Row } from 'antd';

export const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className='chart-header'>
        <h2 className='ant-typography chart-title'>
          {coinName} Price Chart{' '}
        </h2>
        <Col className='price-container'>
          <h5 className='ant-typography price-change'>
            Change: {coinHistory?.data?.change}%
          </h5>
          <h5 className='ant-typography current-price'>
            Current {coinName} Price: $ {currentPrice}
          </h5>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};
