import {Selector} from 'testcafe'

fixture('Searching for Flowers')
.page('https://www.google.com');

test('My testcase1', async t=>{
   await t
   .maximizeWindow()
   .typeText('input[name="q"]', 'Flowers')
   .click('input[type="submit"]')
   
});
test('My testcase 2', async t=>{
    await t
    .maximizeWindow()
    .typeText('input[name="q"]', 'Testcafe')
    .click('input[type="submit"]')
    
    
 });