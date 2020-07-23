import {Selector } from 'testcafe';


const hoverOption = Selector('a').withText('Vilka är');
const header = Selector('h1');



fixture('My test')
.page('https://www.avegagroup.se/');
 test('My avega demo', async t=>{
    await t
    .maximizeWindow()
    .hover(hoverOption)
    .wait(2000);

    const Text1 = await hoverOption.value;
    const Text2 = await header.innerText;

    console.log(Text1);
    console.log(Text2);


 });