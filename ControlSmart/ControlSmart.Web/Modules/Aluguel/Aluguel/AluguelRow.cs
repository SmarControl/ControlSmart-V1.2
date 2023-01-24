using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ControlSmart.Aluguel
{
    [ConnectionKey("Default"), Module("Aluguel"), TableName("[dbo].[Aluguel]")]
    [DisplayName("Aluguel"), InstanceName("Aluguel")]
    [ReadPermission("Aluguel")]
    [ModifyPermission("Aluguel")]
    public sealed class AluguelRow : Row<AluguelRow.RowFields>, IIdRow
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

        [DisplayName("Empresa"), Column("Empresa_ID"), NotNull, ForeignKey("[dbo].[Empresa]", "ID"), LeftJoin("jEmpresa"), TextualField("EmpresaStatus")]
        public int? EmpresaId
        {
            get => fields.EmpresaId[this];
            set => fields.EmpresaId[this] = value;
        }

        [DisplayName("Equipamento"), Column("Equipamento_ID"), NotNull, ForeignKey("[dbo].[Equipamento]", "ID"), LeftJoin("jEquipamento"), TextualField("EquipamentoDevice")]
        public int? EquipamentoId
        {
            get => fields.EquipamentoId[this];
            set => fields.EquipamentoId[this] = value;
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

        [DisplayName("Equipamento Data Inicio"), Expression("jEquipamento.[Data_Inicio]")]
        public DateTime? EquipamentoDataInicio
        {
            get => fields.EquipamentoDataInicio[this];
            set => fields.EquipamentoDataInicio[this] = value;
        }

        [DisplayName("Equipamento Data Fechamento"), Expression("jEquipamento.[Data_Fechamento]")]
        public DateTime? EquipamentoDataFechamento
        {
            get => fields.EquipamentoDataFechamento[this];
            set => fields.EquipamentoDataFechamento[this] = value;
        }

        [DisplayName("Equipamento Data Edicao"), Expression("jEquipamento.[Data_Edicao]")]
        public DateTime? EquipamentoDataEdicao
        {
            get => fields.EquipamentoDataEdicao[this];
            set => fields.EquipamentoDataEdicao[this] = value;
        }

        [DisplayName("Equipamento Device"), Expression("jEquipamento.[device]")]
        public string EquipamentoDevice
        {
            get => fields.EquipamentoDevice[this];
            set => fields.EquipamentoDevice[this] = value;
        }

        [DisplayName("Equipamento Manufacturer"), Expression("jEquipamento.[manufacturer]")]
        public string EquipamentoManufacturer
        {
            get => fields.EquipamentoManufacturer[this];
            set => fields.EquipamentoManufacturer[this] = value;
        }

        [DisplayName("Equipamento Device Name"), Expression("jEquipamento.[deviceName]")]
        public string EquipamentoDeviceName
        {
            get => fields.EquipamentoDeviceName[this];
            set => fields.EquipamentoDeviceName[this] = value;
        }

        [DisplayName("Equipamento Version"), Expression("jEquipamento.[version]")]
        public string EquipamentoVersion
        {
            get => fields.EquipamentoVersion[this];
            set => fields.EquipamentoVersion[this] = value;
        }

        [DisplayName("Equipamento Platform"), Expression("jEquipamento.[platform]")]
        public string EquipamentoPlatform
        {
            get => fields.EquipamentoPlatform[this];
            set => fields.EquipamentoPlatform[this] = value;
        }

        [DisplayName("Equipamento Idiom"), Expression("jEquipamento.[idiom]")]
        public string EquipamentoIdiom
        {
            get => fields.EquipamentoIdiom[this];
            set => fields.EquipamentoIdiom[this] = value;
        }

        [DisplayName("Equipamento Device Type"), Expression("jEquipamento.[deviceType]")]
        public string EquipamentoDeviceType
        {
            get => fields.EquipamentoDeviceType[this];
            set => fields.EquipamentoDeviceType[this] = value;
        }

        [DisplayName("Equipamento Imei"), Expression("jEquipamento.[Imei]")]
        public string EquipamentoImei
        {
            get => fields.EquipamentoImei[this];
            set => fields.EquipamentoImei[this] = value;
        }

        public AluguelRow()
            : base()
        {
        }

        public AluguelRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField DataInicio;
            public DateTimeField DataFechamento;
            public DateTimeField DataEdicao;
            public Int32Field EmpresaId;
            public Int32Field EquipamentoId;

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

            public DateTimeField EquipamentoDataInicio;
            public DateTimeField EquipamentoDataFechamento;
            public DateTimeField EquipamentoDataEdicao;
            public StringField EquipamentoDevice;
            public StringField EquipamentoManufacturer;
            public StringField EquipamentoDeviceName;
            public StringField EquipamentoVersion;
            public StringField EquipamentoPlatform;
            public StringField EquipamentoIdiom;
            public StringField EquipamentoDeviceType;
            public StringField EquipamentoImei;
        }
    }
}
