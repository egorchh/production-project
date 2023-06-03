let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.Username').should('have.value', 'testuser');
    });

    it('И редактирует его', () => {
        const updatedUsername = 'newUsername';
        const updatedFirstname = 'newFirstname';

        cy.updateProfile({ username: updatedUsername, firstName: updatedFirstname });

        cy.getByTestId('ProfileCard.Username').should('have.value', updatedUsername);
        cy.getByTestId('ProfileCard.Firstname').should('have.value', updatedFirstname);
    });
});
