
namespace ControlSmart.Endereco {

    @Serenity.Decorators.registerClass()
    export class EnderecoDialog extends Serenity.EntityDialog<EnderecoRow, any> {
        protected getFormKey() { return EnderecoForm.formKey; }
        protected getIdProperty() { return EnderecoRow.idProperty; }
        protected getLocalTextPrefix() { return EnderecoRow.localTextPrefix; }
        protected getNameProperty() { return EnderecoRow.nameProperty; }
        protected getService() { return EnderecoService.baseUrl; }
        protected getDeletePermission() { return EnderecoRow.deletePermission; }
        protected getInsertPermission() { return EnderecoRow.insertPermission; }
        protected getUpdatePermission() { return EnderecoRow.updatePermission; }

        protected form = new EnderecoForm(this.idPrefix);

    }
}