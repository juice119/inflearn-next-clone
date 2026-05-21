'use client'

import {useAtom} from "jotai";
import {countAtom} from "@/app/config/atom";

export default function Counter() {
    const [count, setCount] = useAtom(countAtom);
    return (
        <button className="p-4 bg-gray-100 cursor-pointer"
                onClick={() => setCount(c => c + 1)}
        >
            Count: {count}
        </button>
    );
}