using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ControlSmart.Endereco.EnderecoRow>;
using MyRow = ControlSmart.Endereco.EnderecoRow;

namespace ControlSmart.Endereco
{
    public interface IEnderecoRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EnderecoRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEnderecoRetrieveHandler
    {
        public EnderecoRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}