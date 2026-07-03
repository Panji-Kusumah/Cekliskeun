import { Moon, Sun } from "lucide-react";

export default function Header({
    title,
    date,
    time,
    isDarkMode,
    toggleTheme,
}) {
    return (
        <header className="mb-6 flex items-start justify-between">
            <div>
                <h1 className="text-3xl font-semibold text-(--text-primary)">
                    {title}
                </h1>

                <p className="mt-1 text-sm text-(--text-secondary)">
                    {date}
                </p>

                <p className="mt-1 text-sm font-semibold text-(--primary)">
                    {time}
                </p>
            </div>

            <button
                onClick={toggleTheme}
                className="
                    flex h-11 w-11
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-(--border)
                    bg-(--bg-card)
                    shadow-sm
                    transition-all
                    duration-200
                    hover:scale-105
                "
            >
                {isDarkMode ? (
                    <Sun size={20} />
                ) : (
                    <Moon size={20} />
                )}
            </button>
        </header>
    );
}