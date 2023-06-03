let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('Страница статьи успешно отобразилась', () => {
        cy.getByTestId('ArticleDetails').should('exist');
    });

    it.skip('Пример скипнутого теста', () => {
        cy.getByTestId('ArticleDetails').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('exist');
    });

    it('Пользователь оценил страницу статьи (реальный бэк)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'articles/article-details.json' });
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.setRating(4, 'feedback');
        cy.get('[data-selected=true').should('have.length', 4);
    });

    it('Пользователь оценил страницу статьи (на стабах)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'articles/article-details.json' });
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.setRating(4, 'feedback');
        cy.get('[data-selected=true').should('have.length', 4);
    });
});
