
namespace ControlSmart.Endereco {

    @Serenity.Decorators.registerClass()
    export class EnderecoGrid extends Serenity.EntityGrid<EnderecoRow, any> {
        protected getColumnsKey() { return EnderecoColumns.columnsKey; }
        protected getDialogType() { return EnderecoDialog; }
        protected getIdProperty() { return EnderecoRow.idProperty; }
        protected getInsertPermission() { return EnderecoRow.insertPermission; }
        protected getLocalTextPrefix() { return EnderecoRow.localTextPrefix; }
        protected getService() { return EnderecoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}