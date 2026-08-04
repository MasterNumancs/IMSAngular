export interface TransferItem {
  productId: string;
  productName?: string;
  quantity: number;
}


export interface Transfer {

  id?: string;   // Firestore document ID

  fromBranch: string;
  fromBranchName?: string;  // Added for display

  toBranch: string;
  toBranchName?: string;    // Added for display

  reason: string;

  expectedDate: any;

  requestDate: any;

  status:
  | 'Pending'
  | 'Approved'
  | 'In Transit'
  | 'Completed'
  | 'Rejected';

  items: TransferItem[];

}