import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter basename="/tutorial">
            <div className="App">
                <Header />
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/profile" component={Profile} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
