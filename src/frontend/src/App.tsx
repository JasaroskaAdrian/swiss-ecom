import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ThemeProvider } from "./components/theme-provider"

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
)

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
      