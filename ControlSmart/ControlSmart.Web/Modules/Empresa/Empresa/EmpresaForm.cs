using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ControlSmart.Empresa.Forms
{
    [FormScript("Empresa.Empresa")]
    [BasedOnRow(typeof(EmpresaRow), CheckNames = true)]
    public class EmpresaForm
    {
        public DateTime DataInicio { get; set; }
        public DateTime DataFechamento { get; set; }
        public DateTime DataEdicao { get; set; }
        public string Status { get; set; }
        public DateTime UltimaAtualizacao { get; set; }
        public string Cnpj { get; set; }
        public string Tipo { get; set; }
        public string Porte { get; set; }
        public string NomeFantasia { get; set; }
        public string Abertura { get; set; }
        public int EmpresaId { get; set; }
    }
}