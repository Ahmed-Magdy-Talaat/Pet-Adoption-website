import "./App.css";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptContext from "./components/AdoptContext";

function App() {
  const adaptedPet = useState(null);
  const queryClient = new QueryClient({
    default: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  });
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptContext.Provider value={adaptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/Details/:id" element={<Details />} />
          </Routes>
        </AdoptContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
