import{Selector} from 'testcafe'

const nameInput = Selector('input#developer-name');

fixture('Fixture of cafe')
.page('https://devexpress.github.io/testcafe/example/');

test('testcase1', async t =>{
    await t
    .maximizeWindow()
    .typeText(nameInput, 'Peter Parker')
    .navigateTo('https://www.avegagroup.se/')
    .wait(2000);
});









