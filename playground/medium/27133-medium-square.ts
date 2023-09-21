/*
  27133 - Square
  -------
  by null (@aswinsvijay) #medium #tuple #array #math

  ### Question

  Given a number, your type should return its square.

  > View on GitHub: https://tsch.js.org/27133
*/

/* _____________ Your Code Here _____________ */

type Nxt = {
  0: [false, 1]
  1: [false, 2]
  2: [false, 3]
  3: [false, 4]
  4: [false, 5]
  5: [false, 6]
  6: [false, 7]
  7: [false, 8]
  8: [false, 9]
  9: [true, 0]
}

type Sum1 = {
  0: { 0: [false, 0]; 1: [false, 1]; 2: [false, 2]; 3: [false, 3]; 4: [false, 4]; 5: [false, 5]; 6: [false, 6]; 7: [false, 7]; 8: [false, 8]; 9: [false, 9] }
  1: { 0: [false, 1]; 1: [false, 2]; 2: [false, 3]; 3: [false, 4]; 4: [false, 5]; 5: [false, 6]; 6: [false, 7]; 7: [false, 8]; 8: [false, 9]; 9: [true, 0] }
  2: { 0: [false, 2]; 1: [false, 3]; 2: [false, 4]; 3: [false, 5]; 4: [false, 6]; 5: [false, 7]; 6: [false, 8]; 7: [false, 9]; 8: [true, 0]; 9: [true, 1] }
  3: { 0: [false, 3]; 1: [false, 4]; 2: [false, 5]; 3: [false, 6]; 4: [false, 7]; 5: [false, 8]; 6: [false, 9]; 7: [true, 0]; 8: [true, 1]; 9: [true, 2] }
  4: { 0: [false, 4]; 1: [false, 5]; 2: [false, 6]; 3: [false, 7]; 4: [false, 8]; 5: [false, 9]; 6: [true, 0]; 7: [true, 1]; 8: [true, 2]; 9: [true, 3] }
  5: { 0: [false, 5]; 1: [false, 6]; 2: [false, 7]; 3: [false, 8]; 4: [false, 9]; 5: [true, 0]; 6: [true, 1]; 7: [true, 2]; 8: [true, 3]; 9: [true, 4] }
  6: { 0: [false, 6]; 1: [false, 7]; 2: [false, 8]; 3: [false, 9]; 4: [true, 0]; 5: [true, 1]; 6: [true, 2]; 7: [true, 3]; 8: [true, 4]; 9: [true, 5] }
  7: { 0: [false, 7]; 1: [false, 8]; 2: [false, 9]; 3: [true, 0]; 4: [true, 1]; 5: [true, 2]; 6: [true, 3]; 7: [true, 4]; 8: [true, 5]; 9: [true, 6] }
  8: { 0: [false, 8]; 1: [false, 9]; 2: [true, 0]; 3: [true, 1]; 4: [true, 2]; 5: [true, 3]; 6: [true, 4]; 7: [true, 5]; 8: [true, 6]; 9: [true, 7] }
  9: { 0: [false, 9]; 1: [true, 0]; 2: [true, 1]; 3: [true, 2]; 4: [true, 3]; 5: [true, 4]; 6: [true, 5]; 7: [true, 6]; 8: [true, 7]; 9: [true, 8] }
}

type Abs<N extends number> = `${N}` extends `-${infer M extends number}` ? M : N

type Mul<N extends number, M extends number> = Div2<M> extends [infer Odd extends boolean, infer M2 extends number] ? (
  [Odd, M2] extends [false, 0] ? 0 : (
    Mul<N, M2> extends infer NM2 extends number ? (
      Odd extends false ? Add<NM2, NM2> : Add<Add<NM2, NM2>, N>
    ) : never
  )
) : never

// [boolean, number]
type Div2<N, R extends 0[] = []> = [...R, ...R]['length'] extends N ? [false, R['length']] : [...R, ...R, 0]['length'] extends N ? [true, R['length']] : Div2<N, [...R, 0]>

type Rev<S> = S extends `${infer F}${infer R}` ? `${Rev<R>}${F}` : ''
type Add<A extends number, B extends number> = AddRev<Rev<`${A}`>, Rev<`${B}`>, false> extends [infer C extends boolean, infer S extends string] ? (C extends true ? `1${S}` : S) extends `${infer N extends number}` ? N : never : never

type Carry<S extends [boolean, keyof Nxt], C extends boolean> = C extends false ? S : S[0] extends true ? [true, Nxt[S[1]][1]] : Nxt[S[1]]

// [boolean, string]
type AddRev<A extends string, B extends string, C extends boolean> =
  [A, B] extends [`${infer A1 extends keyof Sum1}${infer A2}`, `${infer B1 extends number}${infer B2}`] ? (
    B1 extends infer B1 extends keyof Sum1[keyof Sum1] ? (
      Carry<Sum1[A1][B1], C> extends [infer C2 extends boolean, infer S2 extends number] ? (
        AddRev<A2, B2, C2> extends [infer C3, infer S3 extends string] ? (
          [C3, `${S3}${S2}`]
        ) : never
      ) : never
    ) : never
  ) : [A, B] extends ['', ''] ? [C, ''] : A extends '' ? AddRev<'0', B, C> : AddRev<A, '0', C>

type Square<N extends number> = Mul<Abs<N>, Abs<N>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Square<0>, 0>>,
  Expect<Equal<Square<1>, 1>>,
  Expect<Equal<Square<3>, 9>>,
  Expect<Equal<Square<20>, 400>>,
  Expect<Equal<Square<100>, 10000>>,

  // Negative numbers
  Expect<Equal<Square<-2>, 4>>,
  Expect<Equal<Square<-5>, 25>>,
  Expect<Equal<Square<-31>, 961>>,
  Expect<Equal<Square<-50>, 2500>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/27133/answer
  > View solutions: https://tsch.js.org/27133/solutions
  > More Challenges: https://tsch.js.org
*/
