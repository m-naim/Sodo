import ReactDOM from 'react-dom';
import './css/index.css';
import './css/smallScreen.css';
import './css/largeScreen.css';
import './css/mediumScreen.css';
import * as serviceWorker from './serviceWorker';
import Routes from './components/routes/routes';

ReactDOM.render(Routes, document.getElementById('root'));

serviceWorker.register();
