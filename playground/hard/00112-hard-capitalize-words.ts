/*
  112 - Capitalize Words
  -------
  by Anthony Fu (@antfu) #hard #template-literal

  ### Question

  Implement `CapitalizeWords<T>` which converts the first letter of **each word of a string** to uppercase and leaves the rest as-is.

  For example

  ```ts
  type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
  ```

  > View on GitHub: https://tsch.js.org/112
*/

/* _____________ Your Code Here _____________ */

type Alpha = {
  'a': 'A'
  'b': 'B'
  'c': 'C'
  'd': 'D'
  'e': 'E'
  'f': 'F'
  'g': 'G'
  'h': 'H'
  'i': 'I'
  'j': 'J'
  'k': 'K'
  'l': 'L'
  'm': 'M'
  'n': 'N'
  'o': 'O'
  'p': 'P'
  'q': 'Q'
  'r': 'R'
  's': 'S'
  't': 'T'
  'u': 'U'
  'v': 'V'
  'w': 'W'
  'x': 'X'
  'y': 'Y'
  'z': 'Z'
}

// [string, string]
type Cut<S, Pref extends string = ''> = S extends `${infer F}${infer R}` ? (
  F extends (keyof Alpha | Alpha[keyof Alpha]) ? (
    Cut<R, `${Pref}${F}`>
  ) : [Pref, S]
) : [Pref, '']

type CapitalizeWords<S extends string> = Cut<S> extends [infer Letters extends string, infer Rest] ? (
  `${Capitalize<Letters>}${Rest extends `${infer F}${infer R}` ? (
    `${F}${CapitalizeWords<R>}`
  ) : ''
  }`
) : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>, 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/112/answer
  > View solutions: https://tsch.js.org/112/solutions
  > More Challenges: https://tsch.js.org
*/
