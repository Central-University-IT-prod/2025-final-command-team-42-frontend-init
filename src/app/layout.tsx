import type { Metadata } from "next"

import AppFooter from "@/components/AppFooter"
import AppHeader from "@/components/AppHeader"
import Providers from "@/components/Providers"
import "@/scss/globals.scss"

// TODO: Шрифт и метадата

export const metadata: Metadata = {
	title: {
		template: "%s | FilmsFinder",
		default: "FilmsFinder"
	},
	twitter: {
		card: "summary_large_image"
	},
	authors: []
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body>
				<Providers>
					<AppHeader />

					<main className="main">{children}</main>

					<AppFooter />
				</Providers>
			</body>
		</html>
	)
}
