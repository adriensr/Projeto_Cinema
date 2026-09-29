function loadArray(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Erro ao ler ' + key + ':', e);
    return [];
  }
}

function saveArray(key, arr) {
  try {
    localStorage.setItem(key, JSON.stringify(arr));
    return true;
  } catch (e) {
    console.error('Erro ao salvar ' + key + ':', e);
    if (e.name === 'QuotaExceededError') alert('O armazenamento local está cheio.');
    return false;
  }
}

function addRecord(key, record) {
  const arr = loadArray(key);
  record.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  arr.push(record);
  saveArray(key, arr);
  return record;
}

function formatDateTime(isoStr) {
  if (!isoStr) return '-';
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return isoStr;
  return d.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}
function formatDate(isoStr) {
  if (!isoStr) return '-';
  const d = new Date(isoStr + 'T00:00:00');
  if (isNaN(d.getTime())) return isoStr;
  return d.toLocaleDateString('pt-BR');
}
function formatMoney(value) {
  const n = parseFloat(value);
  if (isNaN(n)) return '-';
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function seedData() {
  const filmes = [
    { id: 'f1', titulo: 'Homem-Aranha: Um Novo Dia', capaUrl: 'https://placehold.co/300x450/1b1e2a/b3243b?text=Homem-Aranha', genero: 'Ação', descricao: 'Peter Parker enfrenta uma nova ameaça enquanto tenta equilibrar sua vida pessoal com o manto do Homem-Aranha.', classificacao: '12', duracao: '145', dataEstreia: '2026-09-03' },
    { id: 'f2', titulo: 'A Odisseia', capaUrl: 'https://placehold.co/300x450/1b1e2a/2f6f7a?text=A+Odisseia', genero: 'Aventura', descricao: 'Filme de Christopher Nolan inspirado no clássico épico grego sobre a longa jornada de volta para casa.', classificacao: '14', duracao: '170', dataEstreia: '2026-07-16' },
    { id: 'f3', titulo: 'Coyote vs. Acme', capaUrl: 'https://placehold.co/300x450/1b1e2a/d9a441?text=Coyote+vs+Acme', genero: 'Animação', descricao: 'Papa-Léguas e Coiote ganham um filme próprio cheio de perseguições e invenções da Acme.', classificacao: '6', duracao: '105', dataEstreia: '2026-08-27' },
    { id: 'f4', titulo: 'Sobrenatural: Agora Entre Nós', capaUrl: 'https://placehold.co/300x450/1b1e2a/b3243b?text=Sobrenatural', genero: 'Terror', descricao: 'Uma nova onda de eventos sobrenaturais assombra uma família comum, misturando o mundo real com o além.', classificacao: '14', duracao: '105', dataEstreia: '2026-09-10' },
    { id: 'f5', titulo: 'Patrulha Canina: Uma Aventura Dino', capaUrl: 'https://placehold.co/300x450/1b1e2a/d9a441?text=Patrulha+Canina', genero: 'Animação', descricao: 'Os filhotes da Patrulha Canina embarcam em uma aventura em uma terra perdida cheia de dinossauros.', classificacao: '6', duracao: '90', dataEstreia: '2026-08-13' },
    { id: 'f6', titulo: 'Colegas e o Herdeiro', capaUrl: 'https://placehold.co/300x450/1b1e2a/2f6f7a?text=Colegas+e+o+Herdeiro', genero: 'Comédia', descricao: 'Comédia nacional sobre um grupo de amigos de escola que precisa lidar com uma herança inesperada.', classificacao: '10', duracao: '100', dataEstreia: '2026-09-03' },
    { id: 'f7', titulo: 'O Diário de Pilar na Amazônia', capaUrl: 'https://placehold.co/300x450/1b1e2a/d9a441?text=Pilar+na+Amaz%C3%B4nia', genero: 'Aventura / Família', descricao: 'Três crianças vivem uma jornada de descobertas e amizade em meio à floresta amazônica.', classificacao: 'Livre', duracao: '95', dataEstreia: '2026-09-10' },
    { id: 'f8', titulo: 'Ponto Sem Retorno', capaUrl: 'https://placehold.co/300x450/1b1e2a/9195a6?text=Ponto+Sem+Retorno', genero: 'Drama / Suspense', descricao: 'Dirigido por Ridley Scott, acompanha um homem confrontado com escolhas que definirão o resto de sua vida.', classificacao: '14', duracao: '118', dataEstreia: '2026-08-01' },
    { id: 'f9', titulo: 'Toy Story 5', capaUrl: 'https://placehold.co/300x450/1b1e2a/d9a441?text=Toy+Story+5', genero: 'Animação', descricao: 'Woody, Buzz e a turma de brinquedos vivem uma nova aventura repleta de emoção e diversão.', classificacao: 'Livre', duracao: '100', dataEstreia: '2026-06-18' }
  ];

  const salas = [
    { id: 's1', nome: 'Sala 1', capacidade: '90', tipo: '2D' },
    { id: 's2', nome: 'Sala 2', capacidade: '90', tipo: '2D' },
    { id: 's3', nome: 'Sala 3', capacidade: '100', tipo: '2D' },
    { id: 's4', nome: 'Sala 4', capacidade: '100', tipo: '2D' },
    { id: 's5', nome: 'Sala 5', capacidade: '110', tipo: '2D' },
    { id: 's6', nome: 'Sala 6', capacidade: '120', tipo: '3D' },
    { id: 's7', nome: 'Sala 7', capacidade: '120', tipo: '3D' },
    { id: 's8', nome: 'Sala 8', capacidade: '130', tipo: '3D' },
    { id: 's9', nome: 'Sala 9 IMAX', capacidade: '160', tipo: 'IMAX' },
    { id: 's10', nome: 'Sala 10 IMAX', capacidade: '180', tipo: 'IMAX' }
  ];

  const sessoes = [
    { id: 'sess1', filmeId: 'f1', salaId: 's1', dataHora: '2026-09-03T19:30', preco: '28.00', idioma: 'Dublado', formato: '2D' },
    { id: 'sess2', filmeId: 'f1', salaId: 's9', dataHora: '2026-09-03T22:00', preco: '54.00', idioma: 'Legendado', formato: '3D' },
    { id: 'sess3', filmeId: 'f2', salaId: 's2', dataHora: '2026-09-03T16:00', preco: '30.00', idioma: 'Legendado', formato: '2D' },
    { id: 'sess4', filmeId: 'f2', salaId: 's7', dataHora: '2026-09-03T19:00', preco: '38.00', idioma: 'Legendado', formato: '3D' },
    { id: 'sess5', filmeId: 'f3', salaId: 's3', dataHora: '2026-09-03T15:00', preco: '26.00', idioma: 'Dublado', formato: '2D' },
    { id: 'sess6', filmeId: 'f3', salaId: 's8', dataHora: '2026-09-04T16:30', preco: '40.00', idioma: 'Dublado', formato: '3D' },
    { id: 'sess7', filmeId: 'f4', salaId: 's4', dataHora: '2026-09-10T21:30', preco: '28.00', idioma: 'Legendado', formato: '2D' },
    { id: 'sess8', filmeId: 'f5', salaId: 's5', dataHora: '2026-09-10T16:00', preco: '30.00', idioma: 'Dublado', formato: '2D' },
    { id: 'sess9', filmeId: 'f6', salaId: 's1', dataHora: '2026-09-03T18:00', preco: '28.00', idioma: 'Dublado', formato: '2D' },
    { id: 'sess10', filmeId: 'f7', salaId: 's2', dataHora: '2026-09-10T17:00', preco: '26.00', idioma: 'Dublado', formato: '2D' },
    { id: 'sess11', filmeId: 'f8', salaId: 's6', dataHora: '2026-09-03T21:15', preco: '38.00', idioma: 'Legendado', formato: '3D' },
    { id: 'sess12', filmeId: 'f8', salaId: 's3', dataHora: '2026-09-04T20:45', preco: '30.00', idioma: 'Legendado', formato: '2D' },
    { id: 'sess13', filmeId: 'f9', salaId: 's10', dataHora: '2026-09-10T15:30', preco: '58.00', idioma: 'Dublado', formato: '3D' },
    { id: 'sess14', filmeId: 'f9', salaId: 's4', dataHora: '2026-09-10T18:30', preco: '28.00', idioma: 'Dublado', formato: '2D' },
    { id: 'sess15', filmeId: 'f1', salaId: 's5', dataHora: '2026-09-11T20:00', preco: '30.00', idioma: 'Dublado', formato: '2D' }
  ];

  const ingressos = [
    { id: 'ing1', sessaoId: 'sess1', nomeCliente: 'Lucas Andrade', cpf: '123.456.789-00', assento: 'C12', tipoAssento: 'normal', valorPago: '28.00', pagamento: 'Pix' },
    { id: 'ing2', sessaoId: 'sess1', nomeCliente: 'Fernanda Souza', cpf: '234.567.890-11', assento: 'A5', tipoAssento: 'vip', valorPago: '37.80', pagamento: 'Cartão' },
    { id: 'ing3', sessaoId: 'sess2', nomeCliente: 'Rafael Torres', cpf: '345.678.901-22', assento: 'C1', tipoAssento: 'cadeirante', valorPago: '62.10', pagamento: 'Cartão' },
    { id: 'ing4', sessaoId: 'sess13', nomeCliente: 'Camila Ribeiro', cpf: '456.789.012-33', assento: 'B8', tipoAssento: 'vip', valorPago: '78.30', pagamento: 'Pix' },
    { id: 'ing5', sessaoId: 'sess8', nomeCliente: 'Bruno Martins', cpf: '567.890.123-44', assento: 'D14', tipoAssento: 'cadeirante', valorPago: '34.50', pagamento: 'Dinheiro' }
  ];

  saveArray(KEYS.filmes, filmes);
  saveArray(KEYS.salas, salas);
  saveArray(KEYS.sessoes, sessoes);
  saveArray(KEYS.ingressos, ingressos);
}

if (!localStorage.getItem(KEYS.filmes) && !localStorage.getItem(KEYS.salas) && !localStorage.getItem(KEYS.sessoes) && !localStorage.getItem(KEYS.ingressos)) { seedData(); }

let capaBase64Atual = '';

const capaFileEl = document.getElementById('capaFile');
if (capaFileEl) capaFileEl.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const previewWrapper = document.getElementById('capaPreviewWrapper');
  if (!file) {
    capaBase64Atual = '';
    previewWrapper.style.display = 'none';
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    capaBase64Atual = reader.result;
    document.getElementById('capaPreview').src = capaBase64Atual;
    previewWrapper.style.display = 'block';
  };
  reader.readAsDataURL(file);
});

