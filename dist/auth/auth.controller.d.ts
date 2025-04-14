/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { AuthService } from './auth.service';
import { SignupDto } from './dtos/signup.dto';
import { LoginDto } from './dtos/login.dto';
import { RefreshTokenDto } from './dtos/refresh-tokens.dto';
import { ChangePasswordDto } from './dtos/change-password.dto';
import { ForgotPasswordDto } from './dtos/forgot-password.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signupData: SignupDto): Promise<any>;
    login(credentials: LoginDto): Promise<any>;
    refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: any;
    }>;
    changePassword(changePasswordDto: ChangePasswordDto, req: any): Promise<void>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void>;
    getProfile(req: any): Promise<{
        profileImage: string;
        name: string;
        email: string;
        password: string;
        roleId: import("mongoose").Types.ObjectId;
        _id: import("mongoose").FlattenMaps<unknown>;
        $assertPopulated: <Paths = {}>(path: string | string[], values?: Partial<Paths>) => Omit<import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, keyof Paths> & Paths;
        $clearModifiedPaths: () => import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        $clone: () => import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        $createModifiedPathsSnapshot: () => import("mongoose").ModifiedPathsSnapshot;
        $getAllSubdocs: () => import("mongoose").Document<unknown, any, any>[];
        $ignore: (path: string) => void;
        $isDefault: (path: string) => boolean;
        $isDeleted: (val?: boolean) => boolean;
        $getPopulatedDocs: () => import("mongoose").Document<unknown, any, any>[];
        $inc: (path: string | string[], val?: number) => import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        $isEmpty: (path: string) => boolean;
        $isValid: (path: string) => boolean;
        $locals: import("mongoose").FlattenMaps<Record<string, unknown>>;
        $markValid: (path: string) => void;
        $model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }, any>>(name: string): ModelType;
            <ModelType_1 = import("mongoose").Model<any, {}, {}, {}, any, any>>(): ModelType_1;
        };
        $op: "remove" | "validate" | "save";
        $restoreModifiedPathsSnapshot: (snapshot: import("mongoose").ModifiedPathsSnapshot) => import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        $session: (session?: import("mongodb").ClientSession) => import("mongodb").ClientSession;
        $set: {
            (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("./schemas/user.schema").User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
            (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("./schemas/user.schema").User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
            (value: string | Record<string, any>): import("./schemas/user.schema").User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
        };
        $where: import("mongoose").FlattenMaps<Record<string, unknown>>;
        baseModelName?: string;
        collection: import("mongoose").Collection<import("bson").Document>;
        db: import("mongoose").FlattenMaps<import("mongoose").Connection>;
        deleteOne: (options?: import("mongoose").QueryOptions<unknown>) => any;
        depopulate: <Paths_1 = {}>(path?: string | string[]) => import("mongoose").MergeType<import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, Paths_1>;
        directModifiedPaths: () => string[];
        equals: (doc: import("mongoose").Document<unknown, any, any>) => boolean;
        errors?: import("mongoose").Error.ValidationError;
        get: {
            <T extends string | number | symbol>(path: T, type?: any, options?: any): any;
            (path: string, type?: any, options?: any): any;
        };
        getChanges: () => import("mongoose").UpdateQuery<import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>;
        id?: any;
        increment: () => import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        init: (obj: import("mongoose").AnyObject, opts?: import("mongoose").AnyObject) => import("./schemas/user.schema").User & Required<{
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
            <ModelType_2 = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }, any>>(name: string): ModelType_2;
            <ModelType_3 = import("mongoose").Model<any, {}, {}, {}, any, any>>(): ModelType_3;
        };
        modifiedPaths: (options?: {
            includeChildren?: boolean;
        }) => string[];
        overwrite: (obj: import("mongoose").AnyObject) => import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        $parent: () => import("mongoose").Document<unknown, any, any>;
        populate: {
            <Paths_2 = {}>(path: string | import("mongoose").PopulateOptions | (string | import("mongoose").PopulateOptions)[]): Promise<import("mongoose").MergeType<import("./schemas/user.schema").User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }, Paths_2>>;
            <Paths_3 = {}>(path: string, select?: string | import("mongoose").AnyObject, model?: import("mongoose").Model<any, {}, {}, {}, any, any>, match?: import("mongoose").AnyObject, options?: import("mongoose").PopulateOptions): Promise<import("mongoose").MergeType<import("./schemas/user.schema").User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }, Paths_3>>;
        };
        populated: (path: string) => any;
        replaceOne: (replacement?: import("mongoose").AnyObject, options?: import("mongoose").QueryOptions<unknown>) => import("mongoose").Query<any, import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, {}, unknown, "find", Record<string, never>>;
        save: (options?: import("mongoose").SaveOptions) => Promise<import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>;
        schema: import("mongoose").FlattenMaps<import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: unknown;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: unknown;
        }>> & import("mongoose").FlatRecord<{
            [x: string]: unknown;
        }> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>>;
        set: {
            <T_8 extends string | number | symbol>(path: T_8, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("./schemas/user.schema").User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
            (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("./schemas/user.schema").User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
            (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("./schemas/user.schema").User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
            (value: string | Record<string, any>): import("./schemas/user.schema").User & Required<{
                _id: unknown;
            }> & {
                __v: number;
            };
        };
        toJSON: {
            (options?: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps?: true;
                flattenObjectIds?: false;
            }): import("mongoose").FlattenMaps<any>;
            (options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenObjectIds: false;
            }): import("mongoose").FlattenMaps<any>;
            (options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenObjectIds: true;
            }): {
                [x: string]: any;
            };
            (options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps: false;
            }): any;
            (options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps: false;
                flattenObjectIds: true;
            }): any;
            <T_9 = any>(options?: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps?: true;
                flattenObjectIds?: false;
            }): import("mongoose").FlattenMaps<T_9>;
            <T_10 = any>(options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenObjectIds: false;
            }): import("mongoose").FlattenMaps<T_10>;
            <T_11 = any>(options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenObjectIds: true;
            }): import("mongoose").ObjectIdToString<import("mongoose").FlattenMaps<T_11>>;
            <T_12 = any>(options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps: false;
            }): T_12;
            <T_13 = any>(options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }> & {
                flattenMaps: false;
                flattenObjectIds: true;
            }): import("mongoose").ObjectIdToString<T_13>;
        };
        toObject: {
            (options?: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }>): any;
            <T_14>(options?: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }> & {
                __v: number;
            }>): import("mongoose").Default__v<import("mongoose").Require_id<T_14>>;
        };
        unmarkModified: {
            <T_15 extends string | number | symbol>(path: T_15): void;
            (path: string): void;
        };
        updateOne: (update?: import("mongoose").UpdateWithAggregationPipeline | import("mongoose").UpdateQuery<import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>, options?: import("mongoose").QueryOptions<unknown>) => import("mongoose").Query<any, import("./schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, {}, unknown, "find", Record<string, never>>;
        validate: {
            <T_16 extends string | number | symbol>(pathsToValidate?: T_16 | T_16[], options?: import("mongoose").AnyObject): Promise<void>;
            (pathsToValidate?: import("mongoose").PathsToValidate, options?: import("mongoose").AnyObject): Promise<void>;
            (options: {
                pathsToSkip?: import("mongoose").pathsToSkip;
            }): Promise<void>;
        };
        validateSync: {
            (options: {
                [k: string]: any;
                pathsToSkip?: import("mongoose").pathsToSkip;
            }): import("mongoose").Error.ValidationError;
            <T_17 extends string | number | symbol>(pathsToValidate?: T_17 | T_17[], options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError;
            (pathsToValidate?: import("mongoose").PathsToValidate, options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError;
        };
        __v: number;
    }>;
    uploadProfileImage(userId: string, image: string): Promise<any>;
}
