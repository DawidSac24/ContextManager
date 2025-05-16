import "../styles/App.css";

import Header from "./Header";
import ContextsList from "./ContextsList";
import ContextAddButton from "./ContextAddButton";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <ContextsList />
      </div>
      <footer>
        <ContextAddButton />
      </footer>
    </div>
  );
}

export default App;
