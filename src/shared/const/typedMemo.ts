import { memo } from 'react';

export const typedMemo: <T>(arg: T) => T = memo;
