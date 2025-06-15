import { useState } from "react";
import "../styles/App.css";
import Footer from "./Footer";

import Header from "./Header";
import Edit from "./Edit";

function App() {
  const [nightMode, setNightMode] = useState(true);

  return (
    <div className={nightMode ? "app dark" : "app"}>
      <Header nightMode={nightMode} setNightMode={setNightMode} />
      <main>
        <Edit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
