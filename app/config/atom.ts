'use client'

import {atom} from "jotai";

export const countAtom = atom(0);
export const userAtom = atom({name: 'John', age: 20});
export const derivedAtom = atom((get) => get(countAtom) / 2);