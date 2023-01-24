namespace ControlSmart.Empresa {
    export interface EmpresaRow {
        Id?: number;
        DataInicio?: string;
        DataFechamento?: string;
        DataEdicao?: string;
        Status?: string;
        UltimaAtualizacao?: string;
        Cnpj?: string;
        Tipo?: string;
        Porte?: string;
        NomeFantasia?: string;
        Abertura?: string;
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

    export namespace EmpresaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Empresa.Empresa';
        export const deletePermission = 'Empresa';
        export const insertPermission = 'Empresa';
        export const readPermission = 'Empresa';
        export const updatePermission = 'Empresa';

        export declare const enum Fields {
            Id = "Id",
            DataInicio = "DataInicio",
            DataFechamento = "DataFechamento",
            DataEdicao = "DataEdicao",
            Status = "Status",
            UltimaAtualizacao = "UltimaAtualizacao",
            Cnpj = "Cnpj",
            Tipo = "Tipo",
            Porte = "Porte",
            NomeFantasia = "NomeFantasia",
            Abertura = "Abertura",
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
