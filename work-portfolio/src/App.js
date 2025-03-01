


import './App.css';
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import { Outlet } from 'react-router';


const App = () => {
  return (
    <div className="App">
      <Header />  
      <main> 
      <Outlet/>
      </main> 
      <Footer/>
    </div> 
  );
}

export default App;
