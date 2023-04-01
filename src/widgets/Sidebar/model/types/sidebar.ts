import React from 'react';

export interface SidebarItemInterface {
    path: string;
    text: string;
    SidebarIcon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
