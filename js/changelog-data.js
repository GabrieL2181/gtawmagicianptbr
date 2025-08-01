const CHANGELOG_ENTRIES = [
  {
    date: '2025-07-22',
    title: 'Atualização Principal: Processamento Automático e Sistema de Cores Aprimorado',
    categories: {
      'Funcionalidades Principais': [
        'Adicionado atualizações automáticas da saída — não é mais necessário digitar manualmente!',
        'Mudanças no nome do personagem, comprimento da linha e tamanho da fonte agora atualizam instantaneamente',
        'Alternar o fundo agora atualiza a saída automaticamente'
      ],
      'Experiência do Usuário': [
        'Adicionado indicador de processamento para grandes chatlogs',
        'Adicionadas notificações de salvamento automático ao alterar configurações',
        'Validação de entrada adicionada para evitar valores inválidos',
        'Dicas aprimoradas para melhor orientação do usuário'
      ],
      'Paleta de Cores': [
        'Paleta de cores aprimorada com dicas descritivas para cada cor',
        'Contador de seleção adicionado mostrando o número de elementos selecionados',
        'Atalhos de teclado (1-9) adicionados para aplicação rápida de cor',
        'Feedback visual melhorado para elementos de texto selecionados',
        'Notificações de aplicação de cor adicionadas',
        'Correção de visibilidade das dicas com melhor z-index e estilo',
        'Correção de problema de clique esquerdo travado com melhor controle de arraste'
      ],
      'Filtragem de Conteúdo': [
        'Adicionado filtro para mensagens comuns do sistema (descongelar, teleporte de veículo, informações de chapéu, erros de animação, erros de telefone, etc.)'
      ],
      'Correções de Erros': [
        'Corrigido painel de histórico que não fechava ao clicar fora — agora corresponde ao comportamento do changelog',
        'Corrigida confusão ao rolar changelog — áreas aninhadas de rolagem removidas para melhor UX',
        'Corrigida confusão ao rolar painel de histórico — removidas áreas de rolagem triplas aninhadas',
        'Corrigido problema do painel changelog que não rolava — conflito de propriedade CSS resolvido'
      ],
      'Melhorias de UI': [
        'Comportamento do painel changelog agora consistente com o painel de histórico — aba permanece visível e clicável',
        'Removida funcionalidade de esconder aba no changelog para corresponder ao histórico',
        'Interação com changelog simplificada — sem manipulador de clique externo, apenas alternância da aba',
        'Corrigido z-index do painel changelog — agora aparece na frente da aba como o painel histórico',
        'Animações suaves de abas com transições de opacidade e escala para melhor feedback visual'
      ],
      'Melhorias Principais': [
        'Sistema de coloração de texto aprimorado — agora TODO o texto pode ser colorido, não apenas os formatos de roleplay reconhecidos',
        'Indicadores visuais adicionados para texto não reconhecido com destaque de fundo sutil',
        'Seleção de texto melhorada caractere por caractere para qualquer conteúdo de saída'
      ]
    }
  }]