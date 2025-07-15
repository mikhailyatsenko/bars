
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BarsDataAdditionalInfo
 * 
 */
export type BarsDataAdditionalInfo = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoPayload>
/**
 * Model BarsDataAdditionalInfoAccessibility
 * 
 */
export type BarsDataAdditionalInfoAccessibility = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoAccessibilityPayload>
/**
 * Model BarsDataAdditionalInfoAmenities
 * 
 */
export type BarsDataAdditionalInfoAmenities = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoAmenitiesPayload>
/**
 * Model BarsDataAdditionalInfoAtmosphere
 * 
 */
export type BarsDataAdditionalInfoAtmosphere = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoAtmospherePayload>
/**
 * Model BarsDataAdditionalInfoChildren
 * 
 */
export type BarsDataAdditionalInfoChildren = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoChildrenPayload>
/**
 * Model BarsDataAdditionalInfoCrowd
 * 
 */
export type BarsDataAdditionalInfoCrowd = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoCrowdPayload>
/**
 * Model BarsDataAdditionalInfoDiningOptions
 * 
 */
export type BarsDataAdditionalInfoDiningOptions = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoDiningOptionsPayload>
/**
 * Model BarsDataAdditionalInfoEmergencyHelp
 * 
 */
export type BarsDataAdditionalInfoEmergencyHelp = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoEmergencyHelpPayload>
/**
 * Model BarsDataAdditionalInfoFromTheBusiness
 * 
 */
export type BarsDataAdditionalInfoFromTheBusiness = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoFromTheBusinessPayload>
/**
 * Model BarsDataAdditionalInfoHighlights
 * 
 */
export type BarsDataAdditionalInfoHighlights = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoHighlightsPayload>
/**
 * Model BarsDataAdditionalInfoOfferings
 * 
 */
export type BarsDataAdditionalInfoOfferings = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoOfferingsPayload>
/**
 * Model BarsDataAdditionalInfoParking
 * 
 */
export type BarsDataAdditionalInfoParking = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoParkingPayload>
/**
 * Model BarsDataAdditionalInfoPayments
 * 
 */
export type BarsDataAdditionalInfoPayments = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoPaymentsPayload>
/**
 * Model BarsDataAdditionalInfoPets
 * 
 */
export type BarsDataAdditionalInfoPets = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoPetsPayload>
/**
 * Model BarsDataAdditionalInfoPlanning
 * 
 */
export type BarsDataAdditionalInfoPlanning = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoPlanningPayload>
/**
 * Model BarsDataAdditionalInfoPopularFor
 * 
 */
export type BarsDataAdditionalInfoPopularFor = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoPopularForPayload>
/**
 * Model BarsDataAdditionalInfoServiceOptions
 * 
 */
export type BarsDataAdditionalInfoServiceOptions = $Result.DefaultSelection<Prisma.$BarsDataAdditionalInfoServiceOptionsPayload>
/**
 * Model BarsDataLocation
 * 
 */
export type BarsDataLocation = $Result.DefaultSelection<Prisma.$BarsDataLocationPayload>
/**
 * Model BarsDataOpeningHours
 * 
 */
export type BarsDataOpeningHours = $Result.DefaultSelection<Prisma.$BarsDataOpeningHoursPayload>
/**
 * Model BarsDataReviews
 * 
 */
export type BarsDataReviews = $Result.DefaultSelection<Prisma.$BarsDataReviewsPayload>
/**
 * Model BarsDataReviewsReviewContext
 * 
 */
export type BarsDataReviewsReviewContext = $Result.DefaultSelection<Prisma.$BarsDataReviewsReviewContextPayload>
/**
 * Model BarsDataReviewsReviewDetailedRating
 * 
 */
export type BarsDataReviewsReviewDetailedRating = $Result.DefaultSelection<Prisma.$BarsDataReviewsReviewDetailedRatingPayload>
/**
 * Model barsData
 * 
 */
