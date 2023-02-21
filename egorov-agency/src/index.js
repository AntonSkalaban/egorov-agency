import createApp from './veiw/app';

import './style.css'
import startCountdown from './controller/timerController/startCountDown';
const root = document.querySelector('#root');

const app = createApp();
root.append(app);

startCountdown();
