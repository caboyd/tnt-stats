import { getAddReplayButton, getMatches } from '../support/app.po';

describe('tnt-stats', () => {
  beforeEach(() => cy.visit('/'));

  it('should display matches', () => {
    getMatches().should(m => expect(m.length).equals(2));
    getAddReplayButton().click();
    getMatches().should(m => expect(m.length).equals(3));
  });
});
