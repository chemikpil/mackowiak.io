import { Logo } from '~/components/logo'

export function Header() {
	return (
		<header className="flex place-items-center justify-center py-6 px-10">
			<h1>
				<Logo className="fill-foreground h-12 w-12" />
			</h1>
		</header>
	)
}
