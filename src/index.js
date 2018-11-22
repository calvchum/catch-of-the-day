import React from 'react'; // imports the React library from the package.json
import { render } from 'react-dom'; // renders React to HTML
import { BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker}/>
        <Match pattern="/store/:storeId" component={App}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById("main"));