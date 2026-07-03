import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "Cekliskeun_db";

export default function useTask() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const addTask = ({ text, priority, deadline }) => {
        if (!text.trim()) return;

        const newTask = {
            id: crypto.randomUUID(),
            text,
            priority,
            deadline,
            completed: false,
            createdAt: new Date().toISOString(),
        };

        setTasks((prev) => [...prev, newTask]);
    };

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? {
                          ...task,
                          completed: !task.completed,
                      }
                    : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const clearAll = () => {
        setTasks([]);
    };

    const today = new Date().toISOString().split("T")[0];

    const todoItems = useMemo(() => {
        return tasks.filter(
            (task) =>
                !task.completed &&
                (!task.deadline || task.deadline >= today)
        );
    }, [tasks, today]);

    const completedItems = useMemo(() => {
        return tasks.filter((task) => task.completed);
    }, [tasks]);

    const overdueItems = useMemo(() => {
        return tasks.filter(
            (task) =>
                !task.completed &&
                task.deadline &&
                task.deadline < today
        );
    }, [tasks, today]);

    return {
        tasks,

        todoItems,
        completedItems,
        overdueItems,

        addTask,
        toggleTask,
        deleteTask,
        clearAll,
    };
}