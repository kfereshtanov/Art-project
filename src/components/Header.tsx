import { Navbar } from './Navbar'
import { NavAccess } from './NavAccess'
import '../scss/header.scss';

export function Header() {
    return  (
		<header className="header">
			<div className="header__inner">
				<a href="/" className="logo header__logo">
					<img src="https://img.logoipsum.com/288.svg" alt="" />
				</a>

				<Navbar />

				<NavAccess />
			</div>
		</header>
	)
}