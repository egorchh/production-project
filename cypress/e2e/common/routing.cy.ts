describe('Роутинг', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Переход открывает страницу пользователя', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Пользователь выбирает несуществующий маршрут', () => {
            cy.visit('/someIncorrectPath');
            cy.getByTestId('Page404').should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });

        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1');

            cy.getByTestId('ProfilePage').should('exist');
        });

        it('Переход открывает страницу статей', () => {
            cy.visit('/articles');

            cy.getByTestId('ArticlesPage').should('exist');
        });

        it('Пользователь открывает страницу определенной статьи', () => {
            cy.visit('/articles');

            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});

export {};
