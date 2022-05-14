import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import About from './components/About';
import Contact from './components/Contact';

function App() {
	return (
		<div className="pre-container">
			<Navbar />
			<Home />			
			<Skills />
			<Projects />	
			<Certificates />
			<About />
			<Contact />				
		</div>
	);
}

export default App;
