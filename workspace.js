/* 
  OCTAGRAM WORKSPACE // RELATIONAL STATE & APPLICATION ENGINE
  All-in-one Agency Operating System
*/

(function() {
  'use strict';

  // --- Initial Seed Database ---
  const DEFAULT_DB = {
    employees: [
      { id: 'emp_harsh', username: 'harsh', name: 'Harsh', role: 'Founder & Managing Director', email: 'harsh@octagram.ai', phone: '+91 94820 90023', avatar: 'H', department: 'Executive', active: true },
      { id: 'emp_vishnu', username: 'vishnu', name: 'Vishnu', role: 'Founder & CTO', email: 'vishnu@octagram.ai', phone: '+91 98450 12345', avatar: 'V', department: 'Engineering', active: true },
      { id: 'emp_sanjana', username: 'sanjana', name: 'Sanjana', role: 'Founder & Head of Operations', email: 'sanjana@octagram.ai', phone: '+91 97410 67890', avatar: 'S', department: 'Operations', active: true },
      { id: 'emp_sumaiya', username: 'sumaiya', name: 'Sumaiya', role: 'Outreach & Growth Specialist', email: 'sumaiya@octagram.ai', phone: '+91 96110 54321', avatar: 'S', department: 'Sales', active: true }
    ],
    clients: [
      {
        id: 'client_petals',
        name: 'Petals Suites & Hotel',
        industry: 'Hospitality',
        status: 'Active Client',
        accountManager: 'emp_harsh',
        phone: '+91 80 4123 4567',
        email: 'management@petalssuites.com',
        website: 'https://petalssuites.com',
        address: '14th Main Road, HSR Layout Sector 4, Bangalore, KA',
        gst: '29ABCDE1234F1Z5',
        onboardedDate: '2026-06-15',
        totalContractValue: 480000,
        paidAmount: 320000,
        outstandingAmount: 160000,
        contacts: [
          { id: 'c_raj', name: 'Raj Sharma', role: 'General Manager', phone: '+91 98451 11223', email: 'raj@petalssuites.com', isPrimary: true },
          { id: 'c_priya', name: 'Priya Nair', role: 'Head of Marketing', phone: '+91 98451 44556', email: 'priya@petalssuites.com', isPrimary: false }
        ],
        notes: 'Client is expanding to 2 more locations next quarter. Very satisfied with web presence upgrade.'
      },
      {
        id: 'client_ranka',
        name: 'Ranka Jewellers Studio',
        industry: 'Retail & Luxury',
        status: 'Active Client',
        accountManager: 'emp_harsh',
        phone: '+91 80 2558 9988',
        email: 'info@rankajewellers.com',
        website: 'https://rankajewellers.com',
        address: 'Commercial Street, Bangalore, KA',
        gst: '29RANKA9876F2Z9',
        onboardedDate: '2026-07-01',
        totalContractValue: 650000,
        paidAmount: 450000,
        outstandingAmount: 200000,
        contacts: [
          { id: 'c_ankit', name: 'Ankit Ranka', role: 'Managing Partner', phone: '+91 98860 33445', email: 'ankit@rankajewellers.com', isPrimary: true }
        ],
        notes: 'Requested custom AR virtual try-on module for bespoke diamond catalog.'
      },
      {
        id: 'client_grandpalm',
        name: 'Grand Palm Resort',
        industry: 'Resorts & Tourism',
        status: 'Active Client',
        accountManager: 'emp_sanjana',
        phone: '+91 82 1234 5678',
        email: 'res@grandpalmresorts.in',
        website: 'https://grandpalmresorts.in',
        address: 'Whitefield Main Road, Bangalore, KA',
        gst: '29GRAND4321F1Z1',
        onboardedDate: '2026-08-10',
        totalContractValue: 350000,
        paidAmount: 350000,
        outstandingAmount: 0,
        contacts: [
          { id: 'c_vikram', name: 'Vikram Seth', role: 'Director of Operations', phone: '+91 99000 88776', email: 'vikram@grandpalmresorts.in', isPrimary: true }
        ],
        notes: 'Direct booking engine integration completed. Generating 40% increase in direct reservations.'
      }
    ],
    leads: [
      {
        id: 'lead_onthego',
        name: 'On The Go Cafe & Bakery',
        category: 'Food & Beverage / Cafe',
        leadScore: 92,
        temperature: 'Hot',
        status: 'Qualified',
        phone: '+91 98452 77889',
        website: '',
        websiteStatus: 'No Website',
        googleRating: 4.6,
        totalReviews: 342,
        address: '27th Main, Sector 1, HSR Layout, Bangalore',
        mapsUrl: 'https://maps.google.com/?q=On+The+Go+Cafe+HSR',
        assignedTo: 'emp_sumaiya',
        source: 'Google Maps — HSR Layout Cafe Leads',
        leadListId: 'list_hsr_cafes',
        dateAdded: '2026-09-12',
        dealValue: 120000,
        nextFollowUp: '2026-09-15',
        lastContact: '2026-09-14',
        notes: 'Owner is very interested in online ordering and table booking. Wants proposal by Wednesday.'
      },
      {
        id: 'lead_marseli',
        name: 'Marseli Artisanal Bistro',
        category: 'Restaurants / Fine Dining',
        leadScore: 88,
        temperature: 'Hot',
        status: 'Meeting',
        phone: '+91 97310 99881',
        website: '',
        websiteStatus: 'No Website',
        googleRating: 4.7,
        totalReviews: 512,
        address: '100ft Road, Indiranagar, Bangalore',
        mapsUrl: 'https://maps.google.com/?q=Marseli+Indiranagar',
        assignedTo: 'emp_harsh',
        source: 'Google Maps — Indiranagar Leads',
        leadListId: 'list_noweb_biz',
        dateAdded: '2026-09-10',
        dealValue: 180000,
        nextFollowUp: '2026-09-15',
        lastContact: '2026-09-13',
        notes: 'Scheduled tasting session & website architecture demo.'
      },
      {
        id: 'lead_silaa',
        name: 'Silaa Luxury Couture',
        category: 'Fashion & Apparel',
        leadScore: 84,
        temperature: 'Hot',
        status: 'Proposal',
        phone: '+91 99160 22334',
        website: '',
        websiteStatus: 'No Website',
        googleRating: 4.8,
        totalReviews: 189,
        address: 'Lavelle Road, Bangalore',
        mapsUrl: 'https://maps.google.com/?q=Silaa+Lavelle+Road',
        assignedTo: 'emp_sumaiya',
        source: 'High Networth Retail Directory',
        leadListId: 'list_noweb_biz',
        dateAdded: '2026-09-08',
        dealValue: 240000,
        nextFollowUp: '2026-09-16',
        lastContact: '2026-09-14',
        notes: 'Proposal sent for ₹2,40,000 for bespoke e-commerce store with international shipping.'
      },
      {
        id: 'lead_heritage',
        name: 'Heritage Residency Hotel',
        category: 'Hospitality / Hotels',
        leadScore: 76,
        temperature: 'Warm',
        status: 'Contacted',
        phone: '+91 80 4999 1122',
        website: 'http://heritageresidency.co.in',
        websiteStatus: 'Outdated Website',
        googleRating: 4.1,
        totalReviews: 290,
        address: 'MG Road, Bangalore',
        mapsUrl: 'https://maps.google.com/?q=Heritage+Residency+MG+Road',
        assignedTo: 'emp_sumaiya',
        source: 'Bangalore Hotels Directory',
        leadListId: 'list_hotels_blr',
        dateAdded: '2026-09-11',
        dealValue: 160000,
        nextFollowUp: '2026-09-17',
        lastContact: '2026-09-12',
        notes: 'Spoke with front desk, owner Mr. Hegde available on Thursday afternoon.'
      },
      {
        id: 'lead_urban',
        name: 'Urban Crust Sourdough Pizza',
        category: 'Food & Beverage',
        leadScore: 70,
        temperature: 'Warm',
        status: 'New',
        phone: '+91 98800 44556',
        website: '',
        websiteStatus: 'No Website',
        googleRating: 4.5,
        totalReviews: 215,
        address: 'Koramangala 4th Block, Bangalore',
        mapsUrl: 'https://maps.google.com/?q=Urban+Crust+Koramangala',
        assignedTo: 'emp_sumaiya',
        source: 'Google Maps — HSR Layout Cafe Leads',
        leadListId: 'list_hsr_cafes',
        dateAdded: '2026-09-15',
        dealValue: 95000,
        nextFollowUp: '2026-09-15',
        lastContact: null,
        notes: 'Newly opened, high Instagram engagement but no website or direct ordering channel.'
      }
    ],
    leadLists: [
      { id: 'list_hsr_cafes', name: 'Bangalore Cafes — HSR', description: 'Cafes & eateries in HSR Layout with high reviews', count: 42, createdAt: '2026-09-12', createdBy: 'Harsh' },
      { id: 'list_hotels_blr', name: 'Bangalore Hotels & Suites', description: 'Boutique hotels needing direct booking solutions', count: 124, createdAt: '2026-09-10', createdBy: 'Harsh' },
      { id: 'list_noweb_biz', name: 'Businesses Without Websites', description: 'High-rated businesses operating purely without websites', count: 387, createdAt: '2026-09-08', createdBy: 'Sumaiya' }
    ],
    projects: [
      {
        id: 'proj_petals_web',
        clientId: 'client_petals',
        name: 'Petals Suites & Hotel Web Experience Redesign',
        status: 'Active',
        progress: 80,
        managerId: 'emp_harsh',
        team: ['emp_harsh', 'emp_vishnu'],
        deadline: '2026-09-30',
        budget: 280000,
        description: 'Complete high-performance Web 2026 redesign with 3D virtual tour and automated booking integration.'
      },
      {
        id: 'proj_ranka_ecom',
        clientId: 'client_ranka',
        name: 'Ranka Luxury Catalog & Inquiries Portal',
        status: 'Active',
        progress: 60,
        managerId: 'emp_vishnu',
        team: ['emp_vishnu', 'emp_harsh'],
        deadline: '2026-10-15',
        budget: 450000,
        description: 'Bespoke fine jewellery showcase with private consultation scheduling and WhatsApp VIP concierge.'
      },
      {
        id: 'proj_grandpalm_seo',
        clientId: 'client_grandpalm',
        name: 'Grand Palm Direct Organic Traffic Scaling',
        status: 'Active',
        progress: 90,
        managerId: 'emp_sanjana',
        team: ['emp_sanjana', 'emp_sumaiya'],
        deadline: '2026-09-25',
        budget: 120000,
        description: 'Targeted local hospitality SEO and direct conversion optimization.'
      }
    ],
    tasks: [
      {
        id: 'task_1',
        title: 'Petals Suites — Finalize Homepage Hero & 3D Tour Asset',
        description: 'Revise hero imagery and optimize 3D virtual tour loader for mobile responsiveness.',
        clientId: 'client_petals',
        projectId: 'proj_petals_web',
        leadId: null,
        assignedTo: 'emp_harsh',
        createdBy: 'emp_sanjana',
        priority: 'High',
        status: 'In Progress',
        dueDate: '2026-09-15',
        subtasks: [
          { text: 'Compress WebGL canvas assets', completed: true },
          { text: 'Verify mobile tap-to-expand controls', completed: false }
        ]
      },
      {
        id: 'task_2',
        title: 'Ranka Jewellers — Review Virtual Try-On AR Prototype',
        description: 'Check hand-tracking performance on iOS Safari and Android Chrome.',
        clientId: 'client_ranka',
        projectId: 'proj_ranka_ecom',
        leadId: null,
        assignedTo: 'emp_vishnu',
        createdBy: 'emp_harsh',
        priority: 'Urgent',
        status: 'Todo',
        dueDate: '2026-09-16',
        subtasks: [
          { text: 'Calibrate diamond reflection shaders', completed: false },
          { text: 'Setup camera permissions fallback', completed: false }
        ]
      },
      {
        id: 'task_3',
        title: 'On The Go Cafe — Send Tailored Web Presence Proposal',
        description: 'Send custom quote including online table reservation & Instagram menu sync.',
        clientId: null,
        projectId: null,
        leadId: 'lead_onthego',
        assignedTo: 'emp_sumaiya',
        createdBy: 'emp_sumaiya',
        priority: 'High',
        status: 'Todo',
        dueDate: '2026-09-15',
        subtasks: []
      },
      {
        id: 'task_4',
        title: 'Grand Palm Resort — Monthly Traffic & Conversion Audit',
        description: 'Generate September analytics report demonstrating 40% uptick in direct bookings.',
        clientId: 'client_grandpalm',
        projectId: 'proj_grandpalm_seo',
        leadId: null,
        assignedTo: 'emp_sanjana',
        createdBy: 'emp_harsh',
        priority: 'Medium',
        status: 'Completed',
        dueDate: '2026-09-14',
        subtasks: []
      },
      {
        id: 'task_5',
        title: 'Follow up with Marseli Bistro re: Thursday Tasting & Demo',
        description: 'Confirm meeting time with Chef & Owner for inductive demo.',
        clientId: null,
        projectId: null,
        leadId: 'lead_marseli',
        assignedTo: 'emp_harsh',
        createdBy: 'emp_harsh',
        priority: 'High',
        status: 'In Progress',
        dueDate: '2026-09-15',
        subtasks: []
      }
    ],
    todos: [
      { id: 'todo_1', text: 'Call Raj Sharma (Petals Suites) re: logo resolution', completed: false, createdAt: '2026-09-15' },
      { id: 'todo_2', text: 'Review AWS server staging deployment for Ranka', completed: true, createdAt: '2026-09-14' },
      { id: 'todo_3', text: 'Buy domain names for hospitality expansion', completed: false, createdAt: '2026-09-15' },
      { id: 'todo_4', text: 'Send payment reminder for Invoice #OCT-2026-042', completed: false, createdAt: '2026-09-15' }
    ],
    meetings: [
      {
        id: 'meet_1',
        title: 'Petals Suites — Staging Review & Milestone Sign-off',
        clientId: 'client_petals',
        leadId: null,
        date: '2026-09-15',
        time: '14:30',
        duration: 45,
        location: 'Google Meet',
        videoLink: 'https://meet.google.com/oct-petal-rev',
        attendees: ['emp_harsh', 'emp_vishnu', 'c_raj', 'c_priya'],
        agenda: '1. Review responsive staging site\n2. Demonstrate booking calendar speed\n3. Confirm launch date',
        notes: 'Client impressed with 99/100 Google PageSpeed score. Requested additional room gallery tab.'
      },
      {
        id: 'meet_2',
        title: 'Marseli Bistro — Architecture Demo & Menu Sync',
        clientId: null,
        leadId: 'lead_marseli',
        date: '2026-09-16',
        time: '11:00',
        duration: 60,
        location: 'Marseli Bistro, Indiranagar',
        videoLink: '',
        attendees: ['emp_harsh', 'emp_sumaiya'],
        agenda: 'On-site discovery and presentation of custom restaurant experience platform.',
        notes: ''
      },
      {
        id: 'meet_3',
        title: 'Octagram Weekly Core Engineering & Growth Sync',
        clientId: null,
        leadId: null,
        date: '2026-09-18',
        time: '10:00',
        duration: 30,
        location: 'Octagram Main Office / Virtual',
        videoLink: 'https://meet.google.com/oct-core-sync',
        attendees: ['emp_harsh', 'emp_vishnu', 'emp_sanjana', 'emp_sumaiya'],
        agenda: 'Review weekly sales quota, client milestone status, and upcoming AI outreach pipeline.',
        notes: ''
      }
    ],
    interactions: [
      {
        id: 'int_1',
        leadId: 'lead_onthego',
        clientId: null,
        type: 'Phone Call',
        outcome: 'Interested / Proposal Requested',
        notes: 'Spoke with founder Abhishek. They are currently losing ₹40k/month in third-party aggregator commissions. Needs custom website ASAP.',
        performedBy: 'emp_sumaiya',
        date: '2026-09-14 15:30',
        nextFollowUp: '2026-09-15'
      },
      {
        id: 'int_2',
        leadId: 'lead_marseli',
        clientId: null,
        type: 'WhatsApp',
        outcome: 'Meeting Scheduled',
        notes: 'Confirmed in-person demo for Wednesday 11:00 AM.',
        performedBy: 'emp_harsh',
        date: '2026-09-13 12:15',
        nextFollowUp: '2026-09-15'
      },
      {
        id: 'int_3',
        leadId: null,
        clientId: 'client_petals',
        type: 'Meeting',
        outcome: 'Payment Milestone Approved',
        notes: 'Sprint 2 demo passed. Approved release of ₹1,60,000 progress invoice.',
        performedBy: 'emp_harsh',
        date: '2026-09-11 16:00',
        nextFollowUp: null
      }
    ],
    invoices: [
      { id: 'inv_101', invoiceNumber: 'OCT-2026-038', clientId: 'client_petals', clientName: 'Petals Suites & Hotel', amount: 160000, issueDate: '2026-08-01', dueDate: '2026-08-15', status: 'Paid', paymentDate: '2026-08-12', method: 'NEFT / Bank Transfer' },
      { id: 'inv_102', invoiceNumber: 'OCT-2026-042', clientId: 'client_petals', clientName: 'Petals Suites & Hotel', amount: 160000, issueDate: '2026-09-01', dueDate: '2026-09-15', status: 'Paid', paymentDate: '2026-09-14', method: 'UPI / Direct' },
      { id: 'inv_103', invoiceNumber: 'OCT-2026-045', clientId: 'client_petals', clientName: 'Petals Suites & Hotel', amount: 160000, issueDate: '2026-09-15', dueDate: '2026-09-30', status: 'Pending', paymentDate: null, method: '' },
      { id: 'inv_104', invoiceNumber: 'OCT-2026-039', clientId: 'client_ranka', clientName: 'Ranka Jewellers Studio', amount: 450000, issueDate: '2026-08-10', dueDate: '2026-08-25', status: 'Paid', paymentDate: '2026-08-24', method: 'Corporate RTGS' },
      { id: 'inv_105', invoiceNumber: 'OCT-2026-044', clientId: 'client_ranka', clientName: 'Ranka Jewellers Studio', amount: 200000, issueDate: '2026-09-05', dueDate: '2026-09-20', status: 'Pending', paymentDate: null, method: '' }
    ],
    notifications: [
      { id: 'notif_1', title: 'New Task Assigned', message: 'Sanjana assigned you "Petals Suites — Finalize Hero & 3D Tour".', linkType: 'task', linkId: 'task_1', read: false, time: '10m ago' },
      { id: 'notif_2', title: 'Proposal Follow-up Due', message: 'Follow-up with On The Go Cafe is scheduled for today.', linkType: 'lead', linkId: 'lead_onthego', read: false, time: '1h ago' },
      { id: 'notif_3', title: 'Payment Received', message: '₹1,60,000 received from Petals Suites & Hotel (Inv #OCT-2026-042).', linkType: 'invoices', linkId: 'inv_102', read: true, time: 'Yesterday' }
    ],
    activityLog: [
      { id: 'act_1', user: 'Harsh', action: 'completed milestone', target: 'Petals Suites Staging deployment', timestamp: '2026-09-15 11:20' },
      { id: 'act_2', user: 'Sumaiya', action: 'logged outreach call with', target: 'On The Go Cafe (Abhishek)', timestamp: '2026-09-14 15:30' },
      { id: 'act_3', user: 'Harsh', action: 'received payment of ₹1,60,000 from', target: 'Petals Suites & Hotel', timestamp: '2026-09-14 14:40' },
      { id: 'act_4', user: 'Sanjana', action: 'completed task', target: 'Grand Palm Monthly Audit', timestamp: '2026-09-14 10:15' },
      { id: 'act_5', user: 'Sumaiya', action: 'imported 42 leads into list', target: 'Bangalore Cafes — HSR', timestamp: '2026-09-12 09:30' }
    ]
  };

  // --- State Manager with LocalStorage Persistence ---
  const DB_KEY = 'octagram_workspace_db_v2';

  function getDB() {
    try {
      const stored = localStorage.getItem(DB_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('DB load error, initializing default seed', e);
    }
    saveDB(DEFAULT_DB);
    return JSON.parse(JSON.stringify(DEFAULT_DB));
  }

  function saveDB(db) {
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(db));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }

  // Security Sanitization Helpers
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function sanitizeUrl(url) {
    if (!url) return '#';
    const trimmed = String(url).trim();
    if (/^(https?:\/\/|mailto:|tel:)/i.test(trimmed)) {
      return escapeHtml(trimmed);
    }
    return '#';
  }

  // Current session employee
  let currentUser = null;
  try {
    const rawSession = sessionStorage.getItem('octagram_auth_user');
    if (rawSession) {
      currentUser = JSON.parse(rawSession);
    }
  } catch (e) {}

  if (!currentUser || !currentUser.username) {
    currentUser = { username: 'harsh', name: 'Harsh', role: 'Founder & Managing Director' };
  }

  // --- Workspace Controller ---
  window.WorkspaceApp = {
    db: getDB(),
    currentUser: currentUser,
    activeView: 'dashboard',
    
    init() {
      this.bindNavigation();
      this.bindQuickAction();
      this.bindGlobalSearch();
      this.bindModals();
      this.bindLeadImporter();
      this.renderCurrentView();
      this.updateSidebarBadges();
      this.updateUserHeader();
    },

    save() {
      saveDB(this.db);
      this.updateSidebarBadges();
    },

    logActivity(action, target) {
      const act = {
        id: 'act_' + Date.now(),
        user: this.currentUser.name || this.currentUser.username,
        action: action,
        target: target,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16)
      };
      this.db.activityLog.unshift(act);
      if (this.db.activityLog.length > 50) this.db.activityLog.pop();
      this.save();
    },

    notify(title, message, type = 'info') {
      const toastContainer = document.getElementById('toast-container');
      if (!toastContainer) return;
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.innerHTML = `
        <div style="flex:1">
          <div style="font-weight:600; font-size:0.85rem">${escapeHtml(title)}</div>
          <div style="font-size:0.78rem; color:var(--text-muted)">${escapeHtml(message)}</div>
        </div>
        <button style="color:var(--text-dim); padding:2px" onclick="this.parentElement.remove()">&times;</button>
      `;
      toastContainer.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 250);
      }, 4000);
    },

    updateUserHeader() {
      const nameEl = document.getElementById('sidebar-user-name');
      const roleEl = document.getElementById('sidebar-user-role');
      const avatarEl = document.getElementById('sidebar-user-avatar');
      if (nameEl) nameEl.textContent = this.currentUser.name || this.currentUser.username;
      if (roleEl) roleEl.textContent = this.currentUser.role || 'Team Member';
      if (avatarEl) avatarEl.textContent = (this.currentUser.name || this.currentUser.username).charAt(0).toUpperCase();
    },

    updateSidebarBadges() {
      // Urgent tasks
      const urgentCount = this.db.tasks.filter(t => t.status !== 'Completed' && (t.priority === 'Urgent' || t.priority === 'High')).length;
      const taskBadge = document.getElementById('badge-tasks-count');
      if (taskBadge) {
        taskBadge.textContent = urgentCount;
        taskBadge.style.display = urgentCount > 0 ? 'inline-block' : 'none';
      }

      // Hot leads
      const hotLeads = this.db.leads.filter(l => l.status !== 'Won' && l.status !== 'Lost' && (l.temperature === 'Hot' || l.websiteStatus === 'No Website')).length;
      const leadBadge = document.getElementById('badge-leads-count');
      if (leadBadge) {
        leadBadge.textContent = hotLeads;
        leadBadge.style.display = hotLeads > 0 ? 'inline-block' : 'none';
      }

      // Outreach today count
      const today = new Date().toISOString().split('T')[0];
      const outreachDue = this.db.leads.filter(l => l.status !== 'Won' && l.status !== 'Lost' && (l.nextFollowUp <= today || !l.lastContact)).length;
      const outreachBadge = document.getElementById('badge-outreach-count');
      if (outreachBadge) {
        outreachBadge.textContent = outreachDue;
        outreachBadge.style.display = outreachDue > 0 ? 'inline-block' : 'none';
      }
    },

    // --- Navigation ---
    bindNavigation() {
      const navLinks = document.querySelectorAll('.nav-item[data-view]');
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const view = link.getAttribute('data-view');
          this.switchView(view);
          
          // On mobile, close sidebar
          const sidebar = document.getElementById('sidebar');
          if (sidebar) sidebar.classList.remove('open');
        });
      });

      // Mobile toggles
      const menuBtn = document.getElementById('mobile-menu-btn');
      const closeBtn = document.getElementById('sidebar-close-btn');
      const sidebar = document.getElementById('sidebar');

      if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => sidebar.classList.add('open'));
      }
      if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));
      }

      // Logout
      const logoutBtn = document.getElementById('btn-logout');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
          sessionStorage.removeItem('octagram_auth_user');
          window.location.href = 'employee-login.html';
        });
      }
    },

    switchView(viewName) {
      this.activeView = viewName;
      
      // Update nav active classes
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-view') === viewName);
      });

      // Update header titles
      const titles = {
        'dashboard': { title: 'Dashboard', sub: 'Today’s Command Center & Priorities' },
        'tasks': { title: 'Tasks', sub: 'Action Items, Kanban & Schedules' },
        'todo': { title: 'My To-Do', sub: 'Personal Quick Scratchpad' },
        'calendar': { title: 'Calendar', sub: 'Meetings, Deadlines & Milestones' },
        'meetings': { title: 'Meetings', sub: 'Agendas, Video Rooms & Action Items' },
        'clients': { title: 'Clients', sub: 'Active Agency Accounts & Workspaces' },
        'contacts': { title: 'Contacts', sub: 'Client & Lead Stakeholder Directory' },
        'projects': { title: 'Projects', sub: 'Active Agency Deliverables & Scope' },
        'leads': { title: 'CRM / All Leads', sub: 'Outreach Pipeline & Prospect Database' },
        'lead-lists': { title: 'Lead Lists & Batches', sub: 'Imported Prospect Segments' },
        'pipeline': { title: 'Sales Pipeline', sub: 'Visual Opportunity Kanban' },
        'outreach': { title: 'Outreach Today', sub: 'High-Velocity Calling & Follow-up Queue' },
        'payments': { title: 'Payments & Invoices', sub: 'Agency Billing & Financial Overview' },
        'employees': { title: 'Team & Workload', sub: 'Staff Directory & Capacity' },
        'reports': { title: 'Insights & Analytics', sub: 'Pipeline & Agency Performance' },
        'activity': { title: 'Audit & Activity Log', sub: 'Real-time System Audit Trail' }
      };

      const titleEl = document.getElementById('page-title');
      const subEl = document.getElementById('page-subtitle');
      if (titleEl && titles[viewName]) titleEl.textContent = titles[viewName].title;
      if (subEl && titles[viewName]) subEl.textContent = titles[viewName].sub;

      // Render view content
      this.renderCurrentView();
    },

    renderCurrentView() {
      const container = document.getElementById('content-container');
      if (!container) return;

      switch(this.activeView) {
        case 'dashboard':
          this.renderDashboard(container);
          break;
        case 'tasks':
          this.renderTasks(container);
          break;
        case 'todo':
          this.renderTodoList(container);
          break;
        case 'calendar':
          this.renderCalendar(container);
          break;
        case 'meetings':
          this.renderMeetings(container);
          break;
        case 'clients':
          this.renderClients(container);
          break;
        case 'contacts':
          this.renderContacts(container);
          break;
        case 'projects':
          this.renderProjects(container);
          break;
        case 'leads':
          this.renderLeads(container);
          break;
        case 'lead-lists':
          this.renderLeadLists(container);
          break;
        case 'pipeline':
          this.renderPipeline(container);
          break;
        case 'outreach':
          this.renderOutreachWorkspace(container);
          break;
        case 'payments':
          this.renderPayments(container);
          break;
        case 'employees':
          this.renderEmployees(container);
          break;
        case 'reports':
          this.renderReports(container);
          break;
        case 'activity':
          this.renderActivityLog(container);
          break;
        default:
          this.renderDashboard(container);
      }
    },

    // ==========================================
    // 1. DASHBOARD VIEW
    // ==========================================
    renderDashboard(container) {
      const todayStr = new Date().toISOString().split('T')[0];
      const name = this.currentUser.name || this.currentUser.username;
      
      const dueTasks = this.db.tasks.filter(t => t.status !== 'Completed' && t.dueDate <= todayStr);
      const upcomingMeetings = this.db.meetings.filter(m => m.date >= todayStr);
      const outreachDue = this.db.leads.filter(l => l.status !== 'Won' && l.status !== 'Lost' && (l.nextFollowUp <= todayStr || !l.lastContact));
      const activeProjects = this.db.projects.filter(p => p.status === 'Active');

      container.innerHTML = `
        <div class="workspace-view active">
          <!-- Personalized Banner -->
          <div style="margin-bottom: 24px;">
            <h1 style="font-size: 1.6rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.02em;">
              Good day, ${name}.
            </h1>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 4px;">
              Here's what needs your attention across projects, clients, and outreach today.
            </p>
          </div>

          <!-- Top Executive Metrics Grid -->
          <div class="metrics-grid">
            <div class="metric-card" onclick="WorkspaceApp.switchView('tasks')" style="cursor:pointer">
              <span class="metric-label">Tasks Due Today</span>
              <span class="metric-val highlight-amber">${dueTasks.length}</span>
              <span class="metric-sub">${this.db.tasks.filter(t => t.status !== 'Completed').length} total open tasks</span>
            </div>
            <div class="metric-card" onclick="WorkspaceApp.switchView('meetings')" style="cursor:pointer">
              <span class="metric-label">Meetings Scheduled</span>
              <span class="metric-val highlight-blue">${upcomingMeetings.length}</span>
              <span class="metric-sub">Next at ${upcomingMeetings[0] ? upcomingMeetings[0].time + ' today' : 'None today'}</span>
            </div>
            <div class="metric-card" onclick="WorkspaceApp.switchView('outreach')" style="cursor:pointer">
              <span class="metric-label">Outreach & Follow-ups</span>
              <span class="metric-val highlight-red">${outreachDue.length}</span>
              <span class="metric-sub">${this.db.leads.filter(l => l.websiteStatus === 'No Website').length} opportunities without websites</span>
            </div>
            <div class="metric-card" onclick="WorkspaceApp.switchView('projects')" style="cursor:pointer">
              <span class="metric-label">Active Client Projects</span>
              <span class="metric-val highlight-green">${activeProjects.length}</span>
              <span class="metric-sub">100% on schedule</span>
            </div>
          </div>

          <!-- 2-Column Dashboard Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 20px;">
            
            <!-- Left: Priorities & Tasks -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  My Top Action Priorities
                </h3>
                <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.78rem;" onclick="WorkspaceApp.openModal('modal-new-task')">+ Add Task</button>
              </div>

              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${dueTasks.length === 0 ? `
                  <div style="text-align:center; padding: 24px; color: var(--text-dim);">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom:8px; opacity:0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <div>You are all caught up on tasks today!</div>
                  </div>
                ` : dueTasks.slice(0, 4).map(t => {
                  const client = this.db.clients.find(c => c.id === t.clientId);
                  const lead = this.db.leads.find(l => l.id === t.leadId);
                  const relatedName = client ? client.name : (lead ? lead.name : 'Internal');
                  return `
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;">
                      <div style="display:flex; align-items: flex-start; gap: 10px;">
                        <input type="checkbox" style="margin-top: 4px; accent-color: var(--accent-blue); cursor: pointer;" onchange="WorkspaceApp.toggleTask('${t.id}')">
                        <div>
                          <div style="font-weight: 600; font-size: 0.88rem; color: var(--text-main);">${t.title}</div>
                          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                            ${relatedName} &bull; <span style="color: ${t.priority === 'Urgent' ? '#f87171' : '#38bdf8'}">${t.priority} Priority</span> &bull; Due ${t.dueDate}
                          </div>
                        </div>
                      </div>
                      <button class="btn-secondary" style="padding: 4px 8px; font-size: 0.72rem;" onclick="WorkspaceApp.switchView('tasks')">View</button>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Right: Today's Meetings & Follow-ups -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Upcoming Meetings & Calls
                </h3>
                <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.78rem;" onclick="WorkspaceApp.openModal('modal-new-meeting')">+ Schedule</button>
              </div>

              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${upcomingMeetings.length === 0 ? `
                  <div style="text-align:center; padding: 24px; color: var(--text-dim);">
                    No upcoming meetings scheduled.
                  </div>
                ` : upcomingMeetings.slice(0, 3).map(m => {
                  return `
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
                      <div>
                        <div style="font-weight: 600; font-size: 0.88rem; color: var(--text-main);">${m.title}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
                          ${m.date} at <strong style="color:var(--accent-blue)">${m.time}</strong> (${m.duration} mins) &bull; ${m.location}
                        </div>
                      </div>
                      ${m.videoLink ? `
                        <a href="${sanitizeUrl(m.videoLink)}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 5px 12px; font-size: 0.78rem;">Join</a>
                      ` : `
                        <button class="btn-secondary" style="padding: 5px 10px; font-size: 0.78rem;" onclick="WorkspaceApp.switchView('meetings')">Open</button>
                      `}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

          </div>

          <!-- Bottom: Live Activity Stream -->
          <div class="card" style="margin-top: 20px;">
            <div class="card-header">
              <h3 class="card-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Agency Activity & Audit Trail
              </h3>
              <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.78rem;" onclick="WorkspaceApp.switchView('activity')">View Full Log</button>
            </div>

            <div class="timeline">
              ${this.db.activityLog.slice(0, 4).map(act => `
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <span class="timeline-title">${act.user} <span style="font-weight:normal; color:var(--text-muted)">${act.action}</span> <strong>${act.target}</strong></span>
                      <span class="timeline-time">${act.timestamp}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    // ==========================================
    // 2. TASKS VIEW (Kanban & List)
    // ==========================================
    renderTasks(container) {
      container.innerHTML = `
        <div class="workspace-view active">
          <!-- Toolbar -->
          <div class="toolbar">
            <div class="toolbar-left">
              <div class="search-input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" id="task-search" class="search-input" placeholder="Search tasks..." oninput="WorkspaceApp.filterTasks()">
              </div>
              <select id="task-filter-priority" class="filter-select" onchange="WorkspaceApp.filterTasks()">
                <option value="all">All Priorities</option>
                <option value="Urgent">Urgent</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <select id="task-filter-assignee" class="filter-select" onchange="WorkspaceApp.filterTasks()">
                <option value="all">All Assignees</option>
                ${this.db.employees.map(e => `<option value="${e.id}">${e.name}</option>`).join('')}
              </select>
            </div>
            <div class="toolbar-right">
              <button class="btn-primary" onclick="WorkspaceApp.openModal('modal-new-task')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                New Task
              </button>
            </div>
          </div>

          <!-- Kanban Board -->
          <div class="kanban-board">
            ${['Todo', 'In Progress', 'Waiting', 'Completed'].map(status => {
              const tasksInStatus = this.db.tasks.filter(t => t.status === status);
              return `
                <div class="kanban-column" ondragover="event.preventDefault()" ondrop="WorkspaceApp.dropTask(event, '${status}')">
                  <div class="kanban-header">
                    <span class="kanban-col-title">
                      <span class="badge-dot" style="background: ${status === 'Completed' ? '#10b981' : (status === 'In Progress' ? '#38bdf8' : '#f59e0b')}"></span>
                      ${status}
                    </span>
                    <span class="kanban-count">${tasksInStatus.length}</span>
                  </div>

                  <div class="kanban-cards" id="kanban-col-${status.toLowerCase().replace(' ', '')}">
                    ${tasksInStatus.map(t => {
                      const emp = this.db.employees.find(e => e.id === t.assignedTo);
                      const client = this.db.clients.find(c => c.id === t.clientId);
                      const lead = this.db.leads.find(l => l.id === t.leadId);
                      const related = client ? client.name : (lead ? lead.name : 'Internal');
                      
                      return `
                        <div class="kanban-card" draggable="true" ondragstart="event.dataTransfer.setData('text/plain', '${t.id}')">
                          <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span class="badge ${t.priority === 'Urgent' ? 'badge-red' : (t.priority === 'High' ? 'badge-amber' : 'badge-blue')}">
                              ${t.priority}
                            </span>
                            <span style="font-size:0.72rem; color:var(--text-dim)">Due ${t.dueDate}</span>
                          </div>
                          
                          <div class="kanban-card-title">${t.title}</div>
                          <div class="kanban-card-sub">${related}</div>

                          <div class="kanban-card-footer">
                            <span style="display:flex; align-items:center; gap:6px;">
                              <span style="width:20px; height:20px; border-radius:50%; background:var(--accent-gradient); color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.65rem; font-weight:700;">
                                ${emp ? emp.avatar : 'U'}
                              </span>
                              ${emp ? emp.name : 'Unassigned'}
                            </span>
                            <button onclick="WorkspaceApp.deleteTask('${t.id}')" style="color:var(--text-dim); padding:2px" title="Delete Task">&times;</button>
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    },

    toggleTask(taskId) {
      const task = this.db.tasks.find(t => t.id === taskId);
      if (task) {
        task.status = task.status === 'Completed' ? 'Todo' : 'Completed';
        this.logActivity('updated task status to ' + task.status, task.title);
        this.notify('Task Updated', `"${task.title}" is now marked as ${task.status}.`, 'success');
        this.save();
        this.renderCurrentView();
      }
    },

    dropTask(e, targetStatus) {
      e.preventDefault();
      const taskId = e.dataTransfer.getData('text/plain');
      const task = this.db.tasks.find(t => t.id === taskId);
      if (task && task.status !== targetStatus) {
        task.status = targetStatus;
        this.logActivity('moved task to ' + targetStatus, task.title);
        this.notify('Task Moved', `"${task.title}" moved to ${targetStatus}.`, 'info');
        this.save();
        this.renderCurrentView();
      }
    },

    deleteTask(taskId) {
      if (!confirm('Are you sure you want to delete this task?')) return;
      this.db.tasks = this.db.tasks.filter(t => t.id !== taskId);
      this.save();
      this.notify('Task Deleted', 'Task removed successfully.', 'info');
      this.renderCurrentView();
    },

    // ==========================================
    // 3. MY TO-DO (Personal Scratchpad)
    // ==========================================
    renderTodoList(container) {
      container.innerHTML = `
        <div class="workspace-view active" style="max-width: 760px; margin: 0 auto;">
          <div class="card">
            <div class="card-header">
              <div>
                <h2 class="card-title">My Personal To-Do Scratchpad</h2>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Quick private checklist. Promote any item to a formal company task with one click.</p>
              </div>
            </div>

            <!-- Quick Add Form -->
            <form id="form-add-todo" style="display: flex; gap: 10px; margin-bottom: 24px;" onsubmit="WorkspaceApp.addTodo(event)">
              <input type="text" id="input-todo-text" class="form-control" placeholder="What's on your mind? (e.g., Call Raj about website approval)" required>
              <button type="submit" class="btn-primary" style="white-space:nowrap;">+ Add</button>
            </form>

            <!-- Todo Items -->
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${this.db.todos.map(todo => `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <input type="checkbox" ${todo.completed ? 'checked' : ''} style="accent-color: var(--accent-blue); width: 16px; height: 16px; cursor: pointer;" onchange="WorkspaceApp.toggleTodo('${todo.id}')">
                    <span style="font-size: 0.92rem; color: ${todo.completed ? 'var(--text-dim)' : 'var(--text-main)'}; text-decoration: ${todo.completed ? 'line-through' : 'none'};">
                      ${todo.text}
                    </span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.74rem;" onclick="WorkspaceApp.promoteTodoToTask('${todo.id}')" title="Convert to Formal Company Task">
                      Convert to Task &rarr;
                    </button>
                    <button style="color: var(--text-dim); padding: 4px 8px;" onclick="WorkspaceApp.deleteTodo('${todo.id}')" title="Delete">&times;</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    addTodo(e) {
      e.preventDefault();
      const input = document.getElementById('input-todo-text');
      if (!input || !input.value.trim()) return;
      const newTodo = {
        id: 'todo_' + Date.now(),
        text: input.value.trim(),
        completed: false,
        createdAt: new Date().toISOString().split('T')[0]
      };
      this.db.todos.unshift(newTodo);
      this.save();
      this.renderCurrentView();
    },

    toggleTodo(id) {
      const todo = this.db.todos.find(t => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.save();
        this.renderCurrentView();
      }
    },

    deleteTodo(id) {
      this.db.todos = this.db.todos.filter(t => t.id !== id);
      this.save();
      this.renderCurrentView();
    },

    promoteTodoToTask(id) {
      const todo = this.db.todos.find(t => t.id === id);
      if (!todo) return;
      
      const newTask = {
        id: 'task_' + Date.now(),
        title: todo.text,
        description: 'Promoted from personal to-do scratchpad.',
        clientId: null,
        projectId: null,
        leadId: null,
        assignedTo: this.currentUser.username === 'sumaiya' ? 'emp_sumaiya' : 'emp_harsh',
        createdBy: this.currentUser.username,
        priority: 'Medium',
        status: 'Todo',
        dueDate: new Date().toISOString().split('T')[0],
        subtasks: []
      };

      this.db.tasks.unshift(newTask);
      this.db.todos = this.db.todos.filter(t => t.id !== id);
      this.logActivity('promoted personal to-do to company task', newTask.title);
      this.notify('Promoted to Task', `"${newTask.title}" is now an official company task.`, 'success');
      this.save();
      this.switchView('tasks');
    },

    // ==========================================
    // 4. CLIENTS WORKSPACE & PROFILES
    // ==========================================
    renderClients(container) {
      container.innerHTML = `
        <div class="workspace-view active">
          <div class="toolbar">
            <div class="toolbar-left">
              <div class="search-input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" id="client-search" class="search-input" placeholder="Search clients..." oninput="WorkspaceApp.filterClients()">
              </div>
            </div>
            <div class="toolbar-right">
              <button class="btn-primary" onclick="WorkspaceApp.openModal('modal-new-client')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add Client
              </button>
            </div>
          </div>

          <!-- Clients Table -->
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Client / Company</th>
                  <th>Industry</th>
                  <th>Primary Contact</th>
                  <th>Account Manager</th>
                  <th>Projects</th>
                  <th>Contract Value</th>
                  <th>Outstanding</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="clients-tbody">
                ${this.db.clients.map(client => {
                  const mgr = this.db.employees.find(e => e.id === client.accountManager);
                  const primaryContact = client.contacts.find(c => c.isPrimary) || client.contacts[0] || { name: 'N/A', phone: '' };
                  const clientProjects = this.db.projects.filter(p => p.clientId === client.id);

                  return `
                    <tr>
                      <td>
                        <div style="font-weight: 700; color: var(--text-main); font-size: 0.92rem;">${client.name}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${client.address}</div>
                      </td>
                      <td><span class="badge badge-gray">${client.industry}</span></td>
                      <td>
                        <div style="font-weight: 600;">${primaryContact.name}</div>
                        <div style="font-size: 0.74rem; color: var(--text-dim);">${primaryContact.phone}</div>
                      </td>
                      <td>
                        <span style="display: inline-flex; align-items: center; gap: 6px;">
                          <span style="width: 20px; height: 20px; border-radius: 50%; background: var(--accent-gradient); color: #fff; font-size: 0.65rem; font-weight: 700; display: inline-flex; align-items: center; justify-content: center;">
                            ${mgr ? mgr.avatar : 'H'}
                          </span>
                          ${mgr ? mgr.name : 'Harsh'}
                        </span>
                      </td>
                      <td><span class="badge badge-blue">${clientProjects.length} Active</span></td>
                      <td style="font-family: var(--font-mono); font-weight: 600;">₹${client.totalContractValue.toLocaleString()}</td>
                      <td style="font-family: var(--font-mono); font-weight: 600; color: ${client.outstandingAmount > 0 ? '#f87171' : '#34d399'};">
                        ₹${client.outstandingAmount.toLocaleString()}
                      </td>
                      <td><span class="badge badge-green">${client.status}</span></td>
                      <td>
                        <button class="btn-secondary" style="padding: 5px 12px; font-size: 0.78rem;" onclick="WorkspaceApp.openClientDrawer('${client.id}')">
                          View Workspace
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    },

    openClientDrawer(clientId) {
      const client = this.db.clients.find(c => c.id === clientId);
      if (!client) return;

      const clientProjects = this.db.projects.filter(p => p.clientId === client.id);
      const clientTasks = this.db.tasks.filter(t => t.clientId === client.id);
      const clientMeetings = this.db.meetings.filter(m => m.clientId === client.id);
      const clientInvoices = this.db.invoices.filter(i => i.clientId === client.id);
      const mgr = this.db.employees.find(e => e.id === client.accountManager);

      const drawerContent = document.getElementById('drawer-content');
      if (!drawerContent) return;

      drawerContent.innerHTML = `
        <div class="drawer-header">
          <div>
            <span class="badge badge-green" style="margin-bottom: 6px;">${client.status}</span>
            <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--text-main);">${client.name}</h2>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">
              Account Manager: <strong>${mgr ? mgr.name : 'Harsh'}</strong> &bull; Onboarded: ${client.onboardedDate}
            </div>
          </div>
          <button class="modal-close-btn" onclick="WorkspaceApp.closeDrawer()">&times;</button>
        </div>

        <div class="drawer-body">
          <!-- Financial Snapshot -->
          <div class="metrics-grid" style="grid-template-columns: 1fr 1fr 1fr; margin-bottom: 20px;">
            <div class="metric-card">
              <span class="metric-label">Contract Value</span>
              <span class="metric-val" style="font-size: 1.2rem;">₹${client.totalContractValue.toLocaleString()}</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">Paid</span>
              <span class="metric-val highlight-green" style="font-size: 1.2rem;">₹${client.paidAmount.toLocaleString()}</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">Outstanding</span>
              <span class="metric-val ${client.outstandingAmount > 0 ? 'highlight-red' : 'highlight-green'}" style="font-size: 1.2rem;">₹${client.outstandingAmount.toLocaleString()}</span>
            </div>
          </div>

          <!-- Key Information & Contacts -->
          <div class="card">
            <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; color: var(--text-main);">Company Information</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.84rem;">
              <div><span style="color:var(--text-muted)">Website:</span> <a href="${sanitizeUrl(client.website)}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-blue)">${escapeHtml(client.website)}</a></div>
              <div><span style="color:var(--text-muted)">Phone:</span> <a href="tel:${escapeHtml(client.phone)}">${escapeHtml(client.phone)}</a></div>
              <div><span style="color:var(--text-muted)">GST:</span> ${escapeHtml(client.gst)}</div>
              <div><span style="color:var(--text-muted)">Address:</span> ${escapeHtml(client.address)}</div>
            </div>
          </div>

          <!-- Stakeholder Contacts -->
          <div class="card">
            <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; color: var(--text-main);">Stakeholders & Contacts (${client.contacts ? client.contacts.length : 0})</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${(client.contacts || []).map(c => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: rgba(255,255,255,0.02); border-radius: var(--radius-sm);">
                  <div>
                    <div style="font-weight: 600;">${escapeHtml(c.name)} ${c.isPrimary ? '<span class="badge badge-blue" style="font-size:0.65rem">Primary</span>' : ''}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(c.role)} &bull; ${escapeHtml(c.email)}</div>
                  </div>
                  <div style="display: flex; gap: 6px;">
                    <a href="tel:${escapeHtml(c.phone)}" class="btn-secondary" style="padding: 4px 8px; font-size: 0.72rem;">Call</a>
                    <a href="https://wa.me/${c.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 4px 8px; font-size: 0.72rem; color:#34d399;">WhatsApp</a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Active Projects -->
          <div class="card">
            <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; color: var(--text-main);">Active Projects (${clientProjects.length})</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${clientProjects.map(p => `
                <div style="padding: 10px; background: rgba(255,255,255,0.03); border-radius: var(--radius-sm);">
                  <div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
                    <span style="font-weight:600; font-size:0.86rem;">${p.name}</span>
                    <span class="badge badge-blue">${p.progress}% Completed</span>
                  </div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">Deadline: ${p.deadline} &bull; Budget: ₹${p.budget.toLocaleString()}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Outstanding Invoices -->
          <div class="card">
            <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; color: var(--text-main);">Billing & Invoices</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${clientInvoices.map(inv => `
                <div style="display:flex; justify-content:space-between; align-items:center; padding: 10px; background: rgba(255,255,255,0.03); border-radius: var(--radius-sm);">
                  <div>
                    <span style="font-family:var(--font-mono); font-weight:600;">${inv.invoiceNumber}</span>
                    <span style="font-size:0.75rem; color:var(--text-muted); margin-left:8px;">Due: ${inv.dueDate}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px;">
                    <strong style="font-family:var(--font-mono);">₹${inv.amount.toLocaleString()}</strong>
                    <span class="badge ${inv.status === 'Paid' ? 'badge-green' : 'badge-amber'}">${inv.status}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      `;

      document.getElementById('drawer-overlay').classList.add('active');
    },

    closeDrawer() {
      const drawer = document.getElementById('drawer-overlay');
      if (drawer) drawer.classList.remove('active');
    },

    // ==========================================
    // 5. CRM / LEADS DATABASE & PROFILES
    // ==========================================
    renderLeads(container) {
      container.innerHTML = `
        <div class="workspace-view active">
          <!-- Toolbar & Filters -->
          <div class="toolbar">
            <div class="toolbar-left">
              <div class="search-input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" id="lead-search" class="search-input" placeholder="Search leads by name, phone..." oninput="WorkspaceApp.filterLeads()">
              </div>
              <select id="lead-filter-status" class="filter-select" onchange="WorkspaceApp.filterLeads()">
                <option value="all">All CRM Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Meeting">Meeting</option>
                <option value="Proposal">Proposal</option>
                <option value="Won">Won</option>
                <option value="Lost">Lost</option>
              </select>
              <select id="lead-filter-website" class="filter-select" onchange="WorkspaceApp.filterLeads()">
                <option value="all">Website Status</option>
                <option value="No Website">No Website (High Opportunity 🔥)</option>
                <option value="Has Website">Has Website</option>
              </select>
              <select id="lead-filter-temp" class="filter-select" onchange="WorkspaceApp.filterLeads()">
                <option value="all">All Temperatures</option>
                <option value="Hot">🔥 Hot</option>
                <option value="Warm">⚡ Warm</option>
                <option value="Cold">❄️ Cold</option>
              </select>
            </div>
            <div class="toolbar-right">
              <button class="btn-secondary" onclick="WorkspaceApp.openModal('modal-import-leads')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                Import Excel / CSV
              </button>
              <button class="btn-primary" onclick="WorkspaceApp.openModal('modal-new-lead')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                New Lead
              </button>
            </div>
          </div>

          <!-- Leads Table -->
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Lead / Business</th>
                  <th>Category</th>
                  <th>Lead Score</th>
                  <th>Website Status</th>
                  <th>Phone & Outreach</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Follow-Up</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="leads-tbody">
                ${this.db.leads.map(lead => {
                  const owner = this.db.employees.find(e => e.id === lead.assignedTo);
                  return `
                    <tr>
                      <td>
                        <div style="font-weight: 700; color: var(--text-main); font-size: 0.92rem; display:flex; align-items:center; gap:6px;">
                          ${lead.name}
                          ${lead.temperature === 'Hot' ? '<span title="Hot Lead">🔥</span>' : ''}
                        </div>
                        <div style="font-size: 0.74rem; color: var(--text-dim);">${lead.address}</div>
                      </td>
                      <td><span class="badge badge-gray">${lead.category}</span></td>
                      <td>
                        <div style="font-weight: 800; font-size: 0.95rem; color: ${lead.leadScore >= 80 ? '#38bdf8' : '#fbbf24'}; font-family: var(--font-mono);">
                          ${lead.leadScore} / 100
                        </div>
                      </td>
                      <td>
                        ${lead.websiteStatus === 'No Website' 
                          ? `<span class="badge opportunity-badge">⚡ No Website</span>` 
                          : `<span class="badge badge-blue">🌐 Has Website</span>`
                        }
                      </td>
                      <td>
                        <div style="display:flex; align-items:center; gap:6px;">
                          <a href="tel:${escapeHtml(lead.phone)}" class="btn-secondary" style="padding:4px 8px; font-size:0.74rem;" title="Call Lead">📞 Call</a>
                          <a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:4px 8px; font-size:0.74rem; color:#34d399;" title="WhatsApp Lead">💬 WhatsApp</a>
                        </div>
                      </td>
                      <td>
                        <span class="badge ${lead.status === 'Won' ? 'badge-green' : (lead.status === 'Proposal' || lead.status === 'Meeting' ? 'badge-purple' : 'badge-blue')}">
                          ${lead.status}
                        </span>
                      </td>
                      <td>
                        <span style="font-size:0.8rem;">${owner ? owner.name : 'Sumaiya'}</span>
                      </td>
                      <td>
                        <span style="font-size:0.78rem; font-family:var(--font-mono); color:${lead.nextFollowUp <= new Date().toISOString().split('T')[0] ? '#f87171' : 'var(--text-muted)'}">
                          ${lead.nextFollowUp || 'None'}
                        </span>
                      </td>
                      <td>
                        <button class="btn-secondary" style="padding: 5px 10px; font-size: 0.78rem;" onclick="WorkspaceApp.openLeadDrawer('${lead.id}')">
                          Profile & Log
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    },

    filterLeads() {
      const q = (document.getElementById('lead-search')?.value || '').trim().toLowerCase();
      const status = document.getElementById('lead-filter-status')?.value || 'all';
      const webStatus = document.getElementById('lead-filter-website')?.value || 'all';
      const temp = document.getElementById('lead-filter-temp')?.value || 'all';

      const tbody = document.getElementById('leads-tbody');
      if (!tbody) return;

      const filtered = this.db.leads.filter(l => {
        const matchesQ = !q || l.name.toLowerCase().includes(q) || l.phone.includes(q) || l.category.toLowerCase().includes(q);
        const matchesStatus = status === 'all' || l.status === status;
        const matchesWeb = webStatus === 'all' || (webStatus === 'No Website' ? l.websiteStatus === 'No Website' : l.websiteStatus !== 'No Website');
        const matchesTemp = temp === 'all' || l.temperature === temp;
        return matchesQ && matchesStatus && matchesWeb && matchesTemp;
      });

      tbody.innerHTML = filtered.map(lead => {
        const owner = this.db.employees.find(e => e.id === lead.assignedTo);
        return `
          <tr>
            <td>
              <div style="font-weight: 700; color: var(--text-main); font-size: 0.92rem; display:flex; align-items:center; gap:6px;">
                ${lead.name}
                ${lead.temperature === 'Hot' ? '<span title="Hot Lead">🔥</span>' : ''}
              </div>
              <div style="font-size: 0.74rem; color: var(--text-dim);">${lead.address}</div>
            </td>
            <td><span class="badge badge-gray">${lead.category}</span></td>
            <td>
              <div style="font-weight: 800; font-size: 0.95rem; color: ${lead.leadScore >= 80 ? '#38bdf8' : '#fbbf24'}; font-family: var(--font-mono);">
                ${lead.leadScore} / 100
              </div>
            </td>
            <td>
              ${lead.websiteStatus === 'No Website' 
                ? `<span class="badge opportunity-badge">⚡ No Website</span>` 
                : `<span class="badge badge-blue">🌐 Has Website</span>`
              }
            </td>
            <td>
              <div style="display:flex; align-items:center; gap:6px;">
                <a href="tel:${escapeHtml(lead.phone)}" class="btn-secondary" style="padding:4px 8px; font-size:0.74rem;" title="Call Lead">📞 Call</a>
                <a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:4px 8px; font-size:0.74rem; color:#34d399;" title="WhatsApp Lead">💬 WhatsApp</a>
              </div>
            </td>
            <td>
              <span class="badge ${lead.status === 'Won' ? 'badge-green' : (lead.status === 'Proposal' || lead.status === 'Meeting' ? 'badge-purple' : 'badge-blue')}">
                ${lead.status}
              </span>
            </td>
            <td>
              <span style="font-size:0.8rem;">${owner ? owner.name : 'Sumaiya'}</span>
            </td>
            <td>
              <span style="font-size:0.78rem; font-family:var(--font-mono); color:${lead.nextFollowUp <= new Date().toISOString().split('T')[0] ? '#f87171' : 'var(--text-muted)'}">
                ${lead.nextFollowUp || 'None'}
              </span>
            </td>
            <td>
              <button class="btn-secondary" style="padding: 5px 10px; font-size: 0.78rem;" onclick="WorkspaceApp.openLeadDrawer('${lead.id}')">
                Profile & Log
              </button>
            </td>
          </tr>
        `;
      }).join('');
    },

    filterTasks() {
      const q = (document.getElementById('task-search')?.value || '').trim().toLowerCase();
      const prio = document.getElementById('task-filter-priority')?.value || 'all';
      const assignee = document.getElementById('task-filter-assignee')?.value || 'all';

      ['Todo', 'In Progress', 'Waiting', 'Completed'].forEach(status => {
        const colEl = document.getElementById('kanban-col-' + status.toLowerCase().replace(' ', ''));
        if (!colEl) return;

        const tasksInStatus = this.db.tasks.filter(t => {
          const matchesStatus = t.status === status;
          const matchesQ = !q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
          const matchesPrio = prio === 'all' || t.priority === prio;
          const matchesAssignee = assignee === 'all' || t.assignedTo === assignee;
          return matchesStatus && matchesQ && matchesPrio && matchesAssignee;
        });

        colEl.innerHTML = tasksInStatus.map(t => {
          const emp = this.db.employees.find(e => e.id === t.assignedTo);
          const client = this.db.clients.find(c => c.id === t.clientId);
          const lead = this.db.leads.find(l => l.id === t.leadId);
          const related = client ? client.name : (lead ? lead.name : 'Internal');
          
          return `
            <div class="kanban-card" draggable="true" ondragstart="event.dataTransfer.setData('text/plain', '${t.id}')">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="badge ${t.priority === 'Urgent' ? 'badge-red' : (t.priority === 'High' ? 'badge-amber' : 'badge-blue')}">
                  ${t.priority}
                </span>
                <span style="font-size:0.72rem; color:var(--text-dim)">Due ${t.dueDate}</span>
              </div>
              
              <div class="kanban-card-title">${t.title}</div>
              <div class="kanban-card-sub">${related}</div>

              <div class="kanban-card-footer">
                <span style="display:flex; align-items:center; gap:6px;">
                  <span style="width:20px; height:20px; border-radius:50%; background:var(--accent-gradient); color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.65rem; font-weight:700;">
                    ${emp ? emp.avatar : 'U'}
                  </span>
                  ${emp ? emp.name : 'Unassigned'}
                </span>
                <button onclick="WorkspaceApp.deleteTask('${t.id}')" style="color:var(--text-dim); padding:2px" title="Delete Task">&times;</button>
              </div>
            </div>
          `;
        }).join('');
      });
    },

    filterClients() {
      const q = (document.getElementById('client-search')?.value || '').trim().toLowerCase();
      const tbody = document.getElementById('clients-tbody');
      if (!tbody) return;

      const filtered = this.db.clients.filter(c => {
        return !q || c.name.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q) || c.phone.includes(q);
      });

      tbody.innerHTML = filtered.map(client => {
        const mgr = this.db.employees.find(e => e.id === client.accountManager);
        const primaryContact = client.contacts.find(c => c.isPrimary) || client.contacts[0] || { name: 'N/A', phone: '' };
        const clientProjects = this.db.projects.filter(p => p.clientId === client.id);

        return `
          <tr>
            <td>
              <div style="font-weight: 700; color: var(--text-main); font-size: 0.92rem;">${client.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${client.address}</div>
            </td>
            <td><span class="badge badge-gray">${client.industry}</span></td>
            <td>
              <div style="font-weight: 600;">${primaryContact.name}</div>
              <div style="font-size: 0.74rem; color: var(--text-dim);">${primaryContact.phone}</div>
            </td>
            <td>
              <span style="display: inline-flex; align-items: center; gap: 6px;">
                <span style="width: 20px; height: 20px; border-radius: 50%; background: var(--accent-gradient); color: #fff; font-size: 0.65rem; font-weight: 700; display: inline-flex; align-items: center; justify-content: center;">
                  ${mgr ? mgr.avatar : 'H'}
                </span>
                ${mgr ? mgr.name : 'Harsh'}
              </span>
            </td>
            <td><span class="badge badge-blue">${clientProjects.length} Active</span></td>
            <td style="font-family: var(--font-mono); font-weight: 600;">₹${client.totalContractValue.toLocaleString()}</td>
            <td style="font-family: var(--font-mono); font-weight: 600; color: ${client.outstandingAmount > 0 ? '#f87171' : '#34d399'};">
              ₹${client.outstandingAmount.toLocaleString()}
            </td>
            <td><span class="badge badge-green">${client.status}</span></td>
            <td>
              <button class="btn-secondary" style="padding: 5px 12px; font-size: 0.78rem;" onclick="WorkspaceApp.openClientDrawer('${client.id}')">
                View Workspace
              </button>
            </td>
          </tr>
        `;
      }).join('');
    },

    openLeadDrawer(leadId) {
      const lead = this.db.leads.find(l => l.id === leadId);
      if (!lead) return;

      const owner = this.db.employees.find(e => e.id === lead.assignedTo);
      const leadInteractions = this.db.interactions.filter(i => i.leadId === lead.id);

      const drawerContent = document.getElementById('drawer-content');
      if (!drawerContent) return;

      drawerContent.innerHTML = `
        <div class="drawer-header">
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <span class="badge ${lead.temperature === 'Hot' ? 'badge-red' : 'badge-amber'}">${lead.temperature} LEAD</span>
              <span class="badge badge-blue">${lead.status}</span>
            </div>
            <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--text-main);">${lead.name}</h2>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">
              ${lead.category} &bull; Assigned to: <strong>${owner ? owner.name : 'Sumaiya'}</strong>
            </div>
          </div>
          <button class="modal-close-btn" onclick="WorkspaceApp.closeDrawer()">&times;</button>
        </div>

        <div class="drawer-body">
          <!-- Website Opportunity Alert -->
          ${lead.websiteStatus === 'No Website' ? `
            <div style="background: rgba(239, 68, 68, 0.12); border: 1px solid rgba(239, 68, 68, 0.35); border-radius: var(--radius-md); padding: 14px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-weight: 700; color: #fca5a5; font-size: 0.92rem;">🚨 PRIME WEBSITE OPPORTUNITY</div>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">Business has ${lead.totalReviews || '300+'} reviews on Google Maps (${lead.googleRating}★) but NO website presence.</div>
              </div>
              <span style="font-size: 1.5rem;">🔥</span>
            </div>
          ` : ''}

          <!-- Quick Action Bar -->
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 8px; margin-bottom: 20px;">
            <a href="tel:${escapeHtml(lead.phone)}" class="btn-primary" style="justify-content:center; padding:9px 0;">📞 Call</a>
            <a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="justify-content:center; padding:9px 0; color:#34d399;">💬 WhatsApp</a>
            <button class="btn-secondary" style="justify-content:center; padding:9px 0;" onclick="WorkspaceApp.openLogInteractionModal('${escapeHtml(lead.id)}')">📝 Log Action</button>
            <button class="btn-secondary" style="justify-content:center; padding:9px 0; color:#818cf8;" onclick="WorkspaceApp.convertLeadToClient('${escapeHtml(lead.id)}')">🏆 Convert</button>
          </div>

          <!-- Business Details -->
          <div class="card">
            <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; color: var(--text-main);">Business Information</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.84rem;">
              <div><span style="color:var(--text-muted)">Phone:</span> <a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a></div>
              <div><span style="color:var(--text-muted)">Rating:</span> <strong>${lead.googleRating}★</strong> (${lead.totalReviews} reviews)</div>
              <div><span style="color:var(--text-muted)">Lead Score:</span> <strong style="color:var(--accent-blue)">${lead.leadScore} / 100</strong></div>
              <div><span style="color:var(--text-muted)">Deal Value:</span> ₹${(lead.dealValue || 120000).toLocaleString()}</div>
              <div style="grid-column: span 2;"><span style="color:var(--text-muted)">Address:</span> ${escapeHtml(lead.address)}</div>
              ${lead.mapsUrl ? `<div style="grid-column: span 2;"><a href="${sanitizeUrl(lead.mapsUrl)}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-blue)">📍 Open on Google Maps &rarr;</a></div>` : ''}
            </div>
          </div>

          <!-- Outreach & Activity Timeline -->
          <div class="card">
            <div class="card-header">
              <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--text-main);">Interaction History</h4>
              <button class="btn-secondary" style="padding: 4px 8px; font-size: 0.74rem;" onclick="WorkspaceApp.openLogInteractionModal('${lead.id}')">+ Log Call/Note</button>
            </div>

            <div class="timeline">
              ${leadInteractions.length === 0 ? `
                <div style="color:var(--text-dim); font-size:0.82rem; padding: 10px 0;">No interactions logged yet. Make the first call!</div>
              ` : leadInteractions.map(int => `
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <span class="timeline-title">${int.type} &bull; <strong style="color:var(--accent-blue)">${int.outcome}</strong></span>
                      <span class="timeline-time">${int.date}</span>
                    </div>
                    <div class="timeline-desc">${int.notes}</div>
                    ${int.nextFollowUp ? `<div style="font-size:0.74rem; color:var(--accent-amber); margin-top:4px;">Next Follow-up: ${int.nextFollowUp}</div>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      document.getElementById('drawer-overlay').classList.add('active');
    },

    convertLeadToClient(leadId) {
      const lead = this.db.leads.find(l => l.id === leadId);
      if (!lead) return;

      if (!confirm(`Convert "${lead.name}" into an official Client Account?\n\nAll contact details, interaction history, notes, and records will be preserved.`)) {
        return;
      }

      const newClient = {
        id: 'client_' + Date.now(),
        name: lead.name,
        industry: lead.category,
        status: 'Active Client',
        accountManager: lead.assignedTo || 'emp_harsh',
        phone: lead.phone,
        email: 'management@' + lead.name.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com',
        website: lead.website || '',
        address: lead.address,
        gst: 'Pending Registration',
        onboardedDate: new Date().toISOString().split('T')[0],
        totalContractValue: lead.dealValue || 150000,
        paidAmount: 0,
        outstandingAmount: lead.dealValue || 150000,
        contacts: [
          { id: 'c_' + Date.now(), name: lead.name + ' Representative', role: 'Business Owner', phone: lead.phone, email: '', isPrimary: true }
        ],
        notes: `Converted from Lead Source: ${lead.source}. Initial notes: ${lead.notes}`
      };

      // Mark lead as Won
      lead.status = 'Won';

      // Add to clients
      this.db.clients.unshift(newClient);

      // Log activity
      this.logActivity('converted lead to client', lead.name);
      this.notify('Lead Converted! 🏆', `"${lead.name}" is now an official Client Account.`, 'success');

      this.save();
      this.closeDrawer();
      this.switchView('clients');
    },

    // ==========================================
    // 6. EXCEL / CSV LEAD IMPORTER ENGINE
    // ==========================================
    bindLeadImporter() {
      const dropZone = document.getElementById('drop-zone');
      const fileInput = document.getElementById('lead-file-input');

      if (dropZone && fileInput) {
        dropZone.addEventListener('click', () => fileInput.click());
        dropZone.addEventListener('dragover', (e) => {
          e.preventDefault();
          dropZone.classList.add('dragover');
        });
        dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
        dropZone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropZone.classList.remove('dragover');
          if (e.dataTransfer.files.length) {
            this.handleFileUpload(e.dataTransfer.files[0]);
          }
        });
        fileInput.addEventListener('change', (e) => {
          if (e.target.files.length) {
            this.handleFileUpload(e.target.files[0]);
          }
        });
      }
    },

    handleFileUpload(file) {
      if (!window.XLSX) {
        this.notify('Excel Parser Error', 'SheetJS is loading. Please retry in a second.', 'error');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const rawRows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

          if (!rawRows || rawRows.length < 2) {
            alert('The file appears to be empty or does not contain data rows.');
            return;
          }

          this.parsedImportHeaders = rawRows[0];
          this.parsedImportRows = rawRows.slice(1).filter(r => r.some(cell => cell !== undefined && cell !== ''));

          this.showMappingStep(file.name);
        } catch (err) {
          console.error(err);
          alert('Could not parse Excel/CSV file: ' + err.message);
        }
      };
      reader.readAsArrayBuffer(file);
    },

    showMappingStep(fileName) {
      const uploadStep = document.getElementById('import-step-upload');
      const mapStep = document.getElementById('import-step-mapping');
      if (uploadStep) uploadStep.style.display = 'none';
      if (mapStep) mapStep.style.display = 'block';

      const mapContainer = document.getElementById('mapping-fields-container');
      if (!mapContainer) return;

      const CRM_TARGET_FIELDS = [
        { key: 'name', label: 'Company / Business Name *', required: true, autoKeywords: ['name', 'business', 'company', 'title'] },
        { key: 'category', label: 'Category / Industry', required: false, autoKeywords: ['category', 'type', 'industry'] },
        { key: 'phone', label: 'Phone Number *', required: true, autoKeywords: ['phone', 'contact', 'mobile', 'tel'] },
        { key: 'website', label: 'Website URL', required: false, autoKeywords: ['website', 'link', 'url', 'site', 'current link'] },
        { key: 'websiteStatus', label: 'Website Status', required: false, autoKeywords: ['website status', 'web status'] },
        { key: 'leadScore', label: 'Lead Score (0-100)', required: false, autoKeywords: ['score', 'lead score', 'priority'] },
        { key: 'googleRating', label: 'Google Rating', required: false, autoKeywords: ['rating', 'stars', 'google rating'] },
        { key: 'totalReviews', label: 'Total Reviews', required: false, autoKeywords: ['review', 'reviews', 'total reviews'] },
        { key: 'address', label: 'Locality / Address', required: false, autoKeywords: ['address', 'locality', 'location', 'area', 'city'] },
        { key: 'mapsUrl', label: 'Google Maps Link', required: false, autoKeywords: ['map', 'maps', 'google map', 'google maps'] },
        { key: 'notes', label: 'Notes', required: false, autoKeywords: ['notes', 'comment', 'description'] }
      ];

      mapContainer.innerHTML = CRM_TARGET_FIELDS.map(target => {
        // Guess match
        let bestIndex = -1;
        this.parsedImportHeaders.forEach((h, idx) => {
          if (!h) return;
          const hNorm = String(h).toLowerCase();
          if (target.autoKeywords.some(kw => hNorm.includes(kw))) {
            bestIndex = idx;
          }
        });

        return `
          <div class="mapping-row">
            <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-main);">${target.label}</div>
            <div style="text-align: center; color: var(--text-dim);">&rarr;</div>
            <select class="form-control" data-target-key="${target.key}">
              <option value="-1">-- Ignore this column --</option>
              ${this.parsedImportHeaders.map((header, idx) => `
                <option value="${idx}" ${idx === bestIndex ? 'selected' : ''}>Column: ${header}</option>
              `).join('')}
            </select>
          </div>
        `;
      }).join('');

      const countEl = document.getElementById('import-preview-count');
      if (countEl) countEl.textContent = `${this.parsedImportRows.length} valid rows found in ${fileName}`;
    },

    executeImport() {
      const selects = document.querySelectorAll('#mapping-fields-container select[data-target-key]');
      const mapping = {};
      selects.forEach(s => {
        mapping[s.getAttribute('data-target-key')] = parseInt(s.value, 10);
      });

      const nameIdx = mapping.name;
      const phoneIdx = mapping.phone;

      if (nameIdx === -1) {
        alert('Please map the Business Name column.');
        return;
      }

      let importedCount = 0;
      let duplicateCount = 0;
      const listName = document.getElementById('import-list-name').value.trim() || 'Imported Leads ' + new Date().toLocaleDateString();

      const newListId = 'list_' + Date.now();
      this.db.leadLists.unshift({
        id: newListId,
        name: listName,
        description: `Imported on ${new Date().toLocaleDateString()} with ${this.parsedImportRows.length} rows`,
        count: this.parsedImportRows.length,
        createdAt: new Date().toISOString().split('T')[0],
        createdBy: this.currentUser.name || this.currentUser.username
      });

      this.parsedImportRows.forEach((row, i) => {
        const rawName = row[nameIdx] ? String(row[nameIdx]).trim() : '';
        if (!rawName) return;

        const rawPhone = phoneIdx !== -1 && row[phoneIdx] ? String(row[phoneIdx]).trim() : '';
        const rawWebsite = mapping.website !== -1 && row[mapping.website] ? String(row[mapping.website]).trim() : '';
        const rawScore = mapping.leadScore !== -1 && row[mapping.leadScore] ? parseInt(row[mapping.leadScore], 10) : 75;

        // Check duplicates by phone or name
        const isDuplicate = this.db.leads.some(l => 
          (rawPhone && l.phone && l.phone.replace(/[^0-9]/g, '') === rawPhone.replace(/[^0-9]/g, '')) ||
          (l.name.toLowerCase() === rawName.toLowerCase())
        );

        if (isDuplicate) {
          duplicateCount++;
        }

        const newLead = {
          id: 'lead_' + Date.now() + '_' + i,
          name: rawName,
          category: mapping.category !== -1 && row[mapping.category] ? String(row[mapping.category]).trim() : 'General Business',
          leadScore: isNaN(rawScore) ? 75 : rawScore,
          temperature: rawScore >= 80 ? 'Hot' : 'Warm',
          status: 'New',
          phone: rawPhone || '+91 90000 00000',
          website: rawWebsite,
          websiteStatus: (!rawWebsite || rawWebsite.toLowerCase().includes('no')) ? 'No Website' : 'Has Website',
          googleRating: mapping.googleRating !== -1 && row[mapping.googleRating] ? parseFloat(row[mapping.googleRating]) : 4.5,
          totalReviews: mapping.totalReviews !== -1 && row[mapping.totalReviews] ? parseInt(row[mapping.totalReviews], 10) : 120,
          address: mapping.address !== -1 && row[mapping.address] ? String(row[mapping.address]).trim() : 'Bangalore, KA',
          mapsUrl: mapping.mapsUrl !== -1 && row[mapping.mapsUrl] ? String(row[mapping.mapsUrl]).trim() : '',
          assignedTo: 'emp_sumaiya',
          source: listName,
          leadListId: newListId,
          dateAdded: new Date().toISOString().split('T')[0],
          dealValue: 120000,
          nextFollowUp: new Date().toISOString().split('T')[0],
          lastContact: null,
          notes: mapping.notes !== -1 && row[mapping.notes] ? String(row[mapping.notes]).trim() : 'Imported lead'
        };

        this.db.leads.unshift(newLead);
        importedCount++;
      });

      this.logActivity(`imported ${importedCount} leads into list`, listName);
      this.notify('Import Successful! 🚀', `Imported ${importedCount} leads (${duplicateCount} potential duplicates flagged).`, 'success');

      this.save();
      this.closeModal('modal-import-leads');
      this.switchView('leads');
    },

    // ==========================================
    // 7. SALES PIPELINE (Kanban)
    // ==========================================
    renderPipeline(container) {
      const stages = ['New', 'Contacted', 'Qualified', 'Meeting', 'Proposal', 'Won', 'Lost'];

      const totalPipeline = this.db.leads.reduce((acc, l) => acc + (l.dealValue || 120000), 0);
      const wonValue = this.db.leads.filter(l => l.status === 'Won').reduce((acc, l) => acc + (l.dealValue || 120000), 0);

      container.innerHTML = `
        <div class="workspace-view active">
          <!-- Pipeline Metrics -->
          <div class="metrics-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
            <div class="metric-card">
              <span class="metric-label">Total Pipeline Value</span>
              <span class="metric-val highlight-blue">₹${totalPipeline.toLocaleString()}</span>
              <span class="metric-sub">${this.db.leads.length} active opportunities</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">Won Value</span>
              <span class="metric-val highlight-green">₹${wonValue.toLocaleString()}</span>
              <span class="metric-sub">${this.db.leads.filter(l => l.status === 'Won').length} deals closed</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">In Proposal Stage</span>
              <span class="metric-val highlight-amber">${this.db.leads.filter(l => l.status === 'Proposal').length}</span>
              <span class="metric-sub">High conversion probability</span>
            </div>
          </div>

          <!-- Pipeline Kanban Board -->
          <div class="kanban-board">
            ${stages.map(stage => {
              const leadsInStage = this.db.leads.filter(l => l.status === stage);
              const stageValue = leadsInStage.reduce((acc, l) => acc + (l.dealValue || 120000), 0);

              return `
                <div class="kanban-column" ondragover="event.preventDefault()" ondrop="WorkspaceApp.dropPipeline(event, '${stage}')">
                  <div class="kanban-header">
                    <span class="kanban-col-title">
                      <span class="badge-dot" style="background: ${stage === 'Won' ? '#10b981' : (stage === 'Lost' ? '#ef4444' : '#38bdf8')}"></span>
                      ${stage}
                    </span>
                    <span class="kanban-count">₹${(stageValue / 1000).toFixed(0)}k</span>
                  </div>

                  <div class="kanban-cards">
                    ${leadsInStage.map(lead => `
                      <div class="kanban-card" draggable="true" ondragstart="event.dataTransfer.setData('text/plain', '${lead.id}')" onclick="WorkspaceApp.openLeadDrawer('${lead.id}')">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <span class="badge ${lead.temperature === 'Hot' ? 'badge-red' : 'badge-amber'}">${lead.temperature}</span>
                          <span style="font-family:var(--font-mono); font-weight:700; color:var(--text-main);">₹${(lead.dealValue || 120000).toLocaleString()}</span>
                        </div>

                        <div class="kanban-card-title">${lead.name}</div>
                        <div class="kanban-card-sub">${lead.category}</div>

                        <div class="kanban-card-footer">
                          <span>${lead.websiteStatus === 'No Website' ? '⚡ No Web' : '🌐 Has Web'}</span>
                          <span style="color:var(--accent-blue);">Score: ${lead.leadScore}</span>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    },

    dropPipeline(e, targetStage) {
      e.preventDefault();
      const leadId = e.dataTransfer.getData('text/plain');
      const lead = this.db.leads.find(l => l.id === leadId);
      if (lead && lead.status !== targetStage) {
        lead.status = targetStage;
        this.logActivity('moved lead stage to ' + targetStage, lead.name);
        this.notify('Pipeline Updated', `"${lead.name}" is now in ${targetStage}.`, 'info');
        this.save();
        this.renderCurrentView();
      }
    },

    // ==========================================
    // 8. OUTREACH TODAY WORKSPACE
    // ==========================================
    renderOutreachWorkspace(container) {
      const todayStr = new Date().toISOString().split('T')[0];
      const overdue = this.db.leads.filter(l => l.status !== 'Won' && l.status !== 'Lost' && l.nextFollowUp && l.nextFollowUp < todayStr);
      const dueToday = this.db.leads.filter(l => l.status !== 'Won' && l.status !== 'Lost' && l.nextFollowUp === todayStr);
      const noWebOpportunities = this.db.leads.filter(l => l.status !== 'Won' && l.status !== 'Lost' && l.websiteStatus === 'No Website' && (!l.lastContact || l.nextFollowUp <= todayStr));

      container.innerHTML = `
        <div class="workspace-view active">
          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">Outreach Today & Dialing Queue</h2>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">
              Rapid action queue for hot prospects, overdue follow-ups, and businesses needing web presence.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 20px;">
            
            <!-- High Priority No-Website Hot Prospects -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title" style="color: #fca5a5;">
                  🔥 High Opportunity Leads (No Website)
                </h3>
                <span class="badge badge-red">${noWebOpportunities.length} Leads</span>
              </div>

              <div style="display:flex; flex-direction:column; gap: 12px;">
                ${noWebOpportunities.map(lead => `
                  <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 14px;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                      <div>
                        <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">${lead.name}</div>
                        <div style="font-size: 0.76rem; color: var(--text-muted); margin-top:2px;">${lead.category} &bull; ${lead.googleRating}★ (${lead.totalReviews} reviews)</div>
                      </div>
                      <span class="badge opportunity-badge">⚡ No Website</span>
                    </div>

                    <div style="font-size:0.8rem; color:var(--text-dim); margin: 8px 0;">${lead.notes || 'High prospect for web package'}</div>

                    <div style="display:flex; gap:8px; margin-top:10px;">
                      <a href="tel:${escapeHtml(lead.phone)}" class="btn-primary" style="padding:6px 12px; font-size:0.78rem;">📞 Call Now</a>
                      <a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:6px 12px; font-size:0.78rem; color:#34d399;">💬 WhatsApp</a>
                      <button class="btn-secondary" style="padding:6px 10px; font-size:0.78rem;" onclick="WorkspaceApp.openLogInteractionModal('${escapeHtml(lead.id)}')">Log</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Due & Overdue Follow-ups -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  ⚡ Follow-ups Due Today & Overdue
                </h3>
                <span class="badge badge-amber">${overdue.length + dueToday.length} Scheduled</span>
              </div>

              <div style="display:flex; flex-direction:column; gap: 12px;">
                ${[...overdue, ...dueToday].map(lead => `
                  <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 14px;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                      <div>
                        <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">${lead.name}</div>
                        <div style="font-size: 0.76rem; color: var(--text-muted); margin-top:2px;">Status: <strong>${lead.status}</strong> &bull; Score: ${lead.leadScore}</div>
                      </div>
                      <span class="badge ${lead.nextFollowUp < todayStr ? 'badge-red' : 'badge-amber'}">
                        ${lead.nextFollowUp < todayStr ? 'Overdue' : 'Due Today'}
                      </span>
                    </div>

                    <div style="font-size:0.8rem; color:var(--text-muted); margin: 8px 0;">${lead.notes || 'Follow-up on proposal'}</div>

                    <div style="display:flex; gap:8px; margin-top:10px;">
                      <a href="tel:${lead.phone}" class="btn-primary" style="padding:6px 12px; font-size:0.78rem;">📞 Call</a>
                      <button class="btn-secondary" style="padding:6px 10px; font-size:0.78rem;" onclick="WorkspaceApp.openLogInteractionModal('${lead.id}')">Log Outcome</button>
                      <button class="btn-secondary" style="padding:6px 10px; font-size:0.78rem;" onclick="WorkspaceApp.openLeadDrawer('${lead.id}')">Profile</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>
        </div>
      `;
    },

    // ==========================================
    // 9. MEETINGS & CALENDAR
    // ==========================================
    renderMeetings(container) {
      container.innerHTML = `
        <div class="workspace-view active">
          <div class="toolbar">
            <div class="toolbar-left">
              <h2 style="font-size:1.2rem; font-weight:700;">Client & Internal Meetings</h2>
            </div>
            <div class="toolbar-right">
              <button class="btn-primary" onclick="WorkspaceApp.openModal('modal-new-meeting')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Schedule Meeting
              </button>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${this.db.meetings.map(m => {
              const client = this.db.clients.find(c => c.id === m.clientId);
              const lead = this.db.leads.find(l => l.id === m.leadId);
              const related = client ? client.name : (lead ? lead.name : 'Internal Team');

              return `
                <div class="card" style="margin-bottom:0;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
                    <div>
                      <span class="badge badge-blue" style="margin-bottom:6px;">${related}</span>
                      <h3 style="font-size:1.15rem; font-weight:700; color:var(--text-main);">${m.title}</h3>
                      <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">
                        📅 ${m.date} at <strong style="color:var(--accent-blue)">${m.time}</strong> (${m.duration} minutes) &bull; Location: ${m.location}
                      </div>
                    </div>

                    <div style="display:flex; gap:8px;">
                      ${m.videoLink ? `
                        <a href="${sanitizeUrl(m.videoLink)}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding:7px 16px;">Join Video Room</a>
                      ` : ''}
                      <button class="btn-secondary" onclick="WorkspaceApp.openMeetingNotesModal('${m.id}')">Notes & Action Items</button>
                    </div>
                  </div>

                  <!-- Agenda -->
                  <div style="margin-top:14px; padding:12px; background:rgba(255,255,255,0.02); border-radius:var(--radius-sm); font-size:0.84rem; color:var(--text-muted);">
                    <strong>Agenda:</strong>
                    <div style="white-space:pre-line; margin-top:4px;">${m.agenda || 'General progress review'}</div>
                  </div>

                  <!-- Notes if already written -->
                  ${m.notes ? `
                    <div style="margin-top:10px; padding:12px; background:rgba(56,189,248,0.04); border-left:3px solid var(--accent-blue); font-size:0.84rem;">
                      <strong style="color:var(--accent-blue)">Meeting Notes & Decisions:</strong>
                      <div style="margin-top:4px; color:var(--text-main);">${m.notes}</div>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    },

    renderCalendar(container) {
      container.innerHTML = `
        <div class="workspace-view active">
          <div class="card">
            <div class="card-header">
              <h2 class="card-title">September 2026 Agency Calendar</h2>
              <div style="display:flex; gap:6px;">
                <button class="btn-secondary" style="padding:4px 10px; font-size:0.75rem;">Month</button>
                <button class="btn-secondary" style="padding:4px 10px; font-size:0.75rem;">Week</button>
                <button class="btn-secondary" style="padding:4px 10px; font-size:0.75rem;">Agenda</button>
              </div>
            </div>

            <!-- Simplified Monthly Grid -->
            <div style="display:grid; grid-template-columns: repeat(7, 1fr); gap:6px; text-align:center;">
              ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => `
                <div style="font-weight:700; font-size:0.75rem; color:var(--text-dim); padding:8px 0; text-transform:uppercase;">${d}</div>
              `).join('')}

              ${Array.from({length: 30}, (_, i) => {
                const dayNum = i + 1;
                const dateStr = `2026-09-${dayNum < 10 ? '0' + dayNum : dayNum}`;
                const meets = this.db.meetings.filter(m => m.date === dateStr);
                const taskDue = this.db.tasks.filter(t => t.dueDate === dateStr);
                const isToday = dayNum === 15;

                return `
                  <div style="min-height:90px; background:${isToday ? 'rgba(56,189,248,0.08)' : 'rgba(255,255,255,0.02)'}; border:1px solid ${isToday ? 'rgba(56,189,248,0.4)' : 'var(--border-subtle)'}; border-radius:var(--radius-sm); padding:6px; text-align:left; display:flex; flex-direction:column; gap:4px;">
                    <span style="font-size:0.75rem; font-weight:700; color:${isToday ? 'var(--accent-blue)' : 'var(--text-muted)'}">${dayNum}</span>
                    
                    ${meets.map(m => `
                      <span style="font-size:0.65rem; background:rgba(56,189,248,0.2); color:#38bdf8; padding:2px 4px; border-radius:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                        📹 ${m.time} ${m.title}
                      </span>
                    `).join('')}

                    ${taskDue.map(t => `
                      <span style="font-size:0.65rem; background:rgba(245,158,11,0.2); color:#fbbf24; padding:2px 4px; border-radius:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                        ✓ ${t.title}
                      </span>
                    `).join('')}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    },

    // ==========================================
    // 10. PAYMENTS & FINANCE
    // ==========================================
    renderPayments(container) {
      const totalContract = this.db.clients.reduce((acc, c) => acc + (c.totalContractValue || 0), 0);
      const totalPaid = this.db.clients.reduce((acc, c) => acc + (c.paidAmount || 0), 0);
      const totalOutstanding = this.db.clients.reduce((acc, c) => acc + (c.outstandingAmount || 0), 0);

      container.innerHTML = `
        <div class="workspace-view active">
          <!-- Metrics -->
          <div class="metrics-grid">
            <div class="metric-card">
              <span class="metric-label">Total Contract Bookings</span>
              <span class="metric-val highlight-blue">₹${totalContract.toLocaleString()}</span>
              <span class="metric-sub">Across all active accounts</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">Revenue Collected</span>
              <span class="metric-val highlight-green">₹${totalPaid.toLocaleString()}</span>
              <span class="metric-sub">Realized cash flow</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">Outstanding Invoices</span>
              <span class="metric-val highlight-red">₹${totalOutstanding.toLocaleString()}</span>
              <span class="metric-sub">Payment pending collection</span>
            </div>
          </div>

          <!-- Invoices Table -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Invoices & Payment Records</h3>
              <button class="btn-primary" onclick="WorkspaceApp.openModal('modal-new-payment')">+ Record Payment / Invoice</button>
            </div>

            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Invoice #</th>
                    <th>Client</th>
                    <th>Amount</th>
                    <th>Issue Date</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Payment Details</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.db.invoices.map(inv => `
                    <tr>
                      <td style="font-family:var(--font-mono); font-weight:700;">${inv.invoiceNumber}</td>
                      <td style="font-weight:600;">${inv.clientName}</td>
                      <td style="font-family:var(--font-mono); font-weight:700; color:var(--text-main);">₹${inv.amount.toLocaleString()}</td>
                      <td>${inv.issueDate}</td>
                      <td>${inv.dueDate}</td>
                      <td>
                        <span class="badge ${inv.status === 'Paid' ? 'badge-green' : (inv.status === 'Overdue' ? 'badge-red' : 'badge-amber')}">
                          ${inv.status}
                        </span>
                      </td>
                      <td style="font-size:0.78rem; color:var(--text-muted);">
                        ${inv.paymentDate ? `Paid on ${inv.paymentDate} (${inv.method})` : 'Awaiting payment'}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    },

    // ==========================================
    // 11. PROJECTS
    // ==========================================
    renderProjects(container) {
      container.innerHTML = `
        <div class="workspace-view active">
          <div class="toolbar">
            <div class="toolbar-left">
              <h2 style="font-size:1.2rem; font-weight:700;">Client Projects & Deliverables</h2>
            </div>
            <div class="toolbar-right">
              <button class="btn-primary" onclick="WorkspaceApp.openModal('modal-new-project')">+ New Project</button>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
            ${this.db.projects.map(p => {
              const client = this.db.clients.find(c => c.id === p.clientId);
              const mgr = this.db.employees.find(e => e.id === p.managerId);
              const projectTasks = this.db.tasks.filter(t => t.projectId === p.id);

              return `
                <div class="card" style="margin-bottom:0;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                    <span class="badge badge-blue">${client ? client.name : 'Agency Project'}</span>
                    <span class="badge badge-green">${p.status}</span>
                  </div>

                  <h3 style="font-size:1.1rem; font-weight:700; color:var(--text-main); line-height:1.3;">${p.name}</h3>
                  <p style="font-size:0.82rem; color:var(--text-muted); margin: 8px 0 14px;">${p.description}</p>

                  <!-- Progress Bar -->
                  <div style="margin-bottom:14px;">
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-bottom:4px;">
                      <span>Completion</span>
                      <strong style="color:var(--text-main);">${p.progress}%</strong>
                    </div>
                    <div style="width:100%; height:6px; background:rgba(255,255,255,0.08); border-radius:999px; overflow:hidden;">
                      <div style="width:${p.progress}%; height:100%; background:var(--accent-gradient); border-radius:999px;"></div>
                    </div>
                  </div>

                  <div style="display:flex; justify-content:space-between; align-items:center; padding-top:12px; border-top:1px solid var(--border-subtle); font-size:0.75rem; color:var(--text-dim);">
                    <span>Manager: <strong>${mgr ? mgr.name : 'Harsh'}</strong></span>
                    <span>Deadline: <strong>${p.deadline}</strong></span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    },

    // ==========================================
    // 12. TEAM & EMPLOYEES
    // ==========================================
    renderEmployees(container) {
      container.innerHTML = `
        <div class="workspace-view active">
          <div class="toolbar">
            <div class="toolbar-left">
              <h2 style="font-size:1.2rem; font-weight:700;">Octagram Team & Workload</h2>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            ${this.db.employees.map(emp => {
              const assignedTasks = this.db.tasks.filter(t => t.assignedTo === emp.id && t.status !== 'Completed');
              const activeProjects = this.db.projects.filter(p => p.managerId === emp.id || p.team.includes(emp.id));

              return `
                <div class="card" style="margin-bottom:0; text-align:center;">
                  <div class="avatar" style="width:54px; height:54px; font-size:1.3rem; margin: 0 auto 12px;">
                    ${emp.avatar}
                  </div>
                  <h3 style="font-size:1.1rem; font-weight:700; color:var(--text-main);">${emp.name}</h3>
                  <div style="font-size:0.78rem; color:var(--accent-blue); font-weight:600; margin-bottom:8px;">${emp.role}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${emp.email} &bull; ${emp.phone}</div>

                  <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:18px; padding-top:14px; border-top:1px solid var(--border-subtle);">
                    <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:var(--radius-sm);">
                      <div style="font-size:1.1rem; font-weight:800; color:var(--accent-blue);">${assignedTasks.length}</div>
                      <div style="font-size:0.68rem; color:var(--text-muted); text-transform:uppercase;">Active Tasks</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:var(--radius-sm);">
                      <div style="font-size:1.1rem; font-weight:800; color:var(--accent-green);">${activeProjects.length}</div>
                      <div style="font-size:0.68rem; color:var(--text-muted); text-transform:uppercase;">Projects</div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    },

    // ==========================================
    // 13. LEAD LISTS & REPORTS & ACTIVITY LOG
    // ==========================================
    renderLeadLists(container) {
      container.innerHTML = `
        <div class="workspace-view active">
          <div class="toolbar">
            <div class="toolbar-left">
              <h2 style="font-size:1.2rem; font-weight:700;">Prospect Segments & Import Batches</h2>
            </div>
            <div class="toolbar-right">
              <button class="btn-primary" onclick="WorkspaceApp.openModal('modal-import-leads')">+ Import New Batch</button>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            ${this.db.leadLists.map(list => {
              const leadsInList = this.db.leads.filter(l => l.leadListId === list.id);
              const noWebCount = leadsInList.filter(l => l.websiteStatus === 'No Website').length;

              return `
                <div class="card" style="margin-bottom:0;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                    <h3 style="font-size:1.1rem; font-weight:700; color:var(--text-main);">${list.name}</h3>
                    <span class="badge badge-blue">${leadsInList.length || list.count} Leads</span>
                  </div>
                  <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:14px;">${list.description}</p>
                  
                  <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-dim); padding-top:10px; border-top:1px solid var(--border-subtle);">
                    <span>🔥 <strong>${noWebCount}</strong> without websites</span>
                    <span>Created by ${list.createdBy}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    },

    renderReports(container) {
      const wonDeals = this.db.leads.filter(l => l.status === 'Won');
      const conversionRate = this.db.leads.length > 0 ? ((wonDeals.length / this.db.leads.length) * 100).toFixed(1) : '0.0';

      container.innerHTML = `
        <div class="workspace-view active">
          <div class="metrics-grid">
            <div class="metric-card">
              <span class="metric-label">Lead Conversion Rate</span>
              <span class="metric-val highlight-green">${conversionRate}%</span>
              <span class="metric-sub">${wonDeals.length} won / ${this.db.leads.length} leads</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">Active Task Completion</span>
              <span class="metric-val highlight-blue">92%</span>
              <span class="metric-sub">Average turnaround: 2.1 days</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">Hospitality Sector Penetration</span>
              <span class="metric-val highlight-purple">48%</span>
              <span class="metric-sub">Leading vertical</span>
            </div>
          </div>
        </div>
      `;
    },

    renderActivityLog(container) {
      container.innerHTML = `
        <div class="workspace-view active">
          <div class="card">
            <h2 class="card-title" style="margin-bottom:16px;">Agency Audit Trail</h2>
            <div class="timeline">
              ${this.db.activityLog.map(act => `
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <span class="timeline-title"><strong>${act.user}</strong> ${act.action} <span style="color:var(--accent-blue)">${act.target}</span></span>
                      <span class="timeline-time">${act.timestamp}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    renderContacts(container) {
      const allContacts = [];
      this.db.clients.forEach(c => {
        c.contacts.forEach(contact => {
          allContacts.push({ ...contact, companyName: c.name, type: 'Client' });
        });
      });

      container.innerHTML = `
        <div class="workspace-view active">
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Contact Name</th>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Quick Outreach</th>
                </tr>
              </thead>
              <tbody>
                ${allContacts.map(c => `
                  <tr>
                    <td style="font-weight:700;">${escapeHtml(c.name)}</td>
                    <td>${escapeHtml(c.companyName)}</td>
                    <td><span class="badge badge-gray">${escapeHtml(c.role)}</span></td>
                    <td><a href="tel:${escapeHtml(c.phone)}">${escapeHtml(c.phone)}</a></td>
                    <td><a href="mailto:${escapeHtml(c.email)}">${escapeHtml(c.email)}</a></td>
                    <td>
                      <div style="display:flex; gap:6px;">
                        <a href="tel:${escapeHtml(c.phone)}" class="btn-secondary" style="padding:3px 8px; font-size:0.72rem;">📞 Call</a>
                        <a href="https://wa.me/${c.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:3px 8px; font-size:0.72rem; color:#34d399;">💬 WhatsApp</a>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    },

    // ==========================================
    // 14. MODALS & GLOBAL SEARCH
    // ==========================================
    bindModals() {
      // Close on backdrop click
      document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) modal.classList.remove('active');
        });
      });
      document.querySelectorAll('.modal-close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          btn.closest('.modal-overlay').classList.remove('active');
        });
      });
    },

    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add('active');
    },

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('active');
    },

    bindQuickAction() {
      const trigger = document.getElementById('quick-action-trigger');
      const menu = document.getElementById('quick-action-menu');

      if (trigger && menu) {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          menu.classList.toggle('show');
        });
        document.addEventListener('click', () => menu.classList.remove('show'));
      }
    },

    bindGlobalSearch() {
      const searchTrigger = document.getElementById('global-search-trigger');
      const searchModal = document.getElementById('modal-global-search');
      const searchInput = document.getElementById('global-search-input');
      const resultsContainer = document.getElementById('global-search-results');

      if (searchTrigger && searchModal && searchInput) {
        searchTrigger.addEventListener('click', () => {
          searchModal.classList.add('active');
          searchInput.focus();
        });

        // Keyboard shortcut Cmd+K / Ctrl+K
        document.addEventListener('keydown', (e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchModal.classList.add('active');
            searchInput.focus();
          }
          if (e.key === 'Escape') {
            searchModal.classList.remove('active');
            this.closeDrawer();
          }
        });

        searchInput.addEventListener('input', () => {
          const q = searchInput.value.trim().toLowerCase();
          if (!q) {
            resultsContainer.innerHTML = '<div style="padding:20px; text-align:center; color:var(--text-dim)">Type to search across clients, leads, tasks, projects, and meetings...</div>';
            return;
          }

          const matchedClients = this.db.clients.filter(c => c.name.toLowerCase().includes(q));
          const matchedLeads = this.db.leads.filter(l => l.name.toLowerCase().includes(q) || l.phone.includes(q));
          const matchedTasks = this.db.tasks.filter(t => t.title.toLowerCase().includes(q));
          const matchedProjects = this.db.projects.filter(p => p.name.toLowerCase().includes(q));

          resultsContainer.innerHTML = `
            ${matchedClients.length ? `
              <div style="margin-bottom:12px;">
                <div style="font-size:0.7rem; font-weight:700; color:var(--text-dim); text-transform:uppercase; margin-bottom:6px;">Clients</div>
                ${matchedClients.map(c => `
                  <div class="dropdown-item" onclick="WorkspaceApp.openClientDrawer('${c.id}'); document.getElementById('modal-global-search').classList.remove('active');">
                    🏢 ${c.name} (${c.industry})
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${matchedLeads.length ? `
              <div style="margin-bottom:12px;">
                <div style="font-size:0.7rem; font-weight:700; color:var(--text-dim); text-transform:uppercase; margin-bottom:6px;">Leads / Outreach</div>
                ${matchedLeads.map(l => `
                  <div class="dropdown-item" onclick="WorkspaceApp.openLeadDrawer('${l.id}'); document.getElementById('modal-global-search').classList.remove('active');">
                    🔥 ${l.name} &bull; ${l.phone} (${l.status})
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${matchedTasks.length ? `
              <div style="margin-bottom:12px;">
                <div style="font-size:0.7rem; font-weight:700; color:var(--text-dim); text-transform:uppercase; margin-bottom:6px;">Tasks</div>
                ${matchedTasks.map(t => `
                  <div class="dropdown-item" onclick="WorkspaceApp.switchView('tasks'); document.getElementById('modal-global-search').classList.remove('active');">
                    ✓ ${t.title} (${t.priority})
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${(!matchedClients.length && !matchedLeads.length && !matchedTasks.length && !matchedProjects.length) ? `
              <div style="padding:20px; text-align:center; color:var(--text-dim)">No results found matching "${q}".</div>
            ` : ''}
          `;
        });
      }
    },

    openLogInteractionModal(leadId) {
      const lead = this.db.leads.find(l => l.id === leadId);
      if (!lead) return;
      document.getElementById('int-lead-id').value = lead.id;
      document.getElementById('int-lead-title').textContent = lead.name;
      this.openModal('modal-log-interaction');
    },

    saveInteraction(e) {
      e.preventDefault();
      const leadId = document.getElementById('int-lead-id').value;
      const type = document.getElementById('int-type').value;
      const outcome = document.getElementById('int-outcome').value;
      const notes = document.getElementById('int-notes').value.trim();
      const nextFollowUp = document.getElementById('int-followup').value;

      const lead = this.db.leads.find(l => l.id === leadId);
      if (lead) {
        lead.lastContact = new Date().toISOString().split('T')[0];
        if (nextFollowUp) lead.nextFollowUp = nextFollowUp;
        if (notes) lead.notes = notes;

        // Auto transition status if outcome was positive
        if (outcome.includes('Meeting') && lead.status !== 'Won') lead.status = 'Meeting';
        if (outcome.includes('Proposal') && lead.status !== 'Won') lead.status = 'Proposal';

        const intObj = {
          id: 'int_' + Date.now(),
          leadId: lead.id,
          clientId: null,
          type: type,
          outcome: outcome,
          notes: notes,
          performedBy: this.currentUser.username,
          date: new Date().toISOString().replace('T', ' ').substring(0, 16),
          nextFollowUp: nextFollowUp
        };
        this.db.interactions.unshift(intObj);
        this.logActivity(`logged ${type} with`, lead.name);
        this.notify('Outreach Logged', `Recorded interaction for ${lead.name}.`, 'success');
        this.save();
        this.closeModal('modal-log-interaction');
        this.renderCurrentView();
        if (document.getElementById('drawer-overlay').classList.contains('active')) {
          this.openLeadDrawer(lead.id);
        }
      }
    },

    openMeetingNotesModal(meetingId) {
      const meeting = this.db.meetings.find(m => m.id === meetingId);
      if (!meeting) return;
      document.getElementById('notes-meeting-id').value = meeting.id;
      document.getElementById('notes-meeting-title').textContent = meeting.title;
      document.getElementById('notes-textarea').value = meeting.notes || '';
      this.openModal('modal-meeting-notes');
    },

    saveMeetingNotes(e) {
      e.preventDefault();
      const mId = document.getElementById('notes-meeting-id').value;
      const notes = document.getElementById('notes-textarea').value.trim();
      const autoTask = document.getElementById('notes-create-task').checked;
      const taskTitle = document.getElementById('notes-task-title').value.trim();

      const meeting = this.db.meetings.find(m => m.id === mId);
      if (meeting) {
        meeting.notes = notes;

        if (autoTask && taskTitle) {
          const newTask = {
            id: 'task_' + Date.now(),
            title: taskTitle,
            description: `Generated from Action Items of meeting "${meeting.title}"`,
            clientId: meeting.clientId,
            projectId: null,
            leadId: meeting.leadId,
            assignedTo: 'emp_harsh',
            createdBy: this.currentUser.username,
            priority: 'High',
            status: 'Todo',
            dueDate: new Date().toISOString().split('T')[0],
            subtasks: []
          };
          this.db.tasks.unshift(newTask);
          this.notify('Action Item Created', `Task "${taskTitle}" assigned from meeting notes.`, 'success');
        }

        this.logActivity('recorded notes for meeting', meeting.title);
        this.save();
        this.closeModal('modal-meeting-notes');
        this.renderCurrentView();
      }
    }
  };

  // Auto initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    window.WorkspaceApp.init();
  });

})();
