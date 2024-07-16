import LayoutC from "./components/LayoutC";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div
      className="absolute top-0 z-[-2] h-screen w-screen text-gray-800 dark:text-gray-200
        bg-white dark:bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(140,140,150,1),rgba(255,255,255,0))]
        dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      <Router>
        <LayoutC />
      </Router>
    </div>
  );
}

export default App;
