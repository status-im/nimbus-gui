/**
 * A module for utility types that could be used in pretty much every module.
 */

/**
 * Allows one to create a type that is stored as an underlying type but is distinct from it in the
 * type system.
 *
 * @example
 * // Creates a distinct `UUID` type from a `string` which can then be expected and only passed
 * // with either a `UUID` constructor or a value that comes from elsewhere as a constructed `UUID`.
 * type UUID = Distinct<"UUID", string>;
 * function UUID(uuid: string): UUID {
 *     return uuid as UUID;
 * }
 */
export type Distinct<Tag, Type> = Type & {
  readonly __distinct_tag: Tag
}
