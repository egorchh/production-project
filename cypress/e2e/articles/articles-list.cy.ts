describe('Страница статей и взаимодействие с ней пользователя', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    afterEach(() => {
        cy.getByTestId('ArticleSearch').clear();
        cy.getByTestId('ArticleTypeTab.All').click();
    });

    it('Статьи загрузились успешно', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('Пользователь нашел статью по названию', () => {
        cy.getByTestId('ArticleSearch').clear().type('Javascript news СВЕЖАЯ');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 0);
    });

    it('Пользователь выбрал тип статьи', () => {
        cy.getByTestId('ArticleTypeTab.IT').click();
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 0);

        cy.getByTestId('ArticleTypeTab.Ecology').click();
        cy.getByTestId('ArticleListItem').should('have.length', 0);
    });

    it('Пользователь отсортировал список статей', () => {
        cy.getByTestId('ArticleSortSelector.Сортировка').select('по просмотрам');
        cy.getByTestId('ArticleSortSelector.Порядок').select('обратный');

        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 0);
    });
});
