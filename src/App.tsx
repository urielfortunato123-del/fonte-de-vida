import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TraditionPage from "./pages/TraditionPage";
import CrisePage from "./pages/CrisePage";
import LibraryPage from "./pages/LibraryPage";
import WorkPage from "./pages/WorkPage";
import ChapterPage from "./pages/ChapterPage";
import ComparePage from "./pages/ComparePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tradition/:id" element={<TraditionPage />} />
          <Route path="/library/:traditionId" element={<LibraryPage />} />
          <Route path="/library/:traditionId/:workId" element={<WorkPage />} />
          <Route path="/library/:traditionId/:workId/:chapterId" element={<ChapterPage />} />
          <Route path="/crise" element={<CrisePage />} />
          <Route path="/comparar" element={<ComparePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
