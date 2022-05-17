import axios from 'axios';
import React, { useState } from 'react';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('https://soal.staging.id/oauth/token', {
				grant_type: 'password',
				client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
				client_id: 'e78869f77986684a',
				username: email,
				password: password,
			})
			.then((res) => {
				console.log(res);
				localStorage.setItem('token', res.data.access_token);
			})
			.catch((err) => console.log(err));
	};

	return (
		<section
			id='login'
			className='h-screen max-w-md mx-auto border-2 bg-slate-100'
		>
			<div className='container flex flex-col items-center h-full'>
				<div className='flex items-center justify-center mx-auto'>
					<img
						src={require('../assets/logo technopartner.png')}
						className='px-8 my-24'
						alt='logo'
					/>
				</div>
				<form
					onSubmit={(e) => handleSubmit(e)}
					className='flex flex-col items-center justify-center w-full gap-y-4'
				>
					<div className='w-full px-10'>
						<label
							htmlFor='email'
							className='block mb-1 text-lg font-medium text-center text-gray-300'
						>
							Email
						</label>
						<input
							type='email'
							className='w-full px-2 py-2 rounded-md shadow-md'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id='email'
						/>
					</div>
					<div className='w-full px-10'>
						<label
							htmlFor='password'
							className='block mb-1 text-lg font-medium text-center text-gray-300'
						>
							Password
						</label>
						<input
							type='password'
							className='w-full px-2 py-2 rounded-md shadow-md'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id='password'
						/>
					</div>
					<button
						type='submit'
						className='px-8 py-2 mb-4 font-semibold bg-white rounded-lg shadow-md'
					>
						Login
					</button>
				</form>
			</div>
		</section>
	);
}
