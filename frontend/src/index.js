import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DataLinkin } from './DataLinkin';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

// import { Provider } from "react-redux";
// import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <DataLinkin>
      {/*<Provider > nếu xài redux thì thêm biến này vô store={store} */}
      <App />
      {/* </Provider> */}
    </DataLinkin>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();