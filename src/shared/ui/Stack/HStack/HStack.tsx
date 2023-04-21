import { memo } from 'react';
import { Flex, FlexOwnProps } from '../Flex/Flex';

type HStackProps = Omit<FlexOwnProps, 'direction'>

export const HStack = memo((props: HStackProps) => (
    <Flex direction="row" {...props} />
));
