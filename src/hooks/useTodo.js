import { useState } from "react";

import useClock from "./useClock";
import useTask from "./useTask";
import useTheme from "./useTheme";

export default function useTodo() {
    const clock = useClock();
    const task = useTask();
    const theme = useTheme();

    const [currentTab, setCurrentTab] = useState("myday");

    const pageTitles = {
        myday: "My Day",
        tasks: "Tasks",
        completed: "Completed Tasks",
    };

    return {
        ...clock,
        ...task,
        ...theme,

        currentTab,
        setCurrentTab,

        pageTitle: pageTitles[currentTab],
    };
}