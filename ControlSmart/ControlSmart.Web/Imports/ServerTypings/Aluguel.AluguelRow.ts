namespace ControlSmart.Aluguel {
    export interface AluguelRow {
        Id?: number;
        DataInicio?: string;
        DataFechamento?: string;
        DataEdicao?: string;
        EmpresaId?: number;
        EquipamentoId?: number;
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
        EquipamentoDataInicio?: string;
        EquipamentoDataFechamento?: string;
        EquipamentoDataEdicao?: string;
        EquipamentoDevice?: string;
        EquipamentoManufacturer?: string;
        EquipamentoDeviceName?: string;
        EquipamentoVersion?: string;
        EquipamentoPlatform?: string;
        EquipamentoIdiom?: string;
        EquipamentoDeviceType?: string;
        EquipamentoImei?: string;
    }

    export namespace AluguelRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Aluguel.Aluguel';
        export const deletePermission = 'Aluguel';
        export const insertPermission = 'Aluguel';
        export const readPermission = 'Aluguel';
        export const updatePermission = 'Aluguel';

        export declare const enum Fields {
            Id = "Id",
            DataInicio = "DataInicio",
            DataFechamento = "DataFechamento",
            DataEdicao = "DataEdicao",
            EmpresaId = "EmpresaId",
            EquipamentoId = "EquipamentoId",
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
            EmpresaEmpresaId = "EmpresaEmpresaId",
            EquipamentoDataInicio = "EquipamentoDataInicio",
            EquipamentoDataFechamento = "EquipamentoDataFechamento",
            EquipamentoDataEdicao = "EquipamentoDataEdicao",
            EquipamentoDevice = "EquipamentoDevice",
            EquipamentoManufacturer = "EquipamentoManufacturer",
            EquipamentoDeviceName = "EquipamentoDeviceName",
            EquipamentoVersion = "EquipamentoVersion",
            EquipamentoPlatform = "EquipamentoPlatform",
            EquipamentoIdiom = "EquipamentoIdiom",
            EquipamentoDeviceType = "EquipamentoDeviceType",
            EquipamentoImei = "EquipamentoImei"
        }
    }
}
