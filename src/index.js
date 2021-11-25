import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="bg-gray-100">
        <Toaster
          position="bottom-right"
          toastOptions={{ success: { duration: 2000 } }}
        />
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
