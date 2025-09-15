import 'styled-components'
import type { Theme } from '@mui/material/styles'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    // This is a workaround to avoid the TypeScript warning about empty interfaces
    // while maintaining full MUI theme compatibility
    _mui: true
  }
}