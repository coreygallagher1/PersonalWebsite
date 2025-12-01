import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="light">
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased light",
					fontSans.variable
				)}
			>
				<Providers>
					<main className="w-full">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
