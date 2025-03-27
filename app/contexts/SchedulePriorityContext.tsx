"use client";
import { createContext, useContext } from "react";
import { useSchedulePriority } from "@/app/utils/hooks";
import { useSchedulePriorityProps } from "@/app/utils/types";

const SchedulePriorityContext = createContext<useSchedulePriorityProps | undefined>(undefined);

export const SchedulePriorityProvider = ({ children }: { children: React.ReactNode }) => {
  const { schedulePriority, setSchedulePriority } = useSchedulePriority();

  return (
    <SchedulePriorityContext.Provider value={{ schedulePriority, setSchedulePriority }}>
      {children}
    </SchedulePriorityContext.Provider>
  );
};

export const useSchedulePriorityContext = () => {
  const context = useContext(SchedulePriorityContext);
  if (!context) {
    throw new Error("useSchedulePriorityContext must be used within a SchedulePriorityProvider");
  }
  return context;
};
