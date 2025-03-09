import React from "react";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import { SearchProvider } from "./contexts/SearchContext";
import router from "./routes";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <SearchProvider>
            <RouterProvider router={router} />
          </SearchProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
