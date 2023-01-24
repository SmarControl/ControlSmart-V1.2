using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ControlSmart.Endereco
{
    [ConnectionKey("Default"), Module("Endereco"), TableName("[dbo].[Endereco]")]
    [DisplayName("Endereco"), InstanceName("Endereco")]
    [ReadPermission("Endereco")]
    [ModifyPermission("Endereco")]
    public sealed class EnderecoRow : Row<EnderecoRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, PrimaryKey, NotNull, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Data Inicio"), Column("Data_Inicio"), NotNull]
        public DateTime? DataInicio
        {
            get => fields.DataInicio[this];
            set => fields.DataInicio[this] = value;
        }

        [DisplayName("Data Fechamento"), Column("Data_Fechamento"), NotNull]
        public DateTime? DataFechamento
        {
            get => fields.DataFechamento[this];
            set => fields.DataFechamento[this] = value;
        }

        [DisplayName("Data Edicao"), Column("Data_Edicao")]
        public DateTime? DataEdicao
        {
            get => fields.DataEdicao[this];
            set => fields.DataEdicao[this] = value;
        }

        [DisplayName("Logradouro"), Size(50), QuickSearch, NameProperty]
        public string Logradouro
        {
            get => fields.Logradouro[this];
            set => fields.Logradouro[this] = value;
        }

        [DisplayName("Numero"), Size(15), NotNull]
        public string Numero
        {
            get => fields.Numero[this];
            set => fields.Numero[this] = value;
        }

        [DisplayName("Complemento"), Size(15), NotNull]
        public string Complemento
        {
            get => fields.Complemento[this];
            set => fields.Complemento[this] = value;
        }

        [DisplayName("Cep"), Column("CEP"), Size(9), NotNull]
        public string Cep
        {
            get => fields.Cep[this];
            set => fields.Cep[this] = value;
        }

        [DisplayName("Bairro"), Size(50), NotNull]
        public string Bairro
        {
            get => fields.Bairro[this];
            set => fields.Bairro[this] = value;
        }

        [DisplayName("Municipio"), Size(15), NotNull]
        public string Municipio
        {
            get => fields.Municipio[this];
            set => fields.Municipio[this] = value;
        }

        [DisplayName("Uf"), Column("UF"), Size(4), NotNull]
        public string Uf
        {
            get => fields.Uf[this];
            set => fields.Uf[this] = value;
        }

        [DisplayName("Email"), Size(40), NotNull]
        public string Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Telefone"), Column("telefone"), Size(20), NotNull]
        public string Telefone
        {
            get => fields.Telefone[this];
            set => fields.Telefone[this] = value;
        }

        [DisplayName("Efr"), Column("EFR"), Size(22), NotNull]
        public string Efr
        {
            get => fields.Efr[this];
            set => fields.Efr[this] = value;
        }

        [DisplayName("Empresa"), Column("Empresa_ID"), NotNull, ForeignKey("[dbo].[Empresa]", "ID"), LeftJoin("jEmpresa"), TextualField("EmpresaStatus")]
        public int? EmpresaId
        {
            get => fields.EmpresaId[this];
            set => fields.EmpresaId[this] = value;
        }

        [DisplayName("Empresa Data Inicio"), Expression("jEmpresa.[Data_Inicio]")]
        public DateTime? EmpresaDataInicio
        {
            get => fields.EmpresaDataInicio[this];
            set => fields.EmpresaDataInicio[this] = value;
        }

        [DisplayName("Empresa Data Fechamento"), Expression("jEmpresa.[Data_Fechamento]")]
        public DateTime? EmpresaDataFechamento
        {
            get => fields.EmpresaDataFechamento[this];
            set => fields.EmpresaDataFechamento[this] = value;
        }

        [DisplayName("Empresa Data Edicao"), Expression("jEmpresa.[Data_Edicao]")]
        public DateTime? EmpresaDataEdicao
        {
            get => fields.EmpresaDataEdicao[this];
            set => fields.EmpresaDataEdicao[this] = value;
        }

        [DisplayName("Empresa Status"), Expression("jEmpresa.[status]")]
        public string EmpresaStatus
        {
            get => fields.EmpresaStatus[this];
            set => fields.EmpresaStatus[this] = value;
        }

        [DisplayName("Empresa Ultima Atualizacao"), Expression("jEmpresa.[ultima_atualizacao]")]
        public DateTime? EmpresaUltimaAtualizacao
        {
            get => fields.EmpresaUltimaAtualizacao[this];
            set => fields.EmpresaUltimaAtualizacao[this] = value;
        }

        [DisplayName("Empresa Cnpj"), Expression("jEmpresa.[cnpj]")]
        public string EmpresaCnpj
        {
            get => fields.EmpresaCnpj[this];
            set => fields.EmpresaCnpj[this] = value;
        }

        [DisplayName("Empresa Tipo"), Expression("jEmpresa.[tipo]")]
        public string EmpresaTipo
        {
            get => fields.EmpresaTipo[this];
            set => fields.EmpresaTipo[this] = value;
        }

        [DisplayName("Empresa Porte"), Expression("jEmpresa.[porte]")]
        public string EmpresaPorte
        {
            get => fields.EmpresaPorte[this];
            set => fields.EmpresaPorte[this] = value;
        }

        [DisplayName("Empresa Nome Fantasia"), Expression("jEmpresa.[nome_fantasia]")]
        public string EmpresaNomeFantasia
        {
            get => fields.EmpresaNomeFantasia[this];
            set => fields.EmpresaNomeFantasia[this] = value;
        }

        [DisplayName("Empresa Abertura"), Expression("jEmpresa.[abertura]")]
        public string EmpresaAbertura
        {
            get => fields.EmpresaAbertura[this];
            set => fields.EmpresaAbertura[this] = value;
        }

        [DisplayName("Empresa Empresa Id"), Expression("jEmpresa.[Empresa_ID]")]
        public int? EmpresaEmpresaId
        {
            get => fields.EmpresaEmpresaId[this];
            set => fields.EmpresaEmpresaId[this] = value;
        }

        public EnderecoRow()
            : base()
        {
        }

        public EnderecoRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField DataInicio;
            public DateTimeField DataFechamento;
            public DateTimeField DataEdicao;
            public StringField Logradouro;
            public StringField Numero;
            public StringField Complemento;
            public StringField Cep;
            public StringField Bairro;
            public StringField Municipio;
            public StringField Uf;
            public StringField Email;
            public StringField Telefone;
            public StringField Efr;
            public Int32Field EmpresaId;

            public DateTimeField EmpresaDataInicio;
            public DateTimeField EmpresaDataFechamento;
            public DateTimeField EmpresaDataEdicao;
            public StringField EmpresaStatus;
            public DateTimeField EmpresaUltimaAtualizacao;
            public StringField EmpresaCnpj;
            public StringField EmpresaTipo;
            public StringField EmpresaPorte;
            public StringField EmpresaNomeFantasia;
            public StringField EmpresaAbertura;
            public Int32Field EmpresaEmpresaId;
        }
    }
}
