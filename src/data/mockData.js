// Dados fictícios realistas para os dashboards

// Dados gerais para visão geral
export const overviewData = {
  kpis: [
    { name: 'Audiência Total', value: '2.4M', change: '+12.5%', trend: 'up' },
    { name: 'Engajamento', value: '68%', change: '+5.2%', trend: 'up' },
    { name: 'ROI Médio', value: '3.2x', change: '+8.1%', trend: 'up' },
    { name: 'Satisfação', value: '4.7/5', change: '+0.3', trend: 'up' }
  ],
  sectorPerformance: [
    { sector: 'TV', value: 85, color: '#8e44ad' },
    { sector: 'Rádio', value: 78, color: '#27ae60' },
    { sector: 'Digital', value: 92, color: '#e67e22' },
    { sector: 'Publicidade', value: 88, color: '#e74c3c' },
    { sector: 'Pós-Venda', value: 82, color: '#34495e' }
  ]
}

// Dados do setor TV
export const tvData = {
  audienceByHour: [
    { hour: '06:00', audience: 120000 },
    { hour: '08:00', audience: 280000 },
    { hour: '10:00', audience: 180000 },
    { hour: '12:00', audience: 320000 },
    { hour: '14:00', audience: 220000 },
    { hour: '16:00', audience: 190000 },
    { hour: '18:00', audience: 450000 },
    { hour: '20:00', audience: 680000 },
    { hour: '22:00', audience: 520000 },
    { hour: '00:00', audience: 150000 }
  ],
  programRanking: [
    { program: 'Jornal da Noite', rating: 25.8, share: 42.1 },
    { program: 'Novela das 8', rating: 22.4, share: 38.7 },
    { program: 'Esporte Total', rating: 18.9, share: 31.2 },
    { program: 'Manhã Gazeta', rating: 15.6, share: 28.4 },
    { program: 'Cinema em Casa', rating: 12.3, share: 22.8 }
  ],
  ageEngagement: [
    { age: '18-24', engagement: 65 },
    { age: '25-34', engagement: 78 },
    { age: '35-44', engagement: 82 },
    { age: '45-54', engagement: 88 },
    { age: '55+', engagement: 92 }
  ]
}

// Dados do setor Rádio
export const radioData = {
  regionalReach: [
    { region: 'Norte', reach: 78, listeners: 450000 },
    { region: 'Nordeste', reach: 85, listeners: 680000 },
    { region: 'Centro-Oeste', reach: 72, listeners: 320000 },
    { region: 'Sudeste', reach: 92, listeners: 1200000 },
    { region: 'Sul', reach: 88, listeners: 580000 }
  ],
  listenerGrowth: [
    { month: 'Jan', listeners: 2800000 },
    { month: 'Fev', listeners: 2950000 },
    { month: 'Mar', listeners: 3100000 },
    { month: 'Abr', listeners: 3250000 },
    { month: 'Mai', listeners: 3400000 },
    { month: 'Jun', listeners: 3580000 }
  ],
  listeningTime: [
    { timeSlot: 'Manhã (6-12h)', avgTime: 45, listeners: 1200000 },
    { timeSlot: 'Tarde (12-18h)', avgTime: 32, listeners: 850000 },
    { timeSlot: 'Noite (18-24h)', avgTime: 28, listeners: 920000 },
    { timeSlot: 'Madrugada (0-6h)', avgTime: 15, listeners: 280000 }
  ]
}

// Dados do setor Digital
export const digitalData = {
  trafficSources: [
    { source: 'Orgânico', visits: 1250000, percentage: 45 },
    { source: 'Redes Sociais', visits: 680000, percentage: 25 },
    { source: 'Pago', visits: 410000, percentage: 15 },
    { source: 'Direto', visits: 270000, percentage: 10 },
    { source: 'Email', visits: 135000, percentage: 5 }
  ],
  contentEngagement: [
    { type: 'Vídeos', views: 2800000, engagement: 8.5, shares: 45000 },
    { type: 'Artigos', views: 1900000, engagement: 6.2, shares: 28000 },
    { type: 'Podcasts', views: 850000, engagement: 12.8, shares: 15000 },
    { type: 'Infográficos', views: 620000, engagement: 9.1, shares: 22000 },
    { type: 'Lives', views: 480000, engagement: 15.2, shares: 18000 }
  ],
  conversions: [
    { channel: 'Website', conversions: 12500, rate: 3.2 },
    { channel: 'App Mobile', conversions: 8900, rate: 4.1 },
    { channel: 'Newsletter', conversions: 5600, rate: 8.5 },
    { channel: 'Social Media', conversions: 7800, rate: 2.8 }
  ]
}

// Dados do setor Publicidade
export const advertisingData = {
  campaignROI: [
    { campaign: 'Verão 2024', investment: 250000, return: 820000, roi: 3.28 },
    { campaign: 'Black Friday', investment: 180000, return: 650000, roi: 3.61 },
    { campaign: 'Natal', investment: 320000, return: 980000, roi: 3.06 },
    { campaign: 'Carnaval', investment: 150000, return: 520000, roi: 3.47 },
    { campaign: 'Dia das Mães', investment: 120000, return: 380000, roi: 3.17 }
  ],
  budgetDistribution: [
    { media: 'TV', budget: 1200000, percentage: 40 },
    { media: 'Digital', budget: 900000, percentage: 30 },
    { media: 'Rádio', budget: 600000, percentage: 20 },
    { media: 'Outdoor', budget: 300000, percentage: 10 }
  ],
  ctrPerformance: [
    { format: 'Banner Display', ctr: 2.8, impressions: 5200000 },
    { format: 'Vídeo Pre-roll', ctr: 4.2, impressions: 2800000 },
    { format: 'Native Ads', ctr: 6.1, impressions: 1900000 },
    { format: 'Social Media', ctr: 3.5, impressions: 4100000 },
    { format: 'Search Ads', ctr: 8.9, impressions: 1200000 }
  ]
}

// Dados do setor Pós-Venda
export const postSalesData = {
  npsChannels: [
    { channel: 'Chat Online', nps: 72, responses: 2500 },
    { channel: 'Telefone', nps: 68, responses: 4200 },
    { channel: 'Email', nps: 75, responses: 1800 },
    { channel: 'WhatsApp', nps: 78, responses: 3100 },
    { channel: 'Presencial', nps: 82, responses: 950 }
  ],
  responseTime: [
    { month: 'Jan', avgTime: 24, target: 24 },
    { month: 'Fev', avgTime: 22, target: 24 },
    { month: 'Mar', avgTime: 18, target: 24 },
    { month: 'Abr', avgTime: 16, target: 24 },
    { month: 'Mai', avgTime: 14, target: 24 },
    { month: 'Jun', avgTime: 12, target: 24 }
  ],
  complaintResolution: [
    { category: 'Técnico', total: 1250, resolved: 1180, rate: 94.4 },
    { category: 'Cobrança', total: 890, resolved: 845, rate: 94.9 },
    { category: 'Atendimento', total: 650, resolved: 620, rate: 95.4 },
    { category: 'Produto', total: 420, resolved: 385, rate: 91.7 },
    { category: 'Entrega', total: 380, resolved: 365, rate: 96.1 }
  ]
}

