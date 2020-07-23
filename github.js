import{Selector} from 'testcafe'

const nameInput = Selector('input#developer-name');

fixture('Text input')
.page('https://devexpress.github.io/testcafe/example/');

test('testcase1', async t =>{
    await t
    .maximizeWindow()
    .typeText(nameInput, 'Peter Parker')
    .typeText(nameInput, 'Spiderman', {speed: 0.1})
    .wait(2000);
});