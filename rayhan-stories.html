<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rayhan Stories — Controle</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #050508; font-family: system-ui, -apple-system, sans-serif; }
  textarea { font-family: 'JetBrains Mono', monospace; }
  button { font-family: 'JetBrains Mono', monospace; }
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: #0a0a0f; }
  ::-webkit-scrollbar-thumb { background: #1a1a2e; border-radius: 2px; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.9/babel.min.js"></script>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
const { useState, useReducer } = React;

const DAYS = ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"];

const BM = {
  B1:{n:"ABERTURA",c:"#e94560",e:"◉"},
  B2:{n:"ROTINA MATINAL",c:"#0f3460",e:"☀"},
  B3:{n:"PRODUTIVIDADE",c:"#034078",e:"⚡"},
  B4:{n:"CONVERSA",c:"#e43f5a",e:"💬"},
  B5:{n:"POSICIONAMENTO",c:"#c72c41",e:"📍"},
  B6:{n:"PROTOCOLO SONO",c:"#6a0572",e:"☽"},
  B7:{n:"FECHAMENTO",c:"#950740",e:"⬛"},
};

const S=(t,b,d,fo,ce,el,fa)=>({t,b,d,fo,ce,el,fa});

const DATA={
Segunda:[
S("06:30","B1","S1 — Abertura","Vídeo falando (fixo)","Quarto, luz baixa","Rosto recém-acordado","Agenda do dia + 'O dia começou ontem.'"),
S("06:30","B1","S2 — Contexto do dia","Foto + texto","—","Tênis / cama arrumada / celular","'Tudo cabe num dia. Se você dormiu.'"),
S("06:30","B2","Hábito matinal 1","Vídeo sem fala + texto","Banheiro / quarto","Chuveiro / pés no chão / sol","Bordão: 'Primeiro choque do dia.' ou porquê técnico"),
S("06:35","B2","Hábito matinal 2","Foto + texto","Quarto / janela","Copo d'água / celular longe / alongamento","Porquê técnico ou consistência"),
S("06:50","B2","Treino — indo","Foto + texto","Caminho academia, rua","Tênis, mochila, rua escura","'06:45. Treino. Segunda começou.'"),
S("08:15","B2","Treino — pós","Vídeo falando","Academia","Rosto suado, sem filtro","Conexão treino→sono ou vulnerabilidade"),
S("08:45","B3","Faculdade","Foto + texto","Sala de aula","Caderno, caneta","Contexto ou aprendizado extraído da aula"),
S("09:30","B4","Enquete ou Caixinha","Foto + sticker","Foto do momento","Mesa, café, pós-treino","Pergunta: dor ou comportamento da audiência"),
S("10:10","B2","Rayhan","Storyvlog","Mesa, computador","Tela, caderno, fone","'O que vocês veem na semana sai daqui.'"),
S("12:30","B3","Almoço","Foto + texto","Mesa","Prato forte","'Refeição forte. Janta leve. Sono agradece.'"),
S("13:10","B3","Nyx Project","Storyvlog","Mesa trabalho","Computador, caderno, fone","'Deep work. 4h de foco > 10h de distração.'"),
S("13:30","B4","Resposta caixinha","Print + texto","—","Print da resposta","Dar nome ao problema + solução + CTA"),
S("14:30","B3","Reflexão / Contrapopular","Tela preta + texto","—","—","'Motivação de segunda não vem de podcast. Vem de sono.'"),
S("15:00","B5","Posicionamento","Embutido em outro story","—","—","'Pra quem não sabe, eu crio conteúdo sobre sono e produtividade.'"),
S("15:30","B3","Pausa anti-estresse","Foto + texto","Corredor, ar livre","Mão no peito, passos","'O estresse não acumula se você não deixa.'"),
S("16:30","B3","Janta","Foto + texto","Mesa","Prato leve","'Última refeição. Depois: só banana e chá.'"),
S("17:10","B3","Leitura 17h","Storyvlog","Ambiente calmo","Livro aberto, luz tarde","'Leitura. Desaceleração. Primeiro passo do protocolo.'"),
S("18:30","B3","Faculdade noite","Foto + texto","Sala de aula","Caderno, óculos bloqueadores","'Faculdade de óculos bloqueadores. Zero luz azul.'"),
S("19:45","B3","Diário","Foto + texto","Mesa","Diário aberto, caneta","'Journaling. Esvaziar a cabeça antes de dormir.'"),
S("20:15","B3","Aula noite 2","Foto + texto","Sala de aula","Caderno, óculos bloqueadores","Contexto"),
S("21:15","B6","Banho quente + reflexão","Vídeo falando (calmo)","Banheiro, luz quente","Vapor, luz quente","'A parte mais importante do dia: parar.'"),
S("22:00","B6","Etapa protocolo","Foto + texto","Quarto preparado","Chá, banana, difusor","Porquê técnico: triptofano, apigenina, lavanda"),
S("22:15","B6","Etapa protocolo 2","Foto + texto","Quarto escuro","Blackout, protetor, dilatador","'Escuridão total. Cada etapa é um sinal pro cérebro.'"),
S("22:30","B6","Leitura noturna","Storyvlog","Quarto, luz mínima","Livro, luz quente","'Leitura. O arco do livro: aberto de manhã, fechado de noite.'"),
S("22:50","B7","Ponto final","Foto escura / tela preta","Quarto escuro","Escuridão, celular modo avião","'Segunda sobrevivida. Ponto final.'"),
],
Terça:[
S("06:30","B1","S1 — Abertura","Foto + texto","Janela / quarto","Janela, pés cama, celular 06:30","'06:30. Terça. Mesmo horário. O dia começou ontem.'"),
S("06:30","B1","S2 — Contexto","Foto + texto","—","Copo d'água, mesa","'Sem drama. Dormiu bem, acordou bem.'"),
S("06:30","B2","Hábito matinal 1","Vídeo sem fala + texto","Banheiro / quarto","Chuveiro / sol / grounding","Bordão ou porquê técnico"),
S("06:35","B2","Hábito matinal 2","Foto + texto","Quarto / janela","Água / celular longe / alongamento","Porquê técnico"),
S("06:50","B2","Rayhan","Storyvlog","Mesa, computador","Tela, caderno","'Produção de conteúdo antes do treino.'"),
S("10:10","B2","Treino — indo","Foto + texto","Caminho academia","Tênis, rua","'10:00. 3h de produção rendidas. Agora o corpo.'"),
S("12:00","B2","Treino — corrida","Vídeo sem fala + texto","Ar livre","Pés, percurso, suado","'Corrida. O estresse sai pelas pernas.'"),
S("09:30","B4","Caixinha — dor","Foto + sticker","Mesa trabalho","Café, caderno","'O que mais te impede de dormir?'"),
S("12:30","B3","Almoço","Foto + texto","Mesa","Prato forte","'Almoço forte.'"),
S("13:10","B3","Nyx Project","Storyvlog","Mesa","Computador, fone","'Deep work.'"),
S("13:30","B4","Resposta 1","Print + texto","—","Print","Dar nome + solução aplicável"),
S("14:30","B4","Resposta 2","Print + vídeo falando","—","Print","Aprofundar + posicionamento embutido"),
S("15:30","B3","Pausa","Foto + texto","Corredor","Respiração, caminhada","'O estresse não acumula se você não deixa.'"),
S("16:30","B3","Janta","Foto + texto","Mesa","Prato leve","'Última refeição.'"),
S("17:10","B3","Leitura 17h","Storyvlog","Ambiente calmo","Livro","'Desaceleração.'"),
S("18:30","B3","Faculdade","Foto + texto","Sala","Caderno, óculos bloqueadores","Contexto"),
S("19:45","B3","Diário","Foto + texto","Mesa","Diário","'Journaling.'"),
S("20:30","B6","Banho quente + reflexão","Vídeo falando (calmo)","Banheiro, luz quente","Vapor","'A parte mais importante: parar.'"),
S("21:00","B6","Etapa protocolo","Foto + texto","Quarto","Chá, difusor, celular fora","Porquê técnico"),
S("21:30","B6","Leitura noturna","Storyvlog","Quarto, luz mínima","Livro","'Arco do livro.'"),
S("22:10","B6","Etapa protocolo 2","Foto + texto","Quarto escuro","Blackout, protetor, 4-7-8","'Escuridão total.'"),
S("22:50","B7","Ponto final","Foto escura + texto","Quarto escuro","Escuridão","'Ponto final. Boa noite.'"),
],
Quarta:[
S("06:30","B1","S1 — Abertura","Foto + texto","Janela / cortina","Janela, cama, livro","'Quarta. Metade da semana. O dia começou ontem.'"),
S("06:30","B1","S2 — Contexto","Vídeo falando","—","Rosto","'3 noites de protocolo. O acumulado aparece.'"),
S("06:30","B2","Hábito matinal 1","Vídeo sem fala + texto","Banheiro / quarto","Chuveiro / sol / pés","Bordão ou porquê"),
S("06:50","B2","Rayhan (curto)","Storyvlog","Mesa","Computador","'45 min de produção. Depois: treino.'"),
S("07:35","B2","Hábito matinal 2","Foto + texto","Quarto / janela","Água / respiração / alongamento","'Antes do treino.'"),
S("07:50","B2","Treino","Vídeo sem fala + texto","Academia","Execução, peso","'Terceiro dia seguido.'"),
S("09:30","B2","Corrida","Vídeo sem fala + texto","Ar livre","Percurso, paisagem","'O estresse sai pelas pernas.'"),
S("10:15","B3","Aula","Foto + texto","Sala","Caderno","Contexto"),
S("11:00","B4","Caixinha — opinião","Foto + sticker","Livro, café","Mesa","'Trabalhar mais = produzir mais?'"),
S("12:30","B3","Almoço","Foto + texto","Mesa","Prato forte","'Refeição forte.'"),
S("13:10","B3","Nyx Project","Storyvlog","Mesa","Computador","'Deep work.'"),
S("13:30","B4","Resposta","Print + texto","—","Print","Contrapopular a partir da resposta"),
S("14:30","B3","Reflexão / Contrapopular","Tela preta + texto","—","—","'Você não tá cansado porque trabalha muito. Tá cansado porque dorme mal.'"),
S("15:30","B3","Pausa","Foto + texto","Corredor","Respiração","'Pausa.'"),
S("16:30","B3","Janta","Foto + texto","Mesa","Prato leve","'Última refeição.'"),
S("17:10","B3","Leitura 17h","Storyvlog","Ambiente calmo","Livro","'Desaceleração.'"),
S("18:30","B3","Faculdade noite","Foto + texto","Sala","Óculos bloqueadores","Contexto"),
S("19:45","B3","Diário","Foto + texto","Mesa","Diário","'Journaling.'"),
S("20:30","B6","Banho quente + reflexão","Vídeo falando (calmo)","Banheiro","Vapor","'O protocolo não é lista. É linguagem corporal.'"),
S("21:00","B6","Etapa protocolo","Foto + texto","Quarto","Chá, difusor, celular fora","Porquê técnico"),
S("21:30","B6","Leitura noturna","Storyvlog","Quarto","Livro","'Arco do livro.'"),
S("22:10","B6","Etapa protocolo 2","Foto + texto","Quarto escuro","Blackout","'Escuridão total.'"),
S("22:50","B7","Ponto final","Tela preta + texto","—","—","'Metade da semana. Ponto final. Amanhã: protocolo completo.'"),
],
Quinta:[
S("06:30","B1","S1 — Abertura","Vídeo falando / Foto","Quarto / janela","Rosto, silhueta, objetos protocolo","'Dormi 22:30, acordei sem despertador.'"),
S("06:30","B1","S2 — Gancho protocolo (fixo)","Vídeo falando / Foto","—","Céu, rosto, objetos cabeceira","'Hoje à noite: protocolo completo. Fica até o final.'"),
S("06:30","B2","Hábito matinal 1","Vídeo sem fala + texto","Banheiro / quarto","Chuveiro / sol / grounding","Bordão ou porquê"),
S("06:35","B2","Hábito matinal 2","Foto + texto","Quarto / janela","Água / celular longe / alongamento","Porquê técnico"),
S("06:50","B2","Rayhan","Storyvlog","Mesa","Computador","'Produzindo protocolo de hoje.'"),
S("10:10","B2","Treino","Vídeo sem fala + texto","Academia","Execução","'Depois de 3h produção, agora o corpo.'"),
S("12:00","B2","Corrida","Vídeo falando","Ar livre","Suado","'4 dias de treino. O sono sustenta. Hoje vocês vão ver.'"),
S("09:30","B4","Enquete — hábito","Foto + sticker","Pós-treino","—","'Último horário de tela antes de dormir?'"),
S("12:30","B3","Almoço","Foto + texto","Mesa","Prato forte","'Almoço.'"),
S("13:10","B3","Nyx Project","Storyvlog","Mesa","Computador","'Deep work.'"),
S("13:30","B4","Resposta","Print + texto","—","Print","Dado + contrapopular"),
S("14:30","B3","Posicionamento + antecipação","Vídeo falando","—","—","Posicionamento + 'hoje à noite protocolo'"),
S("16:30","B3","Janta","Foto + texto","Mesa","Prato leve","'Última refeição. Leve. Estômago vazio.'"),
S("17:10","B3","Leitura 17h","Storyvlog","Ambiente calmo","Livro","'Primeiro passo do protocolo.'"),
S("18:30","B3","Faculdade + óculos","Foto + texto","Sala","Óculos bloqueadores no rosto","'Zero luz azul a partir das 19h.'"),
S("19:15","B6","Óculos + filtros luz","Foto + texto","Quarto/sala","Óculos, luzes quentes","'19:15. Zero luz azul. Melatonina começa.'"),
S("19:45","B3","Diário","Foto + texto","Mesa","Diário","'Journaling.'"),
S("20:30","B6","PROTOCOLO COMPLETO","Vídeo falando (25s)","Quarto, luz quente","Rosto calmo, 3s silêncio","Lista completa + 'Parece exagero? Eu durmo 8h.'"),
S("21:00","B6","Chá + banana + difusor","Foto + texto","Quarto","Xícara, banana, difusor","'Triptofano + apigenina + lavanda.'"),
S("21:15","B6","Leitura noturna","Storyvlog","Quarto preparado","Livro, quarto gelado","'Leitura. O corpo sabe.'"),
S("21:50","B6","Celular fora + ruído branco","Foto + texto","Quarto","Celular saindo, app ruído","'Modo avião. Desconexão total.'"),
S("22:00","B6","Banho quente + journaling","Foto + texto","Banheiro + mesa","Vapor, diário","'Banho + esvaziar cabeça.'"),
S("22:10","B6","Blackout + protetor + 4-7-8","Foto + texto","Quarto escuro","Blackout, protetor, dilatador","'Escuridão total. 4-7-8. O corpo desliga.'"),
S("22:50","B7","Ponto final","Tela preta + texto","—","—","'Protocolo completo. Ponto final.'"),
],
Sexta:[
S("06:30","B1","S1 — Abertura","Foto + texto / Tela preta","Janela / quarto","Janela, cama, tênis","'Sexta. Mesmo horário. O protocolo não tira folga.'"),
S("06:30","B1","S2 — Contexto","Vídeo falando / Foto","—","Rosto, água, espelho","'A tentação de dormir tarde é real. Mas a segunda cobra.'"),
S("06:30","B2","Hábito matinal 1","Vídeo sem fala + texto","Banheiro / quarto","Chuveiro / sol / pés","'Inclusive na sexta.'"),
S("06:35","B2","Hábito matinal 2","Foto + texto","Quarto / janela","Água / celular longe","'5 dias no mesmo horário.'"),
S("06:50","B2","Treino — indo","Foto + texto","Caminho","Tênis","'5 dias seguidos.'"),
S("08:15","B2","Treino — pós","Vídeo falando","Academia","Rosto suado","'O fim de semana não é pra destruir.'"),
S("08:45","B3","Faculdade","Foto + texto","Sala","Caderno","Contexto"),
S("09:00","B4","Caixinha — fim de semana","Foto + sticker","—","—","'O que muda na sua rotina no fim de semana?'"),
S("10:15","B3","Aula 2","Foto + texto","Sala","Material","Contexto"),
S("12:30","B3","Almoço","Foto + texto","Mesa","Prato forte","'Almoço.'"),
S("13:10","B3","Nyx Project","Storyvlog","Mesa","Computador","'Último bloco da semana.'"),
S("13:30","B4","Resposta","Print + texto","—","Print","Jetlag social / contrapopular"),
S("14:30","B3","Pausa","Foto + texto","Corredor","Respiração","'Pausa.'"),
S("15:00","B3","Rayhan + posicionamento","Storyvlog","Mesa","Computador","Produção + posicionamento embutido"),
S("16:30","B3","Janta","Foto + texto","Mesa","Prato leve","'Última refeição.'"),
S("17:10","B3","Leitura 17h","Storyvlog","Ambiente calmo","Livro","'Desaceleração.'"),
S("18:00","B3","Faculdade noite","Foto + texto","Sala","Óculos bloqueadores","'Última aula da semana.'"),
S("19:45","B3","Diário","Foto + texto","Mesa","Diário","'Journaling.'"),
S("20:30","B6","Banho quente + reflexão","Vídeo falando (calmo)","Banheiro","Vapor","'Sexta. Mesmo ritual.'"),
S("21:00","B6","Etapa protocolo","Foto + texto","Quarto","Chá, difusor","'O protocolo não tira folga.'"),
S("21:30","B6","Leitura noturna","Storyvlog","Quarto","Livro","'Sexta. Mesmo ritual.'"),
S("22:10","B6","Etapa protocolo 2","Foto + texto","Quarto escuro","Blackout","'Escuridão total.'"),
S("22:50","B7","Ponto final","Foto + texto","Quarto / celular modo avião","Modo avião, escuridão","'O protocolo não tira folga. Ponto final.'"),
],
Sábado:[
S("06:30","B1","S1 — Abertura","Vídeo falando / Foto","Varanda / janela / rosto","Rosto, varanda, sol","'Sábado. A maioria vai acordar meio-dia. Eu já tô de pé.'"),
S("06:30","B1","S2 — Contexto","Foto + texto / Vídeo","—","Ambiente calmo, cama, sol","'Descanso não é dormir 12h.'"),
S("06:30","B2","Hábito matinal 1","Vídeo sem fala + texto","Banheiro / quarto","Chuveiro / sol / grounding","'Sábado também.'"),
S("06:35","B2","Hábito matinal 2","Foto + texto","Quarto / varanda","Água / alongamento / respiração","'Sem pressa.'"),
S("06:50","B2","Treino / atividade","Vídeo sem fala + texto","Academia / ar livre","Tênis, percurso","Treino ou movimento leve"),
S("07:30","B2","Corrida","Vídeo sem fala + texto","Ar livre","Paisagem, rua vazia","'O estresse sai pelas pernas.'"),
S("09:30","B4","Caixinha — pessoal","Foto + sticker","Café, livro","—","'Pergunte qualquer coisa menos sono.'"),
S("12:30","B3","Almoço","Foto + texto","Mesa","Prato","'Almoço.'"),
S("13:10","B3","Nyx Project","Storyvlog","Mesa","Computador","'Nyx no sábado.'"),
S("13:30","B4","Resposta pessoal","Print + texto","—","Print","Resposta leve, lado humano"),
S("14:30","B3","Reflexão / Contrapopular","Tela preta + texto","—","—","'Sofá + celular + série não é descanso. É estímulo.'"),
S("16:30","B3","Janta","Foto + texto","Mesa","Prato leve","'Última refeição.'"),
S("17:30","B3","Rayhan + posicionamento","Storyvlog","Mesa","Computador","Produção + posicionamento"),
S("19:00","B3","Vulnerabilidade","Vídeo falando","—","Rosto","'Sábado trabalhando. Cansativo. Mas é o que constrói.'"),
S("20:30","B6","Banho quente + reflexão","Vídeo falando (calmo)","Banheiro","Vapor","'O protocolo não é lista. É linguagem corporal.'"),
S("21:00","B6","Leitura noturna","Storyvlog","Quarto","Livro","'Sem pressa. Sem tela.'"),
S("22:00","B6","Etapa protocolo","Foto + texto","Quarto","Diário, chá, difusor","Etapa do dia"),
S("22:50","B7","Ponto final","Foto escura + texto","Quarto escuro","Escuridão","'Sábado. Mesmo ritual. Ponto final.'"),
],
Domingo:[
S("06:30","B1","S1 — Abertura (foto calma)","Foto calma (fixo)","Janela luz suave / cama / varanda","Luz suave, cama arrumada, livro","'Domingo. O sono de hoje define a segunda.'"),
S("06:30","B1","S2 — Contexto","Foto + texto / Vídeo falando","—","Água, sol, livro","'A semana que vem começa hoje.'"),
S("06:30","B2","Hábito matinal 1","Vídeo sem fala + texto","Banheiro / quarto","Chuveiro / sol / grounding","'7 dias. Semana completa.'"),
S("06:35","B2","Hábito matinal 2","Foto + texto","Quarto / varanda","Água / respiração / celular longe","'O corpo não tira folga.'"),
S("07:00","B2","Leitura / caminhada","Foto + texto","Ambiente calmo / ar livre","Livro, paisagem","'Sem treino pesado. Descanso ativo.'"),
S("07:30","B2","Caminhada leve","Vídeo sem fala + texto","Ar livre","Rua calma, paisagem","'Movimento leve. O corpo não fica parado.'"),
S("09:30","B4","Caixinha — pesquisa","Foto + sticker","Caderno, café","—","'Qual tema querem que aprofunde?'"),
S("12:30","B3","Almoço","Foto + texto","Mesa","Prato","'Almoço de domingo.'"),
S("13:00","B3","Planejamento","Foto + texto","Mesa","Caderno planejamento","'Os stories da semana nascem aqui.'"),
S("13:30","B4","Resposta","Print + texto","—","Print","Tema mais pedido + antecipação"),
S("14:00","B3","Rayhan + posicionamento","Storyvlog","Mesa","Computador","Produção + posicionamento"),
S("16:30","B3","Janta","Foto + texto","Mesa","Prato leve","'Última refeição.'"),
S("17:10","B3","Leitura / Rayhan","Storyvlog","Ambiente calmo / mesa","Livro ou computador","Leitura ou produção"),
S("20:30","B6","Banho quente + reflexão","Vídeo falando (calmo)","Banheiro","Vapor","'O sono mais importante da semana é o de hoje.'"),
S("21:00","B6","Chá + banana","Foto + texto","Quarto","Xícara, banana","'Camomila. O sono define a segunda.'"),
S("21:30","B6","Leitura noturna","Storyvlog","Quarto","Livro","'Último dia. Mesmo ritual.'"),
S("22:00","B6","Journaling","Foto + texto","Quarto","Diário","'Esvaziar cabeça antes da segunda.'"),
S("22:50","B7","Ponto final","Tela preta + texto","—","—","'O sono de hoje define a segunda. Ponto final.'"),
],
};

const init={day:new Date().getDay()===0?6:new Date().getDay()-1,view:"daily",done:{},edits:{}};

function red(s,a){
  switch(a.type){
    case"DAY":return{...s,day:a.v};
    case"VIEW":return{...s,view:a.v};
    case"DONE":return{...s,done:{...s.done,[a.v]:!s.done[a.v]}};
    case"EDIT":{const{k,f,v}=a;return{...s,edits:{...s.edits,[k]:{...(s.edits[k]||{}),[f]:v}}};}
    default:return s;
  }
}

function Card({s,i,st,dp}){
  const b=BM[s.b];
  const k=`${st.day}-${i}`;
  const dn=st.done[k];
  const ed=st.edits[k]||{};
  const v=(f)=>ed[f]!==undefined?ed[f]:s[f];
  const [open,setOpen]=useState(false);

  return(
    <div style={{
      background:dn?"#060d06":"#09090f",
      border:`1px solid ${dn?"#1a3a1a":"#141425"}`,
      borderLeft:`3px solid ${b.c}`,
      borderRadius:"10px",
      marginBottom:"6px",
      opacity:dn?0.45:1,
      transition:"all 0.15s",
    }}>
      <div style={{padding:"10px 12px",display:"flex",gap:"10px",alignItems:"flex-start"}}>
        <button onClick={()=>dp({type:"DONE",v:k})} style={{
          width:"18px",height:"18px",borderRadius:"50%",flexShrink:0,marginTop:"1px",
          border:`2px solid ${dn?"#2a7a2a":b.c}`,background:dn?"#2a7a2a":"transparent",
          color:"#fff",fontSize:"9px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
        }}>{dn?"✓":""}</button>
        <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{color:b.c,fontSize:"8px",fontWeight:800,letterSpacing:"1.5px",fontFamily:"monospace"}}>{b.e} {b.n}</span>
            <span style={{color:"#2a2a3a",fontSize:"10px",fontFamily:"monospace",fontWeight:700}}>{s.t}</span>
          </div>
          <p style={{color:dn?"#333":"#e8e8f0",fontSize:"13px",margin:"3px 0 0",fontWeight:600,lineHeight:1.3,textDecoration:dn?"line-through":"none"}}>{s.d}</p>

          <div style={{marginTop:"8px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px 8px"}}>
            <div>
              <span style={{color:"#3a3a50",fontSize:"8px",fontWeight:700,letterSpacing:"1px",fontFamily:"monospace"}}>FORMATO</span>
              <p style={{color:dn?"#2a2a2a":"#8888aa",fontSize:"11px",margin:"1px 0 0",lineHeight:1.3}}>{v("fo")}</p>
            </div>
            <div>
              <span style={{color:"#3a3a50",fontSize:"8px",fontWeight:700,letterSpacing:"1px",fontFamily:"monospace"}}>CENÁRIO</span>
              <p style={{color:dn?"#2a2a2a":"#8888aa",fontSize:"11px",margin:"1px 0 0",lineHeight:1.3}}>{v("ce")}</p>
            </div>
            <div>
              <span style={{color:"#3a3a50",fontSize:"8px",fontWeight:700,letterSpacing:"1px",fontFamily:"monospace"}}>ELEMENTOS</span>
              <p style={{color:dn?"#2a2a2a":"#8888aa",fontSize:"11px",margin:"1px 0 0",lineHeight:1.3}}>{v("el")}</p>
            </div>
            <div style={{gridColumn:"1/3"}}>
              <span style={{color:"#3a3a50",fontSize:"8px",fontWeight:700,letterSpacing:"1px",fontFamily:"monospace"}}>FALA / TEXTO</span>
              <p style={{color:dn?"#2a2a2a":"#c0c0d8",fontSize:"11px",margin:"1px 0 0",lineHeight:1.4,fontStyle:"italic"}}>{v("fa")}</p>
            </div>
          </div>

          <button onClick={()=>setOpen(!open)} style={{
            marginTop:"6px",background:"#0c0c18",border:"1px solid #1a1a2e",color:open?b.c:"#3a3a50",
            borderRadius:"5px",padding:"3px 8px",fontSize:"9px",cursor:"pointer",fontFamily:"monospace",fontWeight:700,
          }}>{open?"▾ Fechar edição":"✎ Editar"}</button>

          {open&&(
            <div style={{marginTop:"8px",display:"flex",flexDirection:"column",gap:"6px"}}>
              {[
                {l:"FORMATO",f:"fo",p:"Ex: Foto + texto, Vídeo falando..."},
                {l:"CENÁRIO",f:"ce",p:"Ex: Quarto, academia, ar livre..."},
                {l:"ELEMENTOS",f:"el",p:"Ex: Copo d'água, tênis, livro..."},
                {l:"FALA / TEXTO",f:"fa",p:"O que falar ou escrever..."},
              ].map(x=>(
                <div key={x.f}>
                  <label style={{color:"#3a3a50",fontSize:"8px",fontWeight:700,letterSpacing:"1px",fontFamily:"monospace",display:"block",marginBottom:"2px"}}>{x.l}</label>
                  <textarea value={v(x.f)} onChange={e=>dp({type:"EDIT",k,f:x.f,v:e.target.value})}
                    placeholder={x.p} rows={x.f==="fa"?2:1}
                    style={{
                      width:"100%",background:"#06060c",border:"1px solid #1a1a2e",color:"#aaa",
                      borderRadius:"5px",padding:"6px 8px",fontSize:"11px",fontFamily:"monospace",
                      resize:"vertical",outline:"none",boxSizing:"border-box",lineHeight:1.3,
                    }}/>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Daily({st,dp}){
  const day=DAYS[st.day];
  const stories=DATA[day]||[];
  const total=stories.length;
  const dc=stories.filter((_,i)=>st.done[`${st.day}-${i}`]).length;
  const ANG={Segunda:"Peso + contraste com sono",Terça:"Consistência silenciosa",Quarta:"Metade da semana · Acumulado",Quinta:"DIA DO PROTOCOLO COMPLETO",Sexta:"O protocolo não tira folga",Sábado:"Mesmo horário no fim de semana",Domingo:"Sono de hoje define a segunda"};
  const FIX={Segunda:"🔒 S1: Vídeo falando",Quinta:"🔒 S2: Gancho protocolo",Domingo:"🔒 S1: Foto calma"};

  return(
    <div>
      <div style={{display:"flex",gap:"3px",padding:"8px 10px",overflowX:"auto"}}>
        {DAYS.map((d,i)=>(
          <button key={d} onClick={()=>dp({type:"DAY",v:i})} style={{
            flex:"0 0 auto",padding:"6px 12px",
            background:st.day===i?"#e94560":"#0c0c18",
            color:st.day===i?"#fff":"#3a3a3a",
            border:"none",borderRadius:"14px",fontSize:"11px",fontWeight:700,cursor:"pointer",fontFamily:"monospace",
          }}>{d.slice(0,3)}</button>
        ))}
      </div>
      <div style={{padding:"2px 10px 6px"}}>
        <div style={{background:"#09090f",border:"1px solid #141425",borderRadius:"10px",padding:"12px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <h2 style={{color:"#fff",fontSize:"17px",margin:0,fontFamily:"'Space Mono',monospace",fontWeight:800}}>{day}</h2>
              <p style={{color:"#e94560",fontSize:"10px",margin:"3px 0 0",fontFamily:"monospace",fontWeight:700}}>◈ {ANG[day]}</p>
              {FIX[day]&&<p style={{color:"#6a0572",fontSize:"9px",margin:"4px 0 0",fontFamily:"monospace",fontWeight:700}}>{FIX[day]}</p>}
            </div>
            <span style={{color:dc===total?"#2a7a2a":"#e94560",fontSize:"12px",fontFamily:"monospace",fontWeight:800}}>{dc}/{total}</span>
          </div>
          <div style={{marginTop:"8px",height:"3px",background:"#0c0c0c",borderRadius:"2px",overflow:"hidden"}}>
            <div style={{width:`${(dc/total)*100}%`,height:"100%",background:dc===total?"#2a7a2a":"#e94560",transition:"width 0.3s",borderRadius:"2px"}}/>
          </div>
        </div>
      </div>
      <div style={{padding:"0 10px 80px"}}>
        {stories.map((s,i)=><Card key={`${st.day}-${i}`} s={s} i={i} st={st} dp={dp}/>)}
      </div>
    </div>
  );
}

function Blocks({st,dp}){
  const[ob,setOb]=useState(null);
  if(ob){
    const bl=BM[ob];
    return(
      <div style={{padding:"10px",paddingBottom:"80px"}}>
        <button onClick={()=>setOb(null)} style={{background:"none",border:"1px solid #1a1a2e",color:"#555",borderRadius:"6px",padding:"5px 12px",cursor:"pointer",fontSize:"10px",fontFamily:"monospace",marginBottom:"10px"}}>← Voltar</button>
        <div style={{background:"#09090f",border:`1px solid ${bl.c}33`,borderLeft:`4px solid ${bl.c}`,borderRadius:"10px",padding:"14px",marginBottom:"12px"}}>
          <span style={{fontSize:"18px"}}>{bl.e}</span>
          <h2 style={{color:"#fff",fontSize:"17px",margin:"4px 0 0",fontFamily:"'Space Mono',monospace"}}>{bl.n}</h2>
        </div>
        {DAYS.map(day=>{
          const items=(DATA[day]||[]).filter(s=>s.b===ob);
          if(!items.length)return null;
          return(
            <div key={day} style={{marginBottom:"12px"}}>
              <h3 style={{color:bl.c,fontSize:"10px",fontFamily:"monospace",fontWeight:800,letterSpacing:"1.5px",marginBottom:"5px"}}>{day.toUpperCase()}</h3>
              {items.map((s,i)=>(
                <div key={i} style={{background:"#09090f",border:"1px solid #141425",borderRadius:"7px",padding:"8px 10px",marginBottom:"3px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:"3px"}}>
                    <span style={{color:"#ccc",fontSize:"11px",fontWeight:600}}>{s.d}</span>
                    <span style={{color:"#2a2a3a",fontSize:"9px",fontFamily:"monospace"}}>{s.t}</span>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2px 6px"}}>
                    <span style={{color:"#555",fontSize:"9px",fontFamily:"monospace"}}>📷 {s.fo}</span>
                    <span style={{color:"#555",fontSize:"9px",fontFamily:"monospace"}}>📍 {s.ce}</span>
                    <span style={{color:"#555",fontSize:"9px",fontFamily:"monospace"}}>✦ {s.el}</span>
                  </div>
                  <p style={{color:"#777",fontSize:"9px",fontFamily:"monospace",fontStyle:"italic",margin:"3px 0 0"}}>{s.fa}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
  return(
    <div style={{padding:"10px",paddingBottom:"80px"}}>
      <h2 style={{color:"#fff",fontSize:"15px",fontFamily:"'Space Mono',monospace",marginBottom:"10px"}}>7 Blocos</h2>
      {Object.entries(BM).map(([id,b])=>{
        let c=0;DAYS.forEach(d=>{c+=(DATA[d]||[]).filter(s=>s.b===id).length;});
        return(
          <button key={id} onClick={()=>setOb(id)} style={{
            width:"100%",display:"flex",alignItems:"center",gap:"10px",
            background:"#09090f",border:`1px solid ${b.c}22`,borderLeft:`3px solid ${b.c}`,
            borderRadius:"8px",padding:"12px",marginBottom:"5px",cursor:"pointer",textAlign:"left",
          }}>
            <span style={{fontSize:"18px"}}>{b.e}</span>
            <div style={{flex:1}}>
              <h3 style={{color:"#fff",fontSize:"13px",margin:0,fontFamily:"'Space Mono',monospace"}}>{b.n}</h3>
              <span style={{color:"#333",fontSize:"9px",fontFamily:"monospace"}}>{c} stories/semana</span>
            </div>
            <span style={{color:"#222",fontSize:"14px"}}>→</span>
          </button>
        );
      })}
    </div>
  );
}

function App(){
  const[st,dp]=useReducer(red,init);
  return(
    <div style={{background:"#050508",minHeight:"100vh",maxWidth:"520px",margin:"0 auto",fontFamily:"system-ui,-apple-system,sans-serif"}}>
      <div style={{padding:"14px 10px 4px",display:"flex",alignItems:"center",gap:"8px"}}>
        <div style={{width:"28px",height:"28px",background:"#e94560",borderRadius:"7px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:900,color:"#fff",fontFamily:"monospace"}}>R</div>
        <div>
          <h1 style={{color:"#fff",fontSize:"14px",margin:0,fontFamily:"'Space Mono',monospace",fontWeight:800}}>Rayhan Stories</h1>
          <p style={{color:"#2a2a2a",fontSize:"8px",margin:0,fontFamily:"monospace",letterSpacing:"2px"}}>CONTROLE DE STORIES</p>
        </div>
      </div>
      <nav style={{display:"flex",gap:"4px",padding:"6px 10px",position:"sticky",top:0,background:"#050508",zIndex:50}}>
        {[{id:"daily",l:"◉ Dia"},{id:"blocks",l:"▦ Blocos"}].map(v=>(
          <button key={v.id} onClick={()=>dp({type:"VIEW",v:v.id})} style={{
            flex:1,padding:"9px",background:st.view===v.id?"#e94560":"#0c0c18",
            color:st.view===v.id?"#fff":"#3a3a3a",border:"none",borderRadius:"7px",
            fontSize:"11px",fontWeight:700,cursor:"pointer",fontFamily:"monospace",
          }}>{v.l}</button>
        ))}
      </nav>
      {st.view==="daily"&&<Daily st={st} dp={dp}/>}
      {st.view==="blocks"&&<Blocks st={st} dp={dp}/>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
</script>
</body>
</html>
