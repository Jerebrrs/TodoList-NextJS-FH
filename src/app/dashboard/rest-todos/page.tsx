import { NewTodo, TodosGrid } from "@/app/todos";
import prisma from "@/lib/prisma";


export default async function RestTodoPage() {
    const todos = await prisma.todo.findMany({ orderBy: { descripcion: 'asc' } })

    return (
        <div>
            <div className="w-full px-3 mb-5">
            <NewTodo />
            </div>
          
            <TodosGrid todos={todos} />
        </div>
    );
}