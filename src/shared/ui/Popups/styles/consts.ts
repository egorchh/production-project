import { DropdownDirection } from '@/shared/types/ui';
import commonStyles from './popups.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    top: commonStyles.dropdownTop,
    bottom: commonStyles.dropdownBottom,
    right: commonStyles.dropdownRight,
    left: commonStyles.dropdownLeft,
};
