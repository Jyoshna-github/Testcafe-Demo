import {Selector} from 'testcafe'

const userName = Selector('#txtUsername');
const password = Selector('#txtPassword');
const loginbtn = Selector('#btnLogin');
const viewText = Selector('h1').withText('Dashboard');

fixture('About positive')
.page('https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials');

test('My test2', async t=>{
    await t
    .typeText( userName, 'Admin')
    .typeText(password, 'admin123')
    .click(loginbtn)
    .wait(2000)
    .expect(viewText.innerText).eql('Dashboard');

    const validText = await viewText.innerText
    console.log('The valid Text is', validText);
    
    

});