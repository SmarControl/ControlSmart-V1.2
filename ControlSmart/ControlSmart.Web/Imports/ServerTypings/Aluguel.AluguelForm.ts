namespace ControlSmart.Aluguel {
    export interface AluguelForm {
        DataInicio: Serenity.DateEditor;
        DataFechamento: Serenity.DateEditor;
        DataEdicao: Serenity.DateEditor;
        EmpresaId: Serenity.IntegerEditor;
        EquipamentoId: Serenity.IntegerEditor;
    }

    export class AluguelForm extends Serenity.PrefixedContext {
        static formKey = 'Aluguel.Aluguel';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AluguelForm.init)  {
                AluguelForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(AluguelForm, [
                    'DataInicio', w0,
                    'DataFechamento', w0,
                    'DataEdicao', w0,
                    'EmpresaId', w1,
                    'EquipamentoId', w1
                ]);
            }
        }
    }
}
