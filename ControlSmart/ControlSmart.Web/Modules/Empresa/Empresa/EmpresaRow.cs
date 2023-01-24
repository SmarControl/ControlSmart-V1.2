using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ControlSmart.Empresa
{
    [ConnectionKey("Default"), Module("Empresa"), TableName("[dbo].[Empresa]")]
    [DisplayName("Empresa"), InstanceName("Empresa")]
    [ReadPermission("Empresa")]
    [ModifyPermission("Empresa")]
    public sealed class EmpresaRow : Row<EmpresaRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Status"), Column("status"), Size(15), NotNull, QuickSearch, NameProperty]
        public string Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("Ultima Atualizacao"), Column("ultima_atualizacao"), NotNull]
        public DateTime? UltimaAtualizacao
        {
            get => fields.UltimaAtualizacao[this];
            set => fields.UltimaAtualizacao[this] = value;
        }

        [DisplayName("Cnpj"), Column("cnpj"), Size(15), NotNull]
        public string Cnpj
        {
            get => fields.Cnpj[this];
            set => fields.Cnpj[this] = value;
        }

        [DisplayName("Tipo"), Column("tipo"), Size(15), NotNull]
        public string Tipo
        {
            get => fields.Tipo[this];
            set => fields.Tipo[this] = value;
        }

        [DisplayName("Porte"), Column("porte"), Size(1)]
        public string Porte
        {
            get => fields.Porte[this];
            set => fields.Porte[this] = value;
        }

        [DisplayName("Nome Fantasia"), Column("nome_fantasia"), Size(15)]
        public string NomeFantasia
        {
            get => fields.NomeFantasia[this];
            set => fields.NomeFantasia[this] = value;
        }

        [DisplayName("Abertura"), Column("abertura"), Size(15)]
        public string Abertura
        {
            get => fields.Abertura[this];
            set => fields.Abertura[this] = value;
        }

        [DisplayName("Empresa"), Column("Empresa_ID"), ForeignKey("[dbo].[Empresa]", "ID"), LeftJoin("jEmpresa"), TextualField("EmpresaStatus")]
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

        public EmpresaRow()
            : base()
        {
        }

        public EmpresaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField DataInicio;
            public DateTimeField DataFechamento;
            public DateTimeField DataEdicao;
            public StringField Status;
            public DateTimeField UltimaAtualizacao;
            public StringField Cnpj;
            public StringField Tipo;
            public StringField Porte;
            public StringField NomeFantasia;
            public StringField Abertura;
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
