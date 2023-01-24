using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ControlSmart.Endereco.Forms
{
    [FormScript("Endereco.Endereco")]
    [BasedOnRow(typeof(EnderecoRow), CheckNames = true)]
    public class EnderecoForm
    {
        public DateTime DataInicio { get; set; }
        public DateTime DataFechamento { get; set; }
        public DateTime DataEdicao { get; set; }
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
        public int EmpresaId { get; set; }
    }
}