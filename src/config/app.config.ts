interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Team Lead', 'Payroll Officer'],
  tenantName: 'Organization',
  applicationName: 'ROQ HR Management System v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
