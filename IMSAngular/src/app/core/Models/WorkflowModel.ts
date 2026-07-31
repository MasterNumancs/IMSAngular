export interface WorkflowRequest {
  requestId?: string;
  moduleId: string;
  requestType: 'StockIn' | 'StockOut' | 'Sales' | 'SalesReturn';
  status: 'Pending' | 'Approved' | 'Rejected';
  requestedBy: string;
  requestedOn: Date;
  approvedBy?: string;
  approvedOn?: Date;
  remarks?: string;
}
