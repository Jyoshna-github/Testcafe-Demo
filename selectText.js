import{Selector} from 'testcafe'

const nameInput = Selector('input#developer-name');

fixture('Fixture of cafe')
.page('https://devexpress.github.io/testcafe/example/');

test('testcase1', async t =>{
    await t
    .maximizeWindow()
    .typeText(nameInput, 'Peter Parker')
    .selectText(nameInput, 7 , 0)
    .wait(2000);
});