const formFilmeEl = document.getElementById('formFilme');
if (formFilmeEl) formFilmeEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const statusMsg = document.getElementById('statusMsgFilme');
  const filme = {
    titulo: document.getElementById('titulo').value.trim(),
    capaUrl: capaBase64Atual,
    genero: document.getElementById('genero').value.trim(),
    descricao: document.getElementById('descricao').value.trim(),
    classificacao: document.getElementById('classificacao').value,
    duracao: document.getElementById('duracao').value,
    dataEstreia: document.getElementById('dataEstreia').value
  };
  if (!filme.titulo || !filme.genero || !filme.dataEstreia) {
    statusMsg.innerHTML = '<span class="text-danger">Preencha todos os campos obrigatórios.</span>';
    return;
  }
  addRecord(KEYS.filmes, filme);
  statusMsg.innerHTML = '<span class="text-success">Filme salvo com sucesso!</span>';
  e.target.reset();
  capaBase64Atual = '';
  document.getElementById('capaPreviewWrapper').style.display = 'none';
  renderListaFilmes();
});

function capaImgTag(filme, size) {
  const w = size || 46;
  const h = Math.round(w * 1.5);
  if (filme && filme.capaUrl) {
    return `<img src="${filme.capaUrl}" alt="Capa de ${escapeHtml(filme.titulo)}" style="width:${w}px;height:${h}px;object-fit:cover;border-radius:4px;border:1px solid var(--border);">`;
  }
  return `<div style="width:${w}px;height:${h}px;border-radius:4px;border:1px dashed var(--border);display:flex;align-items:center;justify-content:center;font-size:0.6rem;color:var(--muted);text-align:center;background:var(--panel-2);">sem capa</div>`;
}

