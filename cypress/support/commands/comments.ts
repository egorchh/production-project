export const addComment = ((comment: string) => {
    cy.getByTestId('AddCommentForm.Input').type(comment);
    cy.getByTestId('AddCommentForm.SubmitButton').click();
});

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(comment: string): Chainable<void>;
        }
    }
}

export {};
