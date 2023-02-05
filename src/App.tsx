import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Header } from './components/Header'
import './index.css'

function App() {

	return (
		<>
			<div className="App">
				<div className="App__inner">
					<Header />

					<Routes>
						<Route path="/" element= {<Home />}>Home</Route>
						<Route path="/store" element= {<Store />}>Store</Route>
						<Route path="/about" element= {<About />}>About</Route>
					</Routes>
				</div>
			</div>
		</>
	)
}

export default App
