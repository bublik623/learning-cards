import {
  LearningModel,
  ModuleData,
  EventData,
  ContextData,
  ModuleStatuses,
  EventStatuses,
} from "./types";

function randomDate(start: Date, end: Date): string {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString();
}

function createModuleData(id: number): ModuleData {
  const moduleTypes: Array<ModuleData["moduleType"]> = [
    "quiz",
    "survey",
    "lesson",
  ];
  return {
    id,
    name: `Module #${id}`,
    description:
      id % 2 === 0
        ? "A quiz to test your knowledge."
        : "A lesson module for learning.",
    imagePath: null,
    moduleType: moduleTypes[id % moduleTypes.length],
    duration: (Math.floor(Math.random() * 10) + 1) * 60,
    createdAt: randomDate(new Date(2020, 0, 1), new Date()),
    updatedAt: randomDate(new Date(2020, 0, 1), new Date()),
  };
}

function createEventData(id: number): EventData {
  const start = randomDate(new Date(2024, 0, 1), new Date(2024, 1, 1));
  const end = randomDate(new Date(2024, 1, 1), new Date(2024, 2, 1));
  return {
    id,
    name: `Event #${id}`,
    description: "An interactive event.",
    imagePath: null,
    location: "Copenhagen HQ",
    startDate: start,
    endDate: end,
    signupDeadline: null,
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 1)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 1)),
  };
}

function createModuleContext(): ContextData<ModuleStatuses> {
  const statuses: ModuleStatuses[] = [
    "completed",
    "incomplete",
    "locked",
    "pending",
  ];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  return {
    status,
    complete: status === "completed",
    completedAt: status === "completed" ? new Date().toISOString() : null,
  };
}

function createEventContext(): ContextData<EventStatuses> {
  const statuses: EventStatuses[] = [
    "attended",
    "attending",
    "invited",
    "declined",
  ];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  return {
    status,
    complete: status === "attended",
    completedAt: status === "attended" ? new Date().toISOString() : null,
  };
}

export function generateMockData(): LearningModel[] {
  const items: LearningModel[] = [];
  // Generate 3 modules and 3 events
  for (let i = 1; i <= 3; i++) {
    items.push({
      type: "module",
      data: createModuleData(i),
      context: createModuleContext(),
    });
  }

  for (let i = 101; i <= 103; i++) {
    items.push({
      type: "event",
      data: createEventData(i),
      context: createEventContext(),
    });
  }

  return items;
}
