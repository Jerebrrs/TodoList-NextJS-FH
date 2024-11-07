export const dynamic = 'force-dynamic'
export const revalidate = 0

import { NewTodo, TodosGrid } from "@/app/todos";
import prisma from "@/lib/prisma";


export default async function ServerTodoPage() {
    const todos = await prisma.todo.findMany({ orderBy: { descripcion: 'asc' } })

    return (
        <>
            <span className="text-3xl mb-10">Server Actions</span>
            <div className="w-full px-3 mb-5">
                <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </>
    );
}