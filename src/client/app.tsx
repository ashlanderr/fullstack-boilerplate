import { BrowserRouter, Route, Routes } from "react-router";
import { Home, SignIn } from "./pages";
import { ProtectedRoute } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" Component={ProtectedRoute}>
          <Route path="" Component={Home} />
        </Route>
        <Route path="auth">
          <Route path="sign-in" Component={SignIn} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
