using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ControlSmart.Equipamento.Pages
{

    [PageAuthorize(typeof(EquipamentoRow))]
    public class EquipamentoController : Controller
    {
        [Route("Equipamento/Equipamento")]
        public ActionResult Index()
        {
            return View("~/Modules/Equipamento/Equipamento/EquipamentoIndex.cshtml");
        }
    }
}