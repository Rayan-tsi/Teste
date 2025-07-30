import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { 
  BarChart3,
  Download,
  Menu,
  X,
  FileText,
  FileSpreadsheet,
  Image,
  Share2
} from 'lucide-react'
import idLogo from './assets/id-logo.png'
import gazetaLogo from './assets/gazeta-logo.png'
import tvIcon from './assets/tv-icon.png'
import radioIcon from './assets/radio-icon.png'
import digitalIcon from './assets/digital-icon.png'
import advertisingIcon from './assets/advertising-icon.png'
import postsalesIcon from './assets/postsales-icon.png'
import OverviewDashboard from './components/dashboards/OverviewDashboard.jsx'
import TVDashboard from './components/dashboards/TVDashboard.jsx'
import RadioDashboard from './components/dashboards/RadioDashboard.jsx'
import { exportToPDF, exportToExcel, exportToPNG, shareReport } from './utils/exportUtils.js'
import './App.css'

// Dados dos setores
const sectors = [
  {
    id: 'tv',
    name: 'TV',
    icon: tvIcon,
    color: 'sector-tv',
    bgColor: '#8e44ad'
  },
  {
    id: 'radio',
    name: 'Rádio',
    icon: radioIcon,
    color: 'sector-radio',
    bgColor: '#27ae60'
  },
  {
    id: 'digital',
    name: 'Digital',
    icon: digitalIcon,
    color: 'sector-digital',
    bgColor: '#e67e22'
  },
  {
    id: 'advertising',
    name: 'Publicidade',
    icon: advertisingIcon,
    color: 'sector-advertising',
    bgColor: '#e74c3c'
  },
  {
    id: 'postsales',
    name: 'Pós-Venda',
    icon: postsalesIcon,
    color: 'sector-postsales',
    bgColor: '#34495e'
  }
]

// Dados dos dashboards
const dashboards = [
  { id: 'overview', name: 'Visão Geral', description: 'Mosaico com cards de todos os setores' },
  { id: 'tv', name: 'TV', description: 'Audiência, programas e engajamento' },
  { id: 'radio', name: 'Rádio', description: 'Alcance regional e tempo de escuta' },
  { id: 'digital', name: 'Digital', description: 'Tráfego, engajamento e conversões' },
  { id: 'advertising', name: 'Publicidade', description: 'ROI, verba e CTR de campanhas' },
  { id: 'postsales', name: 'Pós-Venda', description: 'NPS, tempo de resposta e reclamações' }
]

// Componente do Logo ID (Inteligência de Dados)
const IDLogo = () => (
  <div className="flex items-center gap-3">
    <img 
      src={idLogo} 
      alt="Inteligência de Dados" 
      className="w-12 h-12 object-contain"
    />
    <div className="flex flex-col">
      <span className="text-sm text-muted-foreground">Setor</span>
      <span className="text-lg font-bold text-foreground">Inteligência de Dados</span>
    </div>
  </div>
)

// Componente do Logo Gazeta
const GazetaLogo = () => (
  <div className="flex items-center gap-3">
    <img 
      src={gazetaLogo} 
      alt="Gazeta" 
      className="w-12 h-12 object-contain"
    />
    <div className="flex flex-col">
      <span className="text-sm text-muted-foreground">Empresa</span>
      <span className="text-lg font-bold text-foreground">Gazeta</span>
    </div>
  </div>
)

// Componente do Header
const Header = () => (
  <header className="bg-card border-b border-border px-6 py-4">
    <div className="flex items-center justify-between max-w-7xl mx-auto">
      <IDLogo />
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground">Painel Estratégico Gazeta</h1>
        <p className="text-sm text-muted-foreground">Portal de Dashboards - Inteligência de Dados</p>
      </div>
      <GazetaLogo />
    </div>
  </header>
)

// Componente das Tabs de Dashboard
const DashboardTabs = ({ activeDashboard, onDashboardChange }) => (
  <div className="bg-card border-b border-border px-6 py-4">
    <div className="flex gap-2 max-w-7xl mx-auto overflow-x-auto">
      {dashboards.map((dashboard) => (
        <button
          key={dashboard.id}
          onClick={() => onDashboardChange(dashboard.id)}
          className={`dashboard-tab whitespace-nowrap ${
            activeDashboard === dashboard.id ? 'active' : ''
          }`}
        >
          {dashboard.name}
        </button>
      ))}
    </div>
  </div>
)

