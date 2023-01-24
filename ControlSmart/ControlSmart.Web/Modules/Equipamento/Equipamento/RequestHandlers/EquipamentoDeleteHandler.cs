using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ControlSmart.Equipamento.EquipamentoRow;

namespace ControlSmart.Equipamento
{
    public interface IEquipamentoDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EquipamentoDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEquipamentoDeleteHandler
    {
        public EquipamentoDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}