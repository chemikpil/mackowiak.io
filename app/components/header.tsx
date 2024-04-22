import { Logo } from '~/components/logo'

export function Header() {
	return (
		<header className="sticky top-0 flex place-items-center justify-center py-6 px-10">
			<Logo className="fill-foreground h-12 w-12" />
		</header>
	)
}
