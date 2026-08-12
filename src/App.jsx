import { ThemeProvider } from "./hooks/useTheme.jsx";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
