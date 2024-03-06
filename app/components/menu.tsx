import { NavLink } from '@remix-run/react'

const menu = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Career', href: '/career' },
	{ name: 'Photo', href: '/photographer' },
	{ name: 'Contact', href: '/contact' },
]

export function Menu() {
	return (
		<nav className="hidden w-24 md:block">
			<ul className="flex flex-col place-items-center">
				{menu.map((item, index) => (
					<li key={item.name}>
						<NavLink
							to={item.href}
							end
							className="group relative flex size-8 items-center justify-center"
						>
							{({ isActive }) => (
								<>
									<p
										className={`${isActive ? 'size-6 bg-accent text-center text-xs font-light leading-6' : 'size-1 bg-muted group-hover:size-2 group-hover:bg-accent'} block rounded-full text-white transition-all duration-200`}
									>
										<span
											className={`${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity delay-100`}
										>
											{isActive && index + 1}
										</span>
									</p>
									<p className="absolute left-8 text-sm text-muted opacity-0 transition-[left_opacity] group-hover:left-10 group-hover:opacity-100">
										{item.name}
									</p>
								</>
							)}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
