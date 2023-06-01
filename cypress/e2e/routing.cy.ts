import { selectByTestId } from '../helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Переход открывает страницу пользователя', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Пользователь выбирает несуществующий маршрут', () => {
            cy.visit('/someIncorrectPath');
            cy.get(selectByTestId('Page404')).should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });

        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1');

            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Переход открывает страницу статей', () => {
            cy.visit('/articles');

            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });

        it('Пользователь открывает страницу определенной статьи', () => {
            cy.visit('/articles');

            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});

export {};
