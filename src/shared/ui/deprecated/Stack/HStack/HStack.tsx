import { memo } from 'react';
import { Flex, FlexOwnProps } from '../Flex/Flex';

type HStackProps = Omit<FlexOwnProps, 'direction'>

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const HStack = memo((props: HStackProps) => (
    <Flex direction="row" {...props} />
));
