import{Selector} from 'testcafe'

const nameInput = Selector('input#developer-name');

fixture('Taking Screenshot')
.page('https://devexpress.github.io/testcafe/example/');

test('testcase1', async t =>{
    await t
    .maximizeWindow()
    .typeText(nameInput, 'Peter Parker')
    .takeScreenshot('fristScreenshot.png')
    .wait(2000);
});
