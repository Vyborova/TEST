describe("Форма обратной связи", () => {
    beforeEach(() => {
        cy.visit("https://www.testograf.ru/ru/blog/feedback-form-template");
    });

    it("Успешная отправка формы с корректными данными", () => {
       
        cy.get("input.control___e16bbac759474cb49f55").first().type("Мартин");
        cy.get("input.control___e16bbac759474cb49f55").eq(1).type("ivan@example.com"); 
        cy.get(".title___bb675eac964120e07a92").click(); 
        cy.contains("Заказ").click(); 
        cy.get("textarea.control___e16bbac759474cb49f55").type("Это тестовое сообщение.");

      
        cy.get("span.buttonText.contents___fcd7c5db228570626cd4").click(); 

    
        cy.get(".content___dc5e560ce80ecb1e7d40") 
            .should("be.visible") 
            .and("contain", "Благодарим за обращение!"); 
    });
});
