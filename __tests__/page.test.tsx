/// <reference lib="dom" />

import { expect, test } from 'vitest'

test('Home', () => {
    document.body.innerHTML = `<h2>Docs -></h2>`;
    const h2Doc = document.querySelector('h2');
    expect(h2Doc?.innerText).toEqual('Docs ->');
})