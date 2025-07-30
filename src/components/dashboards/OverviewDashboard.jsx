import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, TrendingDown, Users, Target, DollarSign, Star } from 'lucide-react'
import { overviewData } from '../../data/mockData.js'

const OverviewDashboard = () => {
  const getTrendIcon = (trend) => {
    return trend === 'up' ? (
      <TrendingUp className="w-4 h-4 text-green-500" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-500" />
    )
  }

  const getKPIIcon = (name) => {
    switch (name) {
      case 'Audiência Total':
        return <Users className="w-6 h-6 text-blue-500" />
      case 'Engajamento':
        return <Target className="w-6 h-6 text-green-500" />
      case 'ROI Médio':
        return <DollarSign className="w-6 h-6 text-yellow-500" />
      case 'Satisfação':
        return <Star className="w-6 h-6 text-purple-500" />
      default:
        return <Target className="w-6 h-6 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewData.kpis.map((kpi, index) => (
          <div key={index} className="dashboard-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {getKPIIcon(kpi.name)}
                <h3 className="text-sm font-medium text-muted-foreground">{kpi.name}</h3>
              </div>
              {getTrendIcon(kpi.trend)}
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-foreground">{kpi.value}</div>
              <div className="flex items-center gap-1 text-sm">
                <span className={`font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.change}
                </span>
                <span className="text-muted-foreground">vs mês anterior</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance por Setor */}
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-4">Performance por Setor</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={overviewData.sectorPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="sector" 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar 
                dataKey="value" 
                radius={[4, 4, 0, 0]}
                fill="#3b80f6"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Distribuição de Audiência */}
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-4">Distribuição de Audiência</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={overviewData.sectorPerformance}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {overviewData.sectorPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 mt-4">
            {overviewData.sectorPerformance.map((sector, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: sector.color }}
                />
                <span className="text-sm text-muted-foreground">{sector.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resumo Executivo */}
      <div className="dashboard-card p-6">
        <h3 className="text-lg font-semibold mb-4">Resumo Executivo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">2.4M</div>
            <div className="text-sm text-muted-foreground">Audiência Total Mensal</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">R$ 8.2M</div>
            <div className="text-sm text-muted-foreground">Receita Publicitária</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">94.2%</div>
            <div className="text-sm text-muted-foreground">Satisfação Geral</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewDashboard

