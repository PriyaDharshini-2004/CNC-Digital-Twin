import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-master-data',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './master-data.html',
  styleUrls: ['./master-data.scss']
})
export class MasterDataComponent {
  // Top summary cards
  summary = [
    { icon: 'precision_manufacturing', label: 'Machines', value: 30 },
    { icon: 'build', label: 'Tools', value: 50 },
    { icon: 'category', label: 'Parts', value: 0 },
    { icon: 'groups', label: 'Employees', value: 0 },
    { icon: 'apartment', label: 'Customers', value: 0 },
    { icon: 'local_shipping', label: 'Suppliers', value: 0 }
  ];

  // Tabs for forms
  formTabs = [
    { label: 'Machines', icon: 'precision_manufacturing' },
    { label: 'Tools', icon: 'build' },
    { label: 'Parts', icon: 'category' },
    { label: 'Employees', icon: 'groups' },
    { label: 'Customers', icon: 'apartment' },
    { label: 'Suppliers', icon: 'local_shipping' }
  ];
  selectedFormTab = 0;

  // Tabs for list card
  listTabs = [
    { label: 'Machines' },
    { label: 'Tools' },
    { label: 'Parts' }
  ];
  selectedListTab = 0;

  // Form models
  machine = { name: '', model: '', status: '', location: '', operator: '', cost: '' };
  tool = { name: '', type: '', cost: '', wear: '', life: '' };
  part = { name: '', number: '', desc: '', cycle: '', target: '', cost: '' };
  employee = { name: '', id: '', role: '', shift: '', rate: '' };
  customer = { name: '', code: '', contact: '', email: '', phone: '', address: '' };
  supplier = { name: '', code: '', contact: '', email: '', phone: '', specialization: '', address: '' };

  // Machine list for right card
  machines = Array.from({ length: 30 }, (_, i) => ({
    name: `CNC-${(i + 1).toString().padStart(3, '3')}`,
    model: `Model-${(i % 5) + 1}`,
    status: ['maintenance', 'breakdown', 'idle', 'running'][i % 4],
    location: `Floor-${(i % 2) + 1}`
  }));

  // Helpers for form validation
  isMachineFormValid() {
    const m = this.machine;
    return m.name && m.model && m.status && m.location && m.operator && m.cost;
  }
  isToolFormValid() {
    const t = this.tool;
    return t.name && t.type && t.cost && t.wear && t.life;
  }
  isPartFormValid() {
    const p = this.part;
    return p.name && p.number && p.desc && p.cycle && p.target && p.cost;
  }
  isEmployeeFormValid() {
    const e = this.employee;
    return e.name && e.id && e.role && e.shift && e.rate;
  }
  isCustomerFormValid() {
    const c = this.customer;
    return c.name && c.code && c.contact && c.email && c.phone && c.address;
  }
  isSupplierFormValid() {
    const s = this.supplier;
    return s.name && s.code && s.contact && s.email && s.phone && s.specialization && s.address;
  }
}