export type barsData = $Result.DefaultSelection<Prisma.$barsDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BarsData
 * const barsData = await prisma.barsData.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BarsData
   * const barsData = await prisma.barsData.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.barsData`: Exposes CRUD operations for the **barsData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarsData
    * const barsData = await prisma.barsData.findMany()
    * ```
    */
  get barsData(): Prisma.barsDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    barsData: 'barsData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "barsData"
      txIsolationLevel: never
    }
    model: {
      barsData: {
        payload: Prisma.$barsDataPayload<ExtArgs>
        fields: Prisma.barsDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.barsDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barsDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.barsDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barsDataPayload>
          }
          findFirst: {
            args: Prisma.barsDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barsDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.barsDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barsDataPayload>
          }
          findMany: {
            args: Prisma.barsDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barsDataPayload>[]
          }
          create: {
            args: Prisma.barsDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barsDataPayload>
          }
          createMany: {
            args: Prisma.barsDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.barsDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barsDataPayload>
          }
          update: {
            args: Prisma.barsDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barsDataPayload>
          }
          deleteMany: {
            args: Prisma.barsDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.barsDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.barsDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barsDataPayload>
          }
          aggregate: {
            args: Prisma.BarsDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarsData>
          }
          groupBy: {
            args: Prisma.barsDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarsDataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.barsDataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.barsDataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.barsDataCountArgs<ExtArgs>
            result: $Utils.Optional<BarsDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    barsData?: barsDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model BarsDataAdditionalInfo
   */





  export type BarsDataAdditionalInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Accessibility?: boolean | BarsDataAdditionalInfoAccessibilityDefaultArgs<ExtArgs>
    Amenities?: boolean | BarsDataAdditionalInfoAmenitiesDefaultArgs<ExtArgs>
    Atmosphere?: boolean | BarsDataAdditionalInfoAtmosphereDefaultArgs<ExtArgs>
    Children?: boolean | BarsDataAdditionalInfoChildrenDefaultArgs<ExtArgs>
    Crowd?: boolean | BarsDataAdditionalInfoCrowdDefaultArgs<ExtArgs>
    Dining_options?: boolean | BarsDataAdditionalInfoDiningOptionsDefaultArgs<ExtArgs>
    Emergency_help?: boolean | BarsDataAdditionalInfoEmergencyHelpDefaultArgs<ExtArgs>
    From_the_business?: boolean | BarsDataAdditionalInfoFromTheBusinessDefaultArgs<ExtArgs>
    Highlights?: boolean | BarsDataAdditionalInfoHighlightsDefaultArgs<ExtArgs>
    Offerings?: boolean | BarsDataAdditionalInfoOfferingsDefaultArgs<ExtArgs>
    Parking?: boolean | BarsDataAdditionalInfoParkingDefaultArgs<ExtArgs>
    Payments?: boolean | BarsDataAdditionalInfoPaymentsDefaultArgs<ExtArgs>
    Pets?: boolean | BarsDataAdditionalInfoPetsDefaultArgs<ExtArgs>
    Planning?: boolean | BarsDataAdditionalInfoPlanningDefaultArgs<ExtArgs>
    Popular_for?: boolean | BarsDataAdditionalInfoPopularForDefaultArgs<ExtArgs>
    Service_options?: boolean | BarsDataAdditionalInfoServiceOptionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barsDataAdditionalInfo"]>



  export type BarsDataAdditionalInfoSelectScalar = {}

  export type BarsDataAdditionalInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Accessibility" | "Amenities" | "Atmosphere" | "Children" | "Crowd" | "Dining_options" | "Emergency_help" | "From_the_business" | "Highlights" | "Offerings" | "Parking" | "Payments" | "Pets" | "Planning" | "Popular_for" | "Service_options", ExtArgs["result"]["barsDataAdditionalInfo"]>
  export type BarsDataAdditionalInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BarsDataAdditionalInfoPayload = {
    name: "BarsDataAdditionalInfo"
    objects: {}
    scalars: {}
    composites: {
      Accessibility: Prisma.$BarsDataAdditionalInfoAccessibilityPayload[]
      Amenities: Prisma.$BarsDataAdditionalInfoAmenitiesPayload[]
      Atmosphere: Prisma.$BarsDataAdditionalInfoAtmospherePayload[]
      Children: Prisma.$BarsDataAdditionalInfoChildrenPayload[]
      Crowd: Prisma.$BarsDataAdditionalInfoCrowdPayload[]
      Dining_options: Prisma.$BarsDataAdditionalInfoDiningOptionsPayload[]
      Emergency_help: Prisma.$BarsDataAdditionalInfoEmergencyHelpPayload[]
      From_the_business: Prisma.$BarsDataAdditionalInfoFromTheBusinessPayload[]
      Highlights: Prisma.$BarsDataAdditionalInfoHighlightsPayload[]
      Offerings: Prisma.$BarsDataAdditionalInfoOfferingsPayload[]
      Parking: Prisma.$BarsDataAdditionalInfoParkingPayload[]
      Payments: Prisma.$BarsDataAdditionalInfoPaymentsPayload[]
      Pets: Prisma.$BarsDataAdditionalInfoPetsPayload[]
      Planning: Prisma.$BarsDataAdditionalInfoPlanningPayload[]
      Popular_for: Prisma.$BarsDataAdditionalInfoPopularForPayload[]
      Service_options: Prisma.$BarsDataAdditionalInfoServiceOptionsPayload[]
    }
  }

  type BarsDataAdditionalInfoGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfo model
   */
  interface BarsDataAdditionalInfoFieldRefs {

  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfo without action
   */
  export type BarsDataAdditionalInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfo
     */
    select?: BarsDataAdditionalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfo
     */
    omit?: BarsDataAdditionalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsDataAdditionalInfoInclude<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoAccessibility
   */





  export type BarsDataAdditionalInfoAccessibilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Assistive_hearing_loop?: boolean
    Wheelchair_accessible_entrance?: boolean
    Wheelchair_accessible_parking_lot?: boolean
    Wheelchair_accessible_restroom?: boolean
    Wheelchair_accessible_seating?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoAccessibility"]>



  export type BarsDataAdditionalInfoAccessibilitySelectScalar = {
    Assistive_hearing_loop?: boolean
    Wheelchair_accessible_entrance?: boolean
    Wheelchair_accessible_parking_lot?: boolean
    Wheelchair_accessible_restroom?: boolean
    Wheelchair_accessible_seating?: boolean
  }

  export type BarsDataAdditionalInfoAccessibilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Assistive_hearing_loop" | "Wheelchair_accessible_entrance" | "Wheelchair_accessible_parking_lot" | "Wheelchair_accessible_restroom" | "Wheelchair_accessible_seating", ExtArgs["result"]["barsDataAdditionalInfoAccessibility"]>

  export type $BarsDataAdditionalInfoAccessibilityPayload = {
    name: "BarsDataAdditionalInfoAccessibility"
    objects: {}
    scalars: {
      Assistive_hearing_loop: boolean | null
      Wheelchair_accessible_entrance: boolean | null
      Wheelchair_accessible_parking_lot: boolean | null
      Wheelchair_accessible_restroom: boolean | null
      Wheelchair_accessible_seating: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoAccessibilityGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoAccessibilityDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoAccessibilityPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoAccessibility model
   */
  interface BarsDataAdditionalInfoAccessibilityFieldRefs {
    readonly Assistive_hearing_loop: FieldRef<"BarsDataAdditionalInfoAccessibility", 'Boolean'>
    readonly Wheelchair_accessible_entrance: FieldRef<"BarsDataAdditionalInfoAccessibility", 'Boolean'>
    readonly Wheelchair_accessible_parking_lot: FieldRef<"BarsDataAdditionalInfoAccessibility", 'Boolean'>
    readonly Wheelchair_accessible_restroom: FieldRef<"BarsDataAdditionalInfoAccessibility", 'Boolean'>
    readonly Wheelchair_accessible_seating: FieldRef<"BarsDataAdditionalInfoAccessibility", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoAccessibility without action
   */
  export type BarsDataAdditionalInfoAccessibilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoAccessibility
     */
    select?: BarsDataAdditionalInfoAccessibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoAccessibility
     */
    omit?: BarsDataAdditionalInfoAccessibilityOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoAmenities
   */





  export type BarsDataAdditionalInfoAmenitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Accessible?: boolean
    Air_conditioned?: boolean
    Airport_shuttle?: boolean
    Bar?: boolean
    Bar_onsite?: boolean
    Breakfast?: boolean
    Business_center?: boolean
    Fitness_center?: boolean
    Free_Wi_Fi?: boolean
    Free_parking?: boolean
    Gender_neutral_restroom?: boolean
    Kid_friendly?: boolean
    Kitchens_in_some_rooms?: boolean
    Laundry_service?: boolean
    Paid_breakfast?: boolean
    Paid_parking?: boolean
    Parking?: boolean
    Pet_friendly?: boolean
    Pool?: boolean
    Restaurant?: boolean
    Restroom?: boolean
    Room_service?: boolean
    Smoke_free?: boolean
    Spa?: boolean
    Stadium_seating?: boolean
    Wi_Fi?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoAmenities"]>



  export type BarsDataAdditionalInfoAmenitiesSelectScalar = {
    Accessible?: boolean
    Air_conditioned?: boolean
    Airport_shuttle?: boolean
    Bar?: boolean
    Bar_onsite?: boolean
    Breakfast?: boolean
    Business_center?: boolean
    Fitness_center?: boolean
    Free_Wi_Fi?: boolean
    Free_parking?: boolean
    Gender_neutral_restroom?: boolean
    Kid_friendly?: boolean
    Kitchens_in_some_rooms?: boolean
    Laundry_service?: boolean
    Paid_breakfast?: boolean
    Paid_parking?: boolean
    Parking?: boolean
    Pet_friendly?: boolean
    Pool?: boolean
    Restaurant?: boolean
    Restroom?: boolean
    Room_service?: boolean
    Smoke_free?: boolean
    Spa?: boolean
    Stadium_seating?: boolean
    Wi_Fi?: boolean
  }

  export type BarsDataAdditionalInfoAmenitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Accessible" | "Air_conditioned" | "Airport_shuttle" | "Bar" | "Bar_onsite" | "Breakfast" | "Business_center" | "Fitness_center" | "Free_Wi_Fi" | "Free_parking" | "Gender_neutral_restroom" | "Kid_friendly" | "Kitchens_in_some_rooms" | "Laundry_service" | "Paid_breakfast" | "Paid_parking" | "Parking" | "Pet_friendly" | "Pool" | "Restaurant" | "Restroom" | "Room_service" | "Smoke_free" | "Spa" | "Stadium_seating" | "Wi_Fi", ExtArgs["result"]["barsDataAdditionalInfoAmenities"]>

  export type $BarsDataAdditionalInfoAmenitiesPayload = {
    name: "BarsDataAdditionalInfoAmenities"
    objects: {}
    scalars: {
      Accessible: boolean | null
      Air_conditioned: boolean | null
      Airport_shuttle: boolean | null
      Bar: boolean | null
      Bar_onsite: boolean | null
      Breakfast: boolean | null
      Business_center: boolean | null
      Fitness_center: boolean | null
      Free_Wi_Fi: boolean | null
      Free_parking: boolean | null
      Gender_neutral_restroom: boolean | null
      Kid_friendly: boolean | null
      Kitchens_in_some_rooms: boolean | null
      Laundry_service: boolean | null
      Paid_breakfast: boolean | null
      Paid_parking: boolean | null
      Parking: boolean | null
      Pet_friendly: boolean | null
      Pool: boolean | null
      Restaurant: boolean | null
      Restroom: boolean | null
      Room_service: boolean | null
      Smoke_free: boolean | null
      Spa: boolean | null
      Stadium_seating: boolean | null
      Wi_Fi: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoAmenitiesGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoAmenitiesDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoAmenitiesPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoAmenities model
   */
  interface BarsDataAdditionalInfoAmenitiesFieldRefs {
    readonly Accessible: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Air_conditioned: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Airport_shuttle: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Bar: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Bar_onsite: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Breakfast: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Business_center: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Fitness_center: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Free_Wi_Fi: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Free_parking: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Gender_neutral_restroom: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Kid_friendly: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Kitchens_in_some_rooms: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Laundry_service: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Paid_breakfast: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Paid_parking: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Parking: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Pet_friendly: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Pool: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Restaurant: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Restroom: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Room_service: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Smoke_free: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Spa: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Stadium_seating: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
    readonly Wi_Fi: FieldRef<"BarsDataAdditionalInfoAmenities", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoAmenities without action
   */
  export type BarsDataAdditionalInfoAmenitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoAmenities
     */
    select?: BarsDataAdditionalInfoAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoAmenities
     */
    omit?: BarsDataAdditionalInfoAmenitiesOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoAtmosphere
   */





  export type BarsDataAdditionalInfoAtmosphereSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Casual?: boolean
    Cozy?: boolean
    Historic?: boolean
    Quiet?: boolean
    Romantic?: boolean
    Trending?: boolean
    Trendy?: boolean
    Upscale?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoAtmosphere"]>



  export type BarsDataAdditionalInfoAtmosphereSelectScalar = {
    Casual?: boolean
    Cozy?: boolean
    Historic?: boolean
    Quiet?: boolean
    Romantic?: boolean
    Trending?: boolean
    Trendy?: boolean
    Upscale?: boolean
  }

  export type BarsDataAdditionalInfoAtmosphereOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Casual" | "Cozy" | "Historic" | "Quiet" | "Romantic" | "Trending" | "Trendy" | "Upscale", ExtArgs["result"]["barsDataAdditionalInfoAtmosphere"]>

  export type $BarsDataAdditionalInfoAtmospherePayload = {
    name: "BarsDataAdditionalInfoAtmosphere"
    objects: {}
    scalars: {
      Casual: boolean | null
      Cozy: boolean | null
      Historic: boolean | null
      Quiet: boolean | null
      Romantic: boolean | null
      Trending: boolean | null
      Trendy: boolean | null
      Upscale: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoAtmosphereGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoAtmosphereDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoAtmospherePayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoAtmosphere model
   */
  interface BarsDataAdditionalInfoAtmosphereFieldRefs {
    readonly Casual: FieldRef<"BarsDataAdditionalInfoAtmosphere", 'Boolean'>
    readonly Cozy: FieldRef<"BarsDataAdditionalInfoAtmosphere", 'Boolean'>
    readonly Historic: FieldRef<"BarsDataAdditionalInfoAtmosphere", 'Boolean'>
    readonly Quiet: FieldRef<"BarsDataAdditionalInfoAtmosphere", 'Boolean'>
    readonly Romantic: FieldRef<"BarsDataAdditionalInfoAtmosphere", 'Boolean'>
    readonly Trending: FieldRef<"BarsDataAdditionalInfoAtmosphere", 'Boolean'>
    readonly Trendy: FieldRef<"BarsDataAdditionalInfoAtmosphere", 'Boolean'>
    readonly Upscale: FieldRef<"BarsDataAdditionalInfoAtmosphere", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoAtmosphere without action
   */
  export type BarsDataAdditionalInfoAtmosphereDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoAtmosphere
     */
    select?: BarsDataAdditionalInfoAtmosphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoAtmosphere
     */
    omit?: BarsDataAdditionalInfoAtmosphereOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoChildren
   */





  export type BarsDataAdditionalInfoChildrenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Good_for_kids?: boolean
    Good_for_kids_birthday?: boolean
    Has_changing_table_s_?: boolean
    High_chairs?: boolean
    Kids__menu?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoChildren"]>



  export type BarsDataAdditionalInfoChildrenSelectScalar = {
    Good_for_kids?: boolean
    Good_for_kids_birthday?: boolean
    Has_changing_table_s_?: boolean
    High_chairs?: boolean
    Kids__menu?: boolean
  }

  export type BarsDataAdditionalInfoChildrenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Good_for_kids" | "Good_for_kids_birthday" | "Has_changing_table_s_" | "High_chairs" | "Kids__menu", ExtArgs["result"]["barsDataAdditionalInfoChildren"]>

  export type $BarsDataAdditionalInfoChildrenPayload = {
    name: "BarsDataAdditionalInfoChildren"
    objects: {}
    scalars: {
      Good_for_kids: boolean | null
      Good_for_kids_birthday: boolean | null
      Has_changing_table_s_: boolean | null
      High_chairs: boolean | null
      Kids__menu: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoChildrenGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoChildrenDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoChildrenPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoChildren model
   */
  interface BarsDataAdditionalInfoChildrenFieldRefs {
    readonly Good_for_kids: FieldRef<"BarsDataAdditionalInfoChildren", 'Boolean'>
    readonly Good_for_kids_birthday: FieldRef<"BarsDataAdditionalInfoChildren", 'Boolean'>
    readonly Has_changing_table_s_: FieldRef<"BarsDataAdditionalInfoChildren", 'Boolean'>
    readonly High_chairs: FieldRef<"BarsDataAdditionalInfoChildren", 'Boolean'>
    readonly Kids__menu: FieldRef<"BarsDataAdditionalInfoChildren", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoChildren without action
   */
  export type BarsDataAdditionalInfoChildrenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoChildren
     */
    select?: BarsDataAdditionalInfoChildrenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoChildren
     */
    omit?: BarsDataAdditionalInfoChildrenOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoCrowd
   */





  export type BarsDataAdditionalInfoCrowdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    College_students?: boolean
    Family_friendly?: boolean
    Groups?: boolean
    LGBTQ__friendly?: boolean
    Tourists?: boolean
    Transgender_safespace?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoCrowd"]>



  export type BarsDataAdditionalInfoCrowdSelectScalar = {
    College_students?: boolean
    Family_friendly?: boolean
    Groups?: boolean
    LGBTQ__friendly?: boolean
    Tourists?: boolean
    Transgender_safespace?: boolean
  }

  export type BarsDataAdditionalInfoCrowdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"College_students" | "Family_friendly" | "Groups" | "LGBTQ__friendly" | "Tourists" | "Transgender_safespace", ExtArgs["result"]["barsDataAdditionalInfoCrowd"]>

  export type $BarsDataAdditionalInfoCrowdPayload = {
    name: "BarsDataAdditionalInfoCrowd"
    objects: {}
    scalars: {
      College_students: boolean | null
      Family_friendly: boolean | null
      Groups: boolean | null
      LGBTQ__friendly: boolean | null
      Tourists: boolean | null
      Transgender_safespace: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoCrowdGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoCrowdDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoCrowdPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoCrowd model
   */
  interface BarsDataAdditionalInfoCrowdFieldRefs {
    readonly College_students: FieldRef<"BarsDataAdditionalInfoCrowd", 'Boolean'>
    readonly Family_friendly: FieldRef<"BarsDataAdditionalInfoCrowd", 'Boolean'>
    readonly Groups: FieldRef<"BarsDataAdditionalInfoCrowd", 'Boolean'>
    readonly LGBTQ__friendly: FieldRef<"BarsDataAdditionalInfoCrowd", 'Boolean'>
    readonly Tourists: FieldRef<"BarsDataAdditionalInfoCrowd", 'Boolean'>
    readonly Transgender_safespace: FieldRef<"BarsDataAdditionalInfoCrowd", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoCrowd without action
   */
  export type BarsDataAdditionalInfoCrowdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoCrowd
     */
    select?: BarsDataAdditionalInfoCrowdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoCrowd
     */
    omit?: BarsDataAdditionalInfoCrowdOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoDiningOptions
   */





  export type BarsDataAdditionalInfoDiningOptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Breakfast?: boolean
    Brunch?: boolean
    Catering?: boolean
    Counter_service?: boolean
    Dessert?: boolean
    Dinner?: boolean
    Lunch?: boolean
    Outside_food_allowed?: boolean
    Seating?: boolean
    Table_service?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoDiningOptions"]>



  export type BarsDataAdditionalInfoDiningOptionsSelectScalar = {
    Breakfast?: boolean
    Brunch?: boolean
    Catering?: boolean
    Counter_service?: boolean
    Dessert?: boolean
    Dinner?: boolean
    Lunch?: boolean
    Outside_food_allowed?: boolean
    Seating?: boolean
    Table_service?: boolean
  }

  export type BarsDataAdditionalInfoDiningOptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Breakfast" | "Brunch" | "Catering" | "Counter_service" | "Dessert" | "Dinner" | "Lunch" | "Outside_food_allowed" | "Seating" | "Table_service", ExtArgs["result"]["barsDataAdditionalInfoDiningOptions"]>

  export type $BarsDataAdditionalInfoDiningOptionsPayload = {
    name: "BarsDataAdditionalInfoDiningOptions"
    objects: {}
    scalars: {
      Breakfast: boolean | null
      Brunch: boolean | null
      Catering: boolean | null
      Counter_service: boolean | null
      Dessert: boolean | null
      Dinner: boolean | null
      Lunch: boolean | null
      Outside_food_allowed: boolean | null
      Seating: boolean | null
      Table_service: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoDiningOptionsGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoDiningOptionsDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoDiningOptionsPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoDiningOptions model
   */
  interface BarsDataAdditionalInfoDiningOptionsFieldRefs {
    readonly Breakfast: FieldRef<"BarsDataAdditionalInfoDiningOptions", 'Boolean'>
    readonly Brunch: FieldRef<"BarsDataAdditionalInfoDiningOptions", 'Boolean'>
    readonly Catering: FieldRef<"BarsDataAdditionalInfoDiningOptions", 'Boolean'>
    readonly Counter_service: FieldRef<"BarsDataAdditionalInfoDiningOptions", 'Boolean'>
    readonly Dessert: FieldRef<"BarsDataAdditionalInfoDiningOptions", 'Boolean'>
    readonly Dinner: FieldRef<"BarsDataAdditionalInfoDiningOptions", 'Boolean'>
    readonly Lunch: FieldRef<"BarsDataAdditionalInfoDiningOptions", 'Boolean'>
    readonly Outside_food_allowed: FieldRef<"BarsDataAdditionalInfoDiningOptions", 'Boolean'>
    readonly Seating: FieldRef<"BarsDataAdditionalInfoDiningOptions", 'Boolean'>
    readonly Table_service: FieldRef<"BarsDataAdditionalInfoDiningOptions", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoDiningOptions without action
   */
  export type BarsDataAdditionalInfoDiningOptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoDiningOptions
     */
    select?: BarsDataAdditionalInfoDiningOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoDiningOptions
     */
    omit?: BarsDataAdditionalInfoDiningOptionsOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoEmergencyHelp
   */





  export type BarsDataAdditionalInfoEmergencyHelpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Employs_displaced_individuals?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoEmergencyHelp"]>



  export type BarsDataAdditionalInfoEmergencyHelpSelectScalar = {
    Employs_displaced_individuals?: boolean
  }

  export type BarsDataAdditionalInfoEmergencyHelpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Employs_displaced_individuals", ExtArgs["result"]["barsDataAdditionalInfoEmergencyHelp"]>

  export type $BarsDataAdditionalInfoEmergencyHelpPayload = {
    name: "BarsDataAdditionalInfoEmergencyHelp"
    objects: {}
    scalars: {
      Employs_displaced_individuals: boolean
    }
    composites: {}
  }

  type BarsDataAdditionalInfoEmergencyHelpGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoEmergencyHelpDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoEmergencyHelpPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoEmergencyHelp model
   */
  interface BarsDataAdditionalInfoEmergencyHelpFieldRefs {
    readonly Employs_displaced_individuals: FieldRef<"BarsDataAdditionalInfoEmergencyHelp", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoEmergencyHelp without action
   */
  export type BarsDataAdditionalInfoEmergencyHelpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoEmergencyHelp
     */
    select?: BarsDataAdditionalInfoEmergencyHelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoEmergencyHelp
     */
    omit?: BarsDataAdditionalInfoEmergencyHelpOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoFromTheBusiness
   */





  export type BarsDataAdditionalInfoFromTheBusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Identifies_as_women_owned?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoFromTheBusiness"]>



  export type BarsDataAdditionalInfoFromTheBusinessSelectScalar = {
    Identifies_as_women_owned?: boolean
  }

  export type BarsDataAdditionalInfoFromTheBusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Identifies_as_women_owned", ExtArgs["result"]["barsDataAdditionalInfoFromTheBusiness"]>

  export type $BarsDataAdditionalInfoFromTheBusinessPayload = {
    name: "BarsDataAdditionalInfoFromTheBusiness"
    objects: {}
    scalars: {
      Identifies_as_women_owned: boolean
    }
    composites: {}
  }

  type BarsDataAdditionalInfoFromTheBusinessGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoFromTheBusinessDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoFromTheBusinessPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoFromTheBusiness model
   */
  interface BarsDataAdditionalInfoFromTheBusinessFieldRefs {
    readonly Identifies_as_women_owned: FieldRef<"BarsDataAdditionalInfoFromTheBusiness", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoFromTheBusiness without action
   */
  export type BarsDataAdditionalInfoFromTheBusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoFromTheBusiness
     */
    select?: BarsDataAdditionalInfoFromTheBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoFromTheBusiness
     */
    omit?: BarsDataAdditionalInfoFromTheBusinessOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoHighlights
   */





  export type BarsDataAdditionalInfoHighlightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Bar_games?: boolean
    Fireplace?: boolean
    Great_beer_selection?: boolean
    Great_coffee?: boolean
    Great_dessert?: boolean
    Great_tea_selection?: boolean
    Great_wine_list?: boolean
    Karaoke?: boolean
    Live_music?: boolean
    Live_performances?: boolean
    Rooftop_seating?: boolean
    Sports?: boolean
    Trivia_night?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoHighlights"]>



  export type BarsDataAdditionalInfoHighlightsSelectScalar = {
    Bar_games?: boolean
    Fireplace?: boolean
    Great_beer_selection?: boolean
    Great_coffee?: boolean
    Great_dessert?: boolean
    Great_tea_selection?: boolean
    Great_wine_list?: boolean
    Karaoke?: boolean
    Live_music?: boolean
    Live_performances?: boolean
    Rooftop_seating?: boolean
    Sports?: boolean
    Trivia_night?: boolean
  }

  export type BarsDataAdditionalInfoHighlightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Bar_games" | "Fireplace" | "Great_beer_selection" | "Great_coffee" | "Great_dessert" | "Great_tea_selection" | "Great_wine_list" | "Karaoke" | "Live_music" | "Live_performances" | "Rooftop_seating" | "Sports" | "Trivia_night", ExtArgs["result"]["barsDataAdditionalInfoHighlights"]>

  export type $BarsDataAdditionalInfoHighlightsPayload = {
    name: "BarsDataAdditionalInfoHighlights"
    objects: {}
    scalars: {
      Bar_games: boolean | null
      Fireplace: boolean | null
      Great_beer_selection: boolean | null
      Great_coffee: boolean | null
      Great_dessert: boolean | null
      Great_tea_selection: boolean | null
      Great_wine_list: boolean | null
      Karaoke: boolean | null
      Live_music: boolean | null
      Live_performances: boolean | null
      Rooftop_seating: boolean | null
      Sports: boolean | null
      Trivia_night: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoHighlightsGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoHighlightsDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoHighlightsPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoHighlights model
   */
  interface BarsDataAdditionalInfoHighlightsFieldRefs {
    readonly Bar_games: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Fireplace: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Great_beer_selection: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Great_coffee: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Great_dessert: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Great_tea_selection: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Great_wine_list: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Karaoke: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Live_music: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Live_performances: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Rooftop_seating: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Sports: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
    readonly Trivia_night: FieldRef<"BarsDataAdditionalInfoHighlights", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoHighlights without action
   */
  export type BarsDataAdditionalInfoHighlightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoHighlights
     */
    select?: BarsDataAdditionalInfoHighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoHighlights
     */
    omit?: BarsDataAdditionalInfoHighlightsOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoOfferings
   */





  export type BarsDataAdditionalInfoOfferingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Alcohol?: boolean
    All_you_can_eat?: boolean
    Arcade_games?: boolean
    Beer?: boolean
    Cocktails?: boolean
    Coffee?: boolean
    Dancing?: boolean
    Food?: boolean
    Food_at_bar?: boolean
    Halal_food?: boolean
    Happy_hour_drinks?: boolean
    Happy_hour_food?: boolean
    Hard_liquor?: boolean
    Healthy_options?: boolean
    Late_night_food?: boolean
    Organic_dishes?: boolean
    Prepared_foods?: boolean
    Private_dining_room?: boolean
    Quick_bite?: boolean
    Salad_bar?: boolean
    Small_plates?: boolean
    Vegan_options?: boolean
    Vegetarian_options?: boolean
    Wine?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoOfferings"]>



  export type BarsDataAdditionalInfoOfferingsSelectScalar = {
    Alcohol?: boolean
    All_you_can_eat?: boolean
    Arcade_games?: boolean
    Beer?: boolean
    Cocktails?: boolean
    Coffee?: boolean
    Dancing?: boolean
    Food?: boolean
    Food_at_bar?: boolean
    Halal_food?: boolean
    Happy_hour_drinks?: boolean
    Happy_hour_food?: boolean
    Hard_liquor?: boolean
    Healthy_options?: boolean
    Late_night_food?: boolean
    Organic_dishes?: boolean
    Prepared_foods?: boolean
    Private_dining_room?: boolean
    Quick_bite?: boolean
    Salad_bar?: boolean
    Small_plates?: boolean
    Vegan_options?: boolean
    Vegetarian_options?: boolean
    Wine?: boolean
  }

  export type BarsDataAdditionalInfoOfferingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Alcohol" | "All_you_can_eat" | "Arcade_games" | "Beer" | "Cocktails" | "Coffee" | "Dancing" | "Food" | "Food_at_bar" | "Halal_food" | "Happy_hour_drinks" | "Happy_hour_food" | "Hard_liquor" | "Healthy_options" | "Late_night_food" | "Organic_dishes" | "Prepared_foods" | "Private_dining_room" | "Quick_bite" | "Salad_bar" | "Small_plates" | "Vegan_options" | "Vegetarian_options" | "Wine", ExtArgs["result"]["barsDataAdditionalInfoOfferings"]>

  export type $BarsDataAdditionalInfoOfferingsPayload = {
    name: "BarsDataAdditionalInfoOfferings"
    objects: {}
    scalars: {
      Alcohol: boolean | null
      All_you_can_eat: boolean | null
      Arcade_games: boolean | null
      Beer: boolean | null
      Cocktails: boolean | null
      Coffee: boolean | null
      Dancing: boolean | null
      Food: boolean | null
      Food_at_bar: boolean | null
      Halal_food: boolean | null
      Happy_hour_drinks: boolean | null
      Happy_hour_food: boolean | null
      Hard_liquor: boolean | null
      Healthy_options: boolean | null
      Late_night_food: boolean | null
      Organic_dishes: boolean | null
      Prepared_foods: boolean | null
      Private_dining_room: boolean | null
      Quick_bite: boolean | null
      Salad_bar: boolean | null
      Small_plates: boolean | null
      Vegan_options: boolean | null
      Vegetarian_options: boolean | null
      Wine: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoOfferingsGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoOfferingsDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoOfferingsPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoOfferings model
   */
  interface BarsDataAdditionalInfoOfferingsFieldRefs {
    readonly Alcohol: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly All_you_can_eat: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Arcade_games: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Beer: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Cocktails: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Coffee: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Dancing: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Food: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Food_at_bar: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Halal_food: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Happy_hour_drinks: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Happy_hour_food: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Hard_liquor: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Healthy_options: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Late_night_food: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Organic_dishes: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Prepared_foods: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Private_dining_room: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Quick_bite: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Salad_bar: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Small_plates: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Vegan_options: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Vegetarian_options: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
    readonly Wine: FieldRef<"BarsDataAdditionalInfoOfferings", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoOfferings without action
   */
  export type BarsDataAdditionalInfoOfferingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoOfferings
     */
    select?: BarsDataAdditionalInfoOfferingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoOfferings
     */
    omit?: BarsDataAdditionalInfoOfferingsOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoParking
   */





  export type BarsDataAdditionalInfoParkingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Free_parking_garage?: boolean
    Free_parking_lot?: boolean
    Free_street_parking?: boolean
    On_site_parking?: boolean
    Paid_parking_garage?: boolean
    Paid_parking_lot?: boolean
    Paid_street_parking?: boolean
    Usually_difficult_to_find_a_space?: boolean
    Usually_plenty_of_parking?: boolean
    Usually_somewhat_difficult_to_find_a_space?: boolean
    Valet_parking?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoParking"]>



  export type BarsDataAdditionalInfoParkingSelectScalar = {
    Free_parking_garage?: boolean
    Free_parking_lot?: boolean
    Free_street_parking?: boolean
    On_site_parking?: boolean
    Paid_parking_garage?: boolean
    Paid_parking_lot?: boolean
    Paid_street_parking?: boolean
    Usually_difficult_to_find_a_space?: boolean
    Usually_plenty_of_parking?: boolean
    Usually_somewhat_difficult_to_find_a_space?: boolean
    Valet_parking?: boolean
  }

  export type BarsDataAdditionalInfoParkingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Free_parking_garage" | "Free_parking_lot" | "Free_street_parking" | "On_site_parking" | "Paid_parking_garage" | "Paid_parking_lot" | "Paid_street_parking" | "Usually_difficult_to_find_a_space" | "Usually_plenty_of_parking" | "Usually_somewhat_difficult_to_find_a_space" | "Valet_parking", ExtArgs["result"]["barsDataAdditionalInfoParking"]>

  export type $BarsDataAdditionalInfoParkingPayload = {
    name: "BarsDataAdditionalInfoParking"
    objects: {}
    scalars: {
      Free_parking_garage: boolean | null
      Free_parking_lot: boolean | null
      Free_street_parking: boolean | null
      On_site_parking: boolean | null
      Paid_parking_garage: boolean | null
      Paid_parking_lot: boolean | null
      Paid_street_parking: boolean | null
      Usually_difficult_to_find_a_space: boolean | null
      Usually_plenty_of_parking: boolean | null
      Usually_somewhat_difficult_to_find_a_space: boolean | null
      Valet_parking: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoParkingGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoParkingDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoParkingPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoParking model
   */
  interface BarsDataAdditionalInfoParkingFieldRefs {
    readonly Free_parking_garage: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
    readonly Free_parking_lot: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
    readonly Free_street_parking: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
    readonly On_site_parking: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
    readonly Paid_parking_garage: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
    readonly Paid_parking_lot: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
    readonly Paid_street_parking: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
    readonly Usually_difficult_to_find_a_space: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
    readonly Usually_plenty_of_parking: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
    readonly Usually_somewhat_difficult_to_find_a_space: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
    readonly Valet_parking: FieldRef<"BarsDataAdditionalInfoParking", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoParking without action
   */
  export type BarsDataAdditionalInfoParkingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoParking
     */
    select?: BarsDataAdditionalInfoParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoParking
     */
    omit?: BarsDataAdditionalInfoParkingOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoPayments
   */





  export type BarsDataAdditionalInfoPaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Cash_only?: boolean
    Checks?: boolean
    Credit_cards?: boolean
    Debit_cards?: boolean
    NFC_mobile_payments?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoPayments"]>



  export type BarsDataAdditionalInfoPaymentsSelectScalar = {
    Cash_only?: boolean
    Checks?: boolean
    Credit_cards?: boolean
    Debit_cards?: boolean
    NFC_mobile_payments?: boolean
  }

  export type BarsDataAdditionalInfoPaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Cash_only" | "Checks" | "Credit_cards" | "Debit_cards" | "NFC_mobile_payments", ExtArgs["result"]["barsDataAdditionalInfoPayments"]>

  export type $BarsDataAdditionalInfoPaymentsPayload = {
    name: "BarsDataAdditionalInfoPayments"
    objects: {}
    scalars: {
      Cash_only: boolean | null
      Checks: boolean | null
      Credit_cards: boolean | null
      Debit_cards: boolean | null
      NFC_mobile_payments: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoPaymentsGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoPaymentsDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoPaymentsPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoPayments model
   */
  interface BarsDataAdditionalInfoPaymentsFieldRefs {
    readonly Cash_only: FieldRef<"BarsDataAdditionalInfoPayments", 'Boolean'>
    readonly Checks: FieldRef<"BarsDataAdditionalInfoPayments", 'Boolean'>
    readonly Credit_cards: FieldRef<"BarsDataAdditionalInfoPayments", 'Boolean'>
    readonly Debit_cards: FieldRef<"BarsDataAdditionalInfoPayments", 'Boolean'>
    readonly NFC_mobile_payments: FieldRef<"BarsDataAdditionalInfoPayments", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoPayments without action
   */
  export type BarsDataAdditionalInfoPaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoPayments
     */
    select?: BarsDataAdditionalInfoPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoPayments
     */
    omit?: BarsDataAdditionalInfoPaymentsOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoPets
   */





  export type BarsDataAdditionalInfoPetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Dogs_allowed?: boolean
    Dogs_allowed_inside?: boolean
    Dogs_allowed_outside?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoPets"]>



  export type BarsDataAdditionalInfoPetsSelectScalar = {
    Dogs_allowed?: boolean
    Dogs_allowed_inside?: boolean
    Dogs_allowed_outside?: boolean
  }

  export type BarsDataAdditionalInfoPetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Dogs_allowed" | "Dogs_allowed_inside" | "Dogs_allowed_outside", ExtArgs["result"]["barsDataAdditionalInfoPets"]>

  export type $BarsDataAdditionalInfoPetsPayload = {
    name: "BarsDataAdditionalInfoPets"
    objects: {}
    scalars: {
      Dogs_allowed: boolean | null
      Dogs_allowed_inside: boolean | null
      Dogs_allowed_outside: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoPetsGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoPetsDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoPetsPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoPets model
   */
  interface BarsDataAdditionalInfoPetsFieldRefs {
    readonly Dogs_allowed: FieldRef<"BarsDataAdditionalInfoPets", 'Boolean'>
    readonly Dogs_allowed_inside: FieldRef<"BarsDataAdditionalInfoPets", 'Boolean'>
    readonly Dogs_allowed_outside: FieldRef<"BarsDataAdditionalInfoPets", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoPets without action
   */
  export type BarsDataAdditionalInfoPetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoPets
     */
    select?: BarsDataAdditionalInfoPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoPets
     */
    omit?: BarsDataAdditionalInfoPetsOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoPlanning
   */





  export type BarsDataAdditionalInfoPlanningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Accepts_reservations?: boolean
    Appointment_required?: boolean
    Brunch_reservations_recommended?: boolean
    Dinner_reservations_recommended?: boolean
    Lunch_reservations_recommended?: boolean
    Quick_visit?: boolean
    Reservations_required?: boolean
    Usually_a_wait?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoPlanning"]>



  export type BarsDataAdditionalInfoPlanningSelectScalar = {
    Accepts_reservations?: boolean
    Appointment_required?: boolean
    Brunch_reservations_recommended?: boolean
    Dinner_reservations_recommended?: boolean
    Lunch_reservations_recommended?: boolean
    Quick_visit?: boolean
    Reservations_required?: boolean
    Usually_a_wait?: boolean
  }

  export type BarsDataAdditionalInfoPlanningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Accepts_reservations" | "Appointment_required" | "Brunch_reservations_recommended" | "Dinner_reservations_recommended" | "Lunch_reservations_recommended" | "Quick_visit" | "Reservations_required" | "Usually_a_wait", ExtArgs["result"]["barsDataAdditionalInfoPlanning"]>

  export type $BarsDataAdditionalInfoPlanningPayload = {
    name: "BarsDataAdditionalInfoPlanning"
    objects: {}
    scalars: {
      Accepts_reservations: boolean | null
      Appointment_required: boolean | null
      Brunch_reservations_recommended: boolean | null
      Dinner_reservations_recommended: boolean | null
      Lunch_reservations_recommended: boolean | null
      Quick_visit: boolean | null
      Reservations_required: boolean | null
      Usually_a_wait: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoPlanningGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoPlanningDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoPlanningPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoPlanning model
   */
  interface BarsDataAdditionalInfoPlanningFieldRefs {
    readonly Accepts_reservations: FieldRef<"BarsDataAdditionalInfoPlanning", 'Boolean'>
    readonly Appointment_required: FieldRef<"BarsDataAdditionalInfoPlanning", 'Boolean'>
    readonly Brunch_reservations_recommended: FieldRef<"BarsDataAdditionalInfoPlanning", 'Boolean'>
    readonly Dinner_reservations_recommended: FieldRef<"BarsDataAdditionalInfoPlanning", 'Boolean'>
    readonly Lunch_reservations_recommended: FieldRef<"BarsDataAdditionalInfoPlanning", 'Boolean'>
    readonly Quick_visit: FieldRef<"BarsDataAdditionalInfoPlanning", 'Boolean'>
    readonly Reservations_required: FieldRef<"BarsDataAdditionalInfoPlanning", 'Boolean'>
    readonly Usually_a_wait: FieldRef<"BarsDataAdditionalInfoPlanning", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoPlanning without action
   */
  export type BarsDataAdditionalInfoPlanningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoPlanning
     */
    select?: BarsDataAdditionalInfoPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoPlanning
     */
    omit?: BarsDataAdditionalInfoPlanningOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoPopularFor
   */





  export type BarsDataAdditionalInfoPopularForSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Breakfast?: boolean
    Dinner?: boolean
    Good_for_working_on_laptop?: boolean
    Lunch?: boolean
    Solo_dining?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoPopularFor"]>



  export type BarsDataAdditionalInfoPopularForSelectScalar = {
    Breakfast?: boolean
    Dinner?: boolean
    Good_for_working_on_laptop?: boolean
    Lunch?: boolean
    Solo_dining?: boolean
  }

  export type BarsDataAdditionalInfoPopularForOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Breakfast" | "Dinner" | "Good_for_working_on_laptop" | "Lunch" | "Solo_dining", ExtArgs["result"]["barsDataAdditionalInfoPopularFor"]>

  export type $BarsDataAdditionalInfoPopularForPayload = {
    name: "BarsDataAdditionalInfoPopularFor"
    objects: {}
    scalars: {
      Breakfast: boolean | null
      Dinner: boolean | null
      Good_for_working_on_laptop: boolean | null
      Lunch: boolean | null
      Solo_dining: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoPopularForGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoPopularForDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoPopularForPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoPopularFor model
   */
  interface BarsDataAdditionalInfoPopularForFieldRefs {
    readonly Breakfast: FieldRef<"BarsDataAdditionalInfoPopularFor", 'Boolean'>
    readonly Dinner: FieldRef<"BarsDataAdditionalInfoPopularFor", 'Boolean'>
    readonly Good_for_working_on_laptop: FieldRef<"BarsDataAdditionalInfoPopularFor", 'Boolean'>
    readonly Lunch: FieldRef<"BarsDataAdditionalInfoPopularFor", 'Boolean'>
    readonly Solo_dining: FieldRef<"BarsDataAdditionalInfoPopularFor", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoPopularFor without action
   */
  export type BarsDataAdditionalInfoPopularForDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoPopularFor
     */
    select?: BarsDataAdditionalInfoPopularForSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoPopularFor
     */
    omit?: BarsDataAdditionalInfoPopularForOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataAdditionalInfoServiceOptions
   */





  export type BarsDataAdditionalInfoServiceOptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Curbside_pickup?: boolean
    Delivery?: boolean
    Dine_in?: boolean
    Drive_through?: boolean
    In_store_pickup?: boolean
    In_store_shopping?: boolean
    No_contact_delivery?: boolean
    Onsite_services?: boolean
    Outdoor_seating?: boolean
    Takeout?: boolean
  }, ExtArgs["result"]["barsDataAdditionalInfoServiceOptions"]>



  export type BarsDataAdditionalInfoServiceOptionsSelectScalar = {
    Curbside_pickup?: boolean
    Delivery?: boolean
    Dine_in?: boolean
    Drive_through?: boolean
    In_store_pickup?: boolean
    In_store_shopping?: boolean
    No_contact_delivery?: boolean
    Onsite_services?: boolean
    Outdoor_seating?: boolean
    Takeout?: boolean
  }

  export type BarsDataAdditionalInfoServiceOptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Curbside_pickup" | "Delivery" | "Dine_in" | "Drive_through" | "In_store_pickup" | "In_store_shopping" | "No_contact_delivery" | "Onsite_services" | "Outdoor_seating" | "Takeout", ExtArgs["result"]["barsDataAdditionalInfoServiceOptions"]>

  export type $BarsDataAdditionalInfoServiceOptionsPayload = {
    name: "BarsDataAdditionalInfoServiceOptions"
    objects: {}
    scalars: {
      Curbside_pickup: boolean | null
      Delivery: boolean | null
      Dine_in: boolean | null
      Drive_through: boolean | null
      In_store_pickup: boolean | null
      In_store_shopping: boolean | null
      No_contact_delivery: boolean | null
      Onsite_services: boolean | null
      Outdoor_seating: boolean | null
      Takeout: boolean | null
    }
    composites: {}
  }

  type BarsDataAdditionalInfoServiceOptionsGetPayload<S extends boolean | null | undefined | BarsDataAdditionalInfoServiceOptionsDefaultArgs> = $Result.GetResult<Prisma.$BarsDataAdditionalInfoServiceOptionsPayload, S>





  /**
   * Fields of the BarsDataAdditionalInfoServiceOptions model
   */
  interface BarsDataAdditionalInfoServiceOptionsFieldRefs {
    readonly Curbside_pickup: FieldRef<"BarsDataAdditionalInfoServiceOptions", 'Boolean'>
    readonly Delivery: FieldRef<"BarsDataAdditionalInfoServiceOptions", 'Boolean'>
    readonly Dine_in: FieldRef<"BarsDataAdditionalInfoServiceOptions", 'Boolean'>
    readonly Drive_through: FieldRef<"BarsDataAdditionalInfoServiceOptions", 'Boolean'>
    readonly In_store_pickup: FieldRef<"BarsDataAdditionalInfoServiceOptions", 'Boolean'>
    readonly In_store_shopping: FieldRef<"BarsDataAdditionalInfoServiceOptions", 'Boolean'>
    readonly No_contact_delivery: FieldRef<"BarsDataAdditionalInfoServiceOptions", 'Boolean'>
    readonly Onsite_services: FieldRef<"BarsDataAdditionalInfoServiceOptions", 'Boolean'>
    readonly Outdoor_seating: FieldRef<"BarsDataAdditionalInfoServiceOptions", 'Boolean'>
    readonly Takeout: FieldRef<"BarsDataAdditionalInfoServiceOptions", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataAdditionalInfoServiceOptions without action
   */
  export type BarsDataAdditionalInfoServiceOptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataAdditionalInfoServiceOptions
     */
    select?: BarsDataAdditionalInfoServiceOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataAdditionalInfoServiceOptions
     */
    omit?: BarsDataAdditionalInfoServiceOptionsOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataLocation
   */





  export type BarsDataLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["barsDataLocation"]>



  export type BarsDataLocationSelectScalar = {
    lat?: boolean
    lng?: boolean
  }

  export type BarsDataLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"lat" | "lng", ExtArgs["result"]["barsDataLocation"]>

  export type $BarsDataLocationPayload = {
    name: "BarsDataLocation"
    objects: {}
    scalars: {
      lat: number
      lng: number
    }
    composites: {}
  }

  type BarsDataLocationGetPayload<S extends boolean | null | undefined | BarsDataLocationDefaultArgs> = $Result.GetResult<Prisma.$BarsDataLocationPayload, S>





  /**
   * Fields of the BarsDataLocation model
   */
  interface BarsDataLocationFieldRefs {
    readonly lat: FieldRef<"BarsDataLocation", 'Float'>
    readonly lng: FieldRef<"BarsDataLocation", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataLocation without action
   */
  export type BarsDataLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataLocation
     */
    select?: BarsDataLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataLocation
     */
    omit?: BarsDataLocationOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataOpeningHours
   */





  export type BarsDataOpeningHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    day?: boolean
    hours?: boolean
  }, ExtArgs["result"]["barsDataOpeningHours"]>



  export type BarsDataOpeningHoursSelectScalar = {
    day?: boolean
    hours?: boolean
  }

  export type BarsDataOpeningHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"day" | "hours", ExtArgs["result"]["barsDataOpeningHours"]>

  export type $BarsDataOpeningHoursPayload = {
    name: "BarsDataOpeningHours"
    objects: {}
    scalars: {
      day: string
      hours: string
    }
    composites: {}
  }

  type BarsDataOpeningHoursGetPayload<S extends boolean | null | undefined | BarsDataOpeningHoursDefaultArgs> = $Result.GetResult<Prisma.$BarsDataOpeningHoursPayload, S>





  /**
   * Fields of the BarsDataOpeningHours model
   */
  interface BarsDataOpeningHoursFieldRefs {
    readonly day: FieldRef<"BarsDataOpeningHours", 'String'>
    readonly hours: FieldRef<"BarsDataOpeningHours", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataOpeningHours without action
   */
  export type BarsDataOpeningHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataOpeningHours
     */
    select?: BarsDataOpeningHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataOpeningHours
     */
    omit?: BarsDataOpeningHoursOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataReviews
   */





  export type BarsDataReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    isLocalGuide?: boolean
    likesCount?: boolean
    name?: boolean
    originalLanguage?: boolean
    publishAt?: boolean
    publishedAtDate?: boolean
    rating?: boolean
    responseFromOwnerDate?: boolean
    responseFromOwnerText?: boolean
    reviewContext?: boolean | BarsDataReviewsReviewContextDefaultArgs<ExtArgs>
    reviewDetailedRating?: boolean | BarsDataReviewsReviewDetailedRatingDefaultArgs<ExtArgs>
    reviewId?: boolean
    reviewImageUrls?: boolean
    reviewOrigin?: boolean
    reviewUrl?: boolean
    reviewerId?: boolean
    reviewerNumberOfReviews?: boolean
    reviewerPhotoUrl?: boolean
    reviewerUrl?: boolean
    stars?: boolean
    text?: boolean
    textTranslated?: boolean
    translatedLanguage?: boolean
    visitedIn?: boolean
  }, ExtArgs["result"]["barsDataReviews"]>



  export type BarsDataReviewsSelectScalar = {
    isLocalGuide?: boolean
    likesCount?: boolean
    name?: boolean
    originalLanguage?: boolean
    publishAt?: boolean
    publishedAtDate?: boolean
    rating?: boolean
    responseFromOwnerDate?: boolean
    responseFromOwnerText?: boolean
    reviewId?: boolean
    reviewImageUrls?: boolean
    reviewOrigin?: boolean
    reviewUrl?: boolean
    reviewerId?: boolean
    reviewerNumberOfReviews?: boolean
    reviewerPhotoUrl?: boolean
    reviewerUrl?: boolean
    stars?: boolean
    text?: boolean
    textTranslated?: boolean
    translatedLanguage?: boolean
    visitedIn?: boolean
  }

  export type BarsDataReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"isLocalGuide" | "likesCount" | "name" | "originalLanguage" | "publishAt" | "publishedAtDate" | "rating" | "responseFromOwnerDate" | "responseFromOwnerText" | "reviewContext" | "reviewDetailedRating" | "reviewId" | "reviewImageUrls" | "reviewOrigin" | "reviewUrl" | "reviewerId" | "reviewerNumberOfReviews" | "reviewerPhotoUrl" | "reviewerUrl" | "stars" | "text" | "textTranslated" | "translatedLanguage" | "visitedIn", ExtArgs["result"]["barsDataReviews"]>
  export type BarsDataReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BarsDataReviewsPayload = {
    name: "BarsDataReviews"
    objects: {}
    scalars: {
      isLocalGuide: boolean
      likesCount: number
      name: string
      originalLanguage: string | null
      publishAt: string
      publishedAtDate: string
      rating: string | null
      responseFromOwnerDate: string | null
      responseFromOwnerText: string | null
      reviewId: string
      reviewImageUrls: string[]
      reviewOrigin: string
      reviewUrl: string
      reviewerId: string | null
      reviewerNumberOfReviews: number | null
      reviewerPhotoUrl: string
      reviewerUrl: string
      stars: number | null
      text: string | null
      textTranslated: string | null
      translatedLanguage: string | null
      /**
       * Could not determine type: the field only had null or empty values in the sample set.
       */
      visitedIn: Prisma.JsonValue | null
    }
    composites: {
      reviewContext: Prisma.$BarsDataReviewsReviewContextPayload
      reviewDetailedRating: Prisma.$BarsDataReviewsReviewDetailedRatingPayload
    }
  }

  type BarsDataReviewsGetPayload<S extends boolean | null | undefined | BarsDataReviewsDefaultArgs> = $Result.GetResult<Prisma.$BarsDataReviewsPayload, S>





  /**
   * Fields of the BarsDataReviews model
   */
  interface BarsDataReviewsFieldRefs {
    readonly isLocalGuide: FieldRef<"BarsDataReviews", 'Boolean'>
    readonly likesCount: FieldRef<"BarsDataReviews", 'Int'>
    readonly name: FieldRef<"BarsDataReviews", 'String'>
    readonly originalLanguage: FieldRef<"BarsDataReviews", 'String'>
    readonly publishAt: FieldRef<"BarsDataReviews", 'String'>
    readonly publishedAtDate: FieldRef<"BarsDataReviews", 'String'>
    readonly rating: FieldRef<"BarsDataReviews", 'String'>
    readonly responseFromOwnerDate: FieldRef<"BarsDataReviews", 'String'>
    readonly responseFromOwnerText: FieldRef<"BarsDataReviews", 'String'>
    readonly reviewId: FieldRef<"BarsDataReviews", 'String'>
    readonly reviewImageUrls: FieldRef<"BarsDataReviews", 'String[]'>
    readonly reviewOrigin: FieldRef<"BarsDataReviews", 'String'>
    readonly reviewUrl: FieldRef<"BarsDataReviews", 'String'>
    readonly reviewerId: FieldRef<"BarsDataReviews", 'String'>
    readonly reviewerNumberOfReviews: FieldRef<"BarsDataReviews", 'Int'>
    readonly reviewerPhotoUrl: FieldRef<"BarsDataReviews", 'String'>
    readonly reviewerUrl: FieldRef<"BarsDataReviews", 'String'>
    readonly stars: FieldRef<"BarsDataReviews", 'Int'>
    readonly text: FieldRef<"BarsDataReviews", 'String'>
    readonly textTranslated: FieldRef<"BarsDataReviews", 'String'>
    readonly translatedLanguage: FieldRef<"BarsDataReviews", 'String'>
    readonly visitedIn: FieldRef<"BarsDataReviews", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataReviews without action
   */
  export type BarsDataReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataReviews
     */
    select?: BarsDataReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataReviews
     */
    omit?: BarsDataReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsDataReviewsInclude<ExtArgs> | null
  }


  /**
   * Model BarsDataReviewsReviewContext
   */





  export type BarsDataReviewsReviewContextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Meal_type?: boolean
    Noise_level?: boolean
    Parking_space?: boolean
    Price_per_person?: boolean
    Recommendation_for_vegetarians?: boolean
    Reservation?: boolean
    Service?: boolean
    Travel_group?: boolean
    Trip_type?: boolean
    Wait_time?: boolean
  }, ExtArgs["result"]["barsDataReviewsReviewContext"]>



  export type BarsDataReviewsReviewContextSelectScalar = {
    Meal_type?: boolean
    Noise_level?: boolean
    Parking_space?: boolean
    Price_per_person?: boolean
    Recommendation_for_vegetarians?: boolean
    Reservation?: boolean
    Service?: boolean
    Travel_group?: boolean
    Trip_type?: boolean
    Wait_time?: boolean
  }

  export type BarsDataReviewsReviewContextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Meal_type" | "Noise_level" | "Parking_space" | "Price_per_person" | "Recommendation_for_vegetarians" | "Reservation" | "Service" | "Travel_group" | "Trip_type" | "Wait_time", ExtArgs["result"]["barsDataReviewsReviewContext"]>

  export type $BarsDataReviewsReviewContextPayload = {
    name: "BarsDataReviewsReviewContext"
    objects: {}
    scalars: {
      Meal_type: string | null
      Noise_level: string | null
      Parking_space: string | null
      Price_per_person: string | null
      Recommendation_for_vegetarians: string | null
      Reservation: string | null
      Service: string | null
      Travel_group: string | null
      Trip_type: string | null
      Wait_time: string | null
    }
    composites: {}
  }

  type BarsDataReviewsReviewContextGetPayload<S extends boolean | null | undefined | BarsDataReviewsReviewContextDefaultArgs> = $Result.GetResult<Prisma.$BarsDataReviewsReviewContextPayload, S>





  /**
   * Fields of the BarsDataReviewsReviewContext model
   */
  interface BarsDataReviewsReviewContextFieldRefs {
    readonly Meal_type: FieldRef<"BarsDataReviewsReviewContext", 'String'>
    readonly Noise_level: FieldRef<"BarsDataReviewsReviewContext", 'String'>
    readonly Parking_space: FieldRef<"BarsDataReviewsReviewContext", 'String'>
    readonly Price_per_person: FieldRef<"BarsDataReviewsReviewContext", 'String'>
    readonly Recommendation_for_vegetarians: FieldRef<"BarsDataReviewsReviewContext", 'String'>
    readonly Reservation: FieldRef<"BarsDataReviewsReviewContext", 'String'>
    readonly Service: FieldRef<"BarsDataReviewsReviewContext", 'String'>
    readonly Travel_group: FieldRef<"BarsDataReviewsReviewContext", 'String'>
    readonly Trip_type: FieldRef<"BarsDataReviewsReviewContext", 'String'>
    readonly Wait_time: FieldRef<"BarsDataReviewsReviewContext", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataReviewsReviewContext without action
   */
  export type BarsDataReviewsReviewContextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataReviewsReviewContext
     */
    select?: BarsDataReviewsReviewContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataReviewsReviewContext
     */
    omit?: BarsDataReviewsReviewContextOmit<ExtArgs> | null
  }


  /**
   * Model BarsDataReviewsReviewDetailedRating
   */





  export type BarsDataReviewsReviewDetailedRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Atmosphere?: boolean
    Food?: boolean
    Location?: boolean
    Rooms?: boolean
    Service?: boolean
  }, ExtArgs["result"]["barsDataReviewsReviewDetailedRating"]>



  export type BarsDataReviewsReviewDetailedRatingSelectScalar = {
    Atmosphere?: boolean
    Food?: boolean
    Location?: boolean
    Rooms?: boolean
    Service?: boolean
  }

  export type BarsDataReviewsReviewDetailedRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Atmosphere" | "Food" | "Location" | "Rooms" | "Service", ExtArgs["result"]["barsDataReviewsReviewDetailedRating"]>

  export type $BarsDataReviewsReviewDetailedRatingPayload = {
    name: "BarsDataReviewsReviewDetailedRating"
    objects: {}
    scalars: {
      Atmosphere: number | null
      Food: number | null
      Location: number | null
      Rooms: number | null
      Service: number | null
    }
    composites: {}
  }

  type BarsDataReviewsReviewDetailedRatingGetPayload<S extends boolean | null | undefined | BarsDataReviewsReviewDetailedRatingDefaultArgs> = $Result.GetResult<Prisma.$BarsDataReviewsReviewDetailedRatingPayload, S>





  /**
   * Fields of the BarsDataReviewsReviewDetailedRating model
   */
  interface BarsDataReviewsReviewDetailedRatingFieldRefs {
    readonly Atmosphere: FieldRef<"BarsDataReviewsReviewDetailedRating", 'Int'>
    readonly Food: FieldRef<"BarsDataReviewsReviewDetailedRating", 'Int'>
    readonly Location: FieldRef<"BarsDataReviewsReviewDetailedRating", 'Int'>
    readonly Rooms: FieldRef<"BarsDataReviewsReviewDetailedRating", 'Int'>
    readonly Service: FieldRef<"BarsDataReviewsReviewDetailedRating", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BarsDataReviewsReviewDetailedRating without action
   */
  export type BarsDataReviewsReviewDetailedRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarsDataReviewsReviewDetailedRating
     */
    select?: BarsDataReviewsReviewDetailedRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarsDataReviewsReviewDetailedRating
     */
    omit?: BarsDataReviewsReviewDetailedRatingOmit<ExtArgs> | null
  }


  /**
   * Model barsData
   */

  export type AggregateBarsData = {
    _count: BarsDataCountAggregateOutputType | null
    _min: BarsDataMinAggregateOutputType | null
    _max: BarsDataMaxAggregateOutputType | null
  }

  export type BarsDataMinAggregateOutputType = {
    id: string | null
    address: string | null
    categoryName: string | null
    description: string | null
    imageUrl: string | null
    neighborhood: string | null
    phoneUnformatted: string | null
    postalCode: string | null
    title: string | null
    website: string | null
  }

  export type BarsDataMaxAggregateOutputType = {
    id: string | null
    address: string | null
    categoryName: string | null
    description: string | null
    imageUrl: string | null
    neighborhood: string | null
    phoneUnformatted: string | null
    postalCode: string | null
    title: string | null
    website: string | null
  }

  export type BarsDataCountAggregateOutputType = {
    id: number
    address: number
    categories: number
    categoryName: number
    description: number
    facebooks: number
    imageUrl: number
    imageUrls: number
    instagrams: number
    neighborhood: number
    phoneUnformatted: number
    postalCode: number
    title: number
    website: number
    _all: number
  }


  export type BarsDataMinAggregateInputType = {
    id?: true
    address?: true
    categoryName?: true
    description?: true
    imageUrl?: true
    neighborhood?: true
    phoneUnformatted?: true
    postalCode?: true
    title?: true
    website?: true
  }

  export type BarsDataMaxAggregateInputType = {
    id?: true
    address?: true
    categoryName?: true
    description?: true
    imageUrl?: true
    neighborhood?: true
    phoneUnformatted?: true
    postalCode?: true
    title?: true
    website?: true
  }

  export type BarsDataCountAggregateInputType = {
    id?: true
    address?: true
    categories?: true
    categoryName?: true
    description?: true
    facebooks?: true
    imageUrl?: true
    imageUrls?: true
    instagrams?: true
    neighborhood?: true
    phoneUnformatted?: true
    postalCode?: true
    title?: true
    website?: true
    _all?: true
  }

  export type BarsDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barsData to aggregate.
     */
    where?: barsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barsData to fetch.
     */
    orderBy?: barsDataOrderByWithRelationInput | barsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: barsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned barsData
    **/
    _count?: true | BarsDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarsDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarsDataMaxAggregateInputType
  }

  export type GetBarsDataAggregateType<T extends BarsDataAggregateArgs> = {
        [P in keyof T & keyof AggregateBarsData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarsData[P]>
      : GetScalarType<T[P], AggregateBarsData[P]>
  }




  export type barsDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barsDataWhereInput
    orderBy?: barsDataOrderByWithAggregationInput | barsDataOrderByWithAggregationInput[]
    by: BarsDataScalarFieldEnum[] | BarsDataScalarFieldEnum
    having?: barsDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarsDataCountAggregateInputType | true
    _min?: BarsDataMinAggregateInputType
    _max?: BarsDataMaxAggregateInputType
  }

  export type BarsDataGroupByOutputType = {
    id: string
    address: string
    categories: string[]
    categoryName: string
    description: string | null
    facebooks: string[]
    imageUrl: string
    imageUrls: string[]
    instagrams: string[]
    neighborhood: string | null
    phoneUnformatted: string | null
    postalCode: string | null
    title: string
    website: string
    _count: BarsDataCountAggregateOutputType | null
    _min: BarsDataMinAggregateOutputType | null
    _max: BarsDataMaxAggregateOutputType | null
  }

  type GetBarsDataGroupByPayload<T extends barsDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarsDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarsDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarsDataGroupByOutputType[P]>
            : GetScalarType<T[P], BarsDataGroupByOutputType[P]>
        }
      >
    >


  export type barsDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    additionalInfo?: boolean | BarsDataAdditionalInfoDefaultArgs<ExtArgs>
    address?: boolean
    categories?: boolean
    categoryName?: boolean
    description?: boolean
    facebooks?: boolean
    imageUrl?: boolean
    imageUrls?: boolean
    instagrams?: boolean
    location?: boolean | BarsDataLocationDefaultArgs<ExtArgs>
    neighborhood?: boolean
    openingHours?: boolean | BarsDataOpeningHoursDefaultArgs<ExtArgs>
    phoneUnformatted?: boolean
    postalCode?: boolean
    reviews?: boolean | BarsDataReviewsDefaultArgs<ExtArgs>
    title?: boolean
    website?: boolean
  }, ExtArgs["result"]["barsData"]>



  export type barsDataSelectScalar = {
    id?: boolean
    address?: boolean
    categories?: boolean
    categoryName?: boolean
    description?: boolean
    facebooks?: boolean
    imageUrl?: boolean
    imageUrls?: boolean
    instagrams?: boolean
    neighborhood?: boolean
    phoneUnformatted?: boolean
    postalCode?: boolean
    title?: boolean
    website?: boolean
  }

  export type barsDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "additionalInfo" | "address" | "categories" | "categoryName" | "description" | "facebooks" | "imageUrl" | "imageUrls" | "instagrams" | "location" | "neighborhood" | "openingHours" | "phoneUnformatted" | "postalCode" | "reviews" | "title" | "website", ExtArgs["result"]["barsData"]>
  export type barsDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $barsDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "barsData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      categories: string[]
      categoryName: string
      description: string | null
      facebooks: string[]
      imageUrl: string
      imageUrls: string[]
      instagrams: string[]
      neighborhood: string | null
      phoneUnformatted: string | null
      postalCode: string | null
      title: string
      website: string
    }, ExtArgs["result"]["barsData"]>
    composites: {
      additionalInfo: Prisma.$BarsDataAdditionalInfoPayload
      location: Prisma.$BarsDataLocationPayload
      openingHours: Prisma.$BarsDataOpeningHoursPayload[]
      reviews: Prisma.$BarsDataReviewsPayload[]
    }
  }

  type barsDataGetPayload<S extends boolean | null | undefined | barsDataDefaultArgs> = $Result.GetResult<Prisma.$barsDataPayload, S>

  type barsDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<barsDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarsDataCountAggregateInputType | true
    }

  export interface barsDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['barsData'], meta: { name: 'barsData' } }
    /**
     * Find zero or one BarsData that matches the filter.
     * @param {barsDataFindUniqueArgs} args - Arguments to find a BarsData
     * @example
     * // Get one BarsData
     * const barsData = await prisma.barsData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends barsDataFindUniqueArgs>(args: SelectSubset<T, barsDataFindUniqueArgs<ExtArgs>>): Prisma__barsDataClient<$Result.GetResult<Prisma.$barsDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarsData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {barsDataFindUniqueOrThrowArgs} args - Arguments to find a BarsData
     * @example
     * // Get one BarsData
     * const barsData = await prisma.barsData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends barsDataFindUniqueOrThrowArgs>(args: SelectSubset<T, barsDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__barsDataClient<$Result.GetResult<Prisma.$barsDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarsData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barsDataFindFirstArgs} args - Arguments to find a BarsData
     * @example
     * // Get one BarsData
     * const barsData = await prisma.barsData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends barsDataFindFirstArgs>(args?: SelectSubset<T, barsDataFindFirstArgs<ExtArgs>>): Prisma__barsDataClient<$Result.GetResult<Prisma.$barsDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarsData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barsDataFindFirstOrThrowArgs} args - Arguments to find a BarsData
     * @example
     * // Get one BarsData
     * const barsData = await prisma.barsData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends barsDataFindFirstOrThrowArgs>(args?: SelectSubset<T, barsDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__barsDataClient<$Result.GetResult<Prisma.$barsDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarsData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barsDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarsData
     * const barsData = await prisma.barsData.findMany()
     * 
     * // Get first 10 BarsData
     * const barsData = await prisma.barsData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barsDataWithIdOnly = await prisma.barsData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends barsDataFindManyArgs>(args?: SelectSubset<T, barsDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barsDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarsData.
     * @param {barsDataCreateArgs} args - Arguments to create a BarsData.
     * @example
     * // Create one BarsData
     * const BarsData = await prisma.barsData.create({
     *   data: {
     *     // ... data to create a BarsData
     *   }
     * })
     * 
     */
    create<T extends barsDataCreateArgs>(args: SelectSubset<T, barsDataCreateArgs<ExtArgs>>): Prisma__barsDataClient<$Result.GetResult<Prisma.$barsDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarsData.
     * @param {barsDataCreateManyArgs} args - Arguments to create many BarsData.
     * @example
     * // Create many BarsData
     * const barsData = await prisma.barsData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends barsDataCreateManyArgs>(args?: SelectSubset<T, barsDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BarsData.
     * @param {barsDataDeleteArgs} args - Arguments to delete one BarsData.
     * @example
     * // Delete one BarsData
     * const BarsData = await prisma.barsData.delete({
     *   where: {
     *     // ... filter to delete one BarsData
     *   }
     * })
     * 
     */
    delete<T extends barsDataDeleteArgs>(args: SelectSubset<T, barsDataDeleteArgs<ExtArgs>>): Prisma__barsDataClient<$Result.GetResult<Prisma.$barsDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarsData.
     * @param {barsDataUpdateArgs} args - Arguments to update one BarsData.
     * @example
     * // Update one BarsData
     * const barsData = await prisma.barsData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends barsDataUpdateArgs>(args: SelectSubset<T, barsDataUpdateArgs<ExtArgs>>): Prisma__barsDataClient<$Result.GetResult<Prisma.$barsDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarsData.
     * @param {barsDataDeleteManyArgs} args - Arguments to filter BarsData to delete.
     * @example
     * // Delete a few BarsData
     * const { count } = await prisma.barsData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends barsDataDeleteManyArgs>(args?: SelectSubset<T, barsDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barsDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarsData
     * const barsData = await prisma.barsData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends barsDataUpdateManyArgs>(args: SelectSubset<T, barsDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BarsData.
     * @param {barsDataUpsertArgs} args - Arguments to update or create a BarsData.
     * @example
     * // Update or create a BarsData
     * const barsData = await prisma.barsData.upsert({
     *   create: {
     *     // ... data to create a BarsData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarsData we want to update
     *   }
     * })
     */
    upsert<T extends barsDataUpsertArgs>(args: SelectSubset<T, barsDataUpsertArgs<ExtArgs>>): Prisma__barsDataClient<$Result.GetResult<Prisma.$barsDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarsData that matches the filter.
     * @param {barsDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const barsData = await prisma.barsData.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: barsDataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BarsData.
     * @param {barsDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const barsData = await prisma.barsData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: barsDataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of BarsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barsDataCountArgs} args - Arguments to filter BarsData to count.
     * @example
     * // Count the number of BarsData
     * const count = await prisma.barsData.count({
     *   where: {
     *     // ... the filter for the BarsData we want to count
     *   }
     * })
    **/
    count<T extends barsDataCountArgs>(
      args?: Subset<T, barsDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarsDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarsDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarsDataAggregateArgs>(args: Subset<T, BarsDataAggregateArgs>): Prisma.PrismaPromise<GetBarsDataAggregateType<T>>

    /**
     * Group by BarsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barsDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends barsDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: barsDataGroupByArgs['orderBy'] }
        : { orderBy?: barsDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, barsDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarsDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the barsData model
   */
  readonly fields: barsDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for barsData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__barsDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the barsData model
   */
  interface barsDataFieldRefs {
    readonly id: FieldRef<"barsData", 'String'>
    readonly address: FieldRef<"barsData", 'String'>
    readonly categories: FieldRef<"barsData", 'String[]'>
    readonly categoryName: FieldRef<"barsData", 'String'>
    readonly description: FieldRef<"barsData", 'String'>
    readonly facebooks: FieldRef<"barsData", 'String[]'>
    readonly imageUrl: FieldRef<"barsData", 'String'>
    readonly imageUrls: FieldRef<"barsData", 'String[]'>
    readonly instagrams: FieldRef<"barsData", 'String[]'>
    readonly neighborhood: FieldRef<"barsData", 'String'>
    readonly phoneUnformatted: FieldRef<"barsData", 'String'>
    readonly postalCode: FieldRef<"barsData", 'String'>
    readonly title: FieldRef<"barsData", 'String'>
    readonly website: FieldRef<"barsData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * barsData findUnique
   */
  export type barsDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barsData
     */
    select?: barsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barsData
     */
    omit?: barsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barsDataInclude<ExtArgs> | null
    /**
     * Filter, which barsData to fetch.
     */
    where: barsDataWhereUniqueInput
  }

  /**
   * barsData findUniqueOrThrow
   */
  export type barsDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barsData
     */
    select?: barsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barsData
     */
    omit?: barsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barsDataInclude<ExtArgs> | null
    /**
     * Filter, which barsData to fetch.
     */
    where: barsDataWhereUniqueInput
  }

  /**
   * barsData findFirst
   */
  export type barsDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barsData
     */
    select?: barsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barsData
     */
    omit?: barsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barsDataInclude<ExtArgs> | null
    /**
     * Filter, which barsData to fetch.
     */
    where?: barsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barsData to fetch.
     */
    orderBy?: barsDataOrderByWithRelationInput | barsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barsData.
     */
    cursor?: barsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barsData.
     */
    distinct?: BarsDataScalarFieldEnum | BarsDataScalarFieldEnum[]
  }

  /**
   * barsData findFirstOrThrow
   */
  export type barsDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barsData
     */
    select?: barsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barsData
     */
    omit?: barsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barsDataInclude<ExtArgs> | null
    /**
     * Filter, which barsData to fetch.
     */
    where?: barsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barsData to fetch.
     */
    orderBy?: barsDataOrderByWithRelationInput | barsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barsData.
     */
    cursor?: barsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barsData.
     */
    distinct?: BarsDataScalarFieldEnum | BarsDataScalarFieldEnum[]
  }

  /**
   * barsData findMany
   */
  export type barsDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barsData
     */
    select?: barsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barsData
     */
    omit?: barsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barsDataInclude<ExtArgs> | null
    /**
     * Filter, which barsData to fetch.
     */
    where?: barsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barsData to fetch.
     */
    orderBy?: barsDataOrderByWithRelationInput | barsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing barsData.
     */
    cursor?: barsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barsData.
     */
    skip?: number
    distinct?: BarsDataScalarFieldEnum | BarsDataScalarFieldEnum[]
  }

  /**
   * barsData create
   */
  export type barsDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barsData
     */
    select?: barsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barsData
     */
    omit?: barsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barsDataInclude<ExtArgs> | null
    /**
     * The data needed to create a barsData.
     */
    data: XOR<barsDataCreateInput, barsDataUncheckedCreateInput>
  }

  /**
   * barsData createMany
   */
  export type barsDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many barsData.
     */
    data: barsDataCreateManyInput | barsDataCreateManyInput[]
  }

  /**
   * barsData update
   */
  export type barsDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barsData
     */
    select?: barsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barsData
     */
    omit?: barsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barsDataInclude<ExtArgs> | null
    /**
     * The data needed to update a barsData.
     */
    data: XOR<barsDataUpdateInput, barsDataUncheckedUpdateInput>
    /**
     * Choose, which barsData to update.
     */
    where: barsDataWhereUniqueInput
  }

  /**
   * barsData updateMany
   */
  export type barsDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update barsData.
     */
    data: XOR<barsDataUpdateManyMutationInput, barsDataUncheckedUpdateManyInput>
    /**
     * Filter which barsData to update
     */
    where?: barsDataWhereInput
    /**
     * Limit how many barsData to update.
     */
    limit?: number
  }

  /**
   * barsData upsert
   */
  export type barsDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barsData
     */
    select?: barsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barsData
     */
    omit?: barsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barsDataInclude<ExtArgs> | null
    /**
     * The filter to search for the barsData to update in case it exists.
     */
    where: barsDataWhereUniqueInput
    /**
     * In case the barsData found by the `where` argument doesn't exist, create a new barsData with this data.
     */
    create: XOR<barsDataCreateInput, barsDataUncheckedCreateInput>
    /**
     * In case the barsData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<barsDataUpdateInput, barsDataUncheckedUpdateInput>
  }

  /**
   * barsData delete
   */
  export type barsDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barsData
     */
    select?: barsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barsData
     */
    omit?: barsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barsDataInclude<ExtArgs> | null
    /**
     * Filter which barsData to delete.
     */
    where: barsDataWhereUniqueInput
  }

  /**
   * barsData deleteMany
   */
  export type barsDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barsData to delete
     */
    where?: barsDataWhereInput
    /**
     * Limit how many barsData to delete.
     */
    limit?: number
  }

  /**
   * barsData findRaw
   */
  export type barsDataFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * barsData aggregateRaw
   */
  export type barsDataAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * barsData without action
   */
  export type barsDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barsData
     */
    select?: barsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barsData
     */
    omit?: barsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barsDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const BarsDataScalarFieldEnum: {
    id: 'id',
    address: 'address',
    categories: 'categories',
    categoryName: 'categoryName',
    description: 'description',
    facebooks: 'facebooks',
    imageUrl: 'imageUrl',
    imageUrls: 'imageUrls',
    instagrams: 'instagrams',
    neighborhood: 'neighborhood',
    phoneUnformatted: 'phoneUnformatted',
    postalCode: 'postalCode',
    title: 'title',
    website: 'website'
  };

  export type BarsDataScalarFieldEnum = (typeof BarsDataScalarFieldEnum)[keyof typeof BarsDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type barsDataWhereInput = {
    AND?: barsDataWhereInput | barsDataWhereInput[]
    OR?: barsDataWhereInput[]
    NOT?: barsDataWhereInput | barsDataWhereInput[]
    id?: StringFilter<"barsData"> | string
    additionalInfo?: XOR<BarsDataAdditionalInfoCompositeFilter, BarsDataAdditionalInfoObjectEqualityInput>
    address?: StringFilter<"barsData"> | string
    categories?: StringNullableListFilter<"barsData">
    categoryName?: StringFilter<"barsData"> | string
    description?: StringNullableFilter<"barsData"> | string | null
    facebooks?: StringNullableListFilter<"barsData">
    imageUrl?: StringFilter<"barsData"> | string
    imageUrls?: StringNullableListFilter<"barsData">
    instagrams?: StringNullableListFilter<"barsData">
    location?: XOR<BarsDataLocationCompositeFilter, BarsDataLocationObjectEqualityInput>
    neighborhood?: StringNullableFilter<"barsData"> | string | null
    openingHours?: BarsDataOpeningHoursCompositeListFilter | BarsDataOpeningHoursObjectEqualityInput[]
    phoneUnformatted?: StringNullableFilter<"barsData"> | string | null
    postalCode?: StringNullableFilter<"barsData"> | string | null
    reviews?: BarsDataReviewsCompositeListFilter | BarsDataReviewsObjectEqualityInput[]
    title?: StringFilter<"barsData"> | string
    website?: StringFilter<"barsData"> | string
  }

  export type barsDataOrderByWithRelationInput = {
    id?: SortOrder
    additionalInfo?: BarsDataAdditionalInfoOrderByInput
    address?: SortOrder
    categories?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
    facebooks?: SortOrder
    imageUrl?: SortOrder
    imageUrls?: SortOrder
    instagrams?: SortOrder
    location?: BarsDataLocationOrderByInput
    neighborhood?: SortOrder
    openingHours?: BarsDataOpeningHoursOrderByCompositeAggregateInput
    phoneUnformatted?: SortOrder
    postalCode?: SortOrder
    reviews?: BarsDataReviewsOrderByCompositeAggregateInput
    title?: SortOrder
    website?: SortOrder
  }

  export type barsDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: barsDataWhereInput | barsDataWhereInput[]
    OR?: barsDataWhereInput[]
    NOT?: barsDataWhereInput | barsDataWhereInput[]
    additionalInfo?: XOR<BarsDataAdditionalInfoCompositeFilter, BarsDataAdditionalInfoObjectEqualityInput>
    address?: StringFilter<"barsData"> | string
    categories?: StringNullableListFilter<"barsData">
    categoryName?: StringFilter<"barsData"> | string
    description?: StringNullableFilter<"barsData"> | string | null
    facebooks?: StringNullableListFilter<"barsData">
    imageUrl?: StringFilter<"barsData"> | string
    imageUrls?: StringNullableListFilter<"barsData">
    instagrams?: StringNullableListFilter<"barsData">
    location?: XOR<BarsDataLocationCompositeFilter, BarsDataLocationObjectEqualityInput>
    neighborhood?: StringNullableFilter<"barsData"> | string | null
    openingHours?: BarsDataOpeningHoursCompositeListFilter | BarsDataOpeningHoursObjectEqualityInput[]
    phoneUnformatted?: StringNullableFilter<"barsData"> | string | null
    postalCode?: StringNullableFilter<"barsData"> | string | null
    reviews?: BarsDataReviewsCompositeListFilter | BarsDataReviewsObjectEqualityInput[]
    title?: StringFilter<"barsData"> | string
    website?: StringFilter<"barsData"> | string
  }, "id">

  export type barsDataOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    categories?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
    facebooks?: SortOrder
    imageUrl?: SortOrder
    imageUrls?: SortOrder
    instagrams?: SortOrder
    neighborhood?: SortOrder
    phoneUnformatted?: SortOrder
    postalCode?: SortOrder
    title?: SortOrder
    website?: SortOrder
    _count?: barsDataCountOrderByAggregateInput
    _max?: barsDataMaxOrderByAggregateInput
    _min?: barsDataMinOrderByAggregateInput
  }

  export type barsDataScalarWhereWithAggregatesInput = {
    AND?: barsDataScalarWhereWithAggregatesInput | barsDataScalarWhereWithAggregatesInput[]
    OR?: barsDataScalarWhereWithAggregatesInput[]
    NOT?: barsDataScalarWhereWithAggregatesInput | barsDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"barsData"> | string
    address?: StringWithAggregatesFilter<"barsData"> | string
    categories?: StringNullableListFilter<"barsData">
    categoryName?: StringWithAggregatesFilter<"barsData"> | string
    description?: StringNullableWithAggregatesFilter<"barsData"> | string | null
    facebooks?: StringNullableListFilter<"barsData">
    imageUrl?: StringWithAggregatesFilter<"barsData"> | string
    imageUrls?: StringNullableListFilter<"barsData">
    instagrams?: StringNullableListFilter<"barsData">
    neighborhood?: StringNullableWithAggregatesFilter<"barsData"> | string | null
    phoneUnformatted?: StringNullableWithAggregatesFilter<"barsData"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"barsData"> | string | null
    title?: StringWithAggregatesFilter<"barsData"> | string
    website?: StringWithAggregatesFilter<"barsData"> | string
  }

  export type barsDataCreateInput = {
    id?: string
    additionalInfo: XOR<BarsDataAdditionalInfoCreateEnvelopeInput, BarsDataAdditionalInfoCreateInput>
    address: string
    categories?: barsDataCreatecategoriesInput | string[]
    categoryName: string
    description?: string | null
    facebooks?: barsDataCreatefacebooksInput | string[]
    imageUrl: string
    imageUrls?: barsDataCreateimageUrlsInput | string[]
    instagrams?: barsDataCreateinstagramsInput | string[]
    location: XOR<BarsDataLocationCreateEnvelopeInput, BarsDataLocationCreateInput>
    neighborhood?: string | null
    openingHours?: XOR<BarsDataOpeningHoursListCreateEnvelopeInput, BarsDataOpeningHoursCreateInput> | BarsDataOpeningHoursCreateInput[]
    phoneUnformatted?: string | null
    postalCode?: string | null
    reviews?: XOR<BarsDataReviewsListCreateEnvelopeInput, BarsDataReviewsCreateInput> | BarsDataReviewsCreateInput[]
    title: string
    website: string
  }

  export type barsDataUncheckedCreateInput = {
    id?: string
    additionalInfo: XOR<BarsDataAdditionalInfoCreateEnvelopeInput, BarsDataAdditionalInfoCreateInput>
    address: string
    categories?: barsDataCreatecategoriesInput | string[]
    categoryName: string
    description?: string | null
    facebooks?: barsDataCreatefacebooksInput | string[]
    imageUrl: string
    imageUrls?: barsDataCreateimageUrlsInput | string[]
    instagrams?: barsDataCreateinstagramsInput | string[]
    location: XOR<BarsDataLocationCreateEnvelopeInput, BarsDataLocationCreateInput>
    neighborhood?: string | null
    openingHours?: XOR<BarsDataOpeningHoursListCreateEnvelopeInput, BarsDataOpeningHoursCreateInput> | BarsDataOpeningHoursCreateInput[]
    phoneUnformatted?: string | null
    postalCode?: string | null
    reviews?: XOR<BarsDataReviewsListCreateEnvelopeInput, BarsDataReviewsCreateInput> | BarsDataReviewsCreateInput[]
    title: string
    website: string
  }

  export type barsDataUpdateInput = {
    additionalInfo?: XOR<BarsDataAdditionalInfoUpdateEnvelopeInput, BarsDataAdditionalInfoCreateInput>
    address?: StringFieldUpdateOperationsInput | string
    categories?: barsDataUpdatecategoriesInput | string[]
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebooks?: barsDataUpdatefacebooksInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: barsDataUpdateimageUrlsInput | string[]
    instagrams?: barsDataUpdateinstagramsInput | string[]
    location?: XOR<BarsDataLocationUpdateEnvelopeInput, BarsDataLocationCreateInput>
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    openingHours?: XOR<BarsDataOpeningHoursListUpdateEnvelopeInput, BarsDataOpeningHoursCreateInput> | BarsDataOpeningHoursCreateInput[]
    phoneUnformatted?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: XOR<BarsDataReviewsListUpdateEnvelopeInput, BarsDataReviewsCreateInput> | BarsDataReviewsCreateInput[]
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
  }

  export type barsDataUncheckedUpdateInput = {
    additionalInfo?: XOR<BarsDataAdditionalInfoUpdateEnvelopeInput, BarsDataAdditionalInfoCreateInput>
    address?: StringFieldUpdateOperationsInput | string
    categories?: barsDataUpdatecategoriesInput | string[]
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebooks?: barsDataUpdatefacebooksInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: barsDataUpdateimageUrlsInput | string[]
    instagrams?: barsDataUpdateinstagramsInput | string[]
    location?: XOR<BarsDataLocationUpdateEnvelopeInput, BarsDataLocationCreateInput>
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    openingHours?: XOR<BarsDataOpeningHoursListUpdateEnvelopeInput, BarsDataOpeningHoursCreateInput> | BarsDataOpeningHoursCreateInput[]
    phoneUnformatted?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: XOR<BarsDataReviewsListUpdateEnvelopeInput, BarsDataReviewsCreateInput> | BarsDataReviewsCreateInput[]
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
  }

  export type barsDataCreateManyInput = {
    id?: string
    additionalInfo: XOR<BarsDataAdditionalInfoCreateEnvelopeInput, BarsDataAdditionalInfoCreateInput>
    address: string
    categories?: barsDataCreatecategoriesInput | string[]
    categoryName: string
    description?: string | null
    facebooks?: barsDataCreatefacebooksInput | string[]
    imageUrl: string
    imageUrls?: barsDataCreateimageUrlsInput | string[]
    instagrams?: barsDataCreateinstagramsInput | string[]
    location: XOR<BarsDataLocationCreateEnvelopeInput, BarsDataLocationCreateInput>
    neighborhood?: string | null
    openingHours?: XOR<BarsDataOpeningHoursListCreateEnvelopeInput, BarsDataOpeningHoursCreateInput> | BarsDataOpeningHoursCreateInput[]
    phoneUnformatted?: string | null
    postalCode?: string | null
    reviews?: XOR<BarsDataReviewsListCreateEnvelopeInput, BarsDataReviewsCreateInput> | BarsDataReviewsCreateInput[]
    title: string
    website: string
  }

  export type barsDataUpdateManyMutationInput = {
    additionalInfo?: XOR<BarsDataAdditionalInfoUpdateEnvelopeInput, BarsDataAdditionalInfoCreateInput>
    address?: StringFieldUpdateOperationsInput | string
    categories?: barsDataUpdatecategoriesInput | string[]
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebooks?: barsDataUpdatefacebooksInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: barsDataUpdateimageUrlsInput | string[]
    instagrams?: barsDataUpdateinstagramsInput | string[]
    location?: XOR<BarsDataLocationUpdateEnvelopeInput, BarsDataLocationCreateInput>
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    openingHours?: XOR<BarsDataOpeningHoursListUpdateEnvelopeInput, BarsDataOpeningHoursCreateInput> | BarsDataOpeningHoursCreateInput[]
    phoneUnformatted?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: XOR<BarsDataReviewsListUpdateEnvelopeInput, BarsDataReviewsCreateInput> | BarsDataReviewsCreateInput[]
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
  }

  export type barsDataUncheckedUpdateManyInput = {
    additionalInfo?: XOR<BarsDataAdditionalInfoUpdateEnvelopeInput, BarsDataAdditionalInfoCreateInput>
    address?: StringFieldUpdateOperationsInput | string
    categories?: barsDataUpdatecategoriesInput | string[]
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facebooks?: barsDataUpdatefacebooksInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: barsDataUpdateimageUrlsInput | string[]
    instagrams?: barsDataUpdateinstagramsInput | string[]
    location?: XOR<BarsDataLocationUpdateEnvelopeInput, BarsDataLocationCreateInput>
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    openingHours?: XOR<BarsDataOpeningHoursListUpdateEnvelopeInput, BarsDataOpeningHoursCreateInput> | BarsDataOpeningHoursCreateInput[]
    phoneUnformatted?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: XOR<BarsDataReviewsListUpdateEnvelopeInput, BarsDataReviewsCreateInput> | BarsDataReviewsCreateInput[]
    title?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BarsDataAdditionalInfoCompositeFilter = {
    equals?: BarsDataAdditionalInfoObjectEqualityInput
    is?: BarsDataAdditionalInfoWhereInput
    isNot?: BarsDataAdditionalInfoWhereInput
  }

  export type BarsDataAdditionalInfoObjectEqualityInput = {
    Accessibility?: BarsDataAdditionalInfoAccessibilityObjectEqualityInput[]
    Amenities?: BarsDataAdditionalInfoAmenitiesObjectEqualityInput[]
    Atmosphere?: BarsDataAdditionalInfoAtmosphereObjectEqualityInput[]
    Children?: BarsDataAdditionalInfoChildrenObjectEqualityInput[]
    Crowd?: BarsDataAdditionalInfoCrowdObjectEqualityInput[]
    Dining_options?: BarsDataAdditionalInfoDiningOptionsObjectEqualityInput[]
    Emergency_help?: BarsDataAdditionalInfoEmergencyHelpObjectEqualityInput[]
    From_the_business?: BarsDataAdditionalInfoFromTheBusinessObjectEqualityInput[]
    Highlights?: BarsDataAdditionalInfoHighlightsObjectEqualityInput[]
    Offerings?: BarsDataAdditionalInfoOfferingsObjectEqualityInput[]
    Parking?: BarsDataAdditionalInfoParkingObjectEqualityInput[]
    Payments?: BarsDataAdditionalInfoPaymentsObjectEqualityInput[]
    Pets?: BarsDataAdditionalInfoPetsObjectEqualityInput[]
    Planning?: BarsDataAdditionalInfoPlanningObjectEqualityInput[]
    Popular_for?: BarsDataAdditionalInfoPopularForObjectEqualityInput[]
    Service_options?: BarsDataAdditionalInfoServiceOptionsObjectEqualityInput[]
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type BarsDataLocationCompositeFilter = {
    equals?: BarsDataLocationObjectEqualityInput
    is?: BarsDataLocationWhereInput
    isNot?: BarsDataLocationWhereInput
  }

  export type BarsDataLocationObjectEqualityInput = {
    lat: number
    lng: number
  }

  export type BarsDataOpeningHoursCompositeListFilter = {
    equals?: BarsDataOpeningHoursObjectEqualityInput[]
    every?: BarsDataOpeningHoursWhereInput
    some?: BarsDataOpeningHoursWhereInput
    none?: BarsDataOpeningHoursWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataOpeningHoursObjectEqualityInput = {
    day: string
    hours: string
  }

  export type BarsDataReviewsCompositeListFilter = {
    equals?: BarsDataReviewsObjectEqualityInput[]
    every?: BarsDataReviewsWhereInput
    some?: BarsDataReviewsWhereInput
    none?: BarsDataReviewsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataReviewsObjectEqualityInput = {
    isLocalGuide: boolean
    likesCount: number
    name: string
    originalLanguage?: string | null
    publishAt: string
    publishedAtDate: string
    rating?: string | null
    responseFromOwnerDate?: string | null
    responseFromOwnerText?: string | null
    reviewContext: BarsDataReviewsReviewContextObjectEqualityInput
    reviewDetailedRating: BarsDataReviewsReviewDetailedRatingObjectEqualityInput
    reviewId: string
    reviewImageUrls?: string[]
    reviewOrigin: string
    reviewUrl: string
    reviewerId?: string | null
    reviewerNumberOfReviews?: number | null
    reviewerPhotoUrl: string
    reviewerUrl: string
    stars?: number | null
    text?: string | null
    textTranslated?: string | null
    translatedLanguage?: string | null
    visitedIn?: InputJsonValue | null
  }

  export type BarsDataAdditionalInfoOrderByInput = {
    Accessibility?: BarsDataAdditionalInfoAccessibilityOrderByCompositeAggregateInput
    Amenities?: BarsDataAdditionalInfoAmenitiesOrderByCompositeAggregateInput
    Atmosphere?: BarsDataAdditionalInfoAtmosphereOrderByCompositeAggregateInput
    Children?: BarsDataAdditionalInfoChildrenOrderByCompositeAggregateInput
    Crowd?: BarsDataAdditionalInfoCrowdOrderByCompositeAggregateInput
    Dining_options?: BarsDataAdditionalInfoDiningOptionsOrderByCompositeAggregateInput
    Emergency_help?: BarsDataAdditionalInfoEmergencyHelpOrderByCompositeAggregateInput
    From_the_business?: BarsDataAdditionalInfoFromTheBusinessOrderByCompositeAggregateInput
    Highlights?: BarsDataAdditionalInfoHighlightsOrderByCompositeAggregateInput
    Offerings?: BarsDataAdditionalInfoOfferingsOrderByCompositeAggregateInput
    Parking?: BarsDataAdditionalInfoParkingOrderByCompositeAggregateInput
    Payments?: BarsDataAdditionalInfoPaymentsOrderByCompositeAggregateInput
    Pets?: BarsDataAdditionalInfoPetsOrderByCompositeAggregateInput
    Planning?: BarsDataAdditionalInfoPlanningOrderByCompositeAggregateInput
    Popular_for?: BarsDataAdditionalInfoPopularForOrderByCompositeAggregateInput
    Service_options?: BarsDataAdditionalInfoServiceOptionsOrderByCompositeAggregateInput
  }

  export type BarsDataLocationOrderByInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type BarsDataOpeningHoursOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataReviewsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type barsDataCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    categories?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
    facebooks?: SortOrder
    imageUrl?: SortOrder
    imageUrls?: SortOrder
    instagrams?: SortOrder
    neighborhood?: SortOrder
    phoneUnformatted?: SortOrder
    postalCode?: SortOrder
    title?: SortOrder
    website?: SortOrder
  }

  export type barsDataMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    neighborhood?: SortOrder
    phoneUnformatted?: SortOrder
    postalCode?: SortOrder
    title?: SortOrder
    website?: SortOrder
  }

  export type barsDataMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    neighborhood?: SortOrder
    phoneUnformatted?: SortOrder
    postalCode?: SortOrder
    title?: SortOrder
    website?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoCreateEnvelopeInput = {
    set?: BarsDataAdditionalInfoCreateInput
  }

  export type BarsDataAdditionalInfoCreateInput = {
    Accessibility?: BarsDataAdditionalInfoAccessibilityCreateInput | BarsDataAdditionalInfoAccessibilityCreateInput[]
    Amenities?: BarsDataAdditionalInfoAmenitiesCreateInput | BarsDataAdditionalInfoAmenitiesCreateInput[]
    Atmosphere?: BarsDataAdditionalInfoAtmosphereCreateInput | BarsDataAdditionalInfoAtmosphereCreateInput[]
    Children?: BarsDataAdditionalInfoChildrenCreateInput | BarsDataAdditionalInfoChildrenCreateInput[]
    Crowd?: BarsDataAdditionalInfoCrowdCreateInput | BarsDataAdditionalInfoCrowdCreateInput[]
    Dining_options?: BarsDataAdditionalInfoDiningOptionsCreateInput | BarsDataAdditionalInfoDiningOptionsCreateInput[]
    Emergency_help?: BarsDataAdditionalInfoEmergencyHelpCreateInput | BarsDataAdditionalInfoEmergencyHelpCreateInput[]
    From_the_business?: BarsDataAdditionalInfoFromTheBusinessCreateInput | BarsDataAdditionalInfoFromTheBusinessCreateInput[]
    Highlights?: BarsDataAdditionalInfoHighlightsCreateInput | BarsDataAdditionalInfoHighlightsCreateInput[]
    Offerings?: BarsDataAdditionalInfoOfferingsCreateInput | BarsDataAdditionalInfoOfferingsCreateInput[]
    Parking?: BarsDataAdditionalInfoParkingCreateInput | BarsDataAdditionalInfoParkingCreateInput[]
    Payments?: BarsDataAdditionalInfoPaymentsCreateInput | BarsDataAdditionalInfoPaymentsCreateInput[]
    Pets?: BarsDataAdditionalInfoPetsCreateInput | BarsDataAdditionalInfoPetsCreateInput[]
    Planning?: BarsDataAdditionalInfoPlanningCreateInput | BarsDataAdditionalInfoPlanningCreateInput[]
    Popular_for?: BarsDataAdditionalInfoPopularForCreateInput | BarsDataAdditionalInfoPopularForCreateInput[]
    Service_options?: BarsDataAdditionalInfoServiceOptionsCreateInput | BarsDataAdditionalInfoServiceOptionsCreateInput[]
  }

  export type barsDataCreatecategoriesInput = {
    set: string[]
  }

  export type barsDataCreatefacebooksInput = {
    set: string[]
  }

  export type barsDataCreateimageUrlsInput = {
    set: string[]
  }

  export type barsDataCreateinstagramsInput = {
    set: string[]
  }

  export type BarsDataLocationCreateEnvelopeInput = {
    set?: BarsDataLocationCreateInput
  }

  export type BarsDataLocationCreateInput = {
    lat: number
    lng: number
  }

  export type BarsDataOpeningHoursListCreateEnvelopeInput = {
    set?: BarsDataOpeningHoursCreateInput | BarsDataOpeningHoursCreateInput[]
  }

  export type BarsDataOpeningHoursCreateInput = {
    day: string
    hours: string
  }

  export type BarsDataReviewsListCreateEnvelopeInput = {
    set?: BarsDataReviewsCreateInput | BarsDataReviewsCreateInput[]
  }

  export type BarsDataReviewsCreateInput = {
    isLocalGuide: boolean
    likesCount: number
    name: string
    originalLanguage?: string | null
    publishAt: string
    publishedAtDate: string
    rating?: string | null
    responseFromOwnerDate?: string | null
    responseFromOwnerText?: string | null
    reviewContext: BarsDataReviewsReviewContextCreateInput
    reviewDetailedRating: BarsDataReviewsReviewDetailedRatingCreateInput
    reviewId: string
    reviewImageUrls?: BarsDataReviewsCreatereviewImageUrlsInput | string[]
    reviewOrigin: string
    reviewUrl: string
    reviewerId?: string | null
    reviewerNumberOfReviews?: number | null
    reviewerPhotoUrl: string
    reviewerUrl: string
    stars?: number | null
    text?: string | null
    textTranslated?: string | null
    translatedLanguage?: string | null
    visitedIn?: InputJsonValue | null
  }

  export type BarsDataAdditionalInfoUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoCreateInput
    update?: BarsDataAdditionalInfoUpdateInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type barsDataUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type barsDataUpdatefacebooksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type barsDataUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type barsDataUpdateinstagramsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BarsDataLocationUpdateEnvelopeInput = {
    set?: BarsDataLocationCreateInput
    update?: BarsDataLocationUpdateInput
  }

  export type BarsDataOpeningHoursListUpdateEnvelopeInput = {
    set?: BarsDataOpeningHoursCreateInput | BarsDataOpeningHoursCreateInput[]
    push?: BarsDataOpeningHoursCreateInput | BarsDataOpeningHoursCreateInput[]
    updateMany?: BarsDataOpeningHoursUpdateManyInput
    deleteMany?: BarsDataOpeningHoursDeleteManyInput
  }

  export type BarsDataReviewsListUpdateEnvelopeInput = {
    set?: BarsDataReviewsCreateInput | BarsDataReviewsCreateInput[]
    push?: BarsDataReviewsCreateInput | BarsDataReviewsCreateInput[]
    updateMany?: BarsDataReviewsUpdateManyInput
    deleteMany?: BarsDataReviewsDeleteManyInput
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BarsDataAdditionalInfoWhereInput = {
    AND?: BarsDataAdditionalInfoWhereInput | BarsDataAdditionalInfoWhereInput[]
    OR?: BarsDataAdditionalInfoWhereInput[]
    NOT?: BarsDataAdditionalInfoWhereInput | BarsDataAdditionalInfoWhereInput[]
    Accessibility?: BarsDataAdditionalInfoAccessibilityCompositeListFilter | BarsDataAdditionalInfoAccessibilityObjectEqualityInput[]
    Amenities?: BarsDataAdditionalInfoAmenitiesCompositeListFilter | BarsDataAdditionalInfoAmenitiesObjectEqualityInput[]
    Atmosphere?: BarsDataAdditionalInfoAtmosphereCompositeListFilter | BarsDataAdditionalInfoAtmosphereObjectEqualityInput[]
    Children?: BarsDataAdditionalInfoChildrenCompositeListFilter | BarsDataAdditionalInfoChildrenObjectEqualityInput[]
    Crowd?: BarsDataAdditionalInfoCrowdCompositeListFilter | BarsDataAdditionalInfoCrowdObjectEqualityInput[]
    Dining_options?: BarsDataAdditionalInfoDiningOptionsCompositeListFilter | BarsDataAdditionalInfoDiningOptionsObjectEqualityInput[]
    Emergency_help?: BarsDataAdditionalInfoEmergencyHelpCompositeListFilter | BarsDataAdditionalInfoEmergencyHelpObjectEqualityInput[]
    From_the_business?: BarsDataAdditionalInfoFromTheBusinessCompositeListFilter | BarsDataAdditionalInfoFromTheBusinessObjectEqualityInput[]
    Highlights?: BarsDataAdditionalInfoHighlightsCompositeListFilter | BarsDataAdditionalInfoHighlightsObjectEqualityInput[]
    Offerings?: BarsDataAdditionalInfoOfferingsCompositeListFilter | BarsDataAdditionalInfoOfferingsObjectEqualityInput[]
    Parking?: BarsDataAdditionalInfoParkingCompositeListFilter | BarsDataAdditionalInfoParkingObjectEqualityInput[]
    Payments?: BarsDataAdditionalInfoPaymentsCompositeListFilter | BarsDataAdditionalInfoPaymentsObjectEqualityInput[]
    Pets?: BarsDataAdditionalInfoPetsCompositeListFilter | BarsDataAdditionalInfoPetsObjectEqualityInput[]
    Planning?: BarsDataAdditionalInfoPlanningCompositeListFilter | BarsDataAdditionalInfoPlanningObjectEqualityInput[]
    Popular_for?: BarsDataAdditionalInfoPopularForCompositeListFilter | BarsDataAdditionalInfoPopularForObjectEqualityInput[]
    Service_options?: BarsDataAdditionalInfoServiceOptionsCompositeListFilter | BarsDataAdditionalInfoServiceOptionsObjectEqualityInput[]
  }

  export type BarsDataAdditionalInfoAccessibilityObjectEqualityInput = {
    Assistive_hearing_loop?: boolean | null
    Wheelchair_accessible_entrance?: boolean | null
    Wheelchair_accessible_parking_lot?: boolean | null
    Wheelchair_accessible_restroom?: boolean | null
    Wheelchair_accessible_seating?: boolean | null
  }

  export type BarsDataAdditionalInfoAmenitiesObjectEqualityInput = {
    Accessible?: boolean | null
    Air_conditioned?: boolean | null
    Airport_shuttle?: boolean | null
    Bar?: boolean | null
    Bar_onsite?: boolean | null
    Breakfast?: boolean | null
    Business_center?: boolean | null
    Fitness_center?: boolean | null
    Free_Wi_Fi?: boolean | null
    Free_parking?: boolean | null
    Gender_neutral_restroom?: boolean | null
    Kid_friendly?: boolean | null
    Kitchens_in_some_rooms?: boolean | null
    Laundry_service?: boolean | null
    Paid_breakfast?: boolean | null
    Paid_parking?: boolean | null
    Parking?: boolean | null
    Pet_friendly?: boolean | null
    Pool?: boolean | null
    Restaurant?: boolean | null
    Restroom?: boolean | null
    Room_service?: boolean | null
    Smoke_free?: boolean | null
    Spa?: boolean | null
    Stadium_seating?: boolean | null
    Wi_Fi?: boolean | null
  }

  export type BarsDataAdditionalInfoAtmosphereObjectEqualityInput = {
    Casual?: boolean | null
    Cozy?: boolean | null
    Historic?: boolean | null
    Quiet?: boolean | null
    Romantic?: boolean | null
    Trending?: boolean | null
    Trendy?: boolean | null
    Upscale?: boolean | null
  }

  export type BarsDataAdditionalInfoChildrenObjectEqualityInput = {
    Good_for_kids?: boolean | null
    Good_for_kids_birthday?: boolean | null
    Has_changing_table_s_?: boolean | null
    High_chairs?: boolean | null
    Kids__menu?: boolean | null
  }

  export type BarsDataAdditionalInfoCrowdObjectEqualityInput = {
    College_students?: boolean | null
    Family_friendly?: boolean | null
    Groups?: boolean | null
    LGBTQ__friendly?: boolean | null
    Tourists?: boolean | null
    Transgender_safespace?: boolean | null
  }

  export type BarsDataAdditionalInfoDiningOptionsObjectEqualityInput = {
    Breakfast?: boolean | null
    Brunch?: boolean | null
    Catering?: boolean | null
    Counter_service?: boolean | null
    Dessert?: boolean | null
    Dinner?: boolean | null
    Lunch?: boolean | null
    Outside_food_allowed?: boolean | null
    Seating?: boolean | null
    Table_service?: boolean | null
  }

  export type BarsDataAdditionalInfoEmergencyHelpObjectEqualityInput = {
    Employs_displaced_individuals: boolean
  }

  export type BarsDataAdditionalInfoFromTheBusinessObjectEqualityInput = {
    Identifies_as_women_owned: boolean
  }

  export type BarsDataAdditionalInfoHighlightsObjectEqualityInput = {
    Bar_games?: boolean | null
    Fireplace?: boolean | null
    Great_beer_selection?: boolean | null
    Great_coffee?: boolean | null
    Great_dessert?: boolean | null
    Great_tea_selection?: boolean | null
    Great_wine_list?: boolean | null
    Karaoke?: boolean | null
    Live_music?: boolean | null
    Live_performances?: boolean | null
    Rooftop_seating?: boolean | null
    Sports?: boolean | null
    Trivia_night?: boolean | null
  }

  export type BarsDataAdditionalInfoOfferingsObjectEqualityInput = {
    Alcohol?: boolean | null
    All_you_can_eat?: boolean | null
    Arcade_games?: boolean | null
    Beer?: boolean | null
    Cocktails?: boolean | null
    Coffee?: boolean | null
    Dancing?: boolean | null
    Food?: boolean | null
    Food_at_bar?: boolean | null
    Halal_food?: boolean | null
    Happy_hour_drinks?: boolean | null
    Happy_hour_food?: boolean | null
    Hard_liquor?: boolean | null
    Healthy_options?: boolean | null
    Late_night_food?: boolean | null
    Organic_dishes?: boolean | null
    Prepared_foods?: boolean | null
    Private_dining_room?: boolean | null
    Quick_bite?: boolean | null
    Salad_bar?: boolean | null
    Small_plates?: boolean | null
    Vegan_options?: boolean | null
    Vegetarian_options?: boolean | null
    Wine?: boolean | null
  }

  export type BarsDataAdditionalInfoParkingObjectEqualityInput = {
    Free_parking_garage?: boolean | null
    Free_parking_lot?: boolean | null
    Free_street_parking?: boolean | null
    On_site_parking?: boolean | null
    Paid_parking_garage?: boolean | null
    Paid_parking_lot?: boolean | null
    Paid_street_parking?: boolean | null
    Usually_difficult_to_find_a_space?: boolean | null
    Usually_plenty_of_parking?: boolean | null
    Usually_somewhat_difficult_to_find_a_space?: boolean | null
    Valet_parking?: boolean | null
  }

  export type BarsDataAdditionalInfoPaymentsObjectEqualityInput = {
    Cash_only?: boolean | null
    Checks?: boolean | null
    Credit_cards?: boolean | null
    Debit_cards?: boolean | null
    NFC_mobile_payments?: boolean | null
  }

  export type BarsDataAdditionalInfoPetsObjectEqualityInput = {
    Dogs_allowed?: boolean | null
    Dogs_allowed_inside?: boolean | null
    Dogs_allowed_outside?: boolean | null
  }

  export type BarsDataAdditionalInfoPlanningObjectEqualityInput = {
    Accepts_reservations?: boolean | null
    Appointment_required?: boolean | null
    Brunch_reservations_recommended?: boolean | null
    Dinner_reservations_recommended?: boolean | null
    Lunch_reservations_recommended?: boolean | null
    Quick_visit?: boolean | null
    Reservations_required?: boolean | null
    Usually_a_wait?: boolean | null
  }

  export type BarsDataAdditionalInfoPopularForObjectEqualityInput = {
    Breakfast?: boolean | null
    Dinner?: boolean | null
    Good_for_working_on_laptop?: boolean | null
    Lunch?: boolean | null
    Solo_dining?: boolean | null
  }

  export type BarsDataAdditionalInfoServiceOptionsObjectEqualityInput = {
    Curbside_pickup?: boolean | null
    Delivery?: boolean | null
    Dine_in?: boolean | null
    Drive_through?: boolean | null
    In_store_pickup?: boolean | null
    In_store_shopping?: boolean | null
    No_contact_delivery?: boolean | null
    Onsite_services?: boolean | null
    Outdoor_seating?: boolean | null
    Takeout?: boolean | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type BarsDataLocationWhereInput = {
    AND?: BarsDataLocationWhereInput | BarsDataLocationWhereInput[]
    OR?: BarsDataLocationWhereInput[]
    NOT?: BarsDataLocationWhereInput | BarsDataLocationWhereInput[]
    lat?: FloatFilter<"BarsDataLocation"> | number
    lng?: FloatFilter<"BarsDataLocation"> | number
  }

  export type BarsDataOpeningHoursWhereInput = {
    AND?: BarsDataOpeningHoursWhereInput | BarsDataOpeningHoursWhereInput[]
    OR?: BarsDataOpeningHoursWhereInput[]
    NOT?: BarsDataOpeningHoursWhereInput | BarsDataOpeningHoursWhereInput[]
    day?: StringFilter<"BarsDataOpeningHours"> | string
    hours?: StringFilter<"BarsDataOpeningHours"> | string
  }

  export type BarsDataReviewsWhereInput = {
    AND?: BarsDataReviewsWhereInput | BarsDataReviewsWhereInput[]
    OR?: BarsDataReviewsWhereInput[]
    NOT?: BarsDataReviewsWhereInput | BarsDataReviewsWhereInput[]
    isLocalGuide?: BoolFilter<"BarsDataReviews"> | boolean
    likesCount?: IntFilter<"BarsDataReviews"> | number
    name?: StringFilter<"BarsDataReviews"> | string
    originalLanguage?: StringNullableFilter<"BarsDataReviews"> | string | null
    publishAt?: StringFilter<"BarsDataReviews"> | string
    publishedAtDate?: StringFilter<"BarsDataReviews"> | string
    rating?: StringNullableFilter<"BarsDataReviews"> | string | null
    responseFromOwnerDate?: StringNullableFilter<"BarsDataReviews"> | string | null
    responseFromOwnerText?: StringNullableFilter<"BarsDataReviews"> | string | null
    reviewContext?: XOR<BarsDataReviewsReviewContextCompositeFilter, BarsDataReviewsReviewContextObjectEqualityInput>
    reviewDetailedRating?: XOR<BarsDataReviewsReviewDetailedRatingCompositeFilter, BarsDataReviewsReviewDetailedRatingObjectEqualityInput>
    reviewId?: StringFilter<"BarsDataReviews"> | string
    reviewImageUrls?: StringNullableListFilter<"BarsDataReviews">
    reviewOrigin?: StringFilter<"BarsDataReviews"> | string
    reviewUrl?: StringFilter<"BarsDataReviews"> | string
    reviewerId?: StringNullableFilter<"BarsDataReviews"> | string | null
    reviewerNumberOfReviews?: IntNullableFilter<"BarsDataReviews"> | number | null
    reviewerPhotoUrl?: StringFilter<"BarsDataReviews"> | string
    reviewerUrl?: StringFilter<"BarsDataReviews"> | string
    stars?: IntNullableFilter<"BarsDataReviews"> | number | null
    text?: StringNullableFilter<"BarsDataReviews"> | string | null
    textTranslated?: StringNullableFilter<"BarsDataReviews"> | string | null
    translatedLanguage?: StringNullableFilter<"BarsDataReviews"> | string | null
    visitedIn?: JsonNullableFilter<"BarsDataReviews">
  }

  export type BarsDataReviewsReviewContextObjectEqualityInput = {
    Meal_type?: string | null
    Noise_level?: string | null
    Parking_space?: string | null
    Price_per_person?: string | null
    Recommendation_for_vegetarians?: string | null
    Reservation?: string | null
    Service?: string | null
    Travel_group?: string | null
    Trip_type?: string | null
    Wait_time?: string | null
  }

  export type BarsDataReviewsReviewDetailedRatingObjectEqualityInput = {
    Atmosphere?: number | null
    Food?: number | null
    Location?: number | null
    Rooms?: number | null
    Service?: number | null
  }

  export type BarsDataAdditionalInfoAccessibilityOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoAmenitiesOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoAtmosphereOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoChildrenOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoCrowdOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoDiningOptionsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoEmergencyHelpOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoFromTheBusinessOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoHighlightsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoOfferingsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoParkingOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoPaymentsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoPetsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoPlanningOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoPopularForOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BarsDataAdditionalInfoServiceOptionsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoAccessibilityCreateInput = {
    Assistive_hearing_loop?: boolean | null
    Wheelchair_accessible_entrance?: boolean | null
    Wheelchair_accessible_parking_lot?: boolean | null
    Wheelchair_accessible_restroom?: boolean | null
    Wheelchair_accessible_seating?: boolean | null
  }

  export type BarsDataAdditionalInfoAmenitiesCreateInput = {
    Accessible?: boolean | null
    Air_conditioned?: boolean | null
    Airport_shuttle?: boolean | null
    Bar?: boolean | null
    Bar_onsite?: boolean | null
    Breakfast?: boolean | null
    Business_center?: boolean | null
    Fitness_center?: boolean | null
    Free_Wi_Fi?: boolean | null
    Free_parking?: boolean | null
    Gender_neutral_restroom?: boolean | null
    Kid_friendly?: boolean | null
    Kitchens_in_some_rooms?: boolean | null
    Laundry_service?: boolean | null
    Paid_breakfast?: boolean | null
    Paid_parking?: boolean | null
    Parking?: boolean | null
    Pet_friendly?: boolean | null
    Pool?: boolean | null
    Restaurant?: boolean | null
    Restroom?: boolean | null
    Room_service?: boolean | null
    Smoke_free?: boolean | null
    Spa?: boolean | null
    Stadium_seating?: boolean | null
    Wi_Fi?: boolean | null
  }

  export type BarsDataAdditionalInfoAtmosphereCreateInput = {
    Casual?: boolean | null
    Cozy?: boolean | null
    Historic?: boolean | null
    Quiet?: boolean | null
    Romantic?: boolean | null
    Trending?: boolean | null
    Trendy?: boolean | null
    Upscale?: boolean | null
  }

  export type BarsDataAdditionalInfoChildrenCreateInput = {
    Good_for_kids?: boolean | null
    Good_for_kids_birthday?: boolean | null
    Has_changing_table_s_?: boolean | null
    High_chairs?: boolean | null
    Kids__menu?: boolean | null
  }

  export type BarsDataAdditionalInfoCrowdCreateInput = {
    College_students?: boolean | null
    Family_friendly?: boolean | null
    Groups?: boolean | null
    LGBTQ__friendly?: boolean | null
    Tourists?: boolean | null
    Transgender_safespace?: boolean | null
  }

  export type BarsDataAdditionalInfoDiningOptionsCreateInput = {
    Breakfast?: boolean | null
    Brunch?: boolean | null
    Catering?: boolean | null
    Counter_service?: boolean | null
    Dessert?: boolean | null
    Dinner?: boolean | null
    Lunch?: boolean | null
    Outside_food_allowed?: boolean | null
    Seating?: boolean | null
    Table_service?: boolean | null
  }

  export type BarsDataAdditionalInfoEmergencyHelpCreateInput = {
    Employs_displaced_individuals: boolean
  }

  export type BarsDataAdditionalInfoFromTheBusinessCreateInput = {
    Identifies_as_women_owned: boolean
  }

  export type BarsDataAdditionalInfoHighlightsCreateInput = {
    Bar_games?: boolean | null
    Fireplace?: boolean | null
    Great_beer_selection?: boolean | null
    Great_coffee?: boolean | null
    Great_dessert?: boolean | null
    Great_tea_selection?: boolean | null
    Great_wine_list?: boolean | null
    Karaoke?: boolean | null
    Live_music?: boolean | null
    Live_performances?: boolean | null
    Rooftop_seating?: boolean | null
    Sports?: boolean | null
    Trivia_night?: boolean | null
  }

  export type BarsDataAdditionalInfoOfferingsCreateInput = {
    Alcohol?: boolean | null
    All_you_can_eat?: boolean | null
    Arcade_games?: boolean | null
    Beer?: boolean | null
    Cocktails?: boolean | null
    Coffee?: boolean | null
    Dancing?: boolean | null
    Food?: boolean | null
    Food_at_bar?: boolean | null
    Halal_food?: boolean | null
    Happy_hour_drinks?: boolean | null
    Happy_hour_food?: boolean | null
    Hard_liquor?: boolean | null
    Healthy_options?: boolean | null
    Late_night_food?: boolean | null
    Organic_dishes?: boolean | null
    Prepared_foods?: boolean | null
    Private_dining_room?: boolean | null
    Quick_bite?: boolean | null
    Salad_bar?: boolean | null
    Small_plates?: boolean | null
    Vegan_options?: boolean | null
    Vegetarian_options?: boolean | null
    Wine?: boolean | null
  }

  export type BarsDataAdditionalInfoParkingCreateInput = {
    Free_parking_garage?: boolean | null
    Free_parking_lot?: boolean | null
    Free_street_parking?: boolean | null
    On_site_parking?: boolean | null
    Paid_parking_garage?: boolean | null
    Paid_parking_lot?: boolean | null
    Paid_street_parking?: boolean | null
    Usually_difficult_to_find_a_space?: boolean | null
    Usually_plenty_of_parking?: boolean | null
    Usually_somewhat_difficult_to_find_a_space?: boolean | null
    Valet_parking?: boolean | null
  }

  export type BarsDataAdditionalInfoPaymentsCreateInput = {
    Cash_only?: boolean | null
    Checks?: boolean | null
    Credit_cards?: boolean | null
    Debit_cards?: boolean | null
    NFC_mobile_payments?: boolean | null
  }

  export type BarsDataAdditionalInfoPetsCreateInput = {
    Dogs_allowed?: boolean | null
    Dogs_allowed_inside?: boolean | null
    Dogs_allowed_outside?: boolean | null
  }

  export type BarsDataAdditionalInfoPlanningCreateInput = {
    Accepts_reservations?: boolean | null
    Appointment_required?: boolean | null
    Brunch_reservations_recommended?: boolean | null
    Dinner_reservations_recommended?: boolean | null
    Lunch_reservations_recommended?: boolean | null
    Quick_visit?: boolean | null
    Reservations_required?: boolean | null
    Usually_a_wait?: boolean | null
  }

  export type BarsDataAdditionalInfoPopularForCreateInput = {
    Breakfast?: boolean | null
    Dinner?: boolean | null
    Good_for_working_on_laptop?: boolean | null
    Lunch?: boolean | null
    Solo_dining?: boolean | null
  }

  export type BarsDataAdditionalInfoServiceOptionsCreateInput = {
    Curbside_pickup?: boolean | null
    Delivery?: boolean | null
    Dine_in?: boolean | null
    Drive_through?: boolean | null
    In_store_pickup?: boolean | null
    In_store_shopping?: boolean | null
    No_contact_delivery?: boolean | null
    Onsite_services?: boolean | null
    Outdoor_seating?: boolean | null
    Takeout?: boolean | null
  }

  export type BarsDataReviewsReviewContextCreateInput = {
    Meal_type?: string | null
    Noise_level?: string | null
    Parking_space?: string | null
    Price_per_person?: string | null
    Recommendation_for_vegetarians?: string | null
    Reservation?: string | null
    Service?: string | null
    Travel_group?: string | null
    Trip_type?: string | null
    Wait_time?: string | null
  }

  export type BarsDataReviewsReviewDetailedRatingCreateInput = {
    Atmosphere?: number | null
    Food?: number | null
    Location?: number | null
    Rooms?: number | null
    Service?: number | null
  }

  export type BarsDataReviewsCreatereviewImageUrlsInput = {
    set: string[]
  }

  export type BarsDataAdditionalInfoUpdateInput = {
    Accessibility?: XOR<BarsDataAdditionalInfoAccessibilityListUpdateEnvelopeInput, BarsDataAdditionalInfoAccessibilityCreateInput> | BarsDataAdditionalInfoAccessibilityCreateInput[]
    Amenities?: XOR<BarsDataAdditionalInfoAmenitiesListUpdateEnvelopeInput, BarsDataAdditionalInfoAmenitiesCreateInput> | BarsDataAdditionalInfoAmenitiesCreateInput[]
    Atmosphere?: XOR<BarsDataAdditionalInfoAtmosphereListUpdateEnvelopeInput, BarsDataAdditionalInfoAtmosphereCreateInput> | BarsDataAdditionalInfoAtmosphereCreateInput[]
    Children?: XOR<BarsDataAdditionalInfoChildrenListUpdateEnvelopeInput, BarsDataAdditionalInfoChildrenCreateInput> | BarsDataAdditionalInfoChildrenCreateInput[]
    Crowd?: XOR<BarsDataAdditionalInfoCrowdListUpdateEnvelopeInput, BarsDataAdditionalInfoCrowdCreateInput> | BarsDataAdditionalInfoCrowdCreateInput[]
    Dining_options?: XOR<BarsDataAdditionalInfoDiningOptionsListUpdateEnvelopeInput, BarsDataAdditionalInfoDiningOptionsCreateInput> | BarsDataAdditionalInfoDiningOptionsCreateInput[]
    Emergency_help?: XOR<BarsDataAdditionalInfoEmergencyHelpListUpdateEnvelopeInput, BarsDataAdditionalInfoEmergencyHelpCreateInput> | BarsDataAdditionalInfoEmergencyHelpCreateInput[]
    From_the_business?: XOR<BarsDataAdditionalInfoFromTheBusinessListUpdateEnvelopeInput, BarsDataAdditionalInfoFromTheBusinessCreateInput> | BarsDataAdditionalInfoFromTheBusinessCreateInput[]
    Highlights?: XOR<BarsDataAdditionalInfoHighlightsListUpdateEnvelopeInput, BarsDataAdditionalInfoHighlightsCreateInput> | BarsDataAdditionalInfoHighlightsCreateInput[]
    Offerings?: XOR<BarsDataAdditionalInfoOfferingsListUpdateEnvelopeInput, BarsDataAdditionalInfoOfferingsCreateInput> | BarsDataAdditionalInfoOfferingsCreateInput[]
    Parking?: XOR<BarsDataAdditionalInfoParkingListUpdateEnvelopeInput, BarsDataAdditionalInfoParkingCreateInput> | BarsDataAdditionalInfoParkingCreateInput[]
    Payments?: XOR<BarsDataAdditionalInfoPaymentsListUpdateEnvelopeInput, BarsDataAdditionalInfoPaymentsCreateInput> | BarsDataAdditionalInfoPaymentsCreateInput[]
    Pets?: XOR<BarsDataAdditionalInfoPetsListUpdateEnvelopeInput, BarsDataAdditionalInfoPetsCreateInput> | BarsDataAdditionalInfoPetsCreateInput[]
    Planning?: XOR<BarsDataAdditionalInfoPlanningListUpdateEnvelopeInput, BarsDataAdditionalInfoPlanningCreateInput> | BarsDataAdditionalInfoPlanningCreateInput[]
    Popular_for?: XOR<BarsDataAdditionalInfoPopularForListUpdateEnvelopeInput, BarsDataAdditionalInfoPopularForCreateInput> | BarsDataAdditionalInfoPopularForCreateInput[]
    Service_options?: XOR<BarsDataAdditionalInfoServiceOptionsListUpdateEnvelopeInput, BarsDataAdditionalInfoServiceOptionsCreateInput> | BarsDataAdditionalInfoServiceOptionsCreateInput[]
  }

  export type BarsDataLocationUpdateInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
  }

  export type BarsDataOpeningHoursUpdateManyInput = {
    where: BarsDataOpeningHoursWhereInput
    data: BarsDataOpeningHoursUpdateInput
  }

  export type BarsDataOpeningHoursDeleteManyInput = {
    where: BarsDataOpeningHoursWhereInput
  }

  export type BarsDataReviewsUpdateManyInput = {
    where: BarsDataReviewsWhereInput
    data: BarsDataReviewsUpdateInput
  }

  export type BarsDataReviewsDeleteManyInput = {
    where: BarsDataReviewsWhereInput
  }

  export type BarsDataAdditionalInfoAccessibilityCompositeListFilter = {
    equals?: BarsDataAdditionalInfoAccessibilityObjectEqualityInput[]
    every?: BarsDataAdditionalInfoAccessibilityWhereInput
    some?: BarsDataAdditionalInfoAccessibilityWhereInput
    none?: BarsDataAdditionalInfoAccessibilityWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoAmenitiesCompositeListFilter = {
    equals?: BarsDataAdditionalInfoAmenitiesObjectEqualityInput[]
    every?: BarsDataAdditionalInfoAmenitiesWhereInput
    some?: BarsDataAdditionalInfoAmenitiesWhereInput
    none?: BarsDataAdditionalInfoAmenitiesWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoAtmosphereCompositeListFilter = {
    equals?: BarsDataAdditionalInfoAtmosphereObjectEqualityInput[]
    every?: BarsDataAdditionalInfoAtmosphereWhereInput
    some?: BarsDataAdditionalInfoAtmosphereWhereInput
    none?: BarsDataAdditionalInfoAtmosphereWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoChildrenCompositeListFilter = {
    equals?: BarsDataAdditionalInfoChildrenObjectEqualityInput[]
    every?: BarsDataAdditionalInfoChildrenWhereInput
    some?: BarsDataAdditionalInfoChildrenWhereInput
    none?: BarsDataAdditionalInfoChildrenWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoCrowdCompositeListFilter = {
    equals?: BarsDataAdditionalInfoCrowdObjectEqualityInput[]
    every?: BarsDataAdditionalInfoCrowdWhereInput
    some?: BarsDataAdditionalInfoCrowdWhereInput
    none?: BarsDataAdditionalInfoCrowdWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoDiningOptionsCompositeListFilter = {
    equals?: BarsDataAdditionalInfoDiningOptionsObjectEqualityInput[]
    every?: BarsDataAdditionalInfoDiningOptionsWhereInput
    some?: BarsDataAdditionalInfoDiningOptionsWhereInput
    none?: BarsDataAdditionalInfoDiningOptionsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoEmergencyHelpCompositeListFilter = {
    equals?: BarsDataAdditionalInfoEmergencyHelpObjectEqualityInput[]
    every?: BarsDataAdditionalInfoEmergencyHelpWhereInput
    some?: BarsDataAdditionalInfoEmergencyHelpWhereInput
    none?: BarsDataAdditionalInfoEmergencyHelpWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoFromTheBusinessCompositeListFilter = {
    equals?: BarsDataAdditionalInfoFromTheBusinessObjectEqualityInput[]
    every?: BarsDataAdditionalInfoFromTheBusinessWhereInput
    some?: BarsDataAdditionalInfoFromTheBusinessWhereInput
    none?: BarsDataAdditionalInfoFromTheBusinessWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoHighlightsCompositeListFilter = {
    equals?: BarsDataAdditionalInfoHighlightsObjectEqualityInput[]
    every?: BarsDataAdditionalInfoHighlightsWhereInput
    some?: BarsDataAdditionalInfoHighlightsWhereInput
    none?: BarsDataAdditionalInfoHighlightsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoOfferingsCompositeListFilter = {
    equals?: BarsDataAdditionalInfoOfferingsObjectEqualityInput[]
    every?: BarsDataAdditionalInfoOfferingsWhereInput
    some?: BarsDataAdditionalInfoOfferingsWhereInput
    none?: BarsDataAdditionalInfoOfferingsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoParkingCompositeListFilter = {
    equals?: BarsDataAdditionalInfoParkingObjectEqualityInput[]
    every?: BarsDataAdditionalInfoParkingWhereInput
    some?: BarsDataAdditionalInfoParkingWhereInput
    none?: BarsDataAdditionalInfoParkingWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoPaymentsCompositeListFilter = {
    equals?: BarsDataAdditionalInfoPaymentsObjectEqualityInput[]
    every?: BarsDataAdditionalInfoPaymentsWhereInput
    some?: BarsDataAdditionalInfoPaymentsWhereInput
    none?: BarsDataAdditionalInfoPaymentsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoPetsCompositeListFilter = {
    equals?: BarsDataAdditionalInfoPetsObjectEqualityInput[]
    every?: BarsDataAdditionalInfoPetsWhereInput
    some?: BarsDataAdditionalInfoPetsWhereInput
    none?: BarsDataAdditionalInfoPetsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoPlanningCompositeListFilter = {
    equals?: BarsDataAdditionalInfoPlanningObjectEqualityInput[]
    every?: BarsDataAdditionalInfoPlanningWhereInput
    some?: BarsDataAdditionalInfoPlanningWhereInput
    none?: BarsDataAdditionalInfoPlanningWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoPopularForCompositeListFilter = {
    equals?: BarsDataAdditionalInfoPopularForObjectEqualityInput[]
    every?: BarsDataAdditionalInfoPopularForWhereInput
    some?: BarsDataAdditionalInfoPopularForWhereInput
    none?: BarsDataAdditionalInfoPopularForWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoServiceOptionsCompositeListFilter = {
    equals?: BarsDataAdditionalInfoServiceOptionsObjectEqualityInput[]
    every?: BarsDataAdditionalInfoServiceOptionsWhereInput
    some?: BarsDataAdditionalInfoServiceOptionsWhereInput
    none?: BarsDataAdditionalInfoServiceOptionsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BarsDataReviewsReviewContextCompositeFilter = {
    equals?: BarsDataReviewsReviewContextObjectEqualityInput
    is?: BarsDataReviewsReviewContextWhereInput
    isNot?: BarsDataReviewsReviewContextWhereInput
  }

  export type BarsDataReviewsReviewDetailedRatingCompositeFilter = {
    equals?: BarsDataReviewsReviewDetailedRatingObjectEqualityInput
    is?: BarsDataReviewsReviewDetailedRatingWhereInput
    isNot?: BarsDataReviewsReviewDetailedRatingWhereInput
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoAccessibilityListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoAccessibilityCreateInput | BarsDataAdditionalInfoAccessibilityCreateInput[]
    push?: BarsDataAdditionalInfoAccessibilityCreateInput | BarsDataAdditionalInfoAccessibilityCreateInput[]
    updateMany?: BarsDataAdditionalInfoAccessibilityUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoAccessibilityDeleteManyInput
  }

  export type BarsDataAdditionalInfoAmenitiesListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoAmenitiesCreateInput | BarsDataAdditionalInfoAmenitiesCreateInput[]
    push?: BarsDataAdditionalInfoAmenitiesCreateInput | BarsDataAdditionalInfoAmenitiesCreateInput[]
    updateMany?: BarsDataAdditionalInfoAmenitiesUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoAmenitiesDeleteManyInput
  }

  export type BarsDataAdditionalInfoAtmosphereListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoAtmosphereCreateInput | BarsDataAdditionalInfoAtmosphereCreateInput[]
    push?: BarsDataAdditionalInfoAtmosphereCreateInput | BarsDataAdditionalInfoAtmosphereCreateInput[]
    updateMany?: BarsDataAdditionalInfoAtmosphereUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoAtmosphereDeleteManyInput
  }

  export type BarsDataAdditionalInfoChildrenListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoChildrenCreateInput | BarsDataAdditionalInfoChildrenCreateInput[]
    push?: BarsDataAdditionalInfoChildrenCreateInput | BarsDataAdditionalInfoChildrenCreateInput[]
    updateMany?: BarsDataAdditionalInfoChildrenUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoChildrenDeleteManyInput
  }

  export type BarsDataAdditionalInfoCrowdListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoCrowdCreateInput | BarsDataAdditionalInfoCrowdCreateInput[]
    push?: BarsDataAdditionalInfoCrowdCreateInput | BarsDataAdditionalInfoCrowdCreateInput[]
    updateMany?: BarsDataAdditionalInfoCrowdUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoCrowdDeleteManyInput
  }

  export type BarsDataAdditionalInfoDiningOptionsListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoDiningOptionsCreateInput | BarsDataAdditionalInfoDiningOptionsCreateInput[]
    push?: BarsDataAdditionalInfoDiningOptionsCreateInput | BarsDataAdditionalInfoDiningOptionsCreateInput[]
    updateMany?: BarsDataAdditionalInfoDiningOptionsUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoDiningOptionsDeleteManyInput
  }

  export type BarsDataAdditionalInfoEmergencyHelpListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoEmergencyHelpCreateInput | BarsDataAdditionalInfoEmergencyHelpCreateInput[]
    push?: BarsDataAdditionalInfoEmergencyHelpCreateInput | BarsDataAdditionalInfoEmergencyHelpCreateInput[]
    updateMany?: BarsDataAdditionalInfoEmergencyHelpUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoEmergencyHelpDeleteManyInput
  }

  export type BarsDataAdditionalInfoFromTheBusinessListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoFromTheBusinessCreateInput | BarsDataAdditionalInfoFromTheBusinessCreateInput[]
    push?: BarsDataAdditionalInfoFromTheBusinessCreateInput | BarsDataAdditionalInfoFromTheBusinessCreateInput[]
    updateMany?: BarsDataAdditionalInfoFromTheBusinessUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoFromTheBusinessDeleteManyInput
  }

  export type BarsDataAdditionalInfoHighlightsListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoHighlightsCreateInput | BarsDataAdditionalInfoHighlightsCreateInput[]
    push?: BarsDataAdditionalInfoHighlightsCreateInput | BarsDataAdditionalInfoHighlightsCreateInput[]
    updateMany?: BarsDataAdditionalInfoHighlightsUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoHighlightsDeleteManyInput
  }

  export type BarsDataAdditionalInfoOfferingsListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoOfferingsCreateInput | BarsDataAdditionalInfoOfferingsCreateInput[]
    push?: BarsDataAdditionalInfoOfferingsCreateInput | BarsDataAdditionalInfoOfferingsCreateInput[]
    updateMany?: BarsDataAdditionalInfoOfferingsUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoOfferingsDeleteManyInput
  }

  export type BarsDataAdditionalInfoParkingListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoParkingCreateInput | BarsDataAdditionalInfoParkingCreateInput[]
    push?: BarsDataAdditionalInfoParkingCreateInput | BarsDataAdditionalInfoParkingCreateInput[]
    updateMany?: BarsDataAdditionalInfoParkingUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoParkingDeleteManyInput
  }

  export type BarsDataAdditionalInfoPaymentsListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoPaymentsCreateInput | BarsDataAdditionalInfoPaymentsCreateInput[]
    push?: BarsDataAdditionalInfoPaymentsCreateInput | BarsDataAdditionalInfoPaymentsCreateInput[]
    updateMany?: BarsDataAdditionalInfoPaymentsUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoPaymentsDeleteManyInput
  }

  export type BarsDataAdditionalInfoPetsListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoPetsCreateInput | BarsDataAdditionalInfoPetsCreateInput[]
    push?: BarsDataAdditionalInfoPetsCreateInput | BarsDataAdditionalInfoPetsCreateInput[]
    updateMany?: BarsDataAdditionalInfoPetsUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoPetsDeleteManyInput
  }

  export type BarsDataAdditionalInfoPlanningListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoPlanningCreateInput | BarsDataAdditionalInfoPlanningCreateInput[]
    push?: BarsDataAdditionalInfoPlanningCreateInput | BarsDataAdditionalInfoPlanningCreateInput[]
    updateMany?: BarsDataAdditionalInfoPlanningUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoPlanningDeleteManyInput
  }

  export type BarsDataAdditionalInfoPopularForListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoPopularForCreateInput | BarsDataAdditionalInfoPopularForCreateInput[]
    push?: BarsDataAdditionalInfoPopularForCreateInput | BarsDataAdditionalInfoPopularForCreateInput[]
    updateMany?: BarsDataAdditionalInfoPopularForUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoPopularForDeleteManyInput
  }

  export type BarsDataAdditionalInfoServiceOptionsListUpdateEnvelopeInput = {
    set?: BarsDataAdditionalInfoServiceOptionsCreateInput | BarsDataAdditionalInfoServiceOptionsCreateInput[]
    push?: BarsDataAdditionalInfoServiceOptionsCreateInput | BarsDataAdditionalInfoServiceOptionsCreateInput[]
    updateMany?: BarsDataAdditionalInfoServiceOptionsUpdateManyInput
    deleteMany?: BarsDataAdditionalInfoServiceOptionsDeleteManyInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BarsDataOpeningHoursUpdateInput = {
    day?: StringFieldUpdateOperationsInput | string
    hours?: StringFieldUpdateOperationsInput | string
  }

  export type BarsDataReviewsUpdateInput = {
    isLocalGuide?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    originalLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    publishAt?: StringFieldUpdateOperationsInput | string
    publishedAtDate?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    responseFromOwnerDate?: NullableStringFieldUpdateOperationsInput | string | null
    responseFromOwnerText?: NullableStringFieldUpdateOperationsInput | string | null
    reviewContext?: XOR<BarsDataReviewsReviewContextUpdateEnvelopeInput, BarsDataReviewsReviewContextCreateInput>
    reviewDetailedRating?: XOR<BarsDataReviewsReviewDetailedRatingUpdateEnvelopeInput, BarsDataReviewsReviewDetailedRatingCreateInput>
    reviewId?: StringFieldUpdateOperationsInput | string
    reviewImageUrls?: BarsDataReviewsUpdatereviewImageUrlsInput | string[]
    reviewOrigin?: StringFieldUpdateOperationsInput | string
    reviewUrl?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNumberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerPhotoUrl?: StringFieldUpdateOperationsInput | string
    reviewerUrl?: StringFieldUpdateOperationsInput | string
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    textTranslated?: NullableStringFieldUpdateOperationsInput | string | null
    translatedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    visitedIn?: InputJsonValue | InputJsonValue | null
  }

  export type BarsDataAdditionalInfoAccessibilityWhereInput = {
    AND?: BarsDataAdditionalInfoAccessibilityWhereInput | BarsDataAdditionalInfoAccessibilityWhereInput[]
    OR?: BarsDataAdditionalInfoAccessibilityWhereInput[]
    NOT?: BarsDataAdditionalInfoAccessibilityWhereInput | BarsDataAdditionalInfoAccessibilityWhereInput[]
    Assistive_hearing_loop?: BoolNullableFilter<"BarsDataAdditionalInfoAccessibility"> | boolean | null
    Wheelchair_accessible_entrance?: BoolNullableFilter<"BarsDataAdditionalInfoAccessibility"> | boolean | null
    Wheelchair_accessible_parking_lot?: BoolNullableFilter<"BarsDataAdditionalInfoAccessibility"> | boolean | null
    Wheelchair_accessible_restroom?: BoolNullableFilter<"BarsDataAdditionalInfoAccessibility"> | boolean | null
    Wheelchair_accessible_seating?: BoolNullableFilter<"BarsDataAdditionalInfoAccessibility"> | boolean | null
  }

  export type BarsDataAdditionalInfoAmenitiesWhereInput = {
    AND?: BarsDataAdditionalInfoAmenitiesWhereInput | BarsDataAdditionalInfoAmenitiesWhereInput[]
    OR?: BarsDataAdditionalInfoAmenitiesWhereInput[]
    NOT?: BarsDataAdditionalInfoAmenitiesWhereInput | BarsDataAdditionalInfoAmenitiesWhereInput[]
    Accessible?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Air_conditioned?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Airport_shuttle?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Bar?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Bar_onsite?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Breakfast?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Business_center?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Fitness_center?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Free_Wi_Fi?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Free_parking?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Gender_neutral_restroom?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Kid_friendly?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Kitchens_in_some_rooms?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Laundry_service?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Paid_breakfast?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Paid_parking?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Parking?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Pet_friendly?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Pool?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Restaurant?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Restroom?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Room_service?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Smoke_free?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Spa?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Stadium_seating?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
    Wi_Fi?: BoolNullableFilter<"BarsDataAdditionalInfoAmenities"> | boolean | null
  }

  export type BarsDataAdditionalInfoAtmosphereWhereInput = {
    AND?: BarsDataAdditionalInfoAtmosphereWhereInput | BarsDataAdditionalInfoAtmosphereWhereInput[]
    OR?: BarsDataAdditionalInfoAtmosphereWhereInput[]
    NOT?: BarsDataAdditionalInfoAtmosphereWhereInput | BarsDataAdditionalInfoAtmosphereWhereInput[]
    Casual?: BoolNullableFilter<"BarsDataAdditionalInfoAtmosphere"> | boolean | null
    Cozy?: BoolNullableFilter<"BarsDataAdditionalInfoAtmosphere"> | boolean | null
    Historic?: BoolNullableFilter<"BarsDataAdditionalInfoAtmosphere"> | boolean | null
    Quiet?: BoolNullableFilter<"BarsDataAdditionalInfoAtmosphere"> | boolean | null
    Romantic?: BoolNullableFilter<"BarsDataAdditionalInfoAtmosphere"> | boolean | null
    Trending?: BoolNullableFilter<"BarsDataAdditionalInfoAtmosphere"> | boolean | null
    Trendy?: BoolNullableFilter<"BarsDataAdditionalInfoAtmosphere"> | boolean | null
    Upscale?: BoolNullableFilter<"BarsDataAdditionalInfoAtmosphere"> | boolean | null
  }

  export type BarsDataAdditionalInfoChildrenWhereInput = {
    AND?: BarsDataAdditionalInfoChildrenWhereInput | BarsDataAdditionalInfoChildrenWhereInput[]
    OR?: BarsDataAdditionalInfoChildrenWhereInput[]
    NOT?: BarsDataAdditionalInfoChildrenWhereInput | BarsDataAdditionalInfoChildrenWhereInput[]
    Good_for_kids?: BoolNullableFilter<"BarsDataAdditionalInfoChildren"> | boolean | null
    Good_for_kids_birthday?: BoolNullableFilter<"BarsDataAdditionalInfoChildren"> | boolean | null
    Has_changing_table_s_?: BoolNullableFilter<"BarsDataAdditionalInfoChildren"> | boolean | null
    High_chairs?: BoolNullableFilter<"BarsDataAdditionalInfoChildren"> | boolean | null
    Kids__menu?: BoolNullableFilter<"BarsDataAdditionalInfoChildren"> | boolean | null
  }

  export type BarsDataAdditionalInfoCrowdWhereInput = {
    AND?: BarsDataAdditionalInfoCrowdWhereInput | BarsDataAdditionalInfoCrowdWhereInput[]
    OR?: BarsDataAdditionalInfoCrowdWhereInput[]
    NOT?: BarsDataAdditionalInfoCrowdWhereInput | BarsDataAdditionalInfoCrowdWhereInput[]
    College_students?: BoolNullableFilter<"BarsDataAdditionalInfoCrowd"> | boolean | null
    Family_friendly?: BoolNullableFilter<"BarsDataAdditionalInfoCrowd"> | boolean | null
    Groups?: BoolNullableFilter<"BarsDataAdditionalInfoCrowd"> | boolean | null
    LGBTQ__friendly?: BoolNullableFilter<"BarsDataAdditionalInfoCrowd"> | boolean | null
    Tourists?: BoolNullableFilter<"BarsDataAdditionalInfoCrowd"> | boolean | null
    Transgender_safespace?: BoolNullableFilter<"BarsDataAdditionalInfoCrowd"> | boolean | null
  }

  export type BarsDataAdditionalInfoDiningOptionsWhereInput = {
    AND?: BarsDataAdditionalInfoDiningOptionsWhereInput | BarsDataAdditionalInfoDiningOptionsWhereInput[]
    OR?: BarsDataAdditionalInfoDiningOptionsWhereInput[]
    NOT?: BarsDataAdditionalInfoDiningOptionsWhereInput | BarsDataAdditionalInfoDiningOptionsWhereInput[]
    Breakfast?: BoolNullableFilter<"BarsDataAdditionalInfoDiningOptions"> | boolean | null
    Brunch?: BoolNullableFilter<"BarsDataAdditionalInfoDiningOptions"> | boolean | null
    Catering?: BoolNullableFilter<"BarsDataAdditionalInfoDiningOptions"> | boolean | null
    Counter_service?: BoolNullableFilter<"BarsDataAdditionalInfoDiningOptions"> | boolean | null
    Dessert?: BoolNullableFilter<"BarsDataAdditionalInfoDiningOptions"> | boolean | null
    Dinner?: BoolNullableFilter<"BarsDataAdditionalInfoDiningOptions"> | boolean | null
    Lunch?: BoolNullableFilter<"BarsDataAdditionalInfoDiningOptions"> | boolean | null
    Outside_food_allowed?: BoolNullableFilter<"BarsDataAdditionalInfoDiningOptions"> | boolean | null
    Seating?: BoolNullableFilter<"BarsDataAdditionalInfoDiningOptions"> | boolean | null
    Table_service?: BoolNullableFilter<"BarsDataAdditionalInfoDiningOptions"> | boolean | null
  }

  export type BarsDataAdditionalInfoEmergencyHelpWhereInput = {
    AND?: BarsDataAdditionalInfoEmergencyHelpWhereInput | BarsDataAdditionalInfoEmergencyHelpWhereInput[]
    OR?: BarsDataAdditionalInfoEmergencyHelpWhereInput[]
    NOT?: BarsDataAdditionalInfoEmergencyHelpWhereInput | BarsDataAdditionalInfoEmergencyHelpWhereInput[]
    Employs_displaced_individuals?: BoolFilter<"BarsDataAdditionalInfoEmergencyHelp"> | boolean
  }

  export type BarsDataAdditionalInfoFromTheBusinessWhereInput = {
    AND?: BarsDataAdditionalInfoFromTheBusinessWhereInput | BarsDataAdditionalInfoFromTheBusinessWhereInput[]
    OR?: BarsDataAdditionalInfoFromTheBusinessWhereInput[]
    NOT?: BarsDataAdditionalInfoFromTheBusinessWhereInput | BarsDataAdditionalInfoFromTheBusinessWhereInput[]
    Identifies_as_women_owned?: BoolFilter<"BarsDataAdditionalInfoFromTheBusiness"> | boolean
  }

  export type BarsDataAdditionalInfoHighlightsWhereInput = {
    AND?: BarsDataAdditionalInfoHighlightsWhereInput | BarsDataAdditionalInfoHighlightsWhereInput[]
    OR?: BarsDataAdditionalInfoHighlightsWhereInput[]
    NOT?: BarsDataAdditionalInfoHighlightsWhereInput | BarsDataAdditionalInfoHighlightsWhereInput[]
    Bar_games?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Fireplace?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Great_beer_selection?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Great_coffee?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Great_dessert?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Great_tea_selection?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Great_wine_list?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Karaoke?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Live_music?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Live_performances?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Rooftop_seating?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Sports?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
    Trivia_night?: BoolNullableFilter<"BarsDataAdditionalInfoHighlights"> | boolean | null
  }

  export type BarsDataAdditionalInfoOfferingsWhereInput = {
    AND?: BarsDataAdditionalInfoOfferingsWhereInput | BarsDataAdditionalInfoOfferingsWhereInput[]
    OR?: BarsDataAdditionalInfoOfferingsWhereInput[]
    NOT?: BarsDataAdditionalInfoOfferingsWhereInput | BarsDataAdditionalInfoOfferingsWhereInput[]
    Alcohol?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    All_you_can_eat?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Arcade_games?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Beer?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Cocktails?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Coffee?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Dancing?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Food?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Food_at_bar?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Halal_food?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Happy_hour_drinks?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Happy_hour_food?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Hard_liquor?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Healthy_options?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Late_night_food?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Organic_dishes?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Prepared_foods?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Private_dining_room?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Quick_bite?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Salad_bar?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Small_plates?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Vegan_options?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Vegetarian_options?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
    Wine?: BoolNullableFilter<"BarsDataAdditionalInfoOfferings"> | boolean | null
  }

  export type BarsDataAdditionalInfoParkingWhereInput = {
    AND?: BarsDataAdditionalInfoParkingWhereInput | BarsDataAdditionalInfoParkingWhereInput[]
    OR?: BarsDataAdditionalInfoParkingWhereInput[]
    NOT?: BarsDataAdditionalInfoParkingWhereInput | BarsDataAdditionalInfoParkingWhereInput[]
    Free_parking_garage?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
    Free_parking_lot?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
    Free_street_parking?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
    On_site_parking?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
    Paid_parking_garage?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
    Paid_parking_lot?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
    Paid_street_parking?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
    Usually_difficult_to_find_a_space?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
    Usually_plenty_of_parking?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
    Usually_somewhat_difficult_to_find_a_space?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
    Valet_parking?: BoolNullableFilter<"BarsDataAdditionalInfoParking"> | boolean | null
  }

  export type BarsDataAdditionalInfoPaymentsWhereInput = {
    AND?: BarsDataAdditionalInfoPaymentsWhereInput | BarsDataAdditionalInfoPaymentsWhereInput[]
    OR?: BarsDataAdditionalInfoPaymentsWhereInput[]
    NOT?: BarsDataAdditionalInfoPaymentsWhereInput | BarsDataAdditionalInfoPaymentsWhereInput[]
    Cash_only?: BoolNullableFilter<"BarsDataAdditionalInfoPayments"> | boolean | null
    Checks?: BoolNullableFilter<"BarsDataAdditionalInfoPayments"> | boolean | null
    Credit_cards?: BoolNullableFilter<"BarsDataAdditionalInfoPayments"> | boolean | null
    Debit_cards?: BoolNullableFilter<"BarsDataAdditionalInfoPayments"> | boolean | null
    NFC_mobile_payments?: BoolNullableFilter<"BarsDataAdditionalInfoPayments"> | boolean | null
  }

  export type BarsDataAdditionalInfoPetsWhereInput = {
    AND?: BarsDataAdditionalInfoPetsWhereInput | BarsDataAdditionalInfoPetsWhereInput[]
    OR?: BarsDataAdditionalInfoPetsWhereInput[]
    NOT?: BarsDataAdditionalInfoPetsWhereInput | BarsDataAdditionalInfoPetsWhereInput[]
    Dogs_allowed?: BoolNullableFilter<"BarsDataAdditionalInfoPets"> | boolean | null
    Dogs_allowed_inside?: BoolNullableFilter<"BarsDataAdditionalInfoPets"> | boolean | null
    Dogs_allowed_outside?: BoolNullableFilter<"BarsDataAdditionalInfoPets"> | boolean | null
  }

  export type BarsDataAdditionalInfoPlanningWhereInput = {
    AND?: BarsDataAdditionalInfoPlanningWhereInput | BarsDataAdditionalInfoPlanningWhereInput[]
    OR?: BarsDataAdditionalInfoPlanningWhereInput[]
    NOT?: BarsDataAdditionalInfoPlanningWhereInput | BarsDataAdditionalInfoPlanningWhereInput[]
    Accepts_reservations?: BoolNullableFilter<"BarsDataAdditionalInfoPlanning"> | boolean | null
    Appointment_required?: BoolNullableFilter<"BarsDataAdditionalInfoPlanning"> | boolean | null
    Brunch_reservations_recommended?: BoolNullableFilter<"BarsDataAdditionalInfoPlanning"> | boolean | null
    Dinner_reservations_recommended?: BoolNullableFilter<"BarsDataAdditionalInfoPlanning"> | boolean | null
    Lunch_reservations_recommended?: BoolNullableFilter<"BarsDataAdditionalInfoPlanning"> | boolean | null
    Quick_visit?: BoolNullableFilter<"BarsDataAdditionalInfoPlanning"> | boolean | null
    Reservations_required?: BoolNullableFilter<"BarsDataAdditionalInfoPlanning"> | boolean | null
    Usually_a_wait?: BoolNullableFilter<"BarsDataAdditionalInfoPlanning"> | boolean | null
  }

  export type BarsDataAdditionalInfoPopularForWhereInput = {
    AND?: BarsDataAdditionalInfoPopularForWhereInput | BarsDataAdditionalInfoPopularForWhereInput[]
    OR?: BarsDataAdditionalInfoPopularForWhereInput[]
    NOT?: BarsDataAdditionalInfoPopularForWhereInput | BarsDataAdditionalInfoPopularForWhereInput[]
    Breakfast?: BoolNullableFilter<"BarsDataAdditionalInfoPopularFor"> | boolean | null
    Dinner?: BoolNullableFilter<"BarsDataAdditionalInfoPopularFor"> | boolean | null
    Good_for_working_on_laptop?: BoolNullableFilter<"BarsDataAdditionalInfoPopularFor"> | boolean | null
    Lunch?: BoolNullableFilter<"BarsDataAdditionalInfoPopularFor"> | boolean | null
    Solo_dining?: BoolNullableFilter<"BarsDataAdditionalInfoPopularFor"> | boolean | null
  }

  export type BarsDataAdditionalInfoServiceOptionsWhereInput = {
    AND?: BarsDataAdditionalInfoServiceOptionsWhereInput | BarsDataAdditionalInfoServiceOptionsWhereInput[]
    OR?: BarsDataAdditionalInfoServiceOptionsWhereInput[]
    NOT?: BarsDataAdditionalInfoServiceOptionsWhereInput | BarsDataAdditionalInfoServiceOptionsWhereInput[]
    Curbside_pickup?: BoolNullableFilter<"BarsDataAdditionalInfoServiceOptions"> | boolean | null
    Delivery?: BoolNullableFilter<"BarsDataAdditionalInfoServiceOptions"> | boolean | null
    Dine_in?: BoolNullableFilter<"BarsDataAdditionalInfoServiceOptions"> | boolean | null
    Drive_through?: BoolNullableFilter<"BarsDataAdditionalInfoServiceOptions"> | boolean | null
    In_store_pickup?: BoolNullableFilter<"BarsDataAdditionalInfoServiceOptions"> | boolean | null
    In_store_shopping?: BoolNullableFilter<"BarsDataAdditionalInfoServiceOptions"> | boolean | null
    No_contact_delivery?: BoolNullableFilter<"BarsDataAdditionalInfoServiceOptions"> | boolean | null
    Onsite_services?: BoolNullableFilter<"BarsDataAdditionalInfoServiceOptions"> | boolean | null
    Outdoor_seating?: BoolNullableFilter<"BarsDataAdditionalInfoServiceOptions"> | boolean | null
    Takeout?: BoolNullableFilter<"BarsDataAdditionalInfoServiceOptions"> | boolean | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BarsDataReviewsReviewContextWhereInput = {
    AND?: BarsDataReviewsReviewContextWhereInput | BarsDataReviewsReviewContextWhereInput[]
    OR?: BarsDataReviewsReviewContextWhereInput[]
    NOT?: BarsDataReviewsReviewContextWhereInput | BarsDataReviewsReviewContextWhereInput[]
    Meal_type?: StringNullableFilter<"BarsDataReviewsReviewContext"> | string | null
    Noise_level?: StringNullableFilter<"BarsDataReviewsReviewContext"> | string | null
    Parking_space?: StringNullableFilter<"BarsDataReviewsReviewContext"> | string | null
    Price_per_person?: StringNullableFilter<"BarsDataReviewsReviewContext"> | string | null
    Recommendation_for_vegetarians?: StringNullableFilter<"BarsDataReviewsReviewContext"> | string | null
    Reservation?: StringNullableFilter<"BarsDataReviewsReviewContext"> | string | null
    Service?: StringNullableFilter<"BarsDataReviewsReviewContext"> | string | null
    Travel_group?: StringNullableFilter<"BarsDataReviewsReviewContext"> | string | null
    Trip_type?: StringNullableFilter<"BarsDataReviewsReviewContext"> | string | null
    Wait_time?: StringNullableFilter<"BarsDataReviewsReviewContext"> | string | null
  }

  export type BarsDataReviewsReviewDetailedRatingWhereInput = {
    AND?: BarsDataReviewsReviewDetailedRatingWhereInput | BarsDataReviewsReviewDetailedRatingWhereInput[]
    OR?: BarsDataReviewsReviewDetailedRatingWhereInput[]
    NOT?: BarsDataReviewsReviewDetailedRatingWhereInput | BarsDataReviewsReviewDetailedRatingWhereInput[]
    Atmosphere?: IntNullableFilter<"BarsDataReviewsReviewDetailedRating"> | number | null
    Food?: IntNullableFilter<"BarsDataReviewsReviewDetailedRating"> | number | null
    Location?: IntNullableFilter<"BarsDataReviewsReviewDetailedRating"> | number | null
    Rooms?: IntNullableFilter<"BarsDataReviewsReviewDetailedRating"> | number | null
    Service?: IntNullableFilter<"BarsDataReviewsReviewDetailedRating"> | number | null
  }

  export type BarsDataAdditionalInfoAccessibilityUpdateManyInput = {
    where: BarsDataAdditionalInfoAccessibilityWhereInput
    data: BarsDataAdditionalInfoAccessibilityUpdateInput
  }

  export type BarsDataAdditionalInfoAccessibilityDeleteManyInput = {
    where: BarsDataAdditionalInfoAccessibilityWhereInput
  }

  export type BarsDataAdditionalInfoAmenitiesUpdateManyInput = {
    where: BarsDataAdditionalInfoAmenitiesWhereInput
    data: BarsDataAdditionalInfoAmenitiesUpdateInput
  }

  export type BarsDataAdditionalInfoAmenitiesDeleteManyInput = {
    where: BarsDataAdditionalInfoAmenitiesWhereInput
  }

  export type BarsDataAdditionalInfoAtmosphereUpdateManyInput = {
    where: BarsDataAdditionalInfoAtmosphereWhereInput
    data: BarsDataAdditionalInfoAtmosphereUpdateInput
  }

  export type BarsDataAdditionalInfoAtmosphereDeleteManyInput = {
    where: BarsDataAdditionalInfoAtmosphereWhereInput
  }

  export type BarsDataAdditionalInfoChildrenUpdateManyInput = {
    where: BarsDataAdditionalInfoChildrenWhereInput
    data: BarsDataAdditionalInfoChildrenUpdateInput
  }

  export type BarsDataAdditionalInfoChildrenDeleteManyInput = {
    where: BarsDataAdditionalInfoChildrenWhereInput
  }

  export type BarsDataAdditionalInfoCrowdUpdateManyInput = {
    where: BarsDataAdditionalInfoCrowdWhereInput
    data: BarsDataAdditionalInfoCrowdUpdateInput
  }

  export type BarsDataAdditionalInfoCrowdDeleteManyInput = {
    where: BarsDataAdditionalInfoCrowdWhereInput
  }

  export type BarsDataAdditionalInfoDiningOptionsUpdateManyInput = {
    where: BarsDataAdditionalInfoDiningOptionsWhereInput
    data: BarsDataAdditionalInfoDiningOptionsUpdateInput
  }

  export type BarsDataAdditionalInfoDiningOptionsDeleteManyInput = {
    where: BarsDataAdditionalInfoDiningOptionsWhereInput
  }

  export type BarsDataAdditionalInfoEmergencyHelpUpdateManyInput = {
    where: BarsDataAdditionalInfoEmergencyHelpWhereInput
    data: BarsDataAdditionalInfoEmergencyHelpUpdateInput
  }

  export type BarsDataAdditionalInfoEmergencyHelpDeleteManyInput = {
    where: BarsDataAdditionalInfoEmergencyHelpWhereInput
  }

  export type BarsDataAdditionalInfoFromTheBusinessUpdateManyInput = {
    where: BarsDataAdditionalInfoFromTheBusinessWhereInput
    data: BarsDataAdditionalInfoFromTheBusinessUpdateInput
  }

  export type BarsDataAdditionalInfoFromTheBusinessDeleteManyInput = {
    where: BarsDataAdditionalInfoFromTheBusinessWhereInput
  }

  export type BarsDataAdditionalInfoHighlightsUpdateManyInput = {
    where: BarsDataAdditionalInfoHighlightsWhereInput
    data: BarsDataAdditionalInfoHighlightsUpdateInput
  }

  export type BarsDataAdditionalInfoHighlightsDeleteManyInput = {
    where: BarsDataAdditionalInfoHighlightsWhereInput
  }

  export type BarsDataAdditionalInfoOfferingsUpdateManyInput = {
    where: BarsDataAdditionalInfoOfferingsWhereInput
    data: BarsDataAdditionalInfoOfferingsUpdateInput
  }

  export type BarsDataAdditionalInfoOfferingsDeleteManyInput = {
    where: BarsDataAdditionalInfoOfferingsWhereInput
  }

  export type BarsDataAdditionalInfoParkingUpdateManyInput = {
    where: BarsDataAdditionalInfoParkingWhereInput
    data: BarsDataAdditionalInfoParkingUpdateInput
  }

  export type BarsDataAdditionalInfoParkingDeleteManyInput = {
    where: BarsDataAdditionalInfoParkingWhereInput
  }

  export type BarsDataAdditionalInfoPaymentsUpdateManyInput = {
    where: BarsDataAdditionalInfoPaymentsWhereInput
    data: BarsDataAdditionalInfoPaymentsUpdateInput
  }

  export type BarsDataAdditionalInfoPaymentsDeleteManyInput = {
    where: BarsDataAdditionalInfoPaymentsWhereInput
  }

  export type BarsDataAdditionalInfoPetsUpdateManyInput = {
    where: BarsDataAdditionalInfoPetsWhereInput
    data: BarsDataAdditionalInfoPetsUpdateInput
  }

  export type BarsDataAdditionalInfoPetsDeleteManyInput = {
    where: BarsDataAdditionalInfoPetsWhereInput
  }

  export type BarsDataAdditionalInfoPlanningUpdateManyInput = {
    where: BarsDataAdditionalInfoPlanningWhereInput
    data: BarsDataAdditionalInfoPlanningUpdateInput
  }

  export type BarsDataAdditionalInfoPlanningDeleteManyInput = {
    where: BarsDataAdditionalInfoPlanningWhereInput
  }

  export type BarsDataAdditionalInfoPopularForUpdateManyInput = {
    where: BarsDataAdditionalInfoPopularForWhereInput
    data: BarsDataAdditionalInfoPopularForUpdateInput
  }

  export type BarsDataAdditionalInfoPopularForDeleteManyInput = {
    where: BarsDataAdditionalInfoPopularForWhereInput
  }

  export type BarsDataAdditionalInfoServiceOptionsUpdateManyInput = {
    where: BarsDataAdditionalInfoServiceOptionsWhereInput
    data: BarsDataAdditionalInfoServiceOptionsUpdateInput
  }

  export type BarsDataAdditionalInfoServiceOptionsDeleteManyInput = {
    where: BarsDataAdditionalInfoServiceOptionsWhereInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BarsDataReviewsReviewContextUpdateEnvelopeInput = {
    set?: BarsDataReviewsReviewContextCreateInput
    update?: BarsDataReviewsReviewContextUpdateInput
  }

  export type BarsDataReviewsReviewDetailedRatingUpdateEnvelopeInput = {
    set?: BarsDataReviewsReviewDetailedRatingCreateInput
    update?: BarsDataReviewsReviewDetailedRatingUpdateInput
  }

  export type BarsDataReviewsUpdatereviewImageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type BarsDataAdditionalInfoAccessibilityUpdateInput = {
    Assistive_hearing_loop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Wheelchair_accessible_entrance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Wheelchair_accessible_parking_lot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Wheelchair_accessible_restroom?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Wheelchair_accessible_seating?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoAmenitiesUpdateInput = {
    Accessible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Air_conditioned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Airport_shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Bar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Bar_onsite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Breakfast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Business_center?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Fitness_center?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Free_Wi_Fi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Free_parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Gender_neutral_restroom?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Kid_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Kitchens_in_some_rooms?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Laundry_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Paid_breakfast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Paid_parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Pet_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Pool?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Restaurant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Restroom?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Room_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Smoke_free?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Spa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Stadium_seating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Wi_Fi?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoAtmosphereUpdateInput = {
    Casual?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Cozy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Historic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Quiet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Romantic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Trending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Trendy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Upscale?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoChildrenUpdateInput = {
    Good_for_kids?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Good_for_kids_birthday?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_changing_table_s_?: NullableBoolFieldUpdateOperationsInput | boolean | null
    High_chairs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Kids__menu?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoCrowdUpdateInput = {
    College_students?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Family_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Groups?: NullableBoolFieldUpdateOperationsInput | boolean | null
    LGBTQ__friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tourists?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Transgender_safespace?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoDiningOptionsUpdateInput = {
    Breakfast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Brunch?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Catering?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Counter_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Dessert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Dinner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Lunch?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Outside_food_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Seating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Table_service?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoEmergencyHelpUpdateInput = {
    Employs_displaced_individuals?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BarsDataAdditionalInfoFromTheBusinessUpdateInput = {
    Identifies_as_women_owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BarsDataAdditionalInfoHighlightsUpdateInput = {
    Bar_games?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Fireplace?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Great_beer_selection?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Great_coffee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Great_dessert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Great_tea_selection?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Great_wine_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Karaoke?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Live_music?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Live_performances?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Rooftop_seating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Sports?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Trivia_night?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoOfferingsUpdateInput = {
    Alcohol?: NullableBoolFieldUpdateOperationsInput | boolean | null
    All_you_can_eat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Arcade_games?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Beer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Cocktails?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Coffee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Dancing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Food?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Food_at_bar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Halal_food?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Happy_hour_drinks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Happy_hour_food?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Hard_liquor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Healthy_options?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Late_night_food?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Organic_dishes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Prepared_foods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Private_dining_room?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Quick_bite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Salad_bar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Small_plates?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Vegan_options?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Vegetarian_options?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Wine?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoParkingUpdateInput = {
    Free_parking_garage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Free_parking_lot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Free_street_parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    On_site_parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Paid_parking_garage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Paid_parking_lot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Paid_street_parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Usually_difficult_to_find_a_space?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Usually_plenty_of_parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Usually_somewhat_difficult_to_find_a_space?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Valet_parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoPaymentsUpdateInput = {
    Cash_only?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Checks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Credit_cards?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Debit_cards?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NFC_mobile_payments?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoPetsUpdateInput = {
    Dogs_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Dogs_allowed_inside?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Dogs_allowed_outside?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoPlanningUpdateInput = {
    Accepts_reservations?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Appointment_required?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Brunch_reservations_recommended?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Dinner_reservations_recommended?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Lunch_reservations_recommended?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Quick_visit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Reservations_required?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Usually_a_wait?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoPopularForUpdateInput = {
    Breakfast?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Dinner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Good_for_working_on_laptop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Lunch?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Solo_dining?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataAdditionalInfoServiceOptionsUpdateInput = {
    Curbside_pickup?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Delivery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Dine_in?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Drive_through?: NullableBoolFieldUpdateOperationsInput | boolean | null
    In_store_pickup?: NullableBoolFieldUpdateOperationsInput | boolean | null
    In_store_shopping?: NullableBoolFieldUpdateOperationsInput | boolean | null
    No_contact_delivery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Onsite_services?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Outdoor_seating?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Takeout?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BarsDataReviewsReviewContextUpdateInput = {
    Meal_type?: NullableStringFieldUpdateOperationsInput | string | null
    Noise_level?: NullableStringFieldUpdateOperationsInput | string | null
    Parking_space?: NullableStringFieldUpdateOperationsInput | string | null
    Price_per_person?: NullableStringFieldUpdateOperationsInput | string | null
    Recommendation_for_vegetarians?: NullableStringFieldUpdateOperationsInput | string | null
    Reservation?: NullableStringFieldUpdateOperationsInput | string | null
    Service?: NullableStringFieldUpdateOperationsInput | string | null
    Travel_group?: NullableStringFieldUpdateOperationsInput | string | null
    Trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    Wait_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BarsDataReviewsReviewDetailedRatingUpdateInput = {
    Atmosphere?: NullableIntFieldUpdateOperationsInput | number | null
    Food?: NullableIntFieldUpdateOperationsInput | number | null
    Location?: NullableIntFieldUpdateOperationsInput | number | null
    Rooms?: NullableIntFieldUpdateOperationsInput | number | null
    Service?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}