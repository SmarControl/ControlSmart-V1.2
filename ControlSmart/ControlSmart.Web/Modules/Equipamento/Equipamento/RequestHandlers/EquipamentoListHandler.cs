using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ControlSmart.Equipamento.EquipamentoRow>;
using MyRow = ControlSmart.Equipamento.EquipamentoRow;

namespace ControlSmart.Equipamento
{
    public interface IEquipamentoListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EquipamentoListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEquipamentoListHandler
    {
        public EquipamentoListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}