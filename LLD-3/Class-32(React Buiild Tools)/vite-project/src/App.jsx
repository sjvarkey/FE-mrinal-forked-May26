import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import "./components/Navbar.css";
import "./components/UserCard.css";

function App() {
  return (
    <div>
      <Navbar />
      <UserCard name='Mukesh' email='mukesh12@gmail' userRole='SDE2' />
      <UserCard name='Keerthy' userRole="Product Manager" email="keerthy@yahoo.com" />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default App;
