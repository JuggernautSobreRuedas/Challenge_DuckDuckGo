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

    it("Create url list when searching for dogs",()=>{
        cy.visit("https://duckduckgo.com/?q=dogs&ia=web")
        cy.get('[data-testid="result"] > .OQ_6vPwNhCeusNiEDcGp > .mwuQiMOjmFJ5vmN6Vcqw > [data-testid="result-extras-url-link"] > .Wo6ZAEmESLNUuWBkbMxx').then((response) => {
            cy.log(response.text().split("https://"))
            for(let element of response.text().split("https://")){
                cy.log(element)
            }
            })
        })

    })
