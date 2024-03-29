import { render, screen } from '@testing-library/react';
import { AppButton, AppButtonTheme } from '../../AppButton/ui/AppButton';

describe('AppButton', () => {
    test('render AppButton with text', () => {
        render(<AppButton>Test</AppButton>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('render AppButton with clear theme', () => {
        render(<AppButton theme={AppButtonTheme.CLEAR} />);
    });
});
