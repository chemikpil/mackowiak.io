import { FooterTitle } from '~/components/footer/footer-title'
import { Social } from '~/components/social'
import { FadeIn } from '~/components/fade-in'

export function Footer() {
	return (
		<FadeIn margin="0px 0px -50% 0px">
			<footer className="flex h-screen flex-col place-items-center justify-center gap-5 md:gap-10">
				<FooterTitle />
				<a
					href="mailto:chemikpil@gmail.com"
					className="text-xl font-light md:text-3xl"
				>
					chemikpil@gmail.com
				</a>
				<Social
					className="gap-4 md:gap-6"
					iconClassName="w-4 h-4 md:w-6 md:h-6"
				/>
			</footer>
		</FadeIn>
	)
}