// Componente do Menu Lateral
const Sidebar = ({ activeSector, onSectorChange, isOpen, onToggle, activeDashboard }) => {
  const [showExportMenu, setShowExportMenu] = useState(false)
  
  const currentDashboard = dashboards.find(d => d.id === activeDashboard)
  const currentSector = sectors.find(s => s.id === activeSector)
  
  const handleExport = (type) => {
    const dashboardName = currentDashboard?.name || 'Dashboard'
    const sectorName = currentSector?.name || 'Todos'
    
    switch (type) {
      case 'pdf':
        exportToPDF(dashboardName, sectorName)
        break
      case 'excel':
        exportToExcel(dashboardName, sectorName)
        break
      case 'png':
        exportToPNG(dashboardName, sectorName)
        break
      case 'share':
        shareReport(dashboardName, sectorName)
        break
    }
    
    setShowExportMenu(false)
  }

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-50 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold">Setores</h2>
            <Button variant="ghost" size="sm" onClick={onToggle}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="hidden lg:block mb-6">
            <h2 className="text-lg font-semibold text-sidebar-foreground">Setores</h2>
            <p className="text-sm text-muted-foreground">Selecione um setor para filtrar</p>
          </div>
          
          <div className="space-y-3">
            {sectors.map((sector) => {
              return (
                <button
                  key={sector.id}
                  onClick={() => {
                    onSectorChange(sector.id)
                    onToggle() // Fecha o menu em mobile
                  }}
                  className={`sector-button ${sector.color} ${
                    activeSector === sector.id ? 'ring-2 ring-white/50' : ''
                  }`}
                  style={{ backgroundColor: sector.bgColor }}
                >
                  <img 
                    src={sector.icon} 
                    alt={sector.name} 
                    className="w-5 h-5 object-contain"
                  />
                  <span className="font-medium">{sector.name}</span>
                </button>
              )
            })}
          </div>
          
          <div className="mt-8 pt-6 border-t border-sidebar-border">
            <div className="relative">
              <Button 
                variant="outline" 
                className="w-full" 
                size="sm"
                onClick={() => setShowExportMenu(!showExportMenu)}
              >
                <Download className="w-4 h-4 mr-2" />
                Exportar Relatório
              </Button>
              
              {showExportMenu && (
                <div className="absolute bottom-full left-0 w-full mb-2 bg-card border border-border rounded-lg shadow-lg z-10">
                  <div className="p-2 space-y-1">
                    <button
                      onClick={() => handleExport('pdf')}
                      className="flex items-center gap-2 w-full p-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Exportar PDF
                    </button>
                    <button
                      onClick={() => handleExport('excel')}
                      className="flex items-center gap-2 w-full p-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                      <FileSpreadsheet className="w-4 h-4" />
                      Exportar Excel
                    </button>
                    <button
                      onClick={() => handleExport('png')}
                      className="flex items-center gap-2 w-full p-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                      <Image className="w-4 h-4" />
                      Exportar Imagem
                    </button>
                    <button
                      onClick={() => handleExport('share')}
                      className="flex items-center gap-2 w-full p-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      Compartilhar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

// Componente de Conteúdo Principal
const MainContent = ({ activeDashboard, activeSector }) => {
  const currentDashboard = dashboards.find(d => d.id === activeDashboard)
  const currentSector = sectors.find(s => s.id === activeSector)
  
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              {currentDashboard?.name || 'Dashboard'}
            </h2>
            {currentSector && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-white"
                   style={{ backgroundColor: currentSector.bgColor }}>
                <img 
                  src={currentSector.icon} 
                  alt={currentSector.name} 
                  className="w-4 h-4 object-contain"
                />
                {currentSector.name}
              </div>
            )}
          </div>
          <p className="text-muted-foreground">
            {currentDashboard?.description || 'Selecione um dashboard para visualizar os dados'}
          </p>
        </div>
        
        {/* Área de conteúdo dos dashboards */}
        {activeDashboard === 'overview' && <OverviewDashboard />}
        {activeDashboard === 'tv' && <TVDashboard />}
        {activeDashboard === 'radio' && <RadioDashboard />}
        {activeDashboard === 'digital' && (
          <div className="dashboard-card p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Dashboard Digital</h3>
            <p className="text-muted-foreground">Em desenvolvimento...</p>
          </div>
        )}
        {activeDashboard === 'advertising' && (
          <div className="dashboard-card p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Dashboard Publicidade</h3>
            <p className="text-muted-foreground">Em desenvolvimento...</p>
          </div>
        )}
        {activeDashboard === 'postsales' && (
          <div className="dashboard-card p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Dashboard Pós-Venda</h3>
            <p className="text-muted-foreground">Em desenvolvimento...</p>
          </div>
        )}
      </div>
    </main>
  )
}

// Componente Principal da Aplicação
function App() {
  const [activeDashboard, setActiveDashboard] = useState('overview')
  const [activeSector, setActiveSector] = useState('tv')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DashboardTabs 
        activeDashboard={activeDashboard}
        onDashboardChange={setActiveDashboard}
      />
      
      <div className="flex">
        <Sidebar 
          activeSector={activeSector}
          onSectorChange={setActiveSector}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          activeDashboard={activeDashboard}
        />
        
        <div className="flex-1 lg:ml-0">
          {/* Botão do menu mobile */}
          <div className="lg:hidden p-4">
            <Button variant="outline" size="sm" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-4 h-4 mr-2" />
              Setores
            </Button>
          </div>
          
          <MainContent 
            activeDashboard={activeDashboard}
            activeSector={activeSector}
          />
        </div>
      </div>
    </div>
  )
}

export default App

