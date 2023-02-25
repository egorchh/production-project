import { fireEvent, screen } from '@testing-library/react';
import {
    componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('render Counter with initial value', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });

        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('increment counter', () => {
        componentRender(<Counter />);

        fireEvent.click(screen.getByTestId('increment-button'));

        expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
    });

    test('increment counter', () => {
        componentRender(<Counter />);

        fireEvent.click(screen.getByTestId('decrement-button'));

        expect(screen.getByTestId('counter-value')).toHaveTextContent('-1');
    });
});
