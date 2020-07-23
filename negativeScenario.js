import {Selector} from 'testcafe'

const userName = Selector('#txtUsername');
const password = Selector('#txtPassword');
const loginbtn = Selector('#btnLogin');
const errorMessage = Selector('span').withText('Invalid credentials');

fixture('About negative')
.page('https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials');

test('My test1', async t=>{
    await t
    .typeText( userName, 'ABC')
    .typeText(password, 'ABC')
    .click(loginbtn)
    .wait(2000)
    .expect(errorMessage.exists).ok()
    .wait(2000);

});