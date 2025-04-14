import { SignupDto } from './dtos/signup.dto';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RefreshToken } from './schemas/refresh-token.schema';
import { ResetToken } from './schemas/reset-token.schema';
import { MailService } from 'src/services/mail.service';
import { RolesService } from 'src/roles/roles.service';
export declare class AuthService {
    private UserModel;
    private RefreshTokenModel;
    private ResetTokenModel;
    private jwtService;
    private mailService;
    private rolesService;
    constructor(UserModel: Model<User>, RefreshTokenModel: Model<RefreshToken>, ResetTokenModel: Model<ResetToken>, jwtService: JwtService, mailService: MailService, rolesService: RolesService);
    signup(signupData: SignupDto): Promise<any>;
    login(credentials: LoginDto): Promise<any>;
    changePassword(userId: any, oldPassword: string, newPassword: string): Promise<void>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(newPassword: string, resetToken: string): Promise<void>;
    refreshTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: any;
    }>;
    generateUserTokens(userId: any): Promise<{
        accessToken: string;
        refreshToken: any;
    }>;
    storeRefreshToken(token: string, userId: string): Promise<void>;
    getUserPermissions(userId: string): Promise<{
        resource: import("../roles/enums/resource.enum").Resource;
        actions: import("../roles/enums/action.enum").Action[];
    }[]>;
    uploadProfileImage(userId: string, image: string): Promise<any>;
    getProfile(userId: any): Promise<{
        profileImage: string;
        name: string;
        email: string;
        password: string;
        roleId: mongoose.Types.ObjectId;
        _id: mongoose.FlattenMaps<unknown>;
        $assertPopulated: <Paths = {}>(path: string | string[], values?: Partial<Paths>) => Omit<User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, keyof Paths> & Paths;
        $clearModifiedPaths: () => User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        $clone: () => User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        $createModifiedPathsSnapshot: () => mongoose.ModifiedPathsSnapshot;
        $getAllSubdocs: () => mongoose.Document<unknown, any, any>[];
        $ignore: (path: string) => void;
        $isDefault: (path: string) => boolean;
        $isDeleted: (val?: boolean) => boolean;
        $getPopulatedDocs: () => mongoose.Document<unknown, any, any>[];
        $inc: (path: string | string[], val?: number) => User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        $isEmpty: (path: string) => boolean;
        $isValid: (path: string) => boolean;
        $locals: mongoose.FlattenMaps<Record<string, unknown>>;
        $markValid: (path: string) => void;
        $model: {
            <ModelType = mongoose.Model<unknown, {}, {}, {}, mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }, any>>(name: string): ModelType;
            <ModelType_1 = mongoose.Model<any, {}, {}, {}, any, any>>(): ModelType_1;
        };
        $op: "remove" | "validate" | "save";
        $restoreModifiedPathsSnapshot: (snapshot: mongoose.ModifiedPathsSnapshot) => User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        $session: (session?: mongoose.mongo.ClientSession) => mongoose.mongo.ClientSession;
        $set: {
            (path: string | Record<string, any>, val: any, type: any, options?: mongoose.DocumentSetOptions): User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
            (path: string | Record<string, any>, val: any, options?: mongoose.DocumentSetOptions): User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
            (value: string | Record<string, any>): User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
        };
        $where: mongoose.FlattenMaps<Record<string, unknown>>;
        baseModelName?: string;
        collection: mongoose.Collection<mongoose.mongo.BSON.Document>;
        db: mongoose.FlattenMaps<mongoose.Connection>;
        deleteOne: (options?: mongoose.QueryOptions<unknown>) => any;
        depopulate: <Paths_1 = {}>(path?: string | string[]) => mongoose.MergeType<User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, Paths_1>;
        directModifiedPaths: () => string[];
        equals: (doc: mongoose.Document<unknown, any, any>) => boolean;
        errors?: mongoose.Error.ValidationError;
        get: {
            <T extends string | number | symbol>(path: T, type?: any, options?: any): any;
            (path: string, type?: any, options?: any): any;
        };
        getChanges: () => mongoose.UpdateQuery<User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>;
        id?: any;
        increment: () => User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        init: (obj: mongoose.AnyObject, opts?: mongoose.AnyObject) => User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        invalidate: {
            <T_1 extends string | number | symbol>(path: T_1, errorMsg: string | NativeError, value?: any, kind?: string): NativeError;
            (path: string, errorMsg: string | NativeError, value?: any, kind?: string): NativeError;
        };
        isDirectModified: {
            <T_2 extends string | number | symbol>(path: T_2 | T_2[]): boolean;
            (path: string | string[]): boolean;
        };
        isDirectSelected: {
            <T_3 extends string | number | symbol>(path: T_3): boolean;
            (path: string): boolean;
        };
        isInit: {
            <T_4 extends string | number | symbol>(path: T_4): boolean;
            (path: string): boolean;
        };
        isModified: {
            <T_5 extends string | number | symbol>(path?: T_5 | T_5[], options?: {
                ignoreAtomics?: boolean;
            }): boolean;
            (path?: string | string[], options?: {
                ignoreAtomics?: boolean;
            }): boolean;
        };
        isNew: boolean;
        isSelected: {
            <T_6 extends string | number | symbol>(path: T_6): boolean;
            (path: string): boolean;
        };
        markModified: {
            <T_7 extends string | number | symbol>(path: T_7, scope?: any): void;
            (path: string, scope?: any): void;
        };
        model: {
            <ModelType_2 = mongoose.Model<unknown, {}, {}, {}, mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }, any>>(name: string): ModelType_2;
            <ModelType_3 = mongoose.Model<any, {}, {}, {}, any, any>>(): ModelType_3;
        };
        modifiedPaths: (options?: {
            includeChildren?: boolean;
        }) => string[];
        overwrite: (obj: mongoose.AnyObject) => User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        $parent: () => mongoose.Document<unknown, any, any>;
        populate: {
            <Paths_2 = {}>(path: string | mongoose.PopulateOptions | (string | mongoose.PopulateOptions)[]): Promise<mongoose.MergeType<User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }, Paths_2>>;
            <Paths_3 = {}>(path: string, select?: string | mongoose.AnyObject, model?: mongoose.Model<any, {}, {}, {}, any, any>, match?: mongoose.AnyObject, options?: mongoose.PopulateOptions): Promise<mongoose.MergeType<User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }, Paths_3>>;
        };
        populated: (path: string) => any;
        replaceOne: (replacement?: mongoose.AnyObject, options?: mongoose.QueryOptions<unknown>) => mongoose.Query<any, User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, {}, unknown, "find", Record<string, never>>;
        save: (options?: mongoose.SaveOptions) => Promise<User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>;
        schema: mongoose.FlattenMaps<mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
            [x: string]: unknown;
        }, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
            [x: string]: unknown;
        }>> & mongoose.FlatRecord<{
            [x: string]: unknown;
        }> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>>;
        set: {
            <T_8 extends string | number | symbol>(path: T_8, val: any, type: any, options?: mongoose.DocumentSetOptions): User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
            (path: string | Record<string, any>, val: any, type: any, options?: mongoose.DocumentSetOptions): User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
            (path: string | Record<string, any>, val: any, options?: mongoose.DocumentSetOptions): User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
            (value: string | Record<string, any>): User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
        };
        toJSON: {
            (options?: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps?: true;
                flattenObjectIds?: false;
            }): mongoose.FlattenMaps<any>;
            (options: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenObjectIds: false;
            }): mongoose.FlattenMaps<any>;
            (options: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenObjectIds: true;
            }): {
                [x: string]: any;
            };
            (options: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps: false;
            }): any;
            (options: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps: false;
                flattenObjectIds: true;
            }): any;
            <T_9 = any>(options?: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps?: true;
                flattenObjectIds?: false;
            }): mongoose.FlattenMaps<T_9>;
            <T_10 = any>(options: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenObjectIds: false;
            }): mongoose.FlattenMaps<T_10>;
            <T_11 = any>(options: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenObjectIds: true;
            }): mongoose.ObjectIdToString<mongoose.FlattenMaps<T_11>>;
            <T_12 = any>(options: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps: false;
            }): T_12;
            <T_13 = any>(options: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps: false;
                flattenObjectIds: true;
            }): mongoose.ObjectIdToString<T_13>;
        };
        toObject: {
            (options?: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }>): any;
            <T_14>(options?: mongoose.ToObjectOptions<mongoose.Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }>): mongoose.Default__v<mongoose.Require_id<T_14>>;
        };
        unmarkModified: {
            <T_15 extends string | number | symbol>(path: T_15): void;
            (path: string): void;
        };
        updateOne: (update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>, options?: mongoose.QueryOptions<unknown>) => mongoose.Query<any, User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, {}, unknown, "find", Record<string, never>>;
        validate: {
            <T_16 extends string | number | symbol>(pathsToValidate?: T_16 | T_16[], options?: mongoose.AnyObject): Promise<void>;
            (pathsToValidate?: mongoose.PathsToValidate, options?: mongoose.AnyObject): Promise<void>;
            (options: {
                pathsToSkip?: mongoose.pathsToSkip;
            }): Promise<void>;
        };
        validateSync: {
            (options: {
                [k: string]: any;
                pathsToSkip?: mongoose.pathsToSkip;
            }): mongoose.Error.ValidationError;
            <T_17 extends string | number | symbol>(pathsToValidate?: T_17 | T_17[], options?: mongoose.AnyObject): mongoose.Error.ValidationError;
            (pathsToValidate?: mongoose.PathsToValidate, options?: mongoose.AnyObject): mongoose.Error.ValidationError;
        };
        __v: number;
    }>;
}
