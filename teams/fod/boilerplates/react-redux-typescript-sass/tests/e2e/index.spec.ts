import * as nightmare from 'nightmare';

describe('When visiting the homepage', () => {

    test('it should exist', () => {
        let page = nightmare().goto('http://localhost:3000');

        let text = page.evaluate(() => document.body.textContent).end();

        expect(text).toBeDefined();
    });

});
