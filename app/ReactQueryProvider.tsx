"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();


const ReactQueryProvider = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </div>
  );
};

export default ReactQueryProvider;