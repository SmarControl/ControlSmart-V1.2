using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ControlSmart.Empresa.EmpresaRow>;
using MyRow = ControlSmart.Empresa.EmpresaRow;

namespace ControlSmart.Empresa
{
    public interface IEmpresaListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmpresaListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmpresaListHandler
    {
        public EmpresaListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}