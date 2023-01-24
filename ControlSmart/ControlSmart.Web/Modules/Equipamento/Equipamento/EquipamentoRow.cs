using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ControlSmart.Equipamento
{
    [ConnectionKey("Default"), Module("Equipamento"), TableName("[dbo].[Equipamento]")]
    [DisplayName("Equipamento"), InstanceName("Equipamento")]
    [ReadPermission("Equipamento")]
    [ModifyPermission("Equipamento")]
    public sealed class EquipamentoRow : Row<EquipamentoRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Device"), Column("device"), Size(20), NotNull, QuickSearch, NameProperty]
        public string Device
        {
            get => fields.Device[this];
            set => fields.Device[this] = value;
        }

        [DisplayName("Manufacturer"), Column("manufacturer"), Size(20), NotNull]
        public string Manufacturer
        {
            get => fields.Manufacturer[this];
            set => fields.Manufacturer[this] = value;
        }

        [DisplayName("Device Name"), Column("deviceName"), Size(20), NotNull]
        public string DeviceName
        {
            get => fields.DeviceName[this];
            set => fields.DeviceName[this] = value;
        }

        [DisplayName("Version"), Column("version"), Size(20), NotNull]
        public string Version
        {
            get => fields.Version[this];
            set => fields.Version[this] = value;
        }

        [DisplayName("Platform"), Column("platform"), Size(20), NotNull]
        public string Platform
        {
            get => fields.Platform[this];
            set => fields.Platform[this] = value;
        }

        [DisplayName("Idiom"), Column("idiom"), Size(20), NotNull]
        public string Idiom
        {
            get => fields.Idiom[this];
            set => fields.Idiom[this] = value;
        }

        [DisplayName("Device Type"), Column("deviceType"), Size(20), NotNull]
        public string DeviceType
        {
            get => fields.DeviceType[this];
            set => fields.DeviceType[this] = value;
        }

        [DisplayName("Imei"), Size(20), NotNull]
        public string Imei
        {
            get => fields.Imei[this];
            set => fields.Imei[this] = value;
        }

        public EquipamentoRow()
            : base()
        {
        }

        public EquipamentoRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField DataInicio;
            public DateTimeField DataFechamento;
            public DateTimeField DataEdicao;
            public StringField Device;
            public StringField Manufacturer;
            public StringField DeviceName;
            public StringField Version;
            public StringField Platform;
            public StringField Idiom;
            public StringField DeviceType;
            public StringField Imei;
        }
    }
}
