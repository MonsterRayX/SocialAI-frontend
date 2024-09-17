import React, { useState } from "react";
import Main from "./Main";

import { TOKEN_KEY } from "../constants";
import ResponsiveAppBar from "./ResponsiveAppBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(TOKEN_KEY) ? true : false
  );

  const Logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setIsLoggedIn(false);
  };

  const loggedIn = (token) => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      <ResponsiveAppBar isLoggedIn={isLoggedIn} handleLogout={Logout} />
      <Main isLoggedIn={isLoggedIn} handleLoggedIn={loggedIn} />
    </div>
  );
}

export default App;
