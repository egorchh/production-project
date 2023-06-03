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

    // it('Пользователь оставляет комментарий', () => {
    //     cy.getByTestId('ArticleDetails').should('exist');
    //     cy.getByTestId('AddCommentForm').scrollIntoView();
    //     cy.addComment('text');
    //     cy.getByTestId('CommentCard.Content').should('exist');
    // });

    it('Пользователь оценил страницу статьи', () => {
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.setRating(4, 'feedback');
        cy.get('[data-selected=true').should('have.length', 4);
    });
});
