
namespace ControlSmart.Empresa {

    @Serenity.Decorators.registerClass()
    export class EmpresaGrid extends Serenity.EntityGrid<EmpresaRow, any> {
        protected getColumnsKey() { return EmpresaColumns.columnsKey; }
        protected getDialogType() { return EmpresaDialog; }
        protected getIdProperty() { return EmpresaRow.idProperty; }
        protected getInsertPermission() { return EmpresaRow.insertPermission; }
        protected getLocalTextPrefix() { return EmpresaRow.localTextPrefix; }
        protected getService() { return EmpresaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}