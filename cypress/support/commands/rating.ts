export const setRating = ((ratingValue: number = 5, feedback: string = 'feedback') => {
    cy.getByTestId(`StarRating.${ratingValue}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Send').click();
});

declare global {
    namespace Cypress {
        interface Chainable {
            setRating(ratingValue: number, feedback?: string): Chainable<void>;
        }
    }
}

export {};
