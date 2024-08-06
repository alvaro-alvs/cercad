

export default function PageProvider({ children }: { children: React.ReactNode }) {
    return (
        <section className="min-w-screen w-full min-h-screen h-full max-sm:w-fit flex flex-col items-center bg-gradient-to-br from-sky-300 via-teal-100 to-rose-200">
            {children}
        </section>
    )
}