import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { DashboardLayout } from './components/home/DashboardLayout.tsx'
import { TurmaDetailPage } from './components/home/TurmaDetailPage.tsx'
import { TemplateDetailPage } from './components/home/TemplateDetailPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<App />} />
        <Route path="/home" element={<DashboardLayout />}>
          <Route path="turmas/:id" element={<TurmaDetailPage />} />
          <Route path="templates/:id" element={<TemplateDetailPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
