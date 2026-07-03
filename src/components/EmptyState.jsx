import { ClipboardList } from "lucide-react";

export default function EmptyState({
    title = "No Tasks",
    description = "There are no tasks to display.",
}) {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-(--border) bg-(--bg-card) px-6 py-14">
            <div className="mb-5 rounded-full bg-(--bg-hover) p-4">
                <ClipboardList
                    size={42}
                    className="text-(--text-secondary)"
                />
            </div>

            <h3 className="text-lg font-semibold text-(--text-primary)">
                {title}
            </h3>

            <p className="mt-2 max-w-xs text-center text-sm text-(--text-secondary)">
                {description}
            </p>
        </div>
    );
}