describe('Formulário de Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500'); 
    });

    it('Verifica campos obrigatórios vazios', () => {
        cy.get('button').click();
        cy.get('#mensagem').should('contain', 'Todos os campos são obrigatórios');
    });

    it('Verifica senhas diferentes', () => {
        cy.get('#nome').type('Usuário Teste');
        cy.get('#email').type('usuario@teste.com');
        cy.get('#senha').type('123456');
        cy.get('#confirmarSenha').type('654321');
        cy.get('button').click();
        cy.get('#mensagem').should('contain', 'As senhas não correspondem');
    });

    it('Verifica cadastro bem-sucedido', () => {
        cy.get('#nome').type('Usuário Teste');
        cy.get('#email').type('usuario@teste.com');
        cy.get('#senha').type('123456');
        cy.get('#confirmarSenha').type('123456');
        cy.get('button').click();
        cy.get('#mensagem').should('contain', 'Cadastro realizado com sucesso!');
    });
});
