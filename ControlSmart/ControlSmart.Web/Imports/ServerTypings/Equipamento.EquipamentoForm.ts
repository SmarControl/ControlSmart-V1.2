namespace ControlSmart.Equipamento {
    export interface EquipamentoForm {
        DataInicio: Serenity.DateEditor;
        DataFechamento: Serenity.DateEditor;
        DataEdicao: Serenity.DateEditor;
        Device: Serenity.StringEditor;
        Manufacturer: Serenity.StringEditor;
        DeviceName: Serenity.StringEditor;
        Version: Serenity.StringEditor;
        Platform: Serenity.StringEditor;
        Idiom: Serenity.StringEditor;
        DeviceType: Serenity.StringEditor;
        Imei: Serenity.StringEditor;
    }

    export class EquipamentoForm extends Serenity.PrefixedContext {
        static formKey = 'Equipamento.Equipamento';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EquipamentoForm.init)  {
                EquipamentoForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;

                Q.initFormType(EquipamentoForm, [
                    'DataInicio', w0,
                    'DataFechamento', w0,
                    'DataEdicao', w0,
                    'Device', w1,
                    'Manufacturer', w1,
                    'DeviceName', w1,
                    'Version', w1,
                    'Platform', w1,
                    'Idiom', w1,
                    'DeviceType', w1,
                    'Imei', w1
                ]);
            }
        }
    }
}
