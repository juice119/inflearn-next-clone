'use client'

import {useAtom} from "jotai";
import {countAtom} from "@/app/config/atom";

export default function Counter2() {
    const [count] = useAtom(countAtom);
    return (
        <div>Count 값: {count}</div>
    );
}