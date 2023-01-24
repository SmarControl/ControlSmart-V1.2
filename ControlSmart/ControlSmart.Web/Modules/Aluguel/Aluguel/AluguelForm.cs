using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ControlSmart.Aluguel.Forms
{
    [FormScript("Aluguel.Aluguel")]
    [BasedOnRow(typeof(AluguelRow), CheckNames = true)]
    public class AluguelForm
    {
        public DateTime DataInicio { get; set; }
        public DateTime DataFechamento { get; set; }
        public DateTime DataEdicao { get; set; }
        public int EmpresaId { get; set; }
        public int EquipamentoId { get; set; }
    }
}