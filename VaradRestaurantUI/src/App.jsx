import "./App.css";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./Components/Router/Router.jsx";

function App() {
  return (
    <RouterProvider router={AppRouter}>
      <AppRouter />
    </RouterProvider>
  );
}

export default App;
