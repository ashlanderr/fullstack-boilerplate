import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import {trpc, queryClient, trpcClient} from "./trpc.ts";
import {QueryClientProvider} from "@tanstack/react-query";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
    <App />
          </QueryClientProvider>
      </trpc.Provider>
  </StrictMode>,
)
