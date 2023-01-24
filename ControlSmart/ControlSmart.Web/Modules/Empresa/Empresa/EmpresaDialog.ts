
namespace ControlSmart.Empresa {

    @Serenity.Decorators.registerClass()
    export class EmpresaDialog extends Serenity.EntityDialog<EmpresaRow, any> {
        protected getFormKey() { return EmpresaForm.formKey; }
        protected getIdProperty() { return EmpresaRow.idProperty; }
        protected getLocalTextPrefix() { return EmpresaRow.localTextPrefix; }
        protected getNameProperty() { return EmpresaRow.nameProperty; }
        protected getService() { return EmpresaService.baseUrl; }
        protected getDeletePermission() { return EmpresaRow.deletePermission; }
        protected getInsertPermission() { return EmpresaRow.insertPermission; }
        protected getUpdatePermission() { return EmpresaRow.updatePermission; }

        protected form = new EmpresaForm(this.idPrefix);

    }
}