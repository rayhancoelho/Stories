import { useState, useReducer } from "react";

const DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

const BLOCK_META = {
  B1: { name: "Abertura", color: "#e94560", emoji: "◉" },
  B2: { name: "Rotina Matinal", color: "#0f3460", emoji: "☀" },
  B3: { name: "Produtividade", color: "#034078", emoji: "⚡" },
  B4: { name: "Conversa", color: "#e43f5a", emoji: "💬" },
  B5: { name: "Posicionamento", color: "#c72c41", emoji: "📍" },
  B6: { name: "Protocolo Sono", color: "#190061", emoji: "☽" },
  B7: { name: "Fechamento", color: "#950740", emoji: "⬛" },
};

const makeStory = (time, block, desc, cenario, elementos, fala, formato) => ({
  time, block, desc, cenario, elementos, fala, formato
});

const SCHEDULE = {
  Segunda: [
    makeStory("06:30", "B1", "S1 — Abertura", "Quarto, luz baixa", "Rosto recém-acordado", "Agenda do dia + 'O dia começou ontem'", "Vídeo falando (fixo)"),
    makeStory("06:30", "B1", "S2 — Contexto do dia", "—", "Tênis / cama arrumada / celular 06:30", "Causa/consequência ou reflexão", "Foto + texto"),
    makeStory("06:30", "B2", "Hábito matinal 1", "Banheiro / quarto", "Chuveiro, água, pés no chão", "Bordão do hábito ou porquê técnico", "Vídeo sem fala + texto"),
    makeStory("06:35", "B2", "Hábito matinal 2", "Quarto / janela", "Copo d'água, celular longe, sol", "Porquê técnico ou consistência", "Foto + texto"),
    makeStory("06:50", "B2", "Treino (indo)", "Caminho academia, rua", "Tênis, mochila, rua", "Transição ou contraste", "Foto + texto"),
    makeStory("08:15", "B2", "Treino (pós)", "Academia / ar livre", "Rosto suado, sem filtro", "Conexão treino→sono ou vulnerabilidade", "Vídeo falando"),
    makeStory("08:45", "B3", "Faculdade", "Sala de aula", "Caderno, caneta, material", "Contexto ou aprendizado extraído", "Foto + texto"),
    makeStory("09:30", "B4", "Enquete / Caixinha", "Foto do momento + sticker", "Mesa, café, pós-treino", "Pergunta de dor ou comportamento", "Foto + sticker"),
    makeStory("10:10", "B2", "Nyx (Rayhan manhã)", "Mesa, computador", "Tela, caderno, fone", "Backstage ou contexto", "Storyvlog"),
    makeStory("12:30", "B3", "Almoço", "Mesa, prato", "Prato de comida forte", "Refeição forte / janta leve / sono agradece", "Foto + texto"),
    makeStory("13:10", "B3", "Nyx Project", "Mesa trabalho", "Computador, caderno, fone", "Deep work / conexão sono→foco", "Storyvlog"),
    makeStory("13:30", "B4", "Resposta caixinha/enquete", "—", "Print da resposta", "Dar nome + solução + CTA", "Print + texto"),
    makeStory("14:30", "B3", "Reflexão / Contrapopular", "—", "Tela preta ou foto contexto", "Contrapopular do banco (sono/estresse/produtividade)", "Tela preta + texto"),
    makeStory("15:00", "B5", "Posicionamento (embutido)", "Dentro de outro story", "—", "Frase de posicionamento do ângulo da semana", "Embutido"),
    makeStory("15:30", "B3", "Pausa anti-estresse", "Corredor, rua, ar livre", "Mão no peito, passos, ar", "O estresse não acumula se você não deixa", "Foto/vídeo + texto"),
    makeStory("16:30", "B3", "Janta", "Mesa", "Prato leve", "Última refeição / conexão alimentação→sono", "Foto + texto"),
    makeStory("17:10", "B3", "Leitura 17h", "Ambiente calmo, luz tarde", "Livro aberto, café/chá", "Desaceleração / primeiro passo protocolo", "Storyvlog"),
    makeStory("18:30", "B3", "Faculdade noite", "Sala de aula", "Caderno, óculos bloqueadores", "Contexto ou óculos bloqueadores como marca", "Foto + texto"),
    makeStory("19:45", "B3", "Diário entre aulas", "Mesa, caderno", "Diário aberto, caneta", "Esvaziar a cabeça / journaling", "Foto + texto"),
    makeStory("20:15", "B3", "Aula noite 2", "Sala de aula", "Caderno, óculos bloqueadores", "Contexto", "Foto + texto"),
    makeStory("21:15", "B6", "Banho quente + reflexão noturna", "Banheiro, vapor, luz quente", "Vapor, luz quente", "A parte mais importante: parar", "Vídeo falando (calmo)"),
    makeStory("22:00", "B6", "Etapa protocolo 1", "Quarto preparado", "Chá, banana, difusor, blackout", "Porquê técnico da etapa", "Foto + texto"),
    makeStory("22:15", "B6", "Etapa protocolo 2", "Quarto escuro", "Protetor, dilatador, blackout", "Sinal pro cérebro / escuridão total", "Foto + texto"),
    makeStory("22:30", "B6", "Leitura noturna", "Quarto, luz mínima", "Livro, luz quente", "Leitura / arco do livro", "Storyvlog"),
    makeStory("22:50", "B7", "Ponto final", "Quarto escuro / tela preta", "Escuridão, celular modo avião", "Segunda sobrevivida. Ponto final.", "Foto escura + texto"),
  ],
  Terça: [
    makeStory("06:30", "B1", "S1 — Abertura", "Janela / quarto", "Janela, pés cama, celular", "Consistência silenciosa", "Foto + texto"),
    makeStory("06:30", "B1", "S2 — Contexto", "—", "Copo d'água, mesa, céu", "Sem drama. Dormiu bem, acordou bem.", "Foto + texto"),
    makeStory("06:30", "B2", "Hábito matinal 1", "Banheiro / quarto", "Chuveiro, água, sol", "Bordão ou porquê técnico", "Vídeo sem fala + texto"),
    makeStory("06:35", "B2", "Hábito matinal 2", "Quarto / janela", "Pés chão, celular longe, alongamento", "Porquê técnico", "Foto + texto"),
    makeStory("06:50", "B2", "Rayhan", "Mesa, computador", "Tela, caderno", "Produção de conteúdo antes do treino", "Storyvlog"),
    makeStory("10:10", "B2", "Treino (indo)", "Caminho, rua", "Tênis, caminho", "3h de produção, agora o corpo", "Foto + texto"),
    makeStory("12:00", "B2", "Treino (pós/corrida)", "Ar livre", "Rosto suado, paisagem", "O estresse sai pelas pernas", "Vídeo sem fala + texto"),
    makeStory("09:30", "B4", "Caixinha dor", "Foto momento + sticker", "Mesa trabalho, café", "O que mais te impede de dormir?", "Foto + sticker"),
    makeStory("12:30", "B3", "Almoço", "Mesa", "Prato forte", "Refeição forte", "Foto + texto"),
    makeStory("13:10", "B3", "Nyx Project", "Mesa trabalho", "Computador, fone", "Deep work", "Storyvlog"),
    makeStory("13:30", "B4", "Resposta 1", "—", "Print resposta", "Dar nome + solução", "Print + texto"),
    makeStory("14:30", "B4", "Resposta 2 + posicionamento", "—", "Print resposta", "Aprofundar + encaixar posicionamento", "Print + vídeo falando"),
    makeStory("15:30", "B3", "Pausa anti-estresse", "Corredor, ar", "Respiração, caminhada", "O estresse não acumula", "Foto + texto"),
    makeStory("16:30", "B3", "Janta", "Mesa", "Prato leve", "Última refeição", "Foto + texto"),
    makeStory("17:10", "B3", "Leitura 17h", "Ambiente calmo", "Livro, luz tarde", "Desaceleração", "Storyvlog"),
    makeStory("18:30", "B3", "Faculdade", "Sala de aula", "Caderno, óculos bloqueadores", "Contexto", "Foto + texto"),
    makeStory("19:45", "B3", "Diário", "Mesa", "Diário, caneta", "Journaling", "Foto + texto"),
    makeStory("20:30", "B6", "Banho quente + reflexão", "Banheiro, luz quente", "Vapor, luz quente", "A parte mais importante: parar", "Vídeo falando (calmo)"),
    makeStory("21:00", "B6", "Etapa protocolo", "Quarto", "Chá, banana, difusor", "Porquê técnico", "Foto + texto"),
    makeStory("21:30", "B6", "Leitura noturna", "Quarto, luz mínima", "Livro", "Desaceleração / arco do livro", "Storyvlog"),
    makeStory("22:10", "B6", "Etapa protocolo 2", "Quarto escuro", "Blackout, protetor, 4-7-8", "Escuridão total", "Foto + texto"),
    makeStory("22:50", "B7", "Ponto final", "Quarto escuro / tela preta", "Escuridão", "Ponto final. Boa noite.", "Foto escura + texto"),
  ],
  Quarta: [
    makeStory("06:30", "B1", "S1 — Abertura", "Janela / cortina", "Janela, cama, livro", "Metade da semana + acumulado", "Foto + texto"),
    makeStory("06:30", "B1", "S2 — Contexto", "—", "Café, rosto, livro mesa", "O acumulado aparece", "Vídeo falando / Foto"),
    makeStory("06:30", "B2", "Hábito matinal 1", "Banheiro / quarto", "Chuveiro, sol, pés", "Bordão ou porquê", "Vídeo sem fala + texto"),
    makeStory("06:50", "B2", "Rayhan (curto)", "Mesa", "Computador, caderno", "45 min produção", "Storyvlog"),
    makeStory("07:35", "B2", "Hábito matinal 2", "Quarto / janela", "Água, respiração, alongamento", "Antes do treino", "Foto + texto"),
    makeStory("07:50", "B2", "Treino", "Academia", "Execução, peso", "Terceiro dia seguido", "Vídeo sem fala + texto"),
    makeStory("09:30", "B2", "Treino (corrida)", "Ar livre", "Percurso, paisagem", "O estresse sai pelas pernas", "Vídeo sem fala + texto"),
    makeStory("10:15", "B3", "Faculdade / Aula", "Sala de aula", "Caderno, material", "Contexto", "Foto + texto"),
    makeStory("11:00", "B4", "Caixinha opinião", "Foto + sticker", "Livro, café, mesa", "Trabalhar mais = produzir mais?", "Foto + sticker"),
    makeStory("12:30", "B3", "Almoço", "Mesa", "Prato forte", "Refeição forte", "Foto + texto"),
    makeStory("13:10", "B3", "Nyx Project", "Mesa trabalho", "Computador", "Deep work", "Storyvlog"),
    makeStory("13:30", "B4", "Resposta", "—", "Print", "Contrapopular a partir da resposta", "Print + texto"),
    makeStory("14:30", "B3", "Reflexão / Contrapopular", "—", "Tela preta", "Contrapopular produtividade", "Tela preta + texto"),
    makeStory("15:30", "B3", "Pausa", "Corredor", "Respiração", "Pausa", "Foto + texto"),
    makeStory("16:30", "B3", "Janta", "Mesa", "Prato leve", "Última refeição", "Foto + texto"),
    makeStory("17:10", "B3", "Leitura 17h", "Ambiente calmo", "Livro", "Desaceleração", "Storyvlog"),
    makeStory("18:30", "B3", "Faculdade noite", "Sala", "Caderno, óculos bloqueadores", "Contexto", "Foto + texto"),
    makeStory("19:45", "B3", "Diário", "Mesa", "Diário", "Journaling", "Foto + texto"),
    makeStory("20:30", "B6", "Banho quente + reflexão", "Banheiro, luz quente", "Vapor", "Parar / significado protocolo", "Vídeo falando (calmo)"),
    makeStory("21:00", "B6", "Etapa protocolo", "Quarto", "Chá, difusor, celular fora", "Porquê técnico", "Foto + texto"),
    makeStory("21:30", "B6", "Leitura noturna", "Quarto, luz mínima", "Livro", "Arco do livro", "Storyvlog"),
    makeStory("22:10", "B6", "Etapa protocolo 2", "Quarto escuro", "Blackout, protetor", "Escuridão total", "Foto + texto"),
    makeStory("22:50", "B7", "Ponto final + gancho quinta", "Tela preta", "Escuridão", "Metade da semana. Ponto final. Amanhã: protocolo completo.", "Tela preta + texto"),
  ],
  Quinta: [
    makeStory("06:30", "B1", "S1 — Abertura", "Quarto / janela", "Rosto, silhueta, objetos protocolo", "Prévia do protocolo", "Vídeo falando / Foto"),
    makeStory("06:30", "B1", "S2 — Gancho protocolo (fixo)", "—", "Céu, rosto, objetos cabeceira", "Hoje à noite: protocolo completo. Fica até o final.", "Vídeo falando / Foto"),
    makeStory("06:30", "B2", "Hábito matinal 1", "Banheiro / quarto", "Chuveiro, sol, grounding", "Bordão ou porquê", "Vídeo sem fala + texto"),
    makeStory("06:35", "B2", "Hábito matinal 2", "Quarto / janela", "Água, celular longe, alongamento", "Porquê técnico", "Foto + texto"),
    makeStory("06:50", "B2", "Rayhan", "Mesa", "Computador", "Produzindo protocolo de hoje", "Storyvlog"),
    makeStory("10:10", "B2", "Treino", "Academia", "Execução", "Depois de 3h produção, agora o corpo", "Vídeo sem fala + texto"),
    makeStory("12:00", "B2", "Treino (corrida)", "Ar livre", "Percurso, suado", "O estresse sai pelas pernas + gancho noite", "Vídeo falando"),
    makeStory("09:30", "B4", "Enquete hábito", "Foto + sticker", "Pós-treino", "Último horário de tela antes de dormir?", "Foto + sticker"),
    makeStory("12:30", "B3", "Almoço", "Mesa", "Prato forte", "Almoço", "Foto + texto"),
    makeStory("13:10", "B3", "Nyx Project", "Mesa", "Computador", "Deep work", "Storyvlog"),
    makeStory("13:30", "B4", "Resposta", "—", "Print", "Dado + contrapopular", "Print + texto"),
    makeStory("14:30", "B3+B5", "Posicionamento + antecipação", "—", "—", "Posicionamento + hoje à noite protocolo", "Vídeo falando"),
    makeStory("16:30", "B3", "Janta", "Mesa", "Prato leve", "Última refeição. Leve. Estômago vazio.", "Foto + texto"),
    makeStory("17:10", "B3", "Leitura 17h", "Ambiente calmo", "Livro", "Primeiro passo do protocolo", "Storyvlog"),
    makeStory("18:30", "B3", "Faculdade + óculos bloqueadores", "Sala", "Óculos bloqueadores no rosto", "Zero luz azul a partir das 19h", "Foto + texto"),
    makeStory("19:15", "B6", "Óculos + filtros luz", "Quarto/sala", "Óculos, luzes quentes", "Zero luz azul. Melatonina começa.", "Foto + texto"),
    makeStory("19:45", "B3", "Diário", "Mesa", "Diário", "Journaling", "Foto + texto"),
    makeStory("20:30", "B6", "PROTOCOLO COMPLETO — Reflexão", "Quarto, luz quente", "Rosto calmo, 3s silêncio", "Lista completa + 'Parece exagero? Eu durmo 8h.'", "Vídeo falando (25s)"),
    makeStory("21:00", "B6", "Chá + banana + difusor", "Quarto", "Xícara, banana, difusor", "Triptofano + apigenina + lavanda", "Foto + texto"),
    makeStory("21:15", "B6", "Leitura noturna", "Quarto preparado", "Livro, quarto gelado, lavanda", "Leitura. Quarto preparado. O corpo sabe.", "Storyvlog"),
    makeStory("21:50", "B6", "Celular fora + ruído branco", "Quarto", "Celular saindo, app ruído", "Modo avião. Desconexão total.", "Foto + texto"),
    makeStory("22:00", "B6", "Banho quente + journaling", "Banheiro + mesa", "Vapor, diário", "Banho + esvaziar cabeça", "Foto + texto"),
    makeStory("22:10", "B6", "Blackout + protetor + 4-7-8", "Quarto escuro", "Blackout, protetor, dilatador", "Escuridão total. Respiração 4-7-8.", "Foto + texto"),
    makeStory("22:50", "B7", "Ponto final", "Tela preta", "Escuridão", "Protocolo completo. Ponto final.", "Tela preta + texto"),
  ],
  Sexta: [
    makeStory("06:30", "B1", "S1 — Abertura", "Janela / quarto", "Janela, cama, tênis, print", "O protocolo não tira folga", "Foto + texto / Tela preta"),
    makeStory("06:30", "B1", "S2 — Contexto", "—", "Rosto, água, espelho", "Sexta não é desculpa / a segunda cobra", "Vídeo falando / Foto"),
    makeStory("06:30", "B2", "Hábito matinal 1", "Banheiro / quarto", "Chuveiro, sol, pés", "Inclusive na sexta", "Vídeo sem fala + texto"),
    makeStory("06:35", "B2", "Hábito matinal 2", "Quarto / janela", "Água, celular longe, alongamento", "5 dias no mesmo horário", "Foto + texto"),
    makeStory("06:50", "B2", "Treino (indo)", "Caminho", "Tênis", "5 dias seguidos", "Foto + texto"),
    makeStory("08:15", "B2", "Treino (pós)", "Academia", "Rosto suado", "O fim de semana não é pra destruir", "Vídeo falando"),
    makeStory("08:45", "B3", "Faculdade", "Sala", "Caderno", "Contexto", "Foto + texto"),
    makeStory("09:00", "B4", "Caixinha fim de semana", "Foto + sticker", "—", "O que muda na sua rotina no fim de semana?", "Foto + sticker"),
    makeStory("10:15", "B3", "Faculdade / Aula 2", "Sala", "Material", "Contexto", "Foto + texto"),
    makeStory("12:30", "B3", "Almoço", "Mesa", "Prato forte", "Almoço", "Foto + texto"),
    makeStory("13:10", "B3", "Nyx Project", "Mesa", "Computador", "Último bloco da semana", "Storyvlog"),
    makeStory("13:30", "B4", "Resposta", "—", "Print", "Jetlag social / contrapopular fim de semana", "Print + texto"),
    makeStory("14:30", "B3", "Pausa", "Corredor", "Respiração", "Pausa", "Foto + texto"),
    makeStory("15:00", "B3+B5", "Rayhan + posicionamento", "Mesa", "Computador, caderno", "Produção + posicionamento embutido", "Storyvlog"),
    makeStory("16:30", "B3", "Janta", "Mesa", "Prato leve", "Última refeição", "Foto + texto"),
    makeStory("17:10", "B3", "Leitura 17h", "Ambiente calmo", "Livro", "Desaceleração", "Storyvlog"),
    makeStory("18:00", "B3", "Faculdade noite", "Sala", "Óculos bloqueadores", "Última aula da semana", "Foto + texto"),
    makeStory("19:45", "B3", "Diário", "Mesa", "Diário", "Journaling", "Foto + texto"),
    makeStory("20:30", "B6", "Banho quente + reflexão", "Banheiro, luz quente", "Vapor", "Sexta. Mesmo ritual.", "Vídeo falando (calmo)"),
    makeStory("21:00", "B6", "Etapa protocolo", "Quarto", "Chá, difusor", "O protocolo não tira folga", "Foto + texto"),
    makeStory("21:30", "B6", "Leitura noturna", "Quarto", "Livro", "Sexta. Mesmo ritual.", "Storyvlog"),
    makeStory("22:10", "B6", "Etapa protocolo 2", "Quarto escuro", "Blackout", "Escuridão total", "Foto + texto"),
    makeStory("22:50", "B7", "Ponto final", "Tela preta / celular modo avião", "Modo avião, escuridão", "O protocolo não tira folga. Ponto final.", "Foto + texto"),
  ],
  Sábado: [
    makeStory("06:30", "B1", "S1 — Abertura", "Varanda / janela / rosto", "Rosto, varanda, janela sol", "Mesmo horário fim de semana", "Vídeo falando / Foto"),
    makeStory("06:30", "B1", "S2 — Contexto", "—", "Ambiente calmo, cama, sol", "Descanso ≠ dormir 12h / jetlag social", "Foto + texto / Vídeo falando"),
    makeStory("06:30", "B2", "Hábito matinal 1", "Banheiro / quarto", "Chuveiro, sol, grounding", "Sábado também", "Vídeo sem fala + texto"),
    makeStory("06:35", "B2", "Hábito matinal 2", "Quarto / varanda", "Água, alongamento, respiração", "Sem pressa", "Foto + texto"),
    makeStory("06:50", "B2", "Treino / atividade livre", "Academia / ar livre", "Tênis, percurso", "Treino ou movimento leve", "Vídeo sem fala + texto"),
    makeStory("07:30", "B2", "Corrida / movimento", "Ar livre", "Paisagem, rua vazia sábado", "O estresse sai pelas pernas", "Vídeo sem fala + texto"),
    makeStory("09:30", "B4", "Caixinha pessoal", "Foto + sticker", "Café, livro", "Pergunte qualquer coisa menos sono", "Foto + sticker"),
    makeStory("12:30", "B3", "Almoço", "Mesa", "Prato", "Almoço", "Foto + texto"),
    makeStory("13:10", "B3", "Nyx Project", "Mesa", "Computador", "Nyx no sábado", "Storyvlog"),
    makeStory("13:30", "B4", "Resposta pessoal", "—", "Print", "Resposta leve, lado humano", "Print + texto"),
    makeStory("14:30", "B3", "Reflexão / Contrapopular", "—", "Tela preta", "Contrapopular descanso", "Tela preta + texto"),
    makeStory("16:30", "B3", "Janta", "Mesa", "Prato leve", "Última refeição", "Foto + texto"),
    makeStory("17:30", "B3+B5", "Rayhan + posicionamento", "Mesa", "Computador", "Produção + posicionamento", "Storyvlog"),
    makeStory("19:00", "B3", "Vulnerabilidade", "—", "Rosto, transição", "Sábado trabalhando. Cansativo. Mas é o que constrói.", "Vídeo falando"),
    makeStory("20:30", "B6", "Banho quente + reflexão", "Banheiro, luz quente", "Vapor", "Significado do protocolo", "Vídeo falando (calmo)"),
    makeStory("21:00", "B6", "Leitura noturna", "Quarto", "Livro", "Sem pressa. Sem tela.", "Storyvlog"),
    makeStory("22:00", "B6", "Etapa protocolo", "Quarto", "Diário, chá, difusor", "Etapa do dia", "Foto + texto"),
    makeStory("22:50", "B7", "Ponto final", "Quarto escuro", "Escuridão", "Sábado. Mesmo ritual. Ponto final.", "Foto escura + texto"),
  ],
  Domingo: [
    makeStory("06:30", "B1", "S1 — Abertura (foto calma, fixo)", "Janela luz suave / cama / varanda", "Luz suave, cama arrumada, livro", "Sono de hoje define a segunda", "Foto calma (fixo)"),
    makeStory("06:30", "B1", "S2 — Contexto", "—", "Água, sol, livro", "Preparação / a semana começa hoje", "Foto + texto / Vídeo falando"),
    makeStory("06:30", "B2", "Hábito matinal 1", "Banheiro / quarto", "Chuveiro, sol, grounding", "7 dias. Semana completa.", "Vídeo sem fala + texto"),
    makeStory("06:35", "B2", "Hábito matinal 2", "Quarto / varanda", "Água, respiração, celular longe", "O corpo não tira folga", "Foto + texto"),
    makeStory("07:00", "B2", "Leitura / caminhada leve", "Ambiente calmo / ar livre", "Livro, paisagem", "Sem treino pesado. Descanso ativo.", "Foto + texto"),
    makeStory("07:30", "B2", "Caminhada / movimento leve", "Ar livre", "Rua calma, paisagem", "Movimento leve. O corpo não fica parado.", "Vídeo sem fala + texto"),
    makeStory("09:30", "B4", "Caixinha pesquisa conteúdo", "Foto + sticker", "Caderno, café", "Qual tema querem que aprofunde?", "Foto + sticker"),
    makeStory("12:30", "B3", "Almoço", "Mesa", "Prato", "Almoço de domingo", "Foto + texto"),
    makeStory("13:00", "B3", "Planejamento semana", "Mesa", "Caderno planejamento", "Os stories nascem aqui", "Foto + texto"),
    makeStory("13:30", "B4", "Resposta + antecipação", "—", "Print", "Tema mais pedido + 'fechado, essa semana rola'", "Print + texto"),
    makeStory("14:00", "B3+B5", "Rayhan + posicionamento", "Mesa", "Computador", "Preparando a semana + posicionamento", "Storyvlog"),
    makeStory("16:30", "B3", "Janta", "Mesa", "Prato leve", "Última refeição", "Foto + texto"),
    makeStory("17:10", "B3", "Leitura / Rayhan", "Ambiente calmo / mesa", "Livro ou computador", "Leitura ou produção (depende do domingo)", "Storyvlog"),
    makeStory("20:30", "B6", "Banho quente + reflexão", "Banheiro, luz quente", "Vapor", "O sono mais importante da semana", "Vídeo falando (calmo)"),
    makeStory("21:00", "B6", "Chá + banana", "Quarto", "Xícara, banana", "Camomila. Domingo. O sono define a segunda.", "Foto + texto"),
    makeStory("21:30", "B6", "Leitura noturna", "Quarto", "Livro", "Último dia. Mesmo ritual.", "Storyvlog"),
    makeStory("22:00", "B6", "Journaling", "Quarto", "Diário", "Esvaziar cabeça antes da segunda", "Foto + texto"),
    makeStory("22:50", "B7", "Ponto final + gancho segunda", "Tela preta", "Escuridão", "O sono de hoje define a segunda. Ponto final. Amanhã começa mais uma semana.", "Tela preta + texto"),
  ],
};

