const epis = [
  { numero: 1, nome: "Capacete de segurança", imagem: "img/1.png", texto: "Serve para proteger a cabeça contra impactos e quedas de objetos" },
  { numero: 2, nome: "Óculos de proteção", imagem: "img/2.png", texto: "Usado para evitar lesões nos olhos por partículas e respingos" },
  { numero: 3, nome: "Protetor auricular tipo plug", imagem: "img/3.png", texto: "Serve para reduzir ruídos e proteger a audição" },
  { numero: 4, nome: "Protetor auricular tipo concha", imagem: "img/4.png", texto: "Usado para isolar sons intensos e contínuos" },
  { numero: 5, nome: "Luva de raspa", imagem: "img/5.png", texto: "Usada para proteger as mãos contra abrasão e calor" },
  { numero: 6, nome: "Luva de vaqueta", imagem: "img/6.png", texto: "Usada para proteger as mãos" },
  { numero: 7, nome: "Luva de borracha", imagem: "img/7.png", texto: "Serve para proteger contra produtos químicos e líquidos" },
  { numero: 8, nome: "Luva nitrílica", imagem: "img/8.png", texto: "Usada para resistência a óleos e solventes" },
  { numero: 9, nome: "Luva térmica", imagem: "img/9.png", texto: "Serve para proteger contra altas ou baixas temperaturas" },
  { numero: 10, nome: "Luva antiestática", imagem: "img/10.png", texto: "Usada para evitar descargas eletrostáticas" },
  { numero: 11, nome: "Luva anticorte", imagem: "img/11.png", texto: "Serve para proteger as mãos contra cortes e perfurações" },
  { numero: 12, nome: "Luva para eletricista", imagem: "img/12.png", texto: "Usada para isolar contra choques elétricos" },
  { numero: 13, nome: "Luva de malha de aço", imagem: "img/13.png", texto: "Usada para proteção contra cortes" },
  { numero: 14, nome: "Máscara PFF1", imagem: "img/14.png", texto: "Serve para filtrar poeiras e névoas" },
  { numero: 15, nome: "Máscara PFF2", imagem: "img/15.png", texto: "Usada para proteger contra poeiras e névoas" },
  { numero: 16, nome: "Respirador semifacial", imagem: "img/16.png", texto: "Serve para filtrar vapores, gases e partículas" },
  { numero: 17, nome: "Respirador facial completo", imagem: "img/17.png", texto: "Usado para proteger contra agentes nocivos" },
  { numero: 18, nome: "Filtro químico para respirador", imagem: "img/18.png", texto: "Serve para neutralizar gases e vapores perigosos" },
  { numero: 19, nome: "Avental de PVC", imagem: "img/19.png", texto: "Usado para proteger contra produtos químicos líquidos" },
  { numero: 20, nome: "Avental de raspa", imagem: "img/20.png", texto: "Usado para resistir ao calor e respingos metálicos" },
  { numero: 21, nome: "Avental de vaqueta", imagem: "img/21.png", texto: "Usado para proteger o tronco em serviços com atrito" },
  { numero: 22, nome: "Avental térmico", imagem: "img/22.png", texto: "Usado para isolar o calor em atividades com alta temperatura" },
  { numero: 23, nome: "Bota de PVC", imagem: "img/23.png", texto: "Usada para proteger os pés em locais úmidos" },
  { numero: 24, nome: "Bota com biqueira de aço", imagem: "img/24.png", texto: "Serve para proteger os pés contra impactos" },
  { numero: 25, nome: "Bota antiderrapante", imagem: "img/25.png", texto: "Usada para evitar escorregões em pisos molhados" },
  { numero: 26, nome: "Sapato de segurança", imagem: "img/26.png", texto: "Serve para proteger os pés em ambientes industriais" },
  { numero: 27, nome: "Perneira de raspa", imagem: "img/27.png", texto: "Usada para proteger as pernas contra faíscas e cortes" },
  { numero: 28, nome: "Calça anti-chamas", imagem: "img/28.png", texto: "Serve para resistir ao fogo e altas temperaturas" },
  { numero: 29, nome: "Jaqueta anti-chamas", imagem: "img/29.png", texto: "Usada para proteger o tronco contra queimaduras" },
  { numero: 30, nome: "Cinturão tipo paraquedista", imagem: "img/30.png", texto: "Usado para evitar quedas em trabalho em altura" },
  { numero: 31, nome: "Capacete com jugular", imagem: "img/31.png", texto: "Serve para manter proteger a cabeça" },
  { numero: 32, nome: "Protetor facial", imagem: "img/32.png", texto: "Usado para proteger o rosto contra respingos e impactos" },
  { numero: 33, nome: "Óculos com lente incolor", imagem: "img/33.png", texto: "Usado para proteger os olhos" },
  { numero: 34, nome: "Óculos com lente escura", imagem: "img/34.png", texto: "Usado para proteger contra claridade e solda" },
  { numero: 35, nome: "Óculos panorâmico", imagem: "img/35.png", texto: "Serve para oferecer ampla visão com proteção total" },
  { numero: 36, nome: "Máscara de solda", imagem: "img/36.png", texto: "Usada para bloquear luz intensa e faíscas da solda" },
  { numero: 37, nome: "Máscara de solda automática", imagem: "img/37.png", texto: "Serve para escurecer automaticamente durante a solda" },
  { numero: 38, nome: "Colete refletivo", imagem: "img/38.png", texto: "Usado para aumentar a visibilidade do trabalhador" },
  { numero: 39, nome: "Capa de chuva", imagem: "img/39.png", texto: "Usada para manter o corpo seco em ambientes externos" },
  { numero: 40, nome: "Camisa de manga longa", imagem: "img/40.png", texto: "Usada para proteger os braços contra riscos leves" },
  { numero: 41, nome: "Kit de primeiros socorros individual", imagem: "img/41.png", texto: "Serve para atender ferimentos leves rapidamente" },
  { numero: 42, nome: "Extintor de incêndio", imagem: "img/42.png", texto: "Usado para apagar focos de incêndio iniciais" },
  { numero: 43, nome: "Chuveiro de emergência", imagem: "img/43.png", texto: "Serve para lavar o corpo em casos de contaminação" },
  { numero: 44, nome: "Mangueira de Hidrante", imagem: "img/44.png", texto: "Usada para combater incêndios de forma coletiva" },
  { numero: 45, nome: "Placa uso obrigatório de EPI", imagem: "img/45.png", texto: "Serve para sinalizar onde o uso de EPI é obrigatório" },
  { numero: 46, nome: "Placa proibido fumar", imagem: "img/46.png", texto: "Usada para proibir o fumo em locais perigosos" },
  { numero: 47, nome: "Placa risco 220 volts", imagem: "img/47.png", texto: "Serve para alertar sobre risco de choque elétrico" },
  { numero: 48, nome: "Placa proibido uso do celular", imagem: "img/48.png", texto: "Usada para evitar distrações em áreas críticas" },
  { numero: 49, nome: "Placa aviso de acesso restrito", imagem: "img/49.png", texto: "Serve para restringir entrada a pessoas autorizadas" },
  { numero: 50, nome: "Placa use o corrimão", imagem: "img/50.png", texto: "Usada para orientar segurança em escadas" },
  { numero: 51, nome: "Placa piso escorregadio", imagem: "img/51.png", texto: "Serve para alertar sobre risco de escorregamento" }
];


    const sorteados = new Set();

    function mostrarEPI() {
      const numero = parseInt(document.getElementById("numeroInput").value);
      const epi = epis.find(e => e.numero === numero);

      if (!epi) {
        alert("EPI não encontrado!");
        return;
      }

      if (sorteados.has(epi.numero)) {
        alert("Este EPI já foi mostrado!");
        return;
      }

      // Atualiza o card
      document.getElementById("fotoEPI").src = epi.imagem;
      document.getElementById("numeroEPI").innerText = `Nº ${epi.numero}`;
      document.getElementById("nomeEPI").innerText = epi.nome.toUpperCase();
      document.getElementById("texto").innerText = epi.texto.toUpperCase();
      document.getElementById("historicoEPI").style.backgroundColor="white";

      // Adiciona ao histórico
      const historico = document.getElementById("historicoEPI");
      const item = document.createElement("div");
      item.classList.add("item-historico");
      item.innerHTML = `
        <img src="${epi.imagem}" alt="${epi.nome.toUpperCase()}">
        <div class="numero">${epi.numero}</div>
        <div class="nome">${epi.nome.toUpperCase()}</div>
      `;
      historico.appendChild(item);

      sorteados.add(epi.numero); // marca como já mostrado
      document.getElementById("numeroInput").value = "";
    }
