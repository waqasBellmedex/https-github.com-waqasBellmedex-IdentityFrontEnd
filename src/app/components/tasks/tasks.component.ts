import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'Pending', dueDate: new Date() },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'Completed', dueDate: new Date() },
    // Add more tasks as needed
  ];

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'title', header: 'Title' },
    { field: 'description', header: 'Description' },
    { field: 'status', header: 'Status' },
    { field: 'dueDate', header: 'Due Date' }
  ];

  actions: MenuItem[] = [
    { label: 'Edit', icon: 'pi pi-pencil', command: () => this.onEditTask() },
    { label: 'Delete', icon: 'pi pi-trash', command: () => this.onDeleteTask() }
  ];

  onAddTask() {
    // Logic to add a new task
  }

  onEditTask() {
    // Logic to edit a task
  }

  onDeleteTask() {
    // Logic to delete a task
  }
}
