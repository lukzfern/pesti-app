import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import type { FC } from 'react'
import { lazy, Suspense } from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { CssBaseline } from '@mui/material'
import { theme } from './core/theme/theme'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import LoadingScreen from './components/LoadingScreen'
import { AppContainer, MainContent } from './layouts/AppLayout.styles'

const BlogPost = lazy(() => import('./pages/blog/BlogPost'))
const BlogIndex = lazy(() => import('./pages/blog/Index'))

const App: FC = () => {
  return (
    <MUIThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppContainer>
            <Header />
            <MainContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/blog"
                  element={
                    <Suspense fallback={<LoadingScreen />}>
                      <BlogIndex />
                    </Suspense>
                  }
                />
                <Route
                  path="/blog/tag/:tag"
                  element={
                    <Suspense fallback={<LoadingScreen />}>
                      <BlogIndex />
                    </Suspense>
                  }
                />
                <Route
                  path="/blog/:slug"
                  element={
                    <Suspense fallback={<LoadingScreen />}>
                      <BlogPost />
                    </Suspense>
                  }
                />
              </Routes>
            </MainContent>
            <Footer />
          </AppContainer>
        </Router>
      </StyledThemeProvider>
    </MUIThemeProvider>
  )
}

export default App
