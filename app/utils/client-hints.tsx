import { useEffect } from 'react'
import { useRevalidator } from 'react-router'
import { getHintUtils } from '@epic-web/client-hints'
import {
	clientHint as colorThemeHint,
	subscribeToSchemeChange,
} from '@epic-web/client-hints/color-scheme'

const hintUtils = getHintUtils({
	theme: colorThemeHint,
})

export const { getHints } = hintUtils

export function ClientHintCheck({ nonce }: { nonce: string }) {
	const { revalidate } = useRevalidator()

	useEffect(() => subscribeToSchemeChange(() => revalidate()), [revalidate])

	return (
		<script
			nonce={nonce}
			dangerouslySetInnerHTML={{
				__html: hintUtils.getClientHintCheckScript(),
			}}
		/>
	)
}
