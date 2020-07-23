import {Selector } from 'testcafe';

const hoverOption = Selector('a').withText('Vilka är')



fixture('My test')
.page('https://www.avegagroup.se/');
 test('My avega demo', async t=>{
    await t
    .maximizeWindow()
    .hover(hoverOption)
    .wait(2000);

    });
