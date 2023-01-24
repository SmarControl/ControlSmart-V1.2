
namespace ControlSmart.Aluguel {

    @Serenity.Decorators.registerClass()
    export class AluguelGrid extends Serenity.EntityGrid<AluguelRow, any> {
        protected getColumnsKey() { return AluguelColumns.columnsKey; }
        protected getDialogType() { return AluguelDialog; }
        protected getIdProperty() { return AluguelRow.idProperty; }
        protected getInsertPermission() { return AluguelRow.insertPermission; }
        protected getLocalTextPrefix() { return AluguelRow.localTextPrefix; }
        protected getService() { return AluguelService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}