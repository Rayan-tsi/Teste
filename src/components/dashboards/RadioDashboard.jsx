import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, ScatterChart, Scatter } from 'recharts'
import { Radio, MapPin, TrendingUp, Clock } from 'lucide-react'
import { radioData } from '../../data/mockData.js'

const RadioDashboard = () => {
  const formatListeners = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`
    }
    return `${(value / 1000).toFixed(0)}k`
  }

  return (
    <div className="space-y-6">
      {/* KPIs do Setor Rádio */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Radio className="w-6 h-6 text-green-500" />
            <h3 className="text-sm font-medium text-muted-foreground">Ouvintes Totais</h3>
          </div>
          <div className="text-3xl font-bold text-foreground">3.58M</div>
          <div className="text-sm text-green-600 font-medium">+12.8% vs mês anterior</div>
        </div>

        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-blue-500" />
            <h3 className="text-sm font-medium text-muted-foreground">Alcance Médio</h3>
          </div>
          <div className="text-3xl font-bold text-foreground">83%</div>
          <div className="text-sm text-green-600 font-medium">+3.2% vs mês anterior</div>
        </div>

        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-yellow-500" />
            <h3 className="text-sm font-medium text-muted-foreground">Tempo Médio</h3>
          </div>
          <div className="text-3xl font-bold text-foreground">32min</div>
          <div className="text-sm text-green-600 font-medium">+5.1% vs mês anterior</div>
        </div>

        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-purple-500" />
            <h3 className="text-sm font-medium text-muted-foreground">Crescimento</h3>
          </div>
          <div className="text-3xl font-bold text-foreground">+27.8%</div>
          <div className="text-sm text-muted-foreground">Últimos 6 meses</div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crescimento de Ouvintes */}
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-4">Crescimento de Ouvintes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={radioData.listenerGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
                tickFormatter={formatListeners}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value) => [formatListeners(value), 'Ouvintes']}
              />
              <Area
                type="monotone"
                dataKey="listeners"
                stroke="#27ae60"
                fill="#27ae60"
                fillOpacity={0.3}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Alcance Regional */}
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-4">Alcance Regional</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={radioData.regionalReach}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                type="number" 
                dataKey="reach" 
                name="Alcance %" 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
                domain={[60, 100]}
              />
              <YAxis 
                type="number" 
                dataKey="listeners" 
                name="Ouvintes" 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
                tickFormatter={formatListeners}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  name === 'reach' ? `${value}%` : formatListeners(value),
                  name === 'reach' ? 'Alcance' : 'Ouvintes'
                ]}
                labelFormatter={(label, payload) => {
                  if (payload && payload[0]) {
                    return payload[0].payload.region
                  }
                  return label
                }}
              />
              <Scatter 
                dataKey="listeners" 
                fill="#27ae60"
                r={8}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tempo de Escuta por Faixa Horária */}
      <div className="dashboard-card p-6">
        <h3 className="text-lg font-semibold mb-4">Tempo de Escuta por Faixa Horária</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={radioData.listeningTime}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="timeSlot" 
              tick={{ fontSize: 12 }}
              stroke="#64748b"
            />
            <YAxis 
              yAxisId="time"
              orientation="left"
              tick={{ fontSize: 12 }}
              stroke="#64748b"
            />
            <YAxis 
              yAxisId="listeners"
              orientation="right"
              tick={{ fontSize: 12 }}
              stroke="#64748b"
              tickFormatter={formatListeners}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value, name) => [
                name === 'avgTime' ? `${value} min` : formatListeners(value),
                name === 'avgTime' ? 'Tempo Médio' : 'Ouvintes'
              ]}
            />
            <Bar 
              yAxisId="time"
              dataKey="avgTime" 
              fill="#27ae60" 
              radius={[4, 4, 0, 0]}
              name="avgTime"
            />
            <Bar 
              yAxisId="listeners"
              dataKey="listeners" 
              fill="#34d399" 
              radius={[4, 4, 0, 0]}
              name="listeners"
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#27ae60]" />
            <span className="text-sm text-muted-foreground">Tempo Médio (min)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#34d399]" />
            <span className="text-sm text-muted-foreground">Número de Ouvintes</span>
          </div>
        </div>
      </div>

      {/* Resumo Regional */}
      <div className="dashboard-card p-6">
        <h3 className="text-lg font-semibold mb-4">Resumo Regional</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {radioData.regionalReach.map((region, index) => (
            <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-lg font-bold text-foreground mb-1">{region.region}</div>
              <div className="text-2xl font-bold text-green-600 mb-1">{region.reach}%</div>
              <div className="text-sm text-muted-foreground">{formatListeners(region.listeners)} ouvintes</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RadioDashboard

