import React from 'react';
import { 
  ClipboardList, 
  Plus, 
  Search, 
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Package,
  CheckSquare,
  Settings,
  Send,
  Truck,
  Calendar,
  User,
  ShoppingCart
} from 'lucide-react';

// Stats Cards Component
export const RequisitionStats: React.FC<{ stats: any }> = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center">
        <ClipboardList className="w-8 h-8 text-blue-600" />
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">Total</p>
          <p className="text-2xl font-bold text-gray-900">{stats.total_requisitions || 0}</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center">
        <Clock className="w-8 h-8 text-yellow-600" />
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-gray-900">{stats.pending_count || 0}</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center">
        <CheckCircle className="w-8 h-8 text-green-600" />
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">Approved</p>
          <p className="text-2xl font-bold text-gray-900">{stats.approved_count || 0}</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center">
        <Package className="w-8 h-8 text-blue-600" />
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">Partial</p>
          <p className="text-2xl font-bold text-gray-900">{stats.partially_approved_count || 0}</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center">
        <Truck className="w-8 h-8 text-purple-600" />
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">Issued</p>
          <p className="text-2xl font-bold text-gray-900">{stats.issued_count || 0}</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center">
        <Truck className="w-8 h-8 text-orange-600" />
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">Part. Issued</p>
          <p className="text-2xl font-bold text-gray-900">{stats.partially_issued_count || 0}</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center">
        <XCircle className="w-8 h-8 text-red-600" />
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">Rejected</p>
          <p className="text-2xl font-bold text-gray-900">{stats.rejected_count || 0}</p>
        </div>
      </div>
    </div>
  </div>
);

// Filters Component
export const RequisitionFilters: React.FC<{
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
}> = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border">
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search requisitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="sm:w-48">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="partially_approved">Partially Approved</option>
          <option value="issued">Issued</option>
          <option value="partially_issued">Partially Issued</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </div>
  </div>
);

// Helper functions for table
const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'urgent': return 'bg-red-100 text-red-800';
    case 'high': return 'bg-orange-100 text-orange-800';
    case 'medium': return 'bg-yellow-100 text-yellow-800';
    case 'low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'approved': return <CheckCircle className="h-4 w-4 text-green-500" />;
    case 'rejected': return <XCircle className="h-4 w-4 text-red-500" />;
    case 'partially_approved': return <Package className="h-4 w-4 text-blue-500" />;
    case 'issued': return <Truck className="h-4 w-4 text-purple-500" />;
    case 'partially_issued': return <Truck className="h-4 w-4 text-orange-500" />;
    case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />;
    default: return <Clock className="h-4 w-4 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'approved': return 'bg-green-100 text-green-800';
    case 'rejected': return 'bg-red-100 text-red-800';
    case 'partially_approved': return 'bg-blue-100 text-blue-800';
    case 'issued': return 'bg-purple-100 text-purple-800';
    case 'partially_issued': return 'bg-orange-100 text-orange-800';
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'partially_approved': return 'Partially Approved';
    case 'partially_issued': return 'Partially Issued';
    default: return status.charAt(0).toUpperCase() + status.slice(1);
  }
};

// Permission helpers - Updated to allow editing and deleting at any stage
const canEdit = (requisition: any, user: any) => {
  // Allow editing for admin/manager at any stage
  return user?.role === 'admin' || 
         user?.role === 'manager' || 
         requisition.requester_id === user?.id;
};

const canApprove = (requisition: any, user: any) => {
  return requisition.status === 'pending' && 
         (user?.role === 'admin' || user?.role === 'manager') &&
         (user?.role === 'admin' || requisition.requester_id !== user?.id);
};

const canIssue = (requisition: any, user: any) => {
  return (requisition.status === 'approved' || requisition.status === 'partially_approved') &&
         (user?.role === 'admin' || user?.role === 'manager');
};

const canDelete = (requisition: any, user: any) => {
  // Allow deleting for admin/manager at any stage
  return user?.role === 'admin' || 
         user?.role === 'manager' || 
         requisition.requester_id === user?.id;
};

