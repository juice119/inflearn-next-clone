'use server'

const DB = {
    users: [
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Chili'},
    ]
};

export async function searchUsers(name: string) {
    return DB.users.filter(user => user.name.includes(name));
}