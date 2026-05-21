'use client'
import {useEffect, useState} from "react";
import {searchUsers} from "@/app/actions/user-action";

const SEARCH_USER_NAME = "Bob";

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // fetch(`/api/users?name=${"Bob"}`)
        //     .then(res => res.json())
        //     .then(data => setUsers(data.users));

        searchUsers(SEARCH_USER_NAME).then(users => setUsers(users as any));
    }, []);

    return (
        <main>
            <h1>Users</h1>
            {users.map(({id, name}) => (
                <p key={id}>{name}</p>
            ))}
        </main>
    );
}