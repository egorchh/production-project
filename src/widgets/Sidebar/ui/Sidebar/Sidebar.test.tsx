import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets';
import {
    componentRender,
} from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('render AppButton with text', () => {
        componentRender(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('render AppButton with text', () => {
        componentRender(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

        fireEvent.click(button);

        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