function renderListaFilmes() {
  const container = document.getElementById('listaFilmes');
  const filmes = loadArray(KEYS.filmes);
  if (filmes.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhum filme cadastrado ainda.</div>';
    return;
  }
  let html = '<div class="table-responsive"><table class="table table-cinema"><thead><tr><th>Capa</th><th>Título</th><th>Gênero</th><th>Duração</th><th>Classificação</th><th>Estreia</th></tr></thead><tbody>';
  filmes.slice().reverse().forEach(f => {
    html += `<tr><td>${capaImgTag(f)}</td><td>${escapeHtml(f.titulo)}</td><td>${escapeHtml(f.genero)}</td><td>${f.duracao} min</td><td>${escapeHtml(f.classificacao)}</td><td>${formatDate(f.dataEstreia)}</td></tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
}

const formSalaEl = document.getElementById('formSala');
if (formSalaEl) formSalaEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const statusMsg = document.getElementById('statusMsgSala');
  const sala = {
    nome: document.getElementById('nomeSala').value.trim(),
    capacidade: document.getElementById('capacidade').value,
    tipo: document.getElementById('tipoSala').value
  };
  if (!sala.nome || !sala.capacidade || !sala.tipo) {
    statusMsg.innerHTML = '<span class="text-danger">Preencha todos os campos.</span>';
    return;
  }
  addRecord(KEYS.salas, sala);
  statusMsg.innerHTML = '<span class="text-success">Sala salva com sucesso!</span>';
  e.target.reset();
  renderListaSalas();
});

function renderListaSalas() {
  const container = document.getElementById('listaSalas');
  const salas = loadArray(KEYS.salas);
  if (salas.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhuma sala cadastrada ainda.</div>';
    return;
  }
  let html = '<div class="table-responsive"><table class="table table-cinema"><thead><tr><th>Nome</th><th>Capacidade</th><th>Tipo</th></tr></thead><tbody>';
  salas.slice().reverse().forEach(s => {
    html += `<tr><td>${escapeHtml(s.nome)}</td><td>${s.capacidade} lugares</td><td>${escapeHtml(s.tipo)}</td></tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
}

function renderCadastroSessoes() {
  const filmes = loadArray(KEYS.filmes);
  const salas = loadArray(KEYS.salas);

  const filmeSelect = document.getElementById('filmeSelect');
  filmeSelect.innerHTML = '<option value="" disabled selected>Selecione um filme</option>';
  filmes.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f.id;
    opt.textContent = f.titulo;
    filmeSelect.appendChild(opt);
  });

  const salaSelect = document.getElementById('salaSelect');
  salaSelect.innerHTML = '<option value="" disabled selected>Selecione uma sala</option>';
  salas.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.nome} (${s.tipo})`;
    salaSelect.appendChild(opt);
  });

  const avisoVazio = document.getElementById('avisoVazioSessao');
  avisoVazio.innerHTML = (filmes.length === 0 || salas.length === 0)
    ? '<div class="alert" style="background-color:var(--panel-2);border:1px solid var(--border);color:var(--muted)">Cadastre pelo menos um <a href="cadastro-filmes.html" style="color:var(--gold)">filme</a> e uma <a href="cadastro-salas.html" style="color:var(--gold)">sala</a> antes de criar uma sessão.</div>'
    : '';

  renderListaSessoes(filmes, salas);
}

const formSessaoEl = document.getElementById('formSessao');
if (formSessaoEl) formSessaoEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const statusMsg = document.getElementById('statusMsgSessao');
  const sessao = {
    filmeId: document.getElementById('filmeSelect').value,
    salaId: document.getElementById('salaSelect').value,
    dataHora: document.getElementById('dataHora').value,
    preco: document.getElementById('preco').value,
    idioma: document.getElementById('idioma').value,
    formato: document.getElementById('formato').value
  };
  if (!sessao.filmeId || !sessao.salaId || !sessao.dataHora || !sessao.preco || !sessao.idioma || !sessao.formato) {
    statusMsg.innerHTML = '<span class="text-danger">Preencha todos os campos.</span>';
    return;
  }
  addRecord(KEYS.sessoes, sessao);
  statusMsg.innerHTML = '<span class="text-success">Sessão salva com sucesso!</span>';
  e.target.reset();
  renderCadastroSessoes();
});

function renderListaSessoes(filmes, salas) {
  const container = document.getElementById('listaSessoes');
  const sessoes = loadArray(KEYS.sessoes);
  if (sessoes.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhuma sessão cadastrada ainda.</div>';
    return;
  }
  let html = '<div class="table-responsive"><table class="table table-cinema"><thead><tr><th>Filme</th><th>Sala</th><th>Data/Hora</th><th>Preço</th><th>Idioma</th><th>Formato</th></tr></thead><tbody>';
  sessoes.slice().reverse().forEach(s => {
    const filme = filmes.find(f => f.id === s.filmeId);
    const sala = salas.find(sl => sl.id === s.salaId);
    html += `<tr><td>${filme ? escapeHtml(filme.titulo) : '<span class="text-muted">(removido)</span>'}</td><td>${sala ? escapeHtml(sala.nome) : '<span class="text-muted">(removida)</span>'}</td><td>${formatDateTime(s.dataHora)}</td><td>${formatMoney(s.preco)}</td><td>${escapeHtml(s.idioma)}</td><td>${escapeHtml(s.formato)}</td></tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
}

