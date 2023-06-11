import { memo } from 'react';
import { Flex, FlexOwnProps } from '../Flex/Flex';

type VStackProps = Omit<FlexOwnProps, 'direction'>

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const VStack = memo((props: VStackProps) => (
    <Flex direction="column" {...props} />
));
