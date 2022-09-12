import React from "react";
import styled from "styled-components";
import Inpults from "../Inpults";
import Selects from "../Selects";
const FormCadastroCliente = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    box-shadow: 1px 1px 8px rgb(70, 70, 70, 0.2);
    padding: 2%;
    width: 40%;
    height: auto;
    font-size: 12pt;
    border-radius: 10px;
    @media screen and (max-width: 1144px) {
        width: 90%;
        height: auto;
        font-size: 12px;
        border-radius: 10px;
    }
`;
const Row1grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 5px;

    border-radius: 20px;
    width: auto;
    height: auto;
    margin: 1px;  
`;
const BttCadClienteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 2px;
`;
const BtnCadCliente = styled.input`
    justify-content: center;
	margin-right: auto;
	margin-left: auto;
    display: block;
    border: none;
    font-size: 14px;
    width: 100%;
    height: 44px;
    border-radius: 5px;
    :hover{
        text-decoration: none;
        background-color: rgb(0, 0, 0);
        transform:translate(0.3s);
        color: #fff;
    }
`;
function FormsCliente() {
    const sexo = ['','M','F','O','Prefiro não dizer']
    return (
        <FormCadastroCliente id="form-cadastro-cliente" className="form-cadastro-cliente">
            <form action="#" method="post">
                <Row1grid id="row-1-grid" className="row-1-grid">
                    <Inpults label="CPF" for="cpf" if="${#fields.hasErrors('cpf')}" erros="*{cpf}"
                        type="text" field="*{nome}" id="cpf" placeholder="00.000.000-00"
                    />

                    <Inpults label="Nome do produto" for="nomeProduto" if="${#fields.hasErrors('nome')}"
                        erros="*{nome}" type="text" field="*{nome}" id="nome" placeholder="Nome do Produto"
                    />

                    <Inpults label="Data de Nascimento" for="dataNascimento" if="${#fields.hasErrors('dataNascimento')}"
                        erros="*{dataNascimento}" field="*{dataNascimento}" id="data" placeholder="__/__/____"
                    />

                    <Selects label="Sexo" name="sexo" type="text" field="*{sexo}" class="txt-form" id="sexo"
                        placeholder="M/F/O/Prefiro Não Dizer" itens={sexo}/>

                    <Inpults label="CEP" for="cep" if="${#fields.hasErrors('cep')}"
                        erros="*{cep}" field="*{cep}" id="cep" placeholder="00000-00"
                    />

                    <Inpults label="Rua" for="rua" if="${#fields.hasErrors('rua')}"
                        erros="*{rua}" field="*{rua}" id="rua" placeholder="rua"
                    />

                    <Inpults label="Bairro" for="bairro" if="${#fields.hasErrors('bairro')}"
                        erros="*{bairro}" field="*{bairro}" id="bairro" placeholder="bairro"
                    />

                    <Inpults label="Estado" for="estado" if="${#fields.hasErrors('estado')}"
                        erros="*{estado}" field="*{estado}" id="estado" placeholder="estado"
                    />

                    <Inpults label="Complemento" for="complemento" if="${#fields.hasErrors('complemento')}"
                        erros="*{complemento}" field="*{complemento}" id="complemento" placeholder="casa/apartamento"
                    />
                </Row1grid>

                <BttCadClienteGrid id="btt-cad-cliente-grid" className="btt-cad-cliente-grid">
                    <BtnCadCliente type="submit" id="btn-cad-forms" className="btn-cad-forms" 
                    value="Enviar"/>
                    <a href="/sig/consulta-de-cliente">
                    <BtnCadCliente type="button" id="btn-cad-forms" className="btn-cad-forms" 
                    value="Consultar cliente"/></a>
                </BttCadClienteGrid>   

            </form>
        </FormCadastroCliente>
    )
};
export default FormsCliente;