function renderSessoesDisponiveis() {
  const container = document.getElementById('listaSessoesDisponiveis');
  const sessoes = loadArray(KEYS.sessoes);
  const filmes = loadArray(KEYS.filmes);
  const salas = loadArray(KEYS.salas);

  if (sessoes.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhuma sessão disponível no momento. <a href="cadastro-sessoes.html" style="color:var(--gold)">Cadastre uma sessão</a>.</div>';
    return;
  }

  const ordenadas = sessoes.slice().sort((a, b) => new Date(a.dataHora) - new Date(b.dataHora));
  let html = '';
  ordenadas.forEach(s => {
    const filme = filmes.find(f => f.id === s.filmeId);
    const sala = salas.find(sl => sl.id === s.salaId);
    const tituloFilme = filme ? filme.titulo : 'Filme removido';
    const nomeSala = sala ? sala.nome : 'Sala removida';
    html += `
    <div class="session-card">
      <div class="d-flex align-items-center gap-3">
        ${capaImgTag(filme, 52)}
        <div>
          <div class="session-title">${escapeHtml(tituloFilme)}</div>
          <div class="session-meta">${escapeHtml(nomeSala)} · ${formatDateTime(s.dataHora)} · ${escapeHtml(s.idioma)} · ${escapeHtml(s.formato)}</div>
        </div>
      </div>
      <div class="d-flex align-items-center gap-3">
        <div class="session-price">${formatMoney(s.preco)}</div>
        <a class="btn btn-crimson" href="venda-ingressos.html?sessaoId=${encodeURIComponent(s.id)}">Comprar Ingresso</a>
      </div>
    </div>`;
  });
  container.innerHTML = html;
}

