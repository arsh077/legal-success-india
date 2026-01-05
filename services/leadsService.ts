// Service to manage leads data
interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  packageType: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'in-progress' | 'closed';
}

const LEADS_KEY = 'legal_success_leads';

export const leadsService = {
  // Add a new lead
  addLead: (leadData: Omit<Lead, 'id' | 'submittedAt' | 'status'>) => {
    const leads = leadsService.getAllLeads();
    const newLead: Lead = {
      ...leadData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: 'new',
    };
    leads.push(newLead);
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
    return newLead;
  },

  // Get all leads
  getAllLeads: (): Lead[] => {
    const stored = localStorage.getItem(LEADS_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  // Get single lead by ID
  getLeadById: (id: string): Lead | undefined => {
    const leads = leadsService.getAllLeads();
    return leads.find(lead => lead.id === id);
  },

  // Update lead status
  updateLeadStatus: (id: string, status: Lead['status']) => {
    const leads = leadsService.getAllLeads();
    const lead = leads.find(l => l.id === id);
    if (lead) {
      lead.status = status;
      localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
    }
    return lead;
  },

  // Delete lead
  deleteLead: (id: string) => {
    const leads = leadsService.getAllLeads();
    const filtered = leads.filter(l => l.id !== id);
    localStorage.setItem(LEADS_KEY, JSON.stringify(filtered));
  },

  // Get leads count
  getLeadsCount: () => {
    return leadsService.getAllLeads().length;
  },

  // Get new leads count
  getNewLeadsCount: () => {
    return leadsService.getAllLeads().filter(l => l.status === 'new').length;
  },
};

export type { Lead };
