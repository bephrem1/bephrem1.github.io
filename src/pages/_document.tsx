import { Analytics } from "@vercel/analytics/next";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Analytics />

				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
