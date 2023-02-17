import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('classNames with default class', () => {
        expect(classNames('defaultClass')).toBe('defaultClass');
    });

    test('classNames with additional classes', () => {
        const result = 'defaultClass class1 class2';

        expect(classNames('defaultClass', {}, ['class1', 'class2']))
            .toBe(result);
    });

    test('classNames with mods', () => {
        const result = 'defaultClass class1 class2 hovered scrolled';

        expect(classNames(
            'defaultClass',
            { hovered: true, scrolled: true },
            ['class1', 'class2'],
        ))
            .toBe(result);
    });

    test('classNames with disabled mod', () => {
        const result = 'defaultClass class1 class2 hovered';

        expect(classNames(
            'defaultClass',
            { hovered: true, scrolled: false },
            ['class1', 'class2'],
        ))
            .toBe(result);
    });

    test('classNames with undefined mod', () => {
        const result = 'defaultClass class1 class2 hovered';

        expect(classNames(
            'defaultClass',
            { hovered: true, scrolled: undefined },
            ['class1', 'class2'],
        ))
            .toBe(result);
    });
});
