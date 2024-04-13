export enum TaskStatusType {
    Open = 'Open',
    Pending = 'Pending',
    'On hold' = 'On hold',
    Completed = 'Completed',
}

export interface TaskModel {
    id: string,
    title: string,
    description: string,
    dueDate: string;
    status: TaskStatusType;
}
