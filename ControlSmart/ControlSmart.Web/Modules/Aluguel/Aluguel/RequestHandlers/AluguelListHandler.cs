using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ControlSmart.Aluguel.AluguelRow>;
using MyRow = ControlSmart.Aluguel.AluguelRow;

namespace ControlSmart.Aluguel
{
    public interface IAluguelListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AluguelListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAluguelListHandler
    {
        public AluguelListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}