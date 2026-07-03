import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home({ tab }) {
    const {
        pageTitle,
        date,
        time,

        isDarkMode,
        toggleTheme,

        setCurrentTab,

        addTask,

        todoItems,
        completedItems,
        overdueItems,

        toggleTask,
        deleteTask,
        clearAll,
    } = useOutletContext();

    useEffect(() => {
        setCurrentTab(tab);
    }, [tab, setCurrentTab]);

    return (
        <main className="flex flex-1 flex-col overflow-y-auto p-5 pb-24 md:p-10">
            <Header
                title={pageTitle}
                date={date}
                time={time}
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
            />

            {tab !== "completed" && (
                <TaskForm onAddTask={addTask} />
            )}

            <div className="mt-8 flex-1">
                {tab === "myday" && (
                    <>
                        <TaskList
                            title="To Do"
                            items={todoItems}
                            onToggle={toggleTask}
                            onDelete={deleteTask}
                            showClear
                            onClear={clearAll}
                        />

                        <TaskList
                            title="Completed"
                            items={completedItems}
                            onToggle={toggleTask}
                            onDelete={deleteTask}
                        />

                        <TaskList
                            title="Overdue"
                            items={overdueItems}
                            onToggle={toggleTask}
                            onDelete={deleteTask}
                            isOverdueSection
                        />
                    </>
                )}

                {tab === "tasks" && (
                    <TaskList
                        title="To Do"
                        items={todoItems}
                        onToggle={toggleTask}
                        onDelete={deleteTask}
                        showClear
                        onClear={clearAll}
                    />
                )}

                {tab === "completed" && (
                    <TaskList
                        title="Completed"
                        items={completedItems}
                        onToggle={toggleTask}
                        onDelete={deleteTask}
                    />
                )}
            </div>
        </main>
    );
}