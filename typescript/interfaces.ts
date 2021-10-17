
//types
import { InputCategory, InputOrder } from '~/typescript/types.ts'

export interface InputSelectInterface {
  slug: InputCategory | InputOrder
  title: string
}

export interface SearchFormInterface {
  category: InputCategory
  order: InputOrder
}

export interface SearchResultFieldInterface {
  name: string
  data: string
}

export interface ThemeInterface {
  colorBackground: string
  colorForeground: string
}

export interface UnknownObjectInterface {
  [key: string]: any
}
