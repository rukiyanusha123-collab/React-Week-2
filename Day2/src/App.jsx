import { lazy, Suspense, useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";
import Dashboard from "./Dashboard";

const Profile = lazy(() => import("./Profile"));

function AppContent() {
  const { user, login } = useContext(AuthContext);

  if (!user) {
    return (
      <div>
        <h1>Please Login</h1>

        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <Dashboard />

      <Suspense fallback={<h2>Loading Profile...</h2>}>
        <Profile />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;