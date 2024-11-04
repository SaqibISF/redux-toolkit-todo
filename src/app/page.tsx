"use client"
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";

const Home: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-3 mt-28">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default Home
