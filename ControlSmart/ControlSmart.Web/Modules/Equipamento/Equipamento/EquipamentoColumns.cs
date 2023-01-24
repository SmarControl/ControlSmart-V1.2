using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ControlSmart.Equipamento.Columns
{
    [ColumnsScript("Equipamento.Equipamento")]
    [BasedOnRow(typeof(EquipamentoRow), CheckNames = true)]
    public class EquipamentoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFechamento { get; set; }
        public DateTime DataEdicao { get; set; }
        [EditLink]
        public string Device { get; set; }
        public string Manufacturer { get; set; }
        public string DeviceName { get; set; }
        public string Version { get; set; }
        public string Platform { get; set; }
        public string Idiom { get; set; }
        public string DeviceType { get; set; }
        public string Imei { get; set; }
    }
}