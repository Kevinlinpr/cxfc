import logo from './logo.svg';
import './App.css';
import {Navigator, StillDeveloping} from "./components/navigator";
import {HighlightGallery} from "./components/highlight";


function App() {
  return (
    <div className="App">
        <Navigator/>
        <HighlightGallery/>
        <StillDeveloping/>
    </div>
  );
}

export default App;
