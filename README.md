## react-crypto-app

Open [evgeniikolesnikov.github.io/react-crypto-app](https://evgeniikolesnikov.github.io/react-crypto-app) to view deployment.

This project is based on [JavaScript Mastery video](https://www.youtube.com/watch?v=9DDX3US3kss&ab_channel=JavaScriptMastery).

Проблема с деплоем ключей всё остаётся. Опробованы env.local, env-cmd, dotenv. Из-за компонента Typography библиотеки antd (Ant Design) увеличивался вес сборки и был деплой ключа в cache.chunk.js. При остутствии компонента, деплой ключа в main.cache.chunk.js. Ситуация с Netlify неясная, вроде бы, проблема так же остается.