function StoryEditor({ story, idx, state, dispatch }) {
  const block = BLOCK_META[story.block] || BLOCK_META.B3;
  const key = `${state.selectedDay}-${idx}`;
  const done = state.completed[key];
  const edits = state.edits[key] || {};
  const [open, setOpen] = useState(false);

  const val = (field) => edits[field] !== undefined ? edits[field] : story[field];
  const setVal = (field, value) => dispatch({ type: "EDIT", payload: { key, field, value } });

  return (
    <div style={{
      background: done ? "#080f08" : "#0b0b14",
      border: `1px solid ${done ? "#1a3a1a" : "#16162a"}`,
      borderLeft: `3px solid ${block.color}`,
      borderRadius: "10px",
      marginBottom: "6px",
      transition: "all 0.15s",
      opacity: done ? 0.55 : 1,
    }}>
      <div style={{ padding: "12px 14px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
        <button onClick={() => dispatch({ type: "TOGGLE", payload: key })}
          style={{
            width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0, marginTop: "2px",
            border: `2px solid ${done ? "#2a7a2a" : block.color}`,
            background: done ? "#2a7a2a" : "transparent",
            color: "#fff", fontSize: "10px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>{done ? "✓" : ""}</button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
            <span style={{ color: block.color, fontSize: "9px", fontWeight: 800, letterSpacing: "1.2px", textTransform: "uppercase", fontFamily: "monospace" }}>
              {block.emoji} {block.name}
            </span>
            <span style={{ color: "#333", fontSize: "10px", fontFamily: "monospace" }}>{story.time}</span>
          </div>
          <p style={{ color: done ? "#444" : "#ddd", fontSize: "13px", margin: "4px 0 0", lineHeight: 1.4, textDecoration: done ? "line-through" : "none" }}>
            {story.desc}
          </p>
          <button onClick={() => setOpen(!open)}
            style={{ marginTop: "8px", background: "#0e0e1c", border: "1px solid #1c1c30", color: open ? block.color : "#555", borderRadius: "6px", padding: "4px 10px", fontSize: "10px", cursor: "pointer", fontFamily: "monospace", fontWeight: 600 }}>
            {open ? "▾ Fechar" : "▸ Editar"}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ padding: "0 14px 14px 46px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { label: "FORMATO", field: "formato", placeholder: "Ex: Foto + texto, Vídeo falando..." },
            { label: "CENÁRIO", field: "cenario", placeholder: "Ex: Quarto luz baixa, academia, ar livre..." },
            { label: "ELEMENTOS", field: "elementos", placeholder: "Ex: Copo d'água, tênis, livro..." },
            { label: "FALA / TEXTO", field: "fala", placeholder: "O que falar ou escrever na tela..." },
          ].map(f => (
            <div key={f.field}>
              <label style={{ color: "#444", fontSize: "9px", fontWeight: 700, letterSpacing: "1px", fontFamily: "monospace", display: "block", marginBottom: "3px" }}>
                {f.label}
              </label>
              <textarea value={val(f.field)} onChange={e => setVal(f.field, e.target.value)}
                placeholder={f.placeholder}
                rows={f.field === "fala" ? 3 : 1}
                style={{
                  width: "100%", background: "#08080f", border: "1px solid #1a1a2e", color: "#bbb",
                  borderRadius: "6px", padding: "8px 10px", fontSize: "12px", fontFamily: "monospace",
                  resize: "vertical", outline: "none", boxSizing: "border-box",
                  lineHeight: 1.4,
                }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DailyView({ state, dispatch }) {
  const day = DAYS[state.selectedDay];
  const stories = SCHEDULE[day] || [];
  const total = stories.length;
  const doneCount = stories.filter((_, i) => state.completed[`${state.selectedDay}-${i}`]).length;

  const ANGLES = {
    Segunda: "Peso + contraste com sono",
    Terça: "Consistência silenciosa",
    Quarta: "Metade da semana, acumulado",
    Quinta: "Prévia do protocolo · DIA DO PROTOCOLO COMPLETO",
    Sexta: "O protocolo não tira folga",
    Sábado: "Mesmo horário no fim de semana",
    Domingo: "Sono de hoje define a segunda",
  };

  const FIXED = {
    Segunda: "S1: Vídeo falando",
    Quinta: "S2: Gancho protocolo",
    Domingo: "S1: Foto calma",
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "3px", padding: "10px 12px", overflowX: "auto" }}>
        {DAYS.map((d, i) => (
          <button key={d} onClick={() => dispatch({ type: "SET_DAY", payload: i })}
            style={{
              flex: "0 0 auto", padding: "7px 13px",
              background: state.selectedDay === i ? "#e94560" : "#0e0e1c",
              color: state.selectedDay === i ? "#fff" : "#444",
              border: "none", borderRadius: "16px", fontSize: "11px", fontWeight: 700,
              cursor: "pointer", fontFamily: "monospace",
            }}>{d.slice(0, 3)}</button>
        ))}
      </div>

      <div style={{ padding: "4px 12px 8px" }}>
        <div style={{ background: "#0b0b14", border: "1px solid #16162a", borderRadius: "12px", padding: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h2 style={{ color: "#fff", fontSize: "18px", margin: 0, fontFamily: "'Space Mono', monospace", fontWeight: 800 }}>{day}</h2>
              <p style={{ color: "#e94560", fontSize: "11px", margin: "4px 0 0", fontFamily: "monospace", fontWeight: 600 }}>
                ◈ {ANGLES[day]}
              </p>
            </div>
            <span style={{ color: doneCount === total ? "#2a7a2a" : "#e94560", fontSize: "13px", fontFamily: "monospace", fontWeight: 800 }}>
              {doneCount}/{total}
            </span>
          </div>
          {FIXED[day] && (
            <div style={{ marginTop: "8px" }}>
              <span style={{ background: "#1a0a1e", color: "#e94560", padding: "3px 10px", borderRadius: "12px", fontSize: "9px", fontFamily: "monospace", fontWeight: 700 }}>
                🔒 {FIXED[day]}
              </span>
            </div>
          )}
          <div style={{ marginTop: "10px", height: "3px", background: "#111", borderRadius: "2px", overflow: "hidden" }}>
            <div style={{ width: `${(doneCount / total) * 100}%`, height: "100%", background: doneCount === total ? "#2a7a2a" : "#e94560", transition: "width 0.3s", borderRadius: "2px" }} />
          </div>
        </div>
      </div>

      <div style={{ padding: "0 12px 80px" }}>
        {stories.map((s, i) => <StoryEditor key={`${state.selectedDay}-${i}`} story={s} idx={i} state={state} dispatch={dispatch} />)}
      </div>
    </div>
  );
}

function BlocksView({ state, dispatch }) {
  const [openBlock, setOpenBlock] = useState(null);

  if (openBlock) {
    const block = BLOCK_META[openBlock];
    return (
      <div style={{ padding: "12px", paddingBottom: "80px" }}>
        <button onClick={() => setOpenBlock(null)}
          style={{ background: "none", border: "1px solid #222", color: "#666", borderRadius: "8px", padding: "6px 14px", cursor: "pointer", fontSize: "11px", fontFamily: "monospace", marginBottom: "12px" }}>
          ← Voltar
        </button>
        <div style={{ background: "#0b0b14", border: `1px solid ${block.color}44`, borderLeft: `4px solid ${block.color}`, borderRadius: "12px", padding: "16px", marginBottom: "14px" }}>
          <span style={{ fontSize: "20px" }}>{block.emoji}</span>
          <h2 style={{ color: "#fff", fontSize: "18px", margin: "6px 0 0", fontFamily: "'Space Mono', monospace" }}>{block.name}</h2>
        </div>
        {DAYS.map(day => {
          const items = (SCHEDULE[day] || []).filter(s => s.block === openBlock || s.block.startsWith(openBlock));
          if (!items.length) return null;
          return (
            <div key={day} style={{ marginBottom: "14px" }}>
              <h3 style={{ color: block.color, fontSize: "11px", fontFamily: "monospace", fontWeight: 800, letterSpacing: "1.5px", marginBottom: "6px" }}>
                {day.toUpperCase()}
              </h3>
              {items.map((s, i) => (
                <div key={i} style={{ background: "#0b0b14", border: "1px solid #16162a", borderRadius: "8px", padding: "10px 12px", marginBottom: "4px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ color: "#ccc", fontSize: "12px" }}>{s.desc}</span>
                    <span style={{ color: "#333", fontSize: "10px", fontFamily: "monospace" }}>{s.time}</span>
                  </div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span style={{ color: "#555", fontSize: "10px", fontFamily: "monospace" }}>📷 {s.formato}</span>
                    <span style={{ color: "#555", fontSize: "10px", fontFamily: "monospace" }}>🎬 {s.cenario}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ padding: "12px", paddingBottom: "80px" }}>
      <h2 style={{ color: "#fff", fontSize: "16px", fontFamily: "'Space Mono', monospace", marginBottom: "12px" }}>7 Blocos</h2>
      {Object.entries(BLOCK_META).map(([id, b]) => {
        let count = 0;
        DAYS.forEach(day => { count += (SCHEDULE[day] || []).filter(s => s.block === id || s.block.startsWith(id)).length; });
        return (
          <button key={id} onClick={() => setOpenBlock(id)}
            style={{
              width: "100%", display: "flex", alignItems: "center", gap: "12px",
              background: "#0b0b14", border: `1px solid ${b.color}22`, borderLeft: `3px solid ${b.color}`,
              borderRadius: "10px", padding: "14px", marginBottom: "6px", cursor: "pointer", textAlign: "left",
            }}>
            <span style={{ fontSize: "22px" }}>{b.emoji}</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: "#fff", fontSize: "14px", margin: 0, fontFamily: "'Space Mono', monospace" }}>{b.name}</h3>
              <span style={{ color: "#444", fontSize: "10px", fontFamily: "monospace" }}>{count} stories/semana</span>
            </div>
            <span style={{ color: "#333", fontSize: "16px" }}>→</span>
          </button>
        );
      })}
    </div>
  );
}

const init = { selectedDay: new Date().getDay() === 0 ? 6 : new Date().getDay() - 1, view: "daily", completed: {}, edits: {} };

function appReducer(state, action) {
  switch (action.type) {
    case "SET_DAY": return { ...state, selectedDay: action.payload };
    case "SET_VIEW": return { ...state, view: action.payload };
    case "TOGGLE": return { ...state, completed: { ...state.completed, [action.payload]: !state.completed[action.payload] } };
    case "EDIT": {
      const { key, field, value } = action.payload;
      return { ...state, edits: { ...state.edits, [key]: { ...(state.edits[key] || {}), [field]: value } } };
    }
    default: return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(appReducer, init);

  return (
    <div style={{ background: "#060609", minHeight: "100vh", maxWidth: "520px", margin: "0 auto", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ padding: "16px 12px 6px", display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "32px", height: "32px", background: "#e94560", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 900, color: "#fff", fontFamily: "monospace" }}>R</div>
        <div>
          <h1 style={{ color: "#fff", fontSize: "15px", margin: 0, fontFamily: "'Space Mono', monospace", fontWeight: 800 }}>Rayhan Stories</h1>
          <p style={{ color: "#333", fontSize: "9px", margin: 0, fontFamily: "monospace", letterSpacing: "1.5px" }}>CONTROLE DE STORIES</p>
        </div>
      </div>

      <nav style={{ display: "flex", gap: "4px", padding: "8px 12px", position: "sticky", top: 0, background: "#060609", zIndex: 50 }}>
        {[{ id: "daily", label: "Dia", icon: "◉" }, { id: "blocks", label: "Blocos", icon: "▦" }].map(v => (
          <button key={v.id} onClick={() => dispatch({ type: "SET_VIEW", payload: v.id })}
            style={{
              flex: 1, padding: "10px", background: state.view === v.id ? "#e94560" : "#0e0e1c",
              color: state.view === v.id ? "#fff" : "#444", border: "none", borderRadius: "8px",
              fontSize: "12px", fontWeight: 700, cursor: "pointer", fontFamily: "monospace",
            }}>
            {v.icon} {v.label}
          </button>
        ))}
      </nav>

      {state.view === "daily" && <DailyView state={state} dispatch={dispatch} />}
      {state.view === "blocks" && <BlocksView state={state} dispatch={dispatch} />}
    </div>
  );
}