const MULT_NORMAL = 1;
const MULT_CADEIRANTE = 1.15;
const MULT_VIP = 1.35;
const SEAT_COLS = 14;

function gerarLayoutAssentos(capacidade) {
  const total = parseInt(capacidade, 10) || 70;
  const linhas = Math.max(3, Math.ceil(total / SEAT_COLS));
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const layout = [];
  let restante = total;

  for (let r = 0; r < linhas; r++) {
    const colsNestaLinha = Math.min(SEAT_COLS, restante);
    if (colsNestaLinha <= 0) break;
    const linha = { letra: letras[r] || `L${r}`, seats: [] };
    for (let c = 1; c <= colsNestaLinha; c++) {
      let tipo = 'normal';
      if (r < 2) {
        tipo = 'vip';
      } else if (c === 1 || c === colsNestaLinha) {
        tipo = 'cadeirante';
      }
      linha.seats.push({ id: `${linha.letra}${c}`, tipo });
    }
    layout.push(linha);
    restante -= colsNestaLinha;
  }
  return layout;
}

function precoPorTipo(precoBase, tipo) {
  const base = parseFloat(precoBase) || 0;
  const mult = tipo === 'vip' ? MULT_VIP : (tipo === 'cadeirante' ? MULT_CADEIRANTE : MULT_NORMAL);
  return Math.round(base * mult * 100) / 100;
}

function assentosOcupados(sessaoId) {
  return loadArray(KEYS.ingressos).filter(i => i.sessaoId === sessaoId).map(i => i.assento);
}

let sessaoAtualVenda = null;
let assentosSelecionados = []; // { id, tipo, valor }

