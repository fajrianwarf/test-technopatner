import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [authorization, setAuthorization] = useState({});

	useEffect(() => {
		axios
			.post(
				'https://soal.staging.id/api/menu',
				{
					show_all: 1,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			)
			.then((res) => {
				// console.log(res);
				setAuthorization(res.data);
			})
			.catch((err) => console.log(err));
	}, [token]);

	return (
		<div className='h-screen max-w-md'>
			<nav className='fixed top-0 left-0 right-0 z-10 h-16 px-4 py-2 bg-white'>
				<div className='py-2 text-2xl text-center'>Menu</div>
				<div className='flex py-2 overflow-x-auto'>
					{authorization.result?.categories.map((item, i) => (
						<a
							key={i}
							href={`#${item.category_name}`}
							className='flex-shrink-0 px-2 py-1 bg-gray-200 '
						>
							<div>{item.category_name}</div>
							<span className='h-1 bg-black'> </span>
						</a>
					))}
				</div>
			</nav>
			<div className='py-2 mx-4 bg-white rounded-lg shadow-md mt-28'>
				{authorization.result?.categories.map((item) => (
					<div id={item.category_name} className='my-2 border'>
						<div className='bg-slate-200'>{item.category_name}</div>
						<div>
							{item.menu?.map((item, i) => (
								<div
									key={i}
									className='flex items-center w-full px-2 py-4 gap-x-4'
								>
									<div className='w-14'>
										<img
											src={item.photo}
											className='object-fill w-full'
											alt='product'
										/>
									</div>
									<div className='flex w-full'>
										<div>
											<div className='font-bold'>{item.name}</div>
											<div className='text-sm'>{item.description}</div>
										</div>
										<div>{item.price}</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<footer className='fixed bottom-0 flex justify-between w-full h-20 px-24 py-4 bg-white border-t '>
				<div className='flex flex-col justify-center h-full'>
					<Link to='/home'>
						<img
							src={require('../assets/home2.png')}
							className='object-fill h-8 ml-1'
							alt='home'
						/>
					</Link>
					<p>home</p>
				</div>
				<div className='flex flex-col justify-center h-full text-center'>
					<Link to={'/menu'}>
						<img
							src={require('../assets/menu2.png')}
							className='object-fill h-8 ml-1'
							alt='home'
						/>
					</Link>
					<p>menu</p>
				</div>
			</footer>
		</div>
	);
}
