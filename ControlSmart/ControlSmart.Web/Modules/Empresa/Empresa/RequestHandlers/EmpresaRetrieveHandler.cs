using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ControlSmart.Empresa.EmpresaRow>;
using MyRow = ControlSmart.Empresa.EmpresaRow;

namespace ControlSmart.Empresa
{
    public interface IEmpresaRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmpresaRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmpresaRetrieveHandler
    {
        public EmpresaRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}