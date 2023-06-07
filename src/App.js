import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          {/* <Card>
          <NavLink to="/" activeClassName='active'>
            Home
          </NavLink>
          <>          </>
          <NavLink to="/post" activeClassName="active">
            Post
          </NavLink>
          <>          </>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Card> */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
