export type ModuleStatuses = "completed" | "incomplete" | "locked" | "pending";
export type EventStatuses = "attended" | "attending" | "invited" | "declined";

export interface ModuleData {
  id: number;
  name: string;
  description: string | null;
  imagePath: string | null;
  moduleType: "quiz" | "survey" | "lesson";
  duration: number;
  createdAt: string;
  updatedAt: string;
}

export interface EventData {
  id: number;
  name: string;
  description: string | null;
  imagePath: string | null;
  location: string;
  startDate: string;
  endDate: string;
  signupDeadline: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ContextData<T> {
  status: T;
  complete: boolean;
  completedAt: string | null;
}

export type LearningModel =
  | {
      type: "module";
      data: ModuleData;
      context: ContextData<ModuleStatuses>;
    }
  | {
      type: "event";
      data: EventData;
      context: ContextData<EventStatuses>;
    };
