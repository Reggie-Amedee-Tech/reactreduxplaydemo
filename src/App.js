import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import HooksDonutContainer from './components/HooksDonutContainer';
import NewCakeContainer from './components/NewCakeContainer';
import CakeContainer from './components/CakeContainer';
import DonutContainer from './components/DonutContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <DonutContainer />
      <NewCakeContainer />
      <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
