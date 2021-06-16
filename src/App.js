import AppBar from "./components/Appbar";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Create from "./components/create/Create";
import BlogDes from "./components/BlogDes";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-10 mx-auto">
              <AppBar />
              <main>
                <ScrollToTop>
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/create">
                      <Create />
                    </Route>
                    <Route path="/blogs/:id">
                      <BlogDes />
                    </Route>
                    <Route exact path="*">
                      <Home />
                    </Route>
                  </Switch>
                </ScrollToTop>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
