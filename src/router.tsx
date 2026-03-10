import { createBrowserRouter } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/services/:slug', element: <ServiceDetailPage /> },
      { path: '/gallery', element: <GalleryPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/process', element: <ProcessPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/areas/:suburb', element: <NotFoundPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
