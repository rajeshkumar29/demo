import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /**
   * Get list of tasks
   * @returns 
   */
  fetchList() {
    return this.http.get<TaskModel[]>(`${this.url}/task`);
  }

  /**
   * Create a new task
   * 
   * @param body 
   * @returns 
   */
  create(body: any) {
    return this.http.post(`${this.url}/task`, body);
  }

  /**
   * Get timesheet by id
   * 
   * @param id 
   * @returns 
   */
  fetch(id: string) {
    return this.http.get<TaskModel>(`${this.url}/task/${id}`);
  }

  /**
   * Update task
   * 
   * @param id 
   * @param body 
   * @returns 
   */
  update(id: string, body: any) {
    return this.http.patch(`${this.url}/task/${id}`, body);
  }

  /**
   * Delete task
   * 
   * @param id 
   * @returns 
   */
  delete(id: string) {
    return this.http.delete(`${this.url}/task/${id}`);
  }
}
