import { memo } from 'react';
import { Flex, FlexOwnProps } from '../Flex/Flex';

type VStackProps = Omit<FlexOwnProps, 'direction'>

export const VStack = memo((props: VStackProps) => (
    <Flex direction="column" {...props} />
));
