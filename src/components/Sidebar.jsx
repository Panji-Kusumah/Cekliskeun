import { NavLink } from "react-router-dom";

const menus = [
    {
        id: 1,
        path: "/myday",
        label: "My Day",
        icon: "fa-regular fa-sun",
    },
    {
        id: 2,
        path: "/tasks",
        label: "Tasks",
        icon: "fa-solid fa-list-check",
    },
    {
        id: 3,
        path: "/completed",
        label: "Completed",
        icon: "fa-regular fa-circle-check",
    },
];

const profile = {
    avatar: "613",
    name: "Panji Kusumah",
    role: "Full Stack Developer",
};

export default function Sidebar() {
    const baseStyle =
        "flex w-full cursor-pointer flex-col items-center gap-1 p-2 text-xs transition-all duration-200 md:flex-row md:gap-4 md:px-6 md:py-3 md:text-sm";

    const activeStyle =
        "bg-(--hover-bg) text-(--primary) font-semibold md:border-l-[3px] md:border-(--primary)";

    const inactiveStyle =
        "text-(--text-secondary) hover:bg-(--hover-bg)";

    return (
        <aside className="flex w-full flex-row items-center justify-between border-b border-(--border) bg-(--bg-sidebar) transition-colors duration-300 md:w-70 md:flex-col md:items-stretch md:justify-start md:border-r md:border-b-0 md:py-5">
            {/* Logo */}
            <div className="flex items-center gap-2 px-4 text-xl font-bold text-(--primary) md:px-6 md:pb-7">
                <i
                    className="fa-brands fa-battle-net"
                    aria-hidden="true"
                />
                <span>Cekliskeun</span>
            </div>

            {/* Navigation */}
            <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t border-(--border) bg-(--bg-sidebar) py-2 shadow-lg md:static md:w-auto md:flex-1 md:flex-col md:justify-start md:border-t-0 md:py-0 md:shadow-none">
                {menus.map((menu) => (
                    <NavLink
                        key={menu.id}
                        to={menu.path}
                        className={({ isActive }) =>
                            `${baseStyle} ${
                                isActive ? activeStyle : inactiveStyle
                            }`
                        }
                    >
                        <i
                            className={`${menu.icon} text-xl md:text-base`}
                            aria-hidden="true"
                        />
                        <span>{menu.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Profile */}
            <div className="hidden items-center gap-3 border-t border-(--border) px-6 pt-5 md:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--primary) text-sm font-bold text-white">
                    {profile.avatar}
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-(--text-primary)">
                        {profile.name}
                    </h3>
                    <p className="text-xs text-(--text-secondary)">
                        {profile.role}
                    </p>
                </div>
            </div>
        </aside>
    );
}