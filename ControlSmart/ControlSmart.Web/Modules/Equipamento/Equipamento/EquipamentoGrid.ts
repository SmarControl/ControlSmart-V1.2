
namespace ControlSmart.Equipamento {

    @Serenity.Decorators.registerClass()
    export class EquipamentoGrid extends Serenity.EntityGrid<EquipamentoRow, any> {
        protected getColumnsKey() { return EquipamentoColumns.columnsKey; }
        protected getDialogType() { return EquipamentoDialog; }
        protected getIdProperty() { return EquipamentoRow.idProperty; }
        protected getInsertPermission() { return EquipamentoRow.insertPermission; }
        protected getLocalTextPrefix() { return EquipamentoRow.localTextPrefix; }
        protected getService() { return EquipamentoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}