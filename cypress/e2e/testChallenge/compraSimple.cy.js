describe("Set de pruebas / Muestra Simple", ()=>{
    beforeEach(()=>{
        cy.viewport(1280,800)
    })
    it("Verificar cantidad de un producto", function(){
        cy.visit("http://zecat-backoffice-stage.s3-website-us-east-1.amazonaws.com/login", {failOnStatusCode: false});
        cy.get("[name=username]").type("vbustamante@mobeats.io", {delay : 50});
        cy.get("[name=password]").type("12345678", {delay : 50});
        cy.get("[type=submit").click()
    })
})