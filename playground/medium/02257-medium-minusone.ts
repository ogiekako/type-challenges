/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

type StrToNum<S> = S extends '0' ? 0 : S extends `0${infer R}` ? StrToNum<R> : S extends `${infer X extends number}` ? X : never

type Minus1 = {
  '1': '0'
  '2': '1'
  '3': '2'
  '4': '3'
  '5': '4'
  '6': '5'
  '7': '6'
  '8': '7'
  '9': '8'
}

type M1<S> = S extends `${infer F}${infer R}` ? M1<R> extends [infer NeedMinus, infer Rm1 extends string] ? (
  NeedMinus extends false ? [false, `${F}${Rm1}`] : F extends keyof Minus1 ? [false, `${Minus1[F]}${Rm1}`] : [true, `9${Rm1}`]
) : never : [true, '']

type MinusOne<T extends number> = 0 extends T ? -1 : StrToNum<M1<`${T}`>[1]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
