import{Selector} from 'testcafe'

const element1 = Selector('select#preferred-interface');
const element2 = Selector('option').withText('JavaScript API');

fixture('clicking on the dropdown element')
.page('https://devexpress.github.io/testcafe/example/');

test('testcase1', async t =>{
    await t
    .maximizeWindow()
    .click(element1)
    .wait(2000)
    .click(element2)
    .wait(2000);
});
