import ReactDOM from 'react-dom';
import './css/index.css';
import './css/smallScreen.css';
import './css/largeScreen.css';
import './css/mediumScreen.css';
import * as serviceWorker from './serviceWorker';
import Routes from './components/routes/routes';

ReactDOM.render(Routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
