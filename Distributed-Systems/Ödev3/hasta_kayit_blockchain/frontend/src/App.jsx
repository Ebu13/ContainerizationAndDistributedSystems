import { useState } from "react";
import LoginForm from "./components/LoginForm";
import PatientForm from "./components/PatientForm";
import BlockchainView from "./components/BlockchainView";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Hasta Takip ve Tıbbi Kayıt Zinciri</h1>
      {!loggedIn ? (
        <LoginForm onLogin={setLoggedIn} setUser={setUser} />
      ) : (
        <>
          <PatientForm user={user} />
          <BlockchainView />
        </>
      )}
    </div>
  );
}
