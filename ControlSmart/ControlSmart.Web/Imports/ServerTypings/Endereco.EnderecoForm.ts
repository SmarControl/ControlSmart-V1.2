namespace ControlSmart.Endereco {
    export interface EnderecoForm {
        DataInicio: Serenity.DateEditor;
        DataFechamento: Serenity.DateEditor;
        DataEdicao: Serenity.DateEditor;
        Logradouro: Serenity.StringEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Cep: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Municipio: Serenity.StringEditor;
        Uf: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Telefone: Serenity.StringEditor;
        Efr: Serenity.StringEditor;
        EmpresaId: Serenity.IntegerEditor;
    }

    export class EnderecoForm extends Serenity.PrefixedContext {
        static formKey = 'Endereco.Endereco';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EnderecoForm.init)  {
                EnderecoForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(EnderecoForm, [
                    'DataInicio', w0,
                    'DataFechamento', w0,
                    'DataEdicao', w0,
                    'Logradouro', w1,
                    'Numero', w1,
                    'Complemento', w1,
                    'Cep', w1,
                    'Bairro', w1,
                    'Municipio', w1,
                    'Uf', w1,
                    'Email', w1,
                    'Telefone', w1,
                    'Efr', w1,
                    'EmpresaId', w2
                ]);
            }
        }
    }
}
