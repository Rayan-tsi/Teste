import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { Tv, Clock, Trophy, Users } from 'lucide-react'
import { tvData } from '../../data/mockData.js'

const TVDashboard = () => {
  const formatAudience = (value) => {
    return `${(value / 1000).toFixed(0)}k`
  }

  return (
    <div className="space-y-6">
      {/* KPIs do Setor TV */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Tv className="w-6 h-6 text-purple-500" />
            <h3 className="text-sm font-medium text-muted-foreground">Audiência Média</h3>
          </div>
          <div className="text-3xl font-bold text-foreground">320k</div>
          <div className="text-sm text-green-600 font-medium">+15.2% vs mês anterior</div>
        </div>

        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-blue-500" />
            <h3 className="text-sm font-medium text-muted-foreground">Tempo Médio</h3>
          </div>
          <div className="text-3xl font-bold text-foreground">2h 45m</div>
          <div className="text-sm text-green-600 font-medium">+8.7% vs mês anterior</div>
        </div>

        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <h3 className="text-sm font-medium text-muted-foreground">Share Médio</h3>
          </div>
          <div className="text-3xl font-bold text-foreground">32.4%</div>
          <div className="text-sm text-green-600 font-medium">+2.1% vs mês anterior</div>
        </div>

        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-green-500" />
            <h3 className="text-sm font-medium text-muted-foreground">Pico de Audiência</h3>
          </div>
          <div className="text-3xl font-bold text-foreground">680k</div>
          <div className="text-sm text-muted-foreground">20:00 - Jornal da Noite</div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Audiência por Horário */}
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-4">Audiência por Horário</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={tvData.audienceByHour}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="hour" 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#64748b"
                tickFormatter={formatAudience}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value) => [formatAudience(value), 'Audiência']}
              />
              <Line 
                type="monotone" 
                dataKey="audience" 
                stroke="#8e44ad" 
                strokeWidth={3}
                dot={{ fill: '#8e44ad', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#8e44ad', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Engajamento por Faixa Etária */}
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-4">Engajamento por Faixa Etária</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={tvData.ageEngagement}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis 
                dataKey="age" 
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]}
                tick={{ fontSize: 10, fill: '#64748b' }}
              />
              <Radar
                name="Engajamento"
                dataKey="engagement"
                stroke="#8e44ad"
                fill="#8e44ad"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value) => [`${value}%`, 'Engajamento']}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ranking de Programas */}
      <div className="dashboard-card p-6">
        <h3 className="text-lg font-semibold mb-4">Ranking de Programas</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={tvData.programRanking} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              type="number" 
              tick={{ fontSize: 12 }}
              stroke="#64748b"
            />
            <YAxis 
              type="category" 
              dataKey="program" 
              tick={{ fontSize: 12 }}
              stroke="#64748b"
              width={120}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value, name) => [
                name === 'rating' ? `${value}%` : `${value}%`,
                name === 'rating' ? 'Rating' : 'Share'
              ]}
            />
            <Bar dataKey="rating" fill="#8e44ad" radius={[0, 4, 4, 0]} />
            <Bar dataKey="share" fill="#a855f7" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8e44ad]" />
            <span className="text-sm text-muted-foreground">Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#a855f7]" />
            <span className="text-sm text-muted-foreground">Share</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TVDashboard

