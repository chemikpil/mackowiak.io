import { Logo } from '~/components/logo'

export function Header() {
	return (
		<header className="from-background via-background sticky top-0 z-10 flex place-items-center justify-center bg-gradient-to-b py-6 px-10 pb-20">
			<Logo className="fill-foreground h-12 w-12" />
		</header>
	)
}
