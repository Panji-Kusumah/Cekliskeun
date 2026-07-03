import { Trash2 } from "lucide-react";

export default function TaskList({
    title,
    items,
    onToggle,
    onDelete,
    showClear = false,
    onClear,
    isOverdueSection = false,
}) {
    return (
        <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold text-(--text-primary)">
                        {title}
                    </h2>

                    <span className="rounded-full bg-(--bg-hover) px-2 py-0.5 text-xs text-(--text-secondary)">
                        {items.length}
                    </span>
                </div>

                {showClear && items.length > 0 && (
                    <button
                        onClick={onClear}
                        className="cursor-pointer text-sm text-red-500 transition hover:opacity-80"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {items.length === 0 ? (
                <div className="rounded-xl border border-dashed border-(--border) bg-(--bg-card) p-8 text-center">
                    <p className="text-(--text-secondary)">
                        {isOverdueSection
                            ? "No overdue tasks."
                            : `No ${title.toLowerCase()} yet.`}
                    </p>
                </div>
            ) : (
                <div className="space-y-3">
                    {items.map((task) => (
                        <article
                            key={task.originalIndex}
                            className="flex items-center justify-between rounded-xl border border-(--border) bg-(--bg-card) p-4 shadow-sm"
                        >
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() =>
                                        onToggle(task.originalIndex)
                                    }
                                    className="mt-1 h-4 w-4 cursor-pointer accent-(--primary)"
                                />

                                <div>
                                    <h3
                                        className={`font-medium ${
                                            task.completed
                                                ? "line-through opacity-60"
                                                : ""
                                        }`}
                                    >
                                        {task.text}
                                    </h3>

                                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                                        <span className="rounded bg-(--bg-hover) px-2 py-1">
                                            {task.priority}
                                        </span>

                                        {task.deadline && (
                                            <span className="rounded bg-(--bg-hover) px-2 py-1">
                                                {task.deadline}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() =>
                                    onDelete(task.originalIndex)
                                }
                                className="cursor-pointer rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                            >
                                <Trash2 size={18} />
                            </button>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}