const assert = require('assert');

describe('Play with google', () => {
    it('navigate to the site', () => {
        browser.url('https://google.com');
        const title = browser.getTitle();

        assert.strictEqual(title, 'Google');
    });

    it('start a search', () => {
        $('input[aria-label="Search"]').setValue('https://github.com/taktakpeops\n');
        $('#extabar').waitForDisplayed(5000);
    });

    it('display search result', () => {
        const expectedSearchResult = 'taktakpeops · GitHub';
        const result = $(`//h3[text()="${expectedSearchResult}"]`).getText();

        assert.strictEqual(result, expectedSearchResult);
    });
});