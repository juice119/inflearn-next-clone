'use client'

import {useMutation, useQuery} from "react-query";
import {createTodo, getTodos} from "@/app/actions/todo-actions";
import {useState} from "react";

export default function TodoPage() {
    const [todoInput, setTodoInput] = useState("")

    // 리액트 쿼리는 데이터를 가져오기
    const todosQuery = useQuery({queryKey: ['todos'], queryFn: () => getTodos()});

    // 뮤테이트는 데이터를 바꾼다.
    const createTodoMutation = useMutation({
        mutationFn: () => {
            return createTodo(todoInput)
        },
        onSuccess: (TODOS) => {
            console.log("Success");
            console.log(TODOS);
            todosQuery.refetch();
        },
        onError: (error: any) => {
            alert(error.message);
        }
    });

    return (
        <div>
            <h1>TODOS</h1>

            <input type="text" placeholder="Enter Todo" value={todoInput}
                   onChange={(e) => setTodoInput(e.target.value)}/>
            <button
                onClick={() => createTodoMutation.mutate()}>{createTodoMutation.isLoading ? "생성중..." : "투두 생성"}</button>
            {todosQuery.isLoading && <p>Loading... </p>}
            {todosQuery.data && todosQuery.data.map((todo, index) => <p key={index}>{todo}</p>)}
        </div>
    );
}