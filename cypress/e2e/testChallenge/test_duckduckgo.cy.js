describe("Search Result",()=>{
    beforeEach(()=>{
        cy.visit("https://duckduckgo.com/");
        cy.get("#search_form_input_homepage").type("Michael Jordan");
        cy.get("#search_button_homepage").click();
    });

    it("Search Michael Jordan",()=>{
        cy.url().should('eq', 'https://duckduckgo.com/?q=Michael+Jordan&t=h_&ia=web')
    });

    it("Verify that the result have a picture of Michael Jordan",()=>{
        cy.get('.module__image > img').should("exist")
    });

    it("Verify that the result have a Wikipedia link",()=>{
        cy.get('.Wo6ZAEmESLNUuWBkbMxx').should("include.text", "wikipedia.org")
    })

    it("Verify that the result have a NBA link",()=>{
        cy.get('.Wo6ZAEmESLNUuWBkbMxx').should("include.text", "nba.com")
    })
})

describe("Change Theme",()=>{
    it("Verify that the theme can be changed correctly",()=>{
        cy.visit("https://duckduckgo.com/");
        cy.get('#pg-index').then($colorTheme =>{
            var colorTheme = $colorTheme.css("color");
        cy.log(colorTheme);
        cy.get("div > .header__button--menu").click();
        cy.get('.clear > a').click();
        if (colorTheme=="rgb(34, 34, 34)"){
            cy.get('div[data-theme-id="d"] > .set-theme').click();
            cy.get(".set-main-footer > a").click();
            cy.get("#pg-index").should('not.have.css', 'background-color',"rgb(34, 34, 34)")
        }
        else{
            cy.get('div[data-theme-id="-1"] > .set-theme').click();
            cy.get(".set-main-footer > a").click();
            cy.get("#pg-index").should('have.css', 'background-color',"rgb(34, 34, 34)")
        }
        })
    });
})

describe("Change Language",()=>{
    it("Verify that the language can be changed",()=>{
        cy.visit("https://duckduckgo.com/");
        cy.get("div > .header__button--menu").click();
        cy.get('.nav-menu--theme > :nth-child(3) > a').click();
        cy.get('#setting_kad').select("eo_XX");
        cy.get(':nth-child(2) > .frm__label').should("have.text","Lingvo")
        cy.get('select#setting_kad option:selected').then($optionSelected =>{
            if( $optionSelected.text()=="Esperanto"){
                cy.get(':nth-child(2) > .frm__label').should("have.text","Lingvo")
            }
            else{
                cy.get('#setting_kad').select("eo_XX");
                cy.get(':nth-child(2) > .frm__label').should("have.text","Lingvo")
            }
        })
        
    })
})

describe("Create list",()=>{

    

    it("Create url list when search Dogecoin",()=>{
        const filePathUrl = "cypress/fixtures/read-write/url_list.json"
        const listaUrl = [];
        cy.visit("https://duckduckgo.com/?q=dogecoin&t=h_&ia=web");
        cy.get('.Rn_JXVtoPVAFyGkcaXyK').each(($el,index,$listOfElements) => {
            const href = $el.attr('href')
            cy.log(href)
            listaUrl.push(href)
          })        
          cy.writeFile(filePathUrl,listaUrl)
    })

    it("Create url list when search Dogs",()=>{
        const filePathImg = "cypress/fixtures/read-write/img_list.json"
        const listaImg = [];
        cy.visit("https://duckduckgo.com/?q=dogs&t=h_&ia=web");
        cy.get('.module--images__thumbnails__image').each(($el,index,$listOfElements) => {
            const src = $el.attr('src')
            cy.log(src)
            listaImg.push(src)
          })
          cy.writeFile(filePathImg,listaImg)        
    })

})
