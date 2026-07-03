import { useState } from "react";
import { ArrowUp, Calendar, Plus } from "lucide-react";

const priorities = [
    {
        id: 1,
        label: "Low",
        color: "bg-green-500",
        text: "text-green-500",
    },
    {
        id: 2,
        label: "Medium",
        color: "bg-amber-500",
        text: "text-amber-500",
    },
    {
        id: 3,
        label: "High",
        color: "bg-red-500",
        text: "text-red-500",
    },
];

export default function TaskForm({ onAddTask }) {
    const [text, setText] = useState("");
    const [deadline, setDeadline] = useState("");
    const [priority, setPriority] = useState("Medium");

    const handleSubmit = () => {
        if (!text.trim()) return;

        onAddTask(text, priority, deadline);

        setText("");
        setDeadline("");
        setPriority("Medium");
    };

    const selectedPriority = priorities.find(
        (item) => item.label === priority
    );

    return (
        <section className="mt-7 overflow-hidden rounded-xl border border-(--border) bg-(--bg-card) shadow-sm">
            {/* Input */}
            <div className="flex items-center gap-4 border-b border-(--border) px-5 py-4">
                <Plus
                    size={20}
                    className="text-(--primary)"
                />

                <input
                    type="text"
                    placeholder="Add a task..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) =>
                        e.key === "Enter" && handleSubmit()
                    }
                    className="flex-1 bg-transparent outline-none placeholder:text-(--text-secondary)"
                />

                <button
                    onClick={handleSubmit}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-(--bg-hover) transition hover:bg-(--primary) hover:text-white"
                >
                    <ArrowUp size={18} />
                </button>
            </div>

            {/* Footer */}
            <div className="flex flex-col justify-between gap-4 bg-(--bg-main) px-5 py-3 md:flex-row md:items-center">
                {/* Deadline */}
                <div className="flex items-center gap-2 rounded-lg border border-(--border) bg-(--bg-card) px-3 py-2">
                    <Calendar
                        size={16}
                        className="text-(--text-secondary)"
                    />

                    <input
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="bg-transparent text-sm outline-none"
                    />
                </div>

                {/* Priority */}
                <div className="flex items-center gap-3">
                    <span className="text-sm text-(--text-secondary)">
                        Priority :
                    </span>

                    <span
                        className={`text-sm font-semibold ${selectedPriority.text}`}
                    >
                        {priority}
                    </span>

                    <div className="flex gap-2">
                        {priorities.map((item) => (
                            <button
                                key={item.id}
                                onClick={() =>
                                    setPriority(item.label)
                                }
                                className={`h-4 w-4 cursor-pointer rounded-full transition ${
                                    item.color
                                } ${
                                    priority === item.label
                                        ? "scale-110 opacity-100"
                                        : "opacity-35 hover:opacity-80"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}