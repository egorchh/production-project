import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('render AppButton with text', () => {
        renderWithTranslation(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('render AppButton with text', () => {
        renderWithTranslation(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

        fireEvent.click(button);

        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
