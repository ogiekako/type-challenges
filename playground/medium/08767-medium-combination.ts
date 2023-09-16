/*
  8767 - Combination
  -------
  by Homyee King (@HomyeeKing) #medium #array #application #string

  ### Question

  Given an array of strings, do Permutation & Combination.
  It's also useful for the prop types like video [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)

  ```ts
  // expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
  type Keys = Combination<['foo', 'bar', 'baz']>
  ```

  > View on GitHub: https://tsch.js.org/8767
*/

/* _____________ Your Code Here _____________ */

type Combination<T extends string[], U = Comb<T>> = U extends [] ? never : U extends any ? Join<U> : never

type Comb<T> = T extends [infer F, ...infer R] ? Ins<F, Comb<R>> | Comb<R> : []
type Ins<S, T> = T extends [infer F, ...infer R] ? [S, ...T] | [F, ...Ins<S, R>] : [S]

type Join<S> = S extends [] ? '' : S extends [infer F] ? F : S extends [infer F extends string, ...infer R] ? `${F} ${Join<R>}` : ''

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
    'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8767/answer
  > View solutions: https://tsch.js.org/8767/solutions
  > More Challenges: https://tsch.js.org
*/
