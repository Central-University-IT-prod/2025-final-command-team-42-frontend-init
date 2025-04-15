import type { Metadata } from "next"

import { HomePage } from "@/screens"

export const metadata: Metadata = {
	title: "Главная | FilmsFinder",
	description: ""
}

export default function Home() {
	return <HomePage />
}
