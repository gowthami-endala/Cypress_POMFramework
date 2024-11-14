import { registerPage } from "../../pages/registerPage"
import * as registerData from "../../fixtures/register.json"
const registerObj = new registerPage()

describe(' test automation', () => {



    it('register flow', () => {
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterlastName(registerData.lastName)
         registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()



    })
})