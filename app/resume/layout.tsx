export default function ResumeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-0 w-full h-full">
            <div className="inline-block text-center justify-center max-w-none w-11/12 md:w-10/12 xl:w-8/12">
                {children}
            </div>
        </section>
    );
}
