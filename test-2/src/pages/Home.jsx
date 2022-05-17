import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ authorization }) {
	function thousandSeparator(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	}

	return (
		<div>
			<nav className='fixed top-0 left-0 right-0 z-10 h-16 px-4 py-2 bg-white border-b'>
				<img
					src={require('../assets/logo technopartner.png')}
					className='h-full'
					alt='logo'
				/>
			</nav>
			<div className='relative mt-16'>
				<div className='absolute h-60 -z-10'>
					<img
						src={require('../assets/motif.png')}
						className='object-fill h-full'
						alt='motif'
					/>
				</div>
				<div className='w-full p-4'>
					<div className='px-4 py-6 text-lg bg-white rounded-xl'>
						<div className='w-full'>{authorization.result.greeting},</div>
						<div className='w-full font-semibold'>
							{authorization.result.name}
						</div>
						<div className='flex items-center mt-4 gap-x-8'>
							<div className='items-center justify-center w-16 h-16 p-3 rounded-full shadow-md'>
								<img
									src={authorization.result.qrcode}
									className='object-fill'
									alt=''
								/>
							</div>
							<div className='w-2/3'>
								<div className='flex justify-between'>
									<div>Saldo</div>
									<div className='font-bold'>
										Rp {thousandSeparator(authorization.result.saldo)}
									</div>
								</div>
								<div className='flex justify-between'>
									<div>Point</div>
									<div className='font-bold text-teal-300'>
										{thousandSeparator(authorization.result.point)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div>
					{authorization.result.banner.map((item, i) => (
						<div key={i}>
							<img src={item} alt='banner' />
						</div>
					))}
				</div>
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
