describe("Форма обратной связи", () => {
    beforeEach(() => {
        cy.visit("https://www.testograf.ru/ru/blog/feedback-form-template");
    });

    it("Успешная отправка формы с корректными данными", () => {
        // Заполнение полей формы
        cy.get("input.control___e16bbac759474cb49f55").first().type("Мартин");
        cy.get("input.control___e16bbac759474cb49f55").eq(1).type("ivan@example.com"); // Email второй элемент
        cy.get(".title___bb675eac964120e07a92").click(); // Открываем выпадающий список
        cy.contains("Заказ").click(); // Выбираем нужный элемент из выпадающего списка
        cy.get("textarea.control___e16bbac759474cb49f55").type("Это тестовое сообщение.");

        // Нажатие на кнопку отправки
        cy.get("span.buttonText.contents___fcd7c5db228570626cd4").click(); // Замените селектор на ваш

        // Проверка отображения сообщения об успешной отправке
        cy.get(".content___dc5e560ce80ecb1e7d40") // Замените селектор на ваш
            .should("be.visible") // Проверка, что сообщение видно
            .and("contain", "Благодарим за обращение!"); // Проверка текста сообщения
    });
});