function renderSeatMap(sessao) {
  sessaoAtualVenda = sessao;
  assentosSelecionados = [];

  const salas = loadArray(KEYS.salas);
  const sala = salas.find(s => s.id === sessao.salaId);
  const wrapper = document.getElementById('seatMapWrapper');
  const aviso = document.getElementById('avisoSelecioneSessao');
  const seatMapEl = document.getElementById('seatMap');

  aviso.style.display = 'none';
  wrapper.style.display = 'block';

  document.getElementById('precoNormalLabel').textContent = formatMoney(precoPorTipo(sessao.preco, 'normal'));
  document.getElementById('precoCadeiranteLabel').textContent = formatMoney(precoPorTipo(sessao.preco, 'cadeirante'));
  document.getElementById('precoVipLabel').textContent = formatMoney(precoPorTipo(sessao.preco, 'vip'));

  const capacidade = sala ? sala.capacidade : 70;
  const layout = gerarLayoutAssentos(capacidade);
  const ocupados = assentosOcupados(sessao.id);

  let html = '';
  layout.forEach(linha => {
    html += `<div class="seat-row"><span class="seat-row-label">${linha.letra}</span>`;
    linha.seats.forEach(seat => {
      const ocupado = ocupados.includes(seat.id);
      html += `<button type="button" class="seat-btn tipo-${seat.tipo}" data-id="${seat.id}" data-tipo="${seat.tipo}" ${ocupado ? 'disabled' : ''} onclick="toggleAssento('${seat.id}', '${seat.tipo}')"></button>`;
    });
    html += '</div>';
  });
  seatMapEl.innerHTML = html;
  renderResumoAssentos();
}

function toggleAssento(seatId, tipo) {
  const btn = document.querySelector(`.seat-btn[data-id="${seatId}"]`);
  const idx = assentosSelecionados.findIndex(a => a.id === seatId);

  if (idx >= 0) {
    assentosSelecionados.splice(idx, 1);
    if (btn) btn.classList.remove('selecionado');
  } else {
    const valor = precoPorTipo(sessaoAtualVenda.preco, tipo);
    assentosSelecionados.push({ id: seatId, tipo, valor });
    if (btn) btn.classList.add('selecionado');
  }
  renderResumoAssentos();
}

function removerAssento(seatId) {
  toggleAssento(seatId, null);
}

function renderResumoAssentos() {
  const container = document.getElementById('resumoAssentos');
  if (assentosSelecionados.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:1rem;">Nenhum assento selecionado ainda.</div>';
    return;
  }

  const nomeTipo = (t) => t === 'vip' ? 'VIP' : (t === 'cadeirante' ? 'Preferencial' : 'Normal');
  let html = '<div>';
  assentosSelecionados.forEach(a => {
    html += `<span class="resumo-chip">${a.id} · ${nomeTipo(a.tipo)} · ${formatMoney(a.valor)} <button type="button" onclick="removerAssento('${a.id}')" title="Remover">×</button></span>`;
  });
  html += '</div>';

  const total = assentosSelecionados.reduce((sum, a) => sum + a.valor, 0);
  html += `<div class="resumo-total"><span>${assentosSelecionados.length} ingresso(s) selecionado(s)</span><strong>${formatMoney(total)}</strong></div>`;

  container.innerHTML = html;
}

