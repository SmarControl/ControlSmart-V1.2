using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ControlSmart.Equipamento.EquipamentoRow>;
using MyRow = ControlSmart.Equipamento.EquipamentoRow;

namespace ControlSmart.Equipamento
{
    public interface IEquipamentoRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EquipamentoRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEquipamentoRetrieveHandler
    {
        public EquipamentoRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}