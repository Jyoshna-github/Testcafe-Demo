import{Selector} from 'testcafe'

const nameInput = Selector('input#developer-name');

fixture('Replacing the name')
.page('https://devexpress.github.io/testcafe/example/');

test('testcase1', async t =>{
    await t
    .maximizeWindow()
    .typeText(nameInput, 'Peter Parker')
    .typeText(nameInput, 'Spiderman', {replace:true})
    .wait(2000);
});