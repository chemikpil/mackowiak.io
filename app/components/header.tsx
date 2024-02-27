import { Logo } from '~/components/logo'

export function Header() {
	return (
		<header className="flex place-items-center justify-center px-10 py-8">
			<h1>
				<Logo className="h-12 w-12 fill-foreground" />
			</h1>
		</header>
	)
}
