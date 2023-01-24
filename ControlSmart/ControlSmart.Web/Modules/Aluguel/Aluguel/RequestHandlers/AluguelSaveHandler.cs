using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ControlSmart.Aluguel.AluguelRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ControlSmart.Aluguel.AluguelRow;

namespace ControlSmart.Aluguel
{
    public interface IAluguelSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AluguelSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAluguelSaveHandler
    {
        public AluguelSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}