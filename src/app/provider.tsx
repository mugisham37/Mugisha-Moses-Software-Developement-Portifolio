"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider component that wraps the application to provide theme context
 * Uses next-themes library to handle theme switching and persistence
 * 
 * This component re-exports the NextThemesProvider with the same props
 * to maintain type safety while providing a consistent naming convention
 * 
 * @param props - All props are passed directly to NextThemesProvider
 * @returns {React.ReactElement} The ThemeProvider component
 */
export function ThemeProvider(props: React.ComponentProps<typeof NextThemesProvider>): React.ReactElement {
  return <NextThemesProvider {...props} />;
}
