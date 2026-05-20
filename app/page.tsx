import Link from "next/link";

export default function Home() {
    return (
        <main>
            Home
            <Link href="/dashboard">dashboard</Link>
        </main>
    );
}