function renderVendaIngressos(sessaoIdPreSelecionada) {
  const sessoes = loadArray(KEYS.sessoes);
  const filmes = loadArray(KEYS.filmes);
  const salas = loadArray(KEYS.salas);

  const sessaoSelect = document.getElementById('sessaoSelect');
  sessaoSelect.innerHTML = '<option value="" disabled selected>Selecione uma sessão</option>';
  sessoes.forEach(s => {
    const filme = filmes.find(f => f.id === s.filmeId);
    const sala = salas.find(sl => sl.id === s.salaId);
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${filme ? filme.titulo : 'Filme removido'} — ${sala ? sala.nome : 'Sala removida'} — ${formatDateTime(s.dataHora)}`;
    sessaoSelect.appendChild(opt);
  });

  const avisoVazio = document.getElementById('avisoVazioIngresso');
  avisoVazio.innerHTML = (sessoes.length === 0)
    ? '<div class="alert" style="background-color:var(--panel-2);border:1px solid var(--border);color:var(--muted)">Nenhuma sessão cadastrada. <a href="cadastro-sessoes.html" style="color:var(--gold)">Cadastre uma sessão</a> antes de vender ingressos.</div>'
    : '';

  document.getElementById('seatMapWrapper').style.display = 'none';
  document.getElementById('avisoSelecioneSessao').style.display = 'block';
  sessaoAtualVenda = null;
  assentosSelecionados = [];

  if (sessaoIdPreSelecionada && sessoes.some(s => s.id === sessaoIdPreSelecionada)) {
    sessaoSelect.value = sessaoIdPreSelecionada;
    renderSeatMap(sessoes.find(s => s.id === sessaoIdPreSelecionada));
  }

  renderListaIngressos(sessoes, filmes, salas);
}

const sessaoSelectEl = document.getElementById('sessaoSelect');
if (sessaoSelectEl) sessaoSelectEl.addEventListener('change', (e) => {
  const sessoes = loadArray(KEYS.sessoes);
  const sessao = sessoes.find(s => s.id === e.target.value);
  if (sessao) renderSeatMap(sessao);
});

const formIngressoEl = document.getElementById('formIngresso');
if (formIngressoEl) formIngressoEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const statusMsg = document.getElementById('statusMsgIngresso');

  const sessaoId = document.getElementById('sessaoSelect').value;
  const nomeCliente = document.getElementById('nomeCliente').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const pagamento = document.getElementById('pagamento').value;

  if (!sessaoId || !nomeCliente || !cpf || !pagamento) {
    statusMsg.innerHTML = '<span class="text-danger">Preencha todos os campos.</span>';
    return;
  }
  if (assentosSelecionados.length === 0) {
    statusMsg.innerHTML = '<span class="text-danger">Selecione ao menos um assento no mapa.</span>';
    return;
  }

  assentosSelecionados.forEach(a => {
    addRecord(KEYS.ingressos, {
      sessaoId,
      nomeCliente,
      cpf,
      assento: a.id,
      tipoAssento: a.tipo,
      valorPago: a.valor,
      pagamento
    });
  });

  const qtd = assentosSelecionados.length;
  const total = assentosSelecionados.reduce((sum, a) => sum + a.valor, 0);
  statusMsg.innerHTML = `<span class="text-success">${qtd} ingresso(s) confirmado(s) — total de ${formatMoney(total)}!</span>`;
  e.target.reset();
  renderVendaIngressos();
});

function renderListaIngressos(sessoes, filmes, salas) {
  const container = document.getElementById('listaIngressos');
  const ingressos = loadArray(KEYS.ingressos);
  if (ingressos.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhum ingresso vendido ainda.</div>';
    return;
  }
  let html = '<div class="table-responsive"><table class="table table-cinema"><thead><tr><th>Cliente</th><th>CPF</th><th>Sessão</th><th>Assento</th><th>Tipo</th><th>Valor</th><th>Pagamento</th></tr></thead><tbody>';
  ingressos.slice().reverse().forEach(i => {
    const sessao = sessoes.find(s => s.id === i.sessaoId);
    const filme = sessao ? filmes.find(f => f.id === sessao.filmeId) : null;
    const sala = sessao ? salas.find(sl => sl.id === sessao.salaId) : null;
    const descSessao = sessao
      ? `${filme ? escapeHtml(filme.titulo) : '(filme removido)'} — ${sala ? escapeHtml(sala.nome) : '(sala removida)'} — ${formatDateTime(sessao.dataHora)}`
      : '<span class="text-muted">(sessão removida)</span>';
    const nomeTipo = i.tipoAssento === 'vip' ? 'VIP' : (i.tipoAssento === 'cadeirante' ? 'Preferencial' : 'Normal');
    const valor = i.valorPago ? formatMoney(i.valorPago) : (sessao ? formatMoney(sessao.preco) : '-');
    html += `<tr><td>${escapeHtml(i.nomeCliente)}</td><td>${escapeHtml(i.cpf)}</td><td>${descSessao}</td><td>${escapeHtml(i.assento)}</td><td>${nomeTipo}</td><td>${valor}</td><td>${escapeHtml(i.pagamento)}</td></tr>`;
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
}

// Inicialização para a versão com páginas HTML separadas.
document.addEventListener('DOMContentLoaded', () => {
  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (page === 'cadastro-filmes.html' && typeof renderListaFilmes === 'function') renderListaFilmes();
  if (page === 'cadastro-salas.html' && typeof renderListaSalas === 'function') renderListaSalas();
  if (page === 'cadastro-sessoes.html' && typeof renderCadastroSessoes === 'function') renderCadastroSessoes();
  if (page === 'sessoes.html' && typeof renderSessoesDisponiveis === 'function') renderSessoesDisponiveis();
  if (page === 'venda-ingressos.html' && typeof renderVendaIngressos === 'function') {
    const params = new URLSearchParams(location.search);
    renderVendaIngressos(params.get('sessaoId') || undefined);
  }
});
