export default function Section({ title, children }) {
    return (
        <section className="pt-20 px-10 w-full max-w-[1690px] mx-auto LG:pt-10 MD:px-5 SM:px-3 SM:pt-5">
            {title === "" ? <></> : <h2 className="text-4xl mb-10 LG:mb-5 LG:text-3xl SM:text-2xl">{title}</h2>}
            {children}
        </section>
    );
}
