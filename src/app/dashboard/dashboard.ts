import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  lastUpdated = new Date().toLocaleTimeString();

  machineCards = [
    { title: 'CNC-001', status: 'idle', part: '-', oee: '51.5%' },
    { title: 'CNC-002', status: 'running', part: 'PRT-7891', oee: '98.6%' },
    { title: 'CNC-003', status: 'maintenance', part: '-', oee: '0%' },
    { title: 'CNC-004', status: 'breakdown', part: '-', oee: '0%' },
    { title: 'CNC-005', status: 'idle', part: '-', oee: '56.6%' },
    { title: 'CNC-006', status: 'maintenance', part: '-', oee: '0%' },
    { title: 'CNC-007', status: 'idle', part: '-', oee: '52.4%' },
    { title: 'CNC-008', status: 'maintenance', part: '-', oee: '0%' },
    { title: 'CNC-009', status: 'running', part: 'PRT-5849', oee: '88.6%' },
    { title: 'CNC-010', status: 'breakdown', part: '-', oee: '0%' },
  ];

  alertCards = [
    { title: 'Production Target', desc: 'Alert description 2', time: '19 minutes ago', type: 'info', icon: 'check_circle', iconColor: '#00eaff' },
    { title: 'Tool Wear Alert', desc: 'Alert description 13', time: '49 minutes ago', type: 'warn', icon: 'warning', iconColor: '#ffb300' },
    { title: 'Machine Breakdown', desc: 'Alert description 15', time: '3 hours ago', type: 'error', icon: 'error', iconColor: '#ff5252' },
    { title: 'Tool Wear Alert', desc: 'Alert description 9', time: '3 hours ago', type: 'warn', icon: 'warning', iconColor: '#ffb300' },
    { title: 'Machine Breakdown', desc: 'Alert description 5', time: '4 hours ago', type: 'error', icon: 'error', iconColor: '#ff5252' },
  ];

  toolCards = [
    { tool: 'Tool-001', name: 'Boring Bar', amount: '6,966', percent: '92.2%', life: 'Life Remaining', status: 'ok' },
    { tool: 'Tool-002', name: 'Boring Bar', amount: '17,911', percent: '71.8%', life: 'Life Remaining', status: 'ok' },
    { tool: 'Tool-003', name: 'Drill Bit', amount: '22,382', percent: '67.1%', life: 'Life Remaining', status: 'ok' },
    { tool: 'Tool-004', name: 'Face Mill', amount: '30,117', percent: '30.7%', life: 'Life Remaining', status: 'warn' },
    { tool: 'Tool-005', name: 'Turning Tool', amount: '8,631', percent: '0.3%', life: 'Life Remaining', status: 'error' },
  ];

  // Example table data for export
  machinePerformance: Array<{ [key: string]: string | number }> = [
    { machine: 'CNC-001', status: 'idle', part: '-', runtime: '2h 23m', idle: '6h 12m', parts: 146, oee: '51.5%', cost: '₹9,787' },
    { machine: 'CNC-002', status: 'running', part: 'PRT-7891', runtime: '3h 21m', idle: '6h 2m', parts: 160, oee: '98.6%', cost: '₹9,116' },
    // ... add more rows as needed
  ];

  displayedColumns = ['machine', 'status', 'part', 'runtime', 'idle', 'parts', 'oee', 'cost'];

  exportReport() {
    const header = this.displayedColumns.join(',');
    const rows = this.machinePerformance.map(row =>
      this.displayedColumns.map(col => row[col]).join(',')
    );
    const csvContent = [header, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'machine-performance-report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}