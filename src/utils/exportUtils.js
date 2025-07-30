// Utilitários para exportação de relatórios

export const exportToPDF = (dashboardName, sectorName) => {
  // Simula a exportação para PDF
  const fileName = `relatorio_${dashboardName}_${sectorName}_${new Date().toISOString().split('T')[0]}.pdf`
  
  // Cria um elemento de download simulado
  const link = document.createElement('a')
  link.href = '#'
  link.download = fileName
  
  // Simula o download
  alert(`Exportando relatório: ${fileName}\n\nEm um ambiente real, isso geraria um PDF com os dados do dashboard ${dashboardName} filtrado por ${sectorName}.`)
  
  return fileName
}

export const exportToExcel = (dashboardName, sectorName) => {
  // Simula a exportação para Excel
  const fileName = `dados_${dashboardName}_${sectorName}_${new Date().toISOString().split('T')[0]}.xlsx`
  
  // Simula o download
  alert(`Exportando planilha: ${fileName}\n\nEm um ambiente real, isso geraria um arquivo Excel com os dados do dashboard ${dashboardName} filtrado por ${sectorName}.`)
  
  return fileName
}

export const exportToPNG = (dashboardName, sectorName) => {
  // Simula a exportação de imagem
  const fileName = `dashboard_${dashboardName}_${sectorName}_${new Date().toISOString().split('T')[0]}.png`
  
  // Simula o download
  alert(`Exportando imagem: ${fileName}\n\nEm um ambiente real, isso geraria uma captura de tela do dashboard ${dashboardName} filtrado por ${sectorName}.`)
  
  return fileName
}

export const shareReport = (dashboardName, sectorName) => {
  // Simula o compartilhamento
  const url = `${window.location.origin}?dashboard=${dashboardName}&sector=${sectorName}`
  
  if (navigator.share) {
    navigator.share({
      title: `Dashboard ${dashboardName} - ${sectorName}`,
      text: `Confira os dados do setor ${sectorName} no dashboard ${dashboardName}`,
      url: url
    })
  } else {
    // Fallback para navegadores que não suportam Web Share API
    navigator.clipboard.writeText(url).then(() => {
      alert(`Link copiado para a área de transferência:\n${url}`)
    }).catch(() => {
      alert(`Link para compartilhar:\n${url}`)
    })
  }
}

