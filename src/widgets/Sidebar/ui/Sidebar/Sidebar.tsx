import React, {
    memo,
    useCallback,
    useMemo,
    useState,
} from 'react';
import { useSelector } from 'react-redux';

import { ToggleFeatures } from '@/shared/lib/features';
import { getSidebarItems } from '../../model/selector/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { Sidebar as SidebarRedesigned } from './redesined/Sidebar';
import { Sidebar as SidebarDeprecated } from './deprecated/Sidebar';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const sidebarItemList = useSelector(getSidebarItems);

    const onToggleSidebar = useCallback(() => {
        setCollapsed((prevState) => !prevState);
    }, []);

    const listLinks = useMemo(
        () => sidebarItemList.map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
            />
        )),
        [collapsed, sidebarItemList],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <SidebarRedesigned
                    className={className}
                    listLinks={listLinks}
                    collapsed={collapsed}
                    onToggleSidebar={onToggleSidebar}
                />
            )}
            off={(
                <SidebarDeprecated
                    className={className}
                    listLinks={listLinks}
                    collapsed={collapsed}
                    onToggleSidebar={onToggleSidebar}
                />
            )}
        />
    );
});
