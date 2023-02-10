import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss'
import {useState} from "react";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggleSidebar = () => {
        setCollapsed(prevState => !prevState);
    }

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggleSidebar}>Toggle</button>
        </div>
    );
};
