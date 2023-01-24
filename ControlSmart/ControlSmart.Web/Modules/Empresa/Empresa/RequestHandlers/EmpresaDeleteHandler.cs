using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ControlSmart.Empresa.EmpresaRow;

namespace ControlSmart.Empresa
{
    public interface IEmpresaDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmpresaDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmpresaDeleteHandler
    {
        public EmpresaDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}