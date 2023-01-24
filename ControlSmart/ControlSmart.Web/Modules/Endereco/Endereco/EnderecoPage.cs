using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ControlSmart.Endereco.Pages
{

    [PageAuthorize(typeof(EnderecoRow))]
    public class EnderecoController : Controller
    {
        [Route("Endereco/Endereco")]
        public ActionResult Index()
        {
            return View("~/Modules/Endereco/Endereco/EnderecoIndex.cshtml");
        }
    }
}