// Table Component
export const RequisitionTable: React.FC<{
  requisitions: any[];
  loading: boolean;
  pagination: any;
  setPagination: (pagination: any) => void;
  user: any;
  searchTerm: string;
  statusFilter: string;
  onView: (requisition: any) => void;
  onEdit: (requisition: any) => void;
  onQuickApproval: (requisition: any) => void;
  onPartialApproval: (requisition: any) => void;
  onIssueItems: (requisition: any) => void;
  onDelete: (requisition: any) => void;
  onCreateNew: () => void;
  onCreatePO: (requisition: any) => void;
  canCreatePO: (requisition: any) => boolean;
}> = ({ 
  requisitions, 
  loading, 
  pagination, 
  setPagination, 
  user, 
  searchTerm,
  statusFilter,
  onView, 
  onEdit, 
  onQuickApproval, 
  onPartialApproval, 
  onIssueItems, 
  onDelete, 
  onCreateNew,
  onCreatePO,
  canCreatePO
}) => (
  <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
    {loading ? (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    ) : (
      <>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requisition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requester
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Est. Cost
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Required Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requisitions.map((requisition) => (
                <tr key={requisition.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{requisition.title || 'Untitled'}</div>
                      <div className="text-sm text-gray-500">{requisition.department || 'No department'}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{requisition.requester_name || 'Unknown'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(requisition.priority || 'medium')}`}>
                      {requisition.priority || 'medium'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(requisition.status || 'pending')}
                      <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(requisition.status || 'pending')}`}>
                        {getStatusText(requisition.status || 'pending')}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {requisition.item_count || 0} items
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${(requisition.total_estimated_cost || 0).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      {requisition.required_date ? new Date(requisition.required_date).toLocaleDateString() : 'Not set'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-1">
                      {/* View Button - Always available */}
                      <button
                        onClick={() => onView(requisition)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>

                      {/* Edit Button - Available at any stage for authorized users */}
                      {canEdit(requisition, user) && (
                        <button
                          onClick={() => onEdit(requisition)}
                          className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors"
                          title="Edit Requisition"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                      )}

                      {/* Approval Buttons - For pending requisitions */}
                      {requisition.status === 'pending' && canApprove(requisition, user) && (
                        <>
                          <button
                            onClick={() => onPartialApproval(requisition)}
                            className="text-purple-600 hover:text-purple-900 p-1 rounded hover:bg-purple-50 transition-colors"
                            title="Partial Approval (Item by Item)"
                          >
                            <Settings className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => onQuickApproval(requisition)}
                            className="text-orange-600 hover:text-orange-900 p-1 rounded hover:bg-orange-50 transition-colors"
                            title="Quick Approve/Reject All Items"
                          >
                            <CheckSquare className="h-4 w-4" />
                          </button>
                        </>
                      )}

                      {/* Issue Button - For approved or partially approved requisitions */}
                      {(requisition.status === 'approved' || requisition.status === 'partially_approved') && canIssue(requisition, user) && (
                        <button
                          onClick={() => onIssueItems(requisition)}
                          className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors"
                          title="Issue Items"
                        >
                          <Send className="h-4 w-4" />
                        </button>
                      )}

                      {/* Purchase Order Button - For approved requisitions */}
                      {canCreatePO(requisition) && (
                        <button
                          onClick={() => onCreatePO(requisition)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
                          title="Create Purchase Order"
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </button>
                      )}

                      {/* Delete Button - Available at any stage for authorized users */}
                      {canDelete(requisition, user) && (
                        <button
                          onClick={() => onDelete(requisition)}
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors"
                          title="Delete Requisition"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {requisitions.length === 0 && (
          <div className="text-center py-12">
            <ClipboardList className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No requisitions found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || statusFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Get started by creating your first requisition.'
              }
            </p>
            <button
              onClick={onCreateNew}
              className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create First Requisition
            </button>
          </div>
        )}

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }))}
                disabled={pagination.page === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: Math.min(prev.pages, prev.page + 1) }))}
                disabled={pagination.page === pagination.pages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{((pagination.page - 1) * pagination.limit) + 1}</span> to{' '}
                  <span className="font-medium">
                    {Math.min(pagination.page * pagination.limit, pagination.total)}
                  </span>{' '}
                  of <span className="font-medium">{pagination.total}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button
                    onClick={() => setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }))}
                    disabled={pagination.page === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setPagination(prev => ({ ...prev, page: Math.min(prev.pages, prev.page + 1) }))}
                    disabled={pagination.page === pagination.pages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </>
    )}
  </div>
);

// User Permissions Component
export const RequisitionPermissions: React.FC<{ user: any }> = ({ user }) => (
  user && (
    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm">
      <div className="flex items-center">
        <User className="h-4 w-4 text-blue-600 mr-2" />
        <span className="font-medium text-blue-900">Current User:</span>
        <span className="ml-2 text-blue-800">
          {user.username} ({user.role}) - ID: {user.id}
        </span>
      </div>
      <div className="mt-2 text-blue-700">
        <strong>Permissions:</strong>
        {user.role === 'admin' && ' Can edit/delete ALL requisitions (any status), approve all, issue items'}
        {user.role === 'manager' && ' Can edit/delete ALL requisitions (any status), approve requisitions (except own), issue items'}
        {user.role === 'user' && ' Can edit/delete own requisitions (any status), create requisitions'}
      </div>
    </div>
  )
);