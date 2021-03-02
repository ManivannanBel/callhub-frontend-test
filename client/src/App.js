import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**
 *
 */
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
