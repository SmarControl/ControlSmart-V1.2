using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ControlSmart.Aluguel.AluguelRow>;
using MyRow = ControlSmart.Aluguel.AluguelRow;

namespace ControlSmart.Aluguel
{
    public interface IAluguelRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AluguelRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAluguelRetrieveHandler
    {
        public AluguelRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}