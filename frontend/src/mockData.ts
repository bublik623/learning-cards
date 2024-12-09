import type { LearningModel } from "./types";

const mockData: LearningModel[] = [
  {
    type: "module",
    data: {
      id: 1,
      name: "Introduction to Vue 3",
      description: "A lesson on basic Vue 3 concepts",
      imagePath: null,
      moduleType: "lesson",
      duration: 600,
      createdAt: "2024-01-01T10:00:00Z",
      updatedAt: "2024-01-02T12:00:00Z",
    },
    context: {
      status: "incomplete",
      complete: false,
      completedAt: null,
    },
  },
  {
    type: "module",
    data: {
      id: 2,
      name: "Vue 3 Quiz",
      description: "Test your knowledge of Vue 3",
      imagePath: null,
      moduleType: "quiz",
      duration: 300,
      createdAt: "2024-01-01T10:00:00Z",
      updatedAt: "2024-01-02T12:00:00Z",
    },
    context: {
      status: "locked",
      complete: false,
      completedAt: null,
    },
  },
  {
    type: "event",
    data: {
      id: 101,
      name: "Vue Workshop",
      description: "Hands-on workshop at our HQ",
      imagePath: null,
      location: "Copenhagen HQ",
      startDate: "2024-02-10T09:00:00Z",
      endDate: "2024-02-10T16:00:00Z",
      signupDeadline: "2024-01-31T23:59:59Z",
      createdAt: "2024-01-10T10:00:00Z",
      updatedAt: "2024-01-10T10:00:00Z",
    },
    context: {
      status: "invited",
      complete: false,
      completedAt: null,
    },
  },
];

export default mockData;
