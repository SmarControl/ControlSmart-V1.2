namespace ControlSmart.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Aluguel {

            namespace Aluguel {
                export const DataEdicao: string;
                export const DataFechamento: string;
                export const DataInicio: string;
                export const EmpresaAbertura: string;
                export const EmpresaCnpj: string;
                export const EmpresaDataEdicao: string;
                export const EmpresaDataFechamento: string;
                export const EmpresaDataInicio: string;
                export const EmpresaEmpresaId: string;
                export const EmpresaId: string;
                export const EmpresaNomeFantasia: string;
                export const EmpresaPorte: string;
                export const EmpresaStatus: string;
                export const EmpresaTipo: string;
                export const EmpresaUltimaAtualizacao: string;
                export const EquipamentoDataEdicao: string;
                export const EquipamentoDataFechamento: string;
                export const EquipamentoDataInicio: string;
                export const EquipamentoDevice: string;
                export const EquipamentoDeviceName: string;
                export const EquipamentoDeviceType: string;
                export const EquipamentoId: string;
                export const EquipamentoIdiom: string;
                export const EquipamentoImei: string;
                export const EquipamentoManufacturer: string;
                export const EquipamentoPlatform: string;
                export const EquipamentoVersion: string;
                export const Id: string;
            }
        }

        namespace Empresa {

            namespace Empresa {
                export const Abertura: string;
                export const Cnpj: string;
                export const DataEdicao: string;
                export const DataFechamento: string;
                export const DataInicio: string;
                export const EmpresaAbertura: string;
                export const EmpresaCnpj: string;
                export const EmpresaDataEdicao: string;
                export const EmpresaDataFechamento: string;
                export const EmpresaDataInicio: string;
                export const EmpresaEmpresaId: string;
                export const EmpresaId: string;
                export const EmpresaNomeFantasia: string;
                export const EmpresaPorte: string;
                export const EmpresaStatus: string;
                export const EmpresaTipo: string;
                export const EmpresaUltimaAtualizacao: string;
                export const Id: string;
                export const NomeFantasia: string;
                export const Porte: string;
                export const Status: string;
                export const Tipo: string;
                export const UltimaAtualizacao: string;
            }
        }

        namespace Endereco {

            namespace Endereco {
                export const Bairro: string;
                export const Cep: string;
                export const Complemento: string;
                export const DataEdicao: string;
                export const DataFechamento: string;
                export const DataInicio: string;
                export const Efr: string;
                export const Email: string;
                export const EmpresaAbertura: string;
                export const EmpresaCnpj: string;
                export const EmpresaDataEdicao: string;
                export const EmpresaDataFechamento: string;
                export const EmpresaDataInicio: string;
                export const EmpresaEmpresaId: string;
                export const EmpresaId: string;
                export const EmpresaNomeFantasia: string;
                export const EmpresaPorte: string;
                export const EmpresaStatus: string;
                export const EmpresaTipo: string;
                export const EmpresaUltimaAtualizacao: string;
                export const Id: string;
                export const Logradouro: string;
                export const Municipio: string;
                export const Numero: string;
                export const Telefone: string;
                export const Uf: string;
            }
        }

        namespace Equipamento {

            namespace Equipamento {
                export const DataEdicao: string;
                export const DataFechamento: string;
                export const DataInicio: string;
                export const Device: string;
                export const DeviceName: string;
                export const DeviceType: string;
                export const Id: string;
                export const Idiom: string;
                export const Imei: string;
                export const Manufacturer: string;
                export const Platform: string;
                export const Version: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const GoogleButton: string;
                export const LoginToYourAccount: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    ControlSmart['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Aluguel:{Aluguel:{DataEdicao:1,DataFechamento:1,DataInicio:1,EmpresaAbertura:1,EmpresaCnpj:1,EmpresaDataEdicao:1,EmpresaDataFechamento:1,EmpresaDataInicio:1,EmpresaEmpresaId:1,EmpresaId:1,EmpresaNomeFantasia:1,EmpresaPorte:1,EmpresaStatus:1,EmpresaTipo:1,EmpresaUltimaAtualizacao:1,EquipamentoDataEdicao:1,EquipamentoDataFechamento:1,EquipamentoDataInicio:1,EquipamentoDevice:1,EquipamentoDeviceName:1,EquipamentoDeviceType:1,EquipamentoId:1,EquipamentoIdiom:1,EquipamentoImei:1,EquipamentoManufacturer:1,EquipamentoPlatform:1,EquipamentoVersion:1,Id:1}},Empresa:{Empresa:{Abertura:1,Cnpj:1,DataEdicao:1,DataFechamento:1,DataInicio:1,EmpresaAbertura:1,EmpresaCnpj:1,EmpresaDataEdicao:1,EmpresaDataFechamento:1,EmpresaDataInicio:1,EmpresaEmpresaId:1,EmpresaId:1,EmpresaNomeFantasia:1,EmpresaPorte:1,EmpresaStatus:1,EmpresaTipo:1,EmpresaUltimaAtualizacao:1,Id:1,NomeFantasia:1,Porte:1,Status:1,Tipo:1,UltimaAtualizacao:1}},Endereco:{Endereco:{Bairro:1,Cep:1,Complemento:1,DataEdicao:1,DataFechamento:1,DataInicio:1,Efr:1,Email:1,EmpresaAbertura:1,EmpresaCnpj:1,EmpresaDataEdicao:1,EmpresaDataFechamento:1,EmpresaDataInicio:1,EmpresaEmpresaId:1,EmpresaId:1,EmpresaNomeFantasia:1,EmpresaPorte:1,EmpresaStatus:1,EmpresaTipo:1,EmpresaUltimaAtualizacao:1,Id:1,Logradouro:1,Municipio:1,Numero:1,Telefone:1,Uf:1}},Equipamento:{Equipamento:{DataEdicao:1,DataFechamento:1,DataInicio:1,Device:1,DeviceName:1,DeviceType:1,Id:1,Idiom:1,Imei:1,Manufacturer:1,Platform:1,Version:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,GoogleButton:1,LoginToYourAccount:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
