import React from "react";
import styled from "styled-components";
import Footer from "./../../Footer/index";
import Cabecalho from "./../../Cabecalho/index";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;
const PainelBody = styled.div`
`;
const TableExibe = styled.table`
    border-color: rgb(174, 174, 174);
	margin-right: auto;
	margin-left: auto;
	width: 80%;
	box-shadow: 1px 1px 8px rgb(70, 70, 70, 0.2);
	border-collapse: separate;
	border-spacing: 5px 0;
	padding-bottom: 5%;
	line-height: 35px;
    td{
        border-style: none;
        border-top: 2px solid rgb(167, 230, 89, 0.5);
    }
    th, td{
        padding: 4px;
        border-radius: 3px;
    }
    th {
        font-size: 13pt;
        color: rgb(232, 232, 232);
        background-color: #4c4f54;
    }
`;
const BtnExibeGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 2px;

    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
`;
const BtnExibe = styled.button`
    border: none;
	border-radius: 5px;
    background-color: #313131;
    color: rgb(243, 243, 243);
    font-size: 14px;
    width: 70px;
    height: 35px;
    :hover{
        text-decoration: none;
        background-color: rgb(0, 0, 0);
        transform:translate(0.3s);
    }
`;
const ConsultaProduto = () => {
    return (
        <>
            <Cabecalho />
            <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Lista de Produtos</ExibeTitulo>
                <PainelBody id="panel-body" className="panel-name" switch="${clientes}">

                    <div case="*">
                        <TableExibe id="table-exibe" className="table-exibe">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>CNPJ</th>
                                    <th>Nome</th>
                                    <th>Tipo</th>
                                    <th>Cor</th>
                                    <th>Preço</th>
                                    <th>Dt.Cadastro</th>
                                    <th>Qtd.Estoque</th>
                                    <th>ImagemProduto</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr each="produto : ${produtos}">
                                    <td text="${produto.id}"></td>
                                    <td text="${produto.cnpj}"></td>
                                    <td text="${produto.nome}"></td>
                                    <td text="${produto.tipo}"></td>
                                    <td text="${produto.cor}"></td>
                                    <td text="${produto.preco}"></td>z
                                    <td text="${produto.dataCadastro}"></td>
                                    <td text="${produto.qtdEstoque}"></td>
                                    <td >
                                        <img src="@{/sig/produtos/mostrarImagem/{imagem}(imagem=${produto.nomeImagem})}" width="100" />
                                    </td>

                                    <td>
                                        <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                            <a href="@{/sig/clientes/{cpf}(cpf=${cliente.cpf})}" >
                                                <BtnExibe id="btn-exibe" class="btn-exibe"> Editar </BtnExibe></a>
                                            <a href="@{/sig/clientes/id/{id}(id=${cliente.id})}">
                                                <BtnExibe id="btn-exibe" class="btn-exibe">Excluir</BtnExibe></a>
                                        </BtnExibeGroup>
                                    </td>
                                </tr>
                            </tbody>
                        </TableExibe>

                    </div>


                </PainelBody>
            </Main>
            <Footer />
        </>
    );
}
export default ConsultaProduto;