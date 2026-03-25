import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import { ThemeProvider } from "./components/ThemeProvider";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path='login' element={<AuthLayout/>}>
      <Route path='/login' element={<Login />} />
    </Route>

    <Route path='*' element={<NotFoundPage />} />
    </>
  )
)

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
      