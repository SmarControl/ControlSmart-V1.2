using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ControlSmart.Equipamento.EquipamentoRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ControlSmart.Equipamento.EquipamentoRow;

namespace ControlSmart.Equipamento
{
    public interface IEquipamentoSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EquipamentoSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEquipamentoSaveHandler
    {
        public EquipamentoSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}