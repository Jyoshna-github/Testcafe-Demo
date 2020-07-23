import{Selector} from 'testcafe'

const checkBox1 = Selector('input#remote-testing');

fixture('Clicking the checkBox')
.page('https://devexpress.github.io/testcafe/example/');

test('testcase1', async t =>{
    await t
    .maximizeWindow()
    .click(checkBox1)
    .wait(2000);
});