using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ControlSmart.Endereco.EnderecoRow>;
using MyRow = ControlSmart.Endereco.EnderecoRow;

namespace ControlSmart.Endereco
{
    public interface IEnderecoListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EnderecoListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEnderecoListHandler
    {
        public EnderecoListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}