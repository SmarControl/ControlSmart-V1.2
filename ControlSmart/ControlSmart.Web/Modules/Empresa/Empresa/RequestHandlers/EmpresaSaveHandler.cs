using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ControlSmart.Empresa.EmpresaRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ControlSmart.Empresa.EmpresaRow;

namespace ControlSmart.Empresa
{
    public interface IEmpresaSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmpresaSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmpresaSaveHandler
    {
        public EmpresaSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}