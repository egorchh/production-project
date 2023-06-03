export type EditProfileData = {
    username?: string;
    firstName?: string
}

export const updateProfile = ((props: EditProfileData) => {
    const {
        username = '123',
        firstName = '123',
    } = props;

    cy.getByTestId('EditableProfileCardHeader.EditButton').click();

    cy.getByTestId('ProfileCard.Username').clear().type(username);
    cy.getByTestId('ProfileCard.Firstname').clear().type(firstName);

    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
});

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'true' },
    body: {
        id: '4',
        first: 'test',
        lastname: 'user',
        age: 465,
        currency: 'EUR',
        country: 'Ukraine',
        city: 'Moscow',
        username: 'testuser',
        avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(editProfileData: EditProfileData): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}

export {};
