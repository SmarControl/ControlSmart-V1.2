using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ControlSmart.Empresa.Pages
{

    [PageAuthorize(typeof(EmpresaRow))]
    public class EmpresaController : Controller
    {
        [Route("Empresa/Empresa")]
        public ActionResult Index()
        {
            return View("~/Modules/Empresa/Empresa/EmpresaIndex.cshtml");
        }
    }
}