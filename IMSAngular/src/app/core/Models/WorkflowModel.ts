export interface WorkflowRequest {
  requestId?: string;
  moduleId: string;
  requestType: 'StockIn' | 'StockOut' | 'SaleIn' | 'SaleOut';
  status: 'Pending' | 'Approved' | 'Rejected';
  requestedBy: string;
  requestedOn: Date;
  approvedBy?: string;
  approvedOn?: Date;
  remarks?: string;
}
