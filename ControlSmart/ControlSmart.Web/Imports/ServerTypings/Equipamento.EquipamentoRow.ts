namespace ControlSmart.Equipamento {
    export interface EquipamentoRow {
        Id?: number;
        DataInicio?: string;
        DataFechamento?: string;
        DataEdicao?: string;
        Device?: string;
        Manufacturer?: string;
        DeviceName?: string;
        Version?: string;
        Platform?: string;
        Idiom?: string;
        DeviceType?: string;
        Imei?: string;
    }

    export namespace EquipamentoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Device';
        export const localTextPrefix = 'Equipamento.Equipamento';
        export const deletePermission = 'Equipamento';
        export const insertPermission = 'Equipamento';
        export const readPermission = 'Equipamento';
        export const updatePermission = 'Equipamento';

        export declare const enum Fields {
            Id = "Id",
            DataInicio = "DataInicio",
            DataFechamento = "DataFechamento",
            DataEdicao = "DataEdicao",
            Device = "Device",
            Manufacturer = "Manufacturer",
            DeviceName = "DeviceName",
            Version = "Version",
            Platform = "Platform",
            Idiom = "Idiom",
            DeviceType = "DeviceType",
            Imei = "Imei"
        }
    }
}
