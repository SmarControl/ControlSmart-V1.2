namespace ControlSmart.Endereco {
    export interface EnderecoRow {
        Id?: number;
        DataInicio?: string;
        DataFechamento?: string;
        DataEdicao?: string;
        Logradouro?: string;
        Numero?: string;
        Complemento?: string;
        Cep?: string;
        Bairro?: string;
        Municipio?: string;
        Uf?: string;
        Email?: string;
        Telefone?: string;
        Efr?: string;
        EmpresaId?: number;
        EmpresaDataInicio?: string;
        EmpresaDataFechamento?: string;
        EmpresaDataEdicao?: string;
        EmpresaStatus?: string;
        EmpresaUltimaAtualizacao?: string;
        EmpresaCnpj?: string;
        EmpresaTipo?: string;
        EmpresaPorte?: string;
        EmpresaNomeFantasia?: string;
        EmpresaAbertura?: string;
        EmpresaEmpresaId?: number;
    }

    export namespace EnderecoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Logradouro';
        export const localTextPrefix = 'Endereco.Endereco';
        export const deletePermission = 'Endereco';
        export const insertPermission = 'Endereco';
        export const readPermission = 'Endereco';
        export const updatePermission = 'Endereco';

        export declare const enum Fields {
            Id = "Id",
            DataInicio = "DataInicio",
            DataFechamento = "DataFechamento",
            DataEdicao = "DataEdicao",
            Logradouro = "Logradouro",
            Numero = "Numero",
            Complemento = "Complemento",
            Cep = "Cep",
            Bairro = "Bairro",
            Municipio = "Municipio",
            Uf = "Uf",
            Email = "Email",
            Telefone = "Telefone",
            Efr = "Efr",
            EmpresaId = "EmpresaId",
            EmpresaDataInicio = "EmpresaDataInicio",
            EmpresaDataFechamento = "EmpresaDataFechamento",
            EmpresaDataEdicao = "EmpresaDataEdicao",
            EmpresaStatus = "EmpresaStatus",
            EmpresaUltimaAtualizacao = "EmpresaUltimaAtualizacao",
            EmpresaCnpj = "EmpresaCnpj",
            EmpresaTipo = "EmpresaTipo",
            EmpresaPorte = "EmpresaPorte",
            EmpresaNomeFantasia = "EmpresaNomeFantasia",
            EmpresaAbertura = "EmpresaAbertura",
            EmpresaEmpresaId = "EmpresaEmpresaId"
        }
    }
}
