import { COMPLETED_PROJECTS, SERVICES, FAQS } from '@/data/mockData';

/**
 * Pure static data helpers with loose signature signatures for 100% build compatibility
 */
export const portfolioApi = {
  getAll: async (..._args: any[]) => COMPLETED_PROJECTS,
  getById: async (id: number, ..._args: any[]) => COMPLETED_PROJECTS.find(p => p.id === id) || COMPLETED_PROJECTS[0],
  create: async (data: any, ..._args: any[]) => ({ ...data, id: Date.now() }),
  update: async (id: number, data: any, ..._args: any[]) => ({ ...data, id }),
  delete: async (_id: number, ..._args: any[]) => true,
};

export const blogApi = {
  getPublished: async (..._args: any[]) => [],
  getBySlug: async (_slug: string, ..._args: any[]) => null,
  getAll: async (..._args: any[]) => [],
  getById: async (_id: number, ..._args: any[]) => null,
  create: async (data: any, ..._args: any[]) => data,
  update: async (_id: number, data: any, ..._args: any[]) => data,
  delete: async (_id: number, ..._args: any[]) => true,
};

export const jobApi = {
  getActive: async (..._args: any[]) => [],
  getAll: async (..._args: any[]) => [],
  getById: async (_id: number, ..._args: any[]) => null,
  getApplications: async (..._args: any[]) => [],
  apply: async (..._args: any[]) => true,
  create: async (data: any, ..._args: any[]) => data,
  update: async (_id: number, data: any, ..._args: any[]) => data,
  delete: async (_id: number, ..._args: any[]) => true,
  deleteApplication: async (_id: number, ..._args: any[]) => true,
};

export const contactApi = {
  submit: async (..._args: any[]) => true,
  getAll: async (..._args: any[]) => [],
  markRead: async (..._args: any[]) => true,
  delete: async (..._args: any[]) => true,
};

export const authApi = {
  login: async (..._args: any[]) => ({ token: 'static' }),
  register: async (..._args: any[]) => ({ token: 'static' }),
  me: async (..._args: any[]) => ({ authenticated: false }),
};

export const serviceApi = {
  getAll: async (..._args: any[]) => SERVICES,
};

export const faqApi = {
  getAll: async (..._args: any[]) => FAQS,
};


