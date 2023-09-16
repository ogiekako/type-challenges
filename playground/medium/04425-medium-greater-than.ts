/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

type Dig = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type GtSmall<T extends number, U extends number, N extends any[] = []> = N['length'] extends T ? false : N['length'] extends U ? true : GtSmall<T, U, [...N, 0]>

type StrLen<S, A extends any[] = []> = S extends `${string}${infer R}` ? StrLen<R, [...A, 0]> : A['length']

type Gt<T extends string, U extends string> = GreaterThan<StrLen<T>, StrLen<U>> extends true ? true : GreaterThan<StrLen<U>, StrLen<T>> extends true ? false : [T, U] extends [`${infer T1 extends number}${infer T2}`, `${infer U1 extends number}${infer U2}`] ? (GreaterThan<T1, U1> extends true ? true : GreaterThan<U1, T1> extends true ? false : Gt<T2, U2>) : never

type GreaterThan<T extends number, U extends number> = T extends U ? false : T extends Dig ? GtSmall<T, U> : U extends Dig ? GtSmall<T, U> : Gt<`${T}`, `${U}`>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
