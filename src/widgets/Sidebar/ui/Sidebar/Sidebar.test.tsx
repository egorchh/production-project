import { fireEvent, screen } from '@testing-library/react';
import {
    componentRender,
} from '@/shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('render AppButton with text', () => {
        componentRender(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('click button and collapse Sidebar', () => {
        componentRender(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

        fireEvent.click(button);

        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
