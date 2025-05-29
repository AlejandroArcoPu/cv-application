import { useState } from "react";
import "../styles/App.css";
import Footer from "./Footer";
import Divider from "./Divider";

import Header from "./Header";
import Cv from "./Cv";
import Edit from "./Edit";

function App() {
  const [nightMode, setNightMode] = useState(true);

  return (
    <div className={nightMode ? "app dark" : "app"}>
      <Header nightMode={nightMode} setNightMode={setNightMode} />
      <Divider height="1px" opacity="0.1" />
      <main>
        <Edit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
