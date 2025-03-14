import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";
import { SupabaseProvider } from "./supabase/context/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SupabaseProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </SupabaseProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
