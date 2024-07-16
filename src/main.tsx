import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

document.body.className = "bg-white dark:bg-black overflow-hidden";
document.body.addEventListener(
  "touchmove",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

const queryClient = new QueryClient();
let root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

document.body.className = "bg-gray-800 text-white";

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
