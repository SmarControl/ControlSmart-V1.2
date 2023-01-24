
namespace ControlSmart.Equipamento {

    @Serenity.Decorators.registerClass()
    export class EquipamentoDialog extends Serenity.EntityDialog<EquipamentoRow, any> {
        protected getFormKey() { return EquipamentoForm.formKey; }
        protected getIdProperty() { return EquipamentoRow.idProperty; }
        protected getLocalTextPrefix() { return EquipamentoRow.localTextPrefix; }
        protected getNameProperty() { return EquipamentoRow.nameProperty; }
        protected getService() { return EquipamentoService.baseUrl; }
        protected getDeletePermission() { return EquipamentoRow.deletePermission; }
        protected getInsertPermission() { return EquipamentoRow.insertPermission; }
        protected getUpdatePermission() { return EquipamentoRow.updatePermission; }

        protected form = new EquipamentoForm(this.idPrefix);

    }
}