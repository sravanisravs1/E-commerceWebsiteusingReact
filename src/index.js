import ReactDOM from 'react-dom/client';
import {AuthContextProvider} from './store/Auth-context';

import './index.css';
import App from './App';

//React Bootstrap configuration//

import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>

);
