export type QueueState = 'active' | 'inactive';

export interface KeyValuePairs {
  [k: string]: string | any;
}
export enum BackgroundQueueErrorEnum {
  add_worker_failed,
  worker_execute_error,
}
