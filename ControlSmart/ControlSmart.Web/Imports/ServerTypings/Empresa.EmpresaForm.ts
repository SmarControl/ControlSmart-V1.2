namespace ControlSmart.Empresa {
    export interface EmpresaForm {
        DataInicio: Serenity.DateEditor;
        DataFechamento: Serenity.DateEditor;
        DataEdicao: Serenity.DateEditor;
        Status: Serenity.StringEditor;
        UltimaAtualizacao: Serenity.DateEditor;
        Cnpj: Serenity.StringEditor;
        Tipo: Serenity.StringEditor;
        Porte: Serenity.StringEditor;
        NomeFantasia: Serenity.StringEditor;
        Abertura: Serenity.StringEditor;
        EmpresaId: Serenity.IntegerEditor;
    }

    export class EmpresaForm extends Serenity.PrefixedContext {
        static formKey = 'Empresa.Empresa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmpresaForm.init)  {
                EmpresaForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(EmpresaForm, [
                    'DataInicio', w0,
                    'DataFechamento', w0,
                    'DataEdicao', w0,
                    'Status', w1,
                    'UltimaAtualizacao', w0,
                    'Cnpj', w1,
                    'Tipo', w1,
                    'Porte', w1,
                    'NomeFantasia', w1,
                    'Abertura', w1,
                    'EmpresaId', w2
                ]);
            }
        }
    }
}
