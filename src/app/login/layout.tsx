import type { Metadata } from "next"
import type { ReactNode } from "react"

import styles from "./LoginLayout.module.scss"

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false
	}
}

export default function LoginLayout({
	children
}: Readonly<{ children: ReactNode }>) {
	return (
		<div className={styles.page}>
			Страница логина, а именно:
			{children}
		</div>
	)
}
