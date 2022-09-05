import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from './pages/details/details';
import Header from './component/header/header';
import Movies from './pages/movies/movies';
import FavoritesMovies from './pages/favorites/favorites';





function App() {


  return (
    <>
      <Router>
       
        <Header />
        <div className="container my-5">
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/favorites" exact component={FavoritesMovies} />         
          <Route path="/details/:id" exact component={Details} />
         
        </Switch>
        </div>
       
      
      </Router>
      
    </>
  );
}

export default App;
