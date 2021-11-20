import Profile from "./Components/Profile";
import "./styles.css";

export default function App() {
  const profile = [{ name: "rim", email: "rim@gmail.com" }];
  return (
    <div className="App">
      <Profile profile={profile} />
    </div>
  );
}
