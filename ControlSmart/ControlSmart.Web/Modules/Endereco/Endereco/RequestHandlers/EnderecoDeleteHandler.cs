using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ControlSmart.Endereco.EnderecoRow;

namespace ControlSmart.Endereco
{
    public interface IEnderecoDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EnderecoDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEnderecoDeleteHandler
    {
        public EnderecoDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}