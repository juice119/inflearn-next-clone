import {NextResponse} from "next/server";

const DB = {
    users: [
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Chili'},
    ]
};


export async function GET(request: Request) {
    const searchParams = new URL(request.url).searchParams;
    const name = searchParams.get('name')?.trim() || '';

    return NextResponse.json({users: DB.users.filter(user => user.name === name)});
}