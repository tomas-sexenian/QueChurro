import Header from './Componets/Header/Header';
import './App.css';
import FirstSection from './Componets/Content/FirstSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <div className="justify-content-flex-start">
        <div className="col-sm">
          <FirstSection/>
        </div>
      </div>
    </div>
  );
}

export default App;
