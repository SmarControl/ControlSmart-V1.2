/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
declare namespace ControlSmart.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace ControlSmart.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace ControlSmart.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace ControlSmart.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
    }
}
declare namespace ControlSmart.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace ControlSmart.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ControlSmart.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace ControlSmart.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace ControlSmart.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace ControlSmart.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace ControlSmart.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace ControlSmart.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace ControlSmart.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace ControlSmart.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace ControlSmart.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace ControlSmart.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace ControlSmart.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace ControlSmart.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ControlSmart.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ControlSmart.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace ControlSmart.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace ControlSmart.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace ControlSmart.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace ControlSmart.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ControlSmart.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace ControlSmart.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace ControlSmart.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ControlSmart.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace ControlSmart.Aluguel {
    class AluguelColumns {
        static columnsKey: string;
    }
}
declare namespace ControlSmart.Aluguel {
    interface AluguelForm {
        DataInicio: Serenity.DateEditor;
        DataFechamento: Serenity.DateEditor;
        DataEdicao: Serenity.DateEditor;
        EmpresaId: Serenity.IntegerEditor;
        EquipamentoId: Serenity.IntegerEditor;
    }
    class AluguelForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Aluguel {
    interface AluguelRow {
        Id?: number;
        DataInicio?: string;
        DataFechamento?: string;
        DataEdicao?: string;
        EmpresaId?: number;
        EquipamentoId?: number;
        EmpresaDataInicio?: string;
        EmpresaDataFechamento?: string;
        EmpresaDataEdicao?: string;
        EmpresaStatus?: string;
        EmpresaUltimaAtualizacao?: string;
        EmpresaCnpj?: string;
        EmpresaTipo?: string;
        EmpresaPorte?: string;
        EmpresaNomeFantasia?: string;
        EmpresaAbertura?: string;
        EmpresaEmpresaId?: number;
        EquipamentoDataInicio?: string;
        EquipamentoDataFechamento?: string;
        EquipamentoDataEdicao?: string;
        EquipamentoDevice?: string;
        EquipamentoManufacturer?: string;
        EquipamentoDeviceName?: string;
        EquipamentoVersion?: string;
        EquipamentoPlatform?: string;
        EquipamentoIdiom?: string;
        EquipamentoDeviceType?: string;
        EquipamentoImei?: string;
    }
    namespace AluguelRow {
        const idProperty = "Id";
        const localTextPrefix = "Aluguel.Aluguel";
        const deletePermission = "Aluguel";
        const insertPermission = "Aluguel";
        const readPermission = "Aluguel";
        const updatePermission = "Aluguel";
        const enum Fields {
            Id = "Id",
            DataInicio = "DataInicio",
            DataFechamento = "DataFechamento",
            DataEdicao = "DataEdicao",
            EmpresaId = "EmpresaId",
            EquipamentoId = "EquipamentoId",
            EmpresaDataInicio = "EmpresaDataInicio",
            EmpresaDataFechamento = "EmpresaDataFechamento",
            EmpresaDataEdicao = "EmpresaDataEdicao",
            EmpresaStatus = "EmpresaStatus",
            EmpresaUltimaAtualizacao = "EmpresaUltimaAtualizacao",
            EmpresaCnpj = "EmpresaCnpj",
            EmpresaTipo = "EmpresaTipo",
            EmpresaPorte = "EmpresaPorte",
            EmpresaNomeFantasia = "EmpresaNomeFantasia",
            EmpresaAbertura = "EmpresaAbertura",
            EmpresaEmpresaId = "EmpresaEmpresaId",
            EquipamentoDataInicio = "EquipamentoDataInicio",
            EquipamentoDataFechamento = "EquipamentoDataFechamento",
            EquipamentoDataEdicao = "EquipamentoDataEdicao",
            EquipamentoDevice = "EquipamentoDevice",
            EquipamentoManufacturer = "EquipamentoManufacturer",
            EquipamentoDeviceName = "EquipamentoDeviceName",
            EquipamentoVersion = "EquipamentoVersion",
            EquipamentoPlatform = "EquipamentoPlatform",
            EquipamentoIdiom = "EquipamentoIdiom",
            EquipamentoDeviceType = "EquipamentoDeviceType",
            EquipamentoImei = "EquipamentoImei"
        }
    }
}
declare namespace ControlSmart.Aluguel {
    namespace AluguelService {
        const baseUrl = "Aluguel/Aluguel";
        function Create(request: Serenity.SaveRequest<AluguelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AluguelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AluguelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AluguelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Aluguel/Aluguel/Create",
            Update = "Aluguel/Aluguel/Update",
            Delete = "Aluguel/Aluguel/Delete",
            Retrieve = "Aluguel/Aluguel/Retrieve",
            List = "Aluguel/Aluguel/List"
        }
    }
}
declare namespace ControlSmart.Empresa {
    class EmpresaColumns {
        static columnsKey: string;
    }
}
declare namespace ControlSmart.Empresa {
    interface EmpresaForm {
        DataInicio: Serenity.DateEditor;
        DataFechamento: Serenity.DateEditor;
        DataEdicao: Serenity.DateEditor;
        Status: Serenity.StringEditor;
        UltimaAtualizacao: Serenity.DateEditor;
        Cnpj: Serenity.StringEditor;
        Tipo: Serenity.StringEditor;
        Porte: Serenity.StringEditor;
        NomeFantasia: Serenity.StringEditor;
        Abertura: Serenity.StringEditor;
        EmpresaId: Serenity.IntegerEditor;
    }
    class EmpresaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Empresa {
    interface EmpresaRow {
        Id?: number;
        DataInicio?: string;
        DataFechamento?: string;
        DataEdicao?: string;
        Status?: string;
        UltimaAtualizacao?: string;
        Cnpj?: string;
        Tipo?: string;
        Porte?: string;
        NomeFantasia?: string;
        Abertura?: string;
        EmpresaId?: number;
        EmpresaDataInicio?: string;
        EmpresaDataFechamento?: string;
        EmpresaDataEdicao?: string;
        EmpresaStatus?: string;
        EmpresaUltimaAtualizacao?: string;
        EmpresaCnpj?: string;
        EmpresaTipo?: string;
        EmpresaPorte?: string;
        EmpresaNomeFantasia?: string;
        EmpresaAbertura?: string;
        EmpresaEmpresaId?: number;
    }
    namespace EmpresaRow {
        const idProperty = "Id";
        const nameProperty = "Status";
        const localTextPrefix = "Empresa.Empresa";
        const deletePermission = "Empresa";
        const insertPermission = "Empresa";
        const readPermission = "Empresa";
        const updatePermission = "Empresa";
        const enum Fields {
            Id = "Id",
            DataInicio = "DataInicio",
            DataFechamento = "DataFechamento",
            DataEdicao = "DataEdicao",
            Status = "Status",
            UltimaAtualizacao = "UltimaAtualizacao",
            Cnpj = "Cnpj",
            Tipo = "Tipo",
            Porte = "Porte",
            NomeFantasia = "NomeFantasia",
            Abertura = "Abertura",
            EmpresaId = "EmpresaId",
            EmpresaDataInicio = "EmpresaDataInicio",
            EmpresaDataFechamento = "EmpresaDataFechamento",
            EmpresaDataEdicao = "EmpresaDataEdicao",
            EmpresaStatus = "EmpresaStatus",
            EmpresaUltimaAtualizacao = "EmpresaUltimaAtualizacao",
            EmpresaCnpj = "EmpresaCnpj",
            EmpresaTipo = "EmpresaTipo",
            EmpresaPorte = "EmpresaPorte",
            EmpresaNomeFantasia = "EmpresaNomeFantasia",
            EmpresaAbertura = "EmpresaAbertura",
            EmpresaEmpresaId = "EmpresaEmpresaId"
        }
    }
}
declare namespace ControlSmart.Empresa {
    namespace EmpresaService {
        const baseUrl = "Empresa/Empresa";
        function Create(request: Serenity.SaveRequest<EmpresaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmpresaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmpresaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmpresaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Empresa/Empresa/Create",
            Update = "Empresa/Empresa/Update",
            Delete = "Empresa/Empresa/Delete",
            Retrieve = "Empresa/Empresa/Retrieve",
            List = "Empresa/Empresa/List"
        }
    }
}
declare namespace ControlSmart.Endereco {
    class EnderecoColumns {
        static columnsKey: string;
    }
}
declare namespace ControlSmart.Endereco {
    interface EnderecoForm {
        DataInicio: Serenity.DateEditor;
        DataFechamento: Serenity.DateEditor;
        DataEdicao: Serenity.DateEditor;
        Logradouro: Serenity.StringEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Cep: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Municipio: Serenity.StringEditor;
        Uf: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Telefone: Serenity.StringEditor;
        Efr: Serenity.StringEditor;
        EmpresaId: Serenity.IntegerEditor;
    }
    class EnderecoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Endereco {
    interface EnderecoRow {
        Id?: number;
        DataInicio?: string;
        DataFechamento?: string;
        DataEdicao?: string;
        Logradouro?: string;
        Numero?: string;
        Complemento?: string;
        Cep?: string;
        Bairro?: string;
        Municipio?: string;
        Uf?: string;
        Email?: string;
        Telefone?: string;
        Efr?: string;
        EmpresaId?: number;
        EmpresaDataInicio?: string;
        EmpresaDataFechamento?: string;
        EmpresaDataEdicao?: string;
        EmpresaStatus?: string;
        EmpresaUltimaAtualizacao?: string;
        EmpresaCnpj?: string;
        EmpresaTipo?: string;
        EmpresaPorte?: string;
        EmpresaNomeFantasia?: string;
        EmpresaAbertura?: string;
        EmpresaEmpresaId?: number;
    }
    namespace EnderecoRow {
        const idProperty = "Id";
        const nameProperty = "Logradouro";
        const localTextPrefix = "Endereco.Endereco";
        const deletePermission = "Endereco";
        const insertPermission = "Endereco";
        const readPermission = "Endereco";
        const updatePermission = "Endereco";
        const enum Fields {
            Id = "Id",
            DataInicio = "DataInicio",
            DataFechamento = "DataFechamento",
            DataEdicao = "DataEdicao",
            Logradouro = "Logradouro",
            Numero = "Numero",
            Complemento = "Complemento",
            Cep = "Cep",
            Bairro = "Bairro",
            Municipio = "Municipio",
            Uf = "Uf",
            Email = "Email",
            Telefone = "Telefone",
            Efr = "Efr",
            EmpresaId = "EmpresaId",
            EmpresaDataInicio = "EmpresaDataInicio",
            EmpresaDataFechamento = "EmpresaDataFechamento",
            EmpresaDataEdicao = "EmpresaDataEdicao",
            EmpresaStatus = "EmpresaStatus",
            EmpresaUltimaAtualizacao = "EmpresaUltimaAtualizacao",
            EmpresaCnpj = "EmpresaCnpj",
            EmpresaTipo = "EmpresaTipo",
            EmpresaPorte = "EmpresaPorte",
            EmpresaNomeFantasia = "EmpresaNomeFantasia",
            EmpresaAbertura = "EmpresaAbertura",
            EmpresaEmpresaId = "EmpresaEmpresaId"
        }
    }
}
declare namespace ControlSmart.Endereco {
    namespace EnderecoService {
        const baseUrl = "Endereco/Endereco";
        function Create(request: Serenity.SaveRequest<EnderecoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EnderecoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EnderecoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EnderecoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Endereco/Endereco/Create",
            Update = "Endereco/Endereco/Update",
            Delete = "Endereco/Endereco/Delete",
            Retrieve = "Endereco/Endereco/Retrieve",
            List = "Endereco/Endereco/List"
        }
    }
}
declare namespace ControlSmart.Equipamento {
    class EquipamentoColumns {
        static columnsKey: string;
    }
}
declare namespace ControlSmart.Equipamento {
    interface EquipamentoForm {
        DataInicio: Serenity.DateEditor;
        DataFechamento: Serenity.DateEditor;
        DataEdicao: Serenity.DateEditor;
        Device: Serenity.StringEditor;
        Manufacturer: Serenity.StringEditor;
        DeviceName: Serenity.StringEditor;
        Version: Serenity.StringEditor;
        Platform: Serenity.StringEditor;
        Idiom: Serenity.StringEditor;
        DeviceType: Serenity.StringEditor;
        Imei: Serenity.StringEditor;
    }
    class EquipamentoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Equipamento {
    interface EquipamentoRow {
        Id?: number;
        DataInicio?: string;
        DataFechamento?: string;
        DataEdicao?: string;
        Device?: string;
        Manufacturer?: string;
        DeviceName?: string;
        Version?: string;
        Platform?: string;
        Idiom?: string;
        DeviceType?: string;
        Imei?: string;
    }
    namespace EquipamentoRow {
        const idProperty = "Id";
        const nameProperty = "Device";
        const localTextPrefix = "Equipamento.Equipamento";
        const deletePermission = "Equipamento";
        const insertPermission = "Equipamento";
        const readPermission = "Equipamento";
        const updatePermission = "Equipamento";
        const enum Fields {
            Id = "Id",
            DataInicio = "DataInicio",
            DataFechamento = "DataFechamento",
            DataEdicao = "DataEdicao",
            Device = "Device",
            Manufacturer = "Manufacturer",
            DeviceName = "DeviceName",
            Version = "Version",
            Platform = "Platform",
            Idiom = "Idiom",
            DeviceType = "DeviceType",
            Imei = "Imei"
        }
    }
}
declare namespace ControlSmart.Equipamento {
    namespace EquipamentoService {
        const baseUrl = "Equipamento/Equipamento";
        function Create(request: Serenity.SaveRequest<EquipamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EquipamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EquipamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EquipamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Equipamento/Equipamento/Create",
            Update = "Equipamento/Equipamento/Update",
            Delete = "Equipamento/Equipamento/Delete",
            Retrieve = "Equipamento/Equipamento/Retrieve",
            List = "Equipamento/Equipamento/List"
        }
    }
}
declare namespace ControlSmart.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ControlSmart.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailAddressEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace ControlSmart.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace ControlSmart.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ControlSmart.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ConfirmEmail: Serenity.EmailAddressEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ControlSmart.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace ControlSmart {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace ControlSmart.Texts {
}
declare namespace ControlSmart.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace ControlSmart.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace ControlSmart.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ControlSmart.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace ControlSmart.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace ControlSmart.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace ControlSmart.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace ControlSmart.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace ControlSmart.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace ControlSmart.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace ControlSmart.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace ControlSmart.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace ControlSmart.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace ControlSmart.Aluguel {
    class AluguelDialog extends Serenity.EntityDialog<AluguelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AluguelForm;
    }
}
declare namespace ControlSmart.Aluguel {
    class AluguelGrid extends Serenity.EntityGrid<AluguelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AluguelDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ControlSmart.LanguageList {
    function getValue(): string[][];
}
declare namespace ControlSmart.ScriptInitialization {
}
declare namespace ControlSmart.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace ControlSmart.Empresa {
    class EmpresaDialog extends Serenity.EntityDialog<EmpresaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmpresaForm;
    }
}
declare namespace ControlSmart.Empresa {
    class EmpresaGrid extends Serenity.EntityGrid<EmpresaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmpresaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ControlSmart.Endereco {
    class EnderecoDialog extends Serenity.EntityDialog<EnderecoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EnderecoForm;
    }
}
declare namespace ControlSmart.Endereco {
    class EnderecoGrid extends Serenity.EntityGrid<EnderecoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EnderecoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ControlSmart.Equipamento {
    class EquipamentoDialog extends Serenity.EntityDialog<EquipamentoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EquipamentoForm;
    }
}
declare namespace ControlSmart.Equipamento {
    class EquipamentoGrid extends Serenity.EntityGrid<EquipamentoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EquipamentoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ControlSmart.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace ControlSmart.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        getTemplate(): string;
    }
}
declare namespace ControlSmart.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ControlSmart.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ControlSmart.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
