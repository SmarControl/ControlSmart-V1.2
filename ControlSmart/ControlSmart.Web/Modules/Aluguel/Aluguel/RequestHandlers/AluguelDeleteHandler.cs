using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ControlSmart.Aluguel.AluguelRow;

namespace ControlSmart.Aluguel
{
    public interface IAluguelDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AluguelDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAluguelDeleteHandler
    {
        public AluguelDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}