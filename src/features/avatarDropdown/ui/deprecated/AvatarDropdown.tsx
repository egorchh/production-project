import React, { memo } from 'react';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { MenuDropdown, MenuDropdownItem } from '@/shared/ui/deprecated/Popups';
import { User } from '@/entities/User';
import styles from './AvatarDropdown.module.scss';

interface avatarDropdownProps {
    authData?: User;
    dropdownItems: MenuDropdownItem[];
}

export const AvatarDropdown = memo(({ authData, dropdownItems }: avatarDropdownProps) => (
    <MenuDropdown
        className={styles.dropdown}
        items={dropdownItems}
        dropdownDirection="left"
        trigger={<Avatar src={authData?.avatar} size={35} />}
    />
));
