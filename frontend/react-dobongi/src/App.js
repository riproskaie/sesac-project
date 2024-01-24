// import logo from './logo.svg';
import './App.css';
// component 폴더는 src 밑에 오는지 확인할 것
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

function App() {
  return (  
  <div className="App">
    <Header></Header>
    <Footer></Footer>
  </div>
  );
}

export default App;
