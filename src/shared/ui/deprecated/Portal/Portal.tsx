import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    target?: HTMLElement;
}

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const Portal = (props: PortalProps) => {
    const {
        children,
        target = document.body,
    } = props;

    return createPortal(children, target);
};
