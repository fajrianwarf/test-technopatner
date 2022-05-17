import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
	const [token, setToken] = useState(localStorage.getItem('token')); // for getting the token in every first render
	const [authorization, setAuthorization] = useState({});

	useEffect(() => {
		axios
			.get('https://soal.staging.id/api/home', {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				console.log(res);
				setAuthorization(res.data);
			})
			.catch((err) => console.log(err));
	}, [token]);

	return <div>{authorization.status !== 'success' ? <Login /> : <Home authorization={authorization} />}</div>;
}

export default App;
