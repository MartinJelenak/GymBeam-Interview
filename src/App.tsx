import LayoutC from "./components/LayoutC";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <Router>
        <LayoutC />
      </Router>
    </div>
  );
}

export default App;
