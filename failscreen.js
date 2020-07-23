import{Selector} from 'testcafe'

const nameInput = Selector('input#developer-name');
const nameInputfalse = Selector('input#developer-name-1');

fixture('Fixture of cafe')
.page('https://devexpress.github.io/testcafe/example/');

test('testcase1', async t =>{
    await t
    .maximizeWindow()
    .typeText(nameInput, 'Peter Parker')  
    .wait(2000)
    .expect(nameInput.value).eql('Peter Parker 2');
});
