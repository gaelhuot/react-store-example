import { Provider } from 'react-redux';

import {store} from './store/store';

import Content from './components/Content';
import Header from './components/Header';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App h-screen w-screen">
        <Header></Header>
        <Content></Content>
      </div>
    </Provider>

  );
}

export default App;
