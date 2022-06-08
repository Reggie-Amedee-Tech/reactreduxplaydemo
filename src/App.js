import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import DonutContainer from './components/DonutContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
      <DonutContainer />
    </div>
    </Provider>
  );
}

export default App;
