
import { homePage } from "../../pages/homePage"
const homePageObj = new homePage()
import * as testData from "../../fixtures/testdata.json"

describe(' test automation', () => {
    before(() => {
        cy.login(testData.email, testData.password)
    })

    it('Add To Cart flow', () => {
        homePageObj.searchProduct(testData.product)
        homePageObj.addtoCart()
        homePageObj.verifySucessMessage().should('contain', testData.product).and('contain', testData.message);
    })
})