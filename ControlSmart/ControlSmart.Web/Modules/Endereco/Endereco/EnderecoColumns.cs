using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ControlSmart.Endereco.Columns
{
    [ColumnsScript("Endereco.Endereco")]
    [BasedOnRow(typeof(EnderecoRow), CheckNames = true)]
    public class EnderecoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFechamento { get; set; }
        public DateTime DataEdicao { get; set; }
        [EditLink]
        public string Logradouro { get; set; }
        public string Numero { get; set; }
        public string Complemento { get; set; }
        public string Cep { get; set; }
        public string Bairro { get; set; }
        public string Municipio { get; set; }
        public string Uf { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Efr { get; set; }
        public String EmpresaStatus { get; set; }
    }
}