using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ControlSmart.Aluguel.Pages
{

    [PageAuthorize(typeof(AluguelRow))]
    public class AluguelController : Controller
    {
        [Route("Aluguel/Aluguel")]
        public ActionResult Index()
        {
            return View("~/Modules/Aluguel/Aluguel/AluguelIndex.cshtml");
        }
    }
}