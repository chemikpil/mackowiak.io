import { Logo } from '~/components/logo'
import { Title } from '~/components/title'

export function Header() {
	return (
		<header className="flex h-full flex-col pb-24">
			<div className="flex place-items-center justify-center py-6 px-10">
				<Logo className="fill-foreground h-12 w-12" />
			</div>
			<div className="flex flex-1 flex-col place-items-center justify-center gap-2">
				<p className="text-2xl md:text-4xl lg:text-6xl">Hi 👋, I'm</p>
				<Title />
			</div>
		</header>
	)
}
