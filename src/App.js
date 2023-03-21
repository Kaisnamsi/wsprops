import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';
import profileImage from './profile-image.jpg';

function App() {
  return (
    <div className="App">
      <Profile fullName="Kais Namsi" bio="I am a web developer." profession="Web Developer" handleName={(name) => alert(`My name is ${name}.`)}>{profileImage}</Profile>
    </div>
  );
}

export default App;

