
namespace ControlSmart.Aluguel {

    @Serenity.Decorators.registerClass()
    export class AluguelDialog extends Serenity.EntityDialog<AluguelRow, any> {
        protected getFormKey() { return AluguelForm.formKey; }
        protected getIdProperty() { return AluguelRow.idProperty; }
        protected getLocalTextPrefix() { return AluguelRow.localTextPrefix; }
        protected getService() { return AluguelService.baseUrl; }
        protected getDeletePermission() { return AluguelRow.deletePermission; }
        protected getInsertPermission() { return AluguelRow.insertPermission; }
        protected getUpdatePermission() { return AluguelRow.updatePermission; }

        protected form = new AluguelForm(this.idPrefix);

    }
}