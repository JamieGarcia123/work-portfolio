

import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      {props.children}
      <Footer/>
    </div>
  );
}

export default App;
