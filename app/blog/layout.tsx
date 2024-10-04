export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-0">
			<div className="inline-block text-center justify-center max-w-none">
				{children}
			</div>
		</section>
	);
}
