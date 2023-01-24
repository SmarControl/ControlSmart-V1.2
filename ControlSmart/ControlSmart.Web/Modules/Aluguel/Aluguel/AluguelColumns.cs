using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ControlSmart.Aluguel.Columns
{
    [ColumnsScript("Aluguel.Aluguel")]
    [BasedOnRow(typeof(AluguelRow), CheckNames = true)]
    public class AluguelColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFechamento { get; set; }
        public DateTime DataEdicao { get; set; }
        public String EmpresaStatus { get; set; }
        public String EquipamentoDevice { get; set; }
    }
}