import { getGreeting } from '../support/app.po';

describe('breakfast-client', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to breakfast-client!');
  });
});
