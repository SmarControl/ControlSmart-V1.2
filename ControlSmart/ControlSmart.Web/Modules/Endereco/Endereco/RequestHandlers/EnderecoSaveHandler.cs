using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ControlSmart.Endereco.EnderecoRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ControlSmart.Endereco.EnderecoRow;

namespace ControlSmart.Endereco
{
    public interface IEnderecoSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EnderecoSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEnderecoSaveHandler
    {
        public EnderecoSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}