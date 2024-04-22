import { Logo } from '~/components/logo'
import { Title } from '~/components/title'
import { Who } from '~/components/who'
import { Social } from '~/components/social'
import { breakpoints, useMediaQuery } from '~/hooks/useMediaQuery'
import { cn } from '~/utils/cn-merge'

export function Header() {
	const lg = useMediaQuery(breakpoints.lg)
	const md = useMediaQuery(breakpoints.md)

	const iconSize = lg ? 32 : md ? 24 : 16

	return (
		<header className="flex h-full flex-col pb-24">
			<div className="flex place-items-center justify-center py-6 px-10">
				<Logo className="fill-foreground h-12 w-12" />
			</div>
			<div className="flex flex-1 flex-col place-items-center justify-center gap-4 md:gap-12">
				<p className="text-1xl md:text-4xl lg:text-6xl">Hi 👋, I'm</p>
				<Title />
				<Who />
				<Social
					size={iconSize}
					className={cn(lg ? 'gap-8' : md ? 'gap-6' : 'gap-4')}
				/>
			</div>
		</header>
	)
}
