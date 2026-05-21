import Link from "next/link";
import Counter from "@/app/component/counter";
import Counter2 from "@/app/component/counter-2";

export default function Home() {
    return (
        <main>
            Home
            <Link href="/dashboard">dashboard</Link>
            <Counter/>
            <Counter2/>
        </main>
    );
}
