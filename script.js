// ==========================================
// TROCAR IMAGEM
// ==========================================

function mudarImagem(tipo) {
  // Pega o SELECT correspondente
  let select = document.getElementById(tipo);

  // Pega a opção que está selecionada
  let opcaoSelecionada = select.options[select.selectedIndex];

  // Pega o caminho da imagem
  let caminhoImagem = opcaoSelecionada.getAttribute("data-imagem");

  // Descobre qual imagem precisa mudar

  let imagem;

  if (tipo === "jogo") {
    imagem = document.getElementById("imagemJogo");
  } else if (tipo === "serie") {
    imagem = document.getElementById("imagemSerie");
  } else if (tipo === "anime") {
    imagem = document.getElementById("imagemAnime");
  }

  // Se tiver uma imagem cadastrada,
  // coloca ela no elemento

  if (caminhoImagem) {
    imagem.src = caminhoImagem;
  }

  // Se não tiver nenhuma opção selecionada,
  // volta para a imagem padrão
  else {
    imagem.src = "imagens/sem-imagem.jpg";
  }
}

// ==========================================
// ALTERAR FOTO DE PERFIL
// ==========================================

function alterarFoto() {
  let caminho = prompt(
    "Digite o caminho da sua imagem.\n\n" +
      "Exemplo:\n" +
      "imagens/minha-foto.jpg",
  );

  if (caminho !== null && caminho.trim() !== "") {
    document.getElementById("fotoPerfil").src = caminho;
  }
}

// ==========================================
// GERAR PERFIL
// ==========================================

function gerarPerfil() {
  // --------------------------------------
  // DADOS PESSOAIS
  // --------------------------------------

  let nome = document.getElementById("nome").value;

  let idade = document.getElementById("idade").value;

  let pai = document.getElementById("pai").value;

  let mae = document.getElementById("mae").value;

  // --------------------------------------
  // GAMES
  // --------------------------------------

  let jogo = document.getElementById("jogo").value;

  // --------------------------------------
  // SÉRIE
  // --------------------------------------

  let serie = document.getElementById("serie").value;

  // --------------------------------------
  // ANIME
  // --------------------------------------

  let anime = document.getElementById("anime").value;

  // --------------------------------------
  // TALENTOS
  // --------------------------------------

  let talentos = [];

  let talentosSelecionados = document.querySelectorAll(
    'input[name="talento"]:checked',
  );

  talentosSelecionados.forEach(function (checkbox) {
    talentos.push(checkbox.value);
  });

  // --------------------------------------
  // IDIOMAS
  // --------------------------------------

  let idiomas = [];

  let idiomasSelecionados = document.querySelectorAll(
    'input[name="idioma"]:checked',
  );

  idiomasSelecionados.forEach(function (checkbox) {
    idiomas.push(checkbox.value);
  });

  // --------------------------------------
  // CONHECIMENTOS EM TI
  // --------------------------------------

  let conhecimentos = document.getElementById("conhecimentos").value;

  // --------------------------------------
  // RESULTADO
  // --------------------------------------

  let resultado = document.getElementById("resultado");

  resultado.innerHTML = `

        <h2>Perfil Gerado</h2>

        <br>

        <p>
            <strong>Nome:</strong>
            ${nome}
        </p>

        <p>
            <strong>Idade / Nascimento:</strong>
            ${idade}
        </p>

        <p>
            <strong>Nome do Pai:</strong>
            ${pai}
        </p>

        <p>
            <strong>Nome da Mãe:</strong>
            ${mae}
        </p>

        <p>
            <strong>Game favorito:</strong>
            ${jogo}
        </p>

        <p>
            <strong>Série favorita:</strong>
            ${serie}
        </p>

        <p>
            <strong>Anime favorito:</strong>
            ${anime}
        </p>

        <p>
            <strong>Talentos:</strong>
            ${talentos.length > 0 ? talentos.join(", ") : "Nenhum selecionado"}
        </p>

        <p>
            <strong>Idiomas:</strong>
            ${idiomas.length > 0 ? idiomas.join(", ") : "Nenhum selecionado"}
        </p>

        <p>
            <strong>Conhecimentos em TI:</strong>
            ${conhecimentos || "Nenhum informado"}
        </p>

    `;

  resultado.style.display = "block";
}

// ==========================================
// LIMPAR FORMULÁRIO
// ==========================================

function limparFormulario() {
  // --------------------------------------
  // LIMPAR CAMPOS
  // --------------------------------------

  document.getElementById("nome").value = "";

  document.getElementById("idade").value = "";

  document.getElementById("pai").value = "";

  document.getElementById("mae").value = "";

  document.getElementById("jogo").value = "";

  document.getElementById("serie").value = "";

  document.getElementById("anime").value = "";

  document.getElementById("conhecimentos").value = "";

  // --------------------------------------
  // VOLTAR IMAGENS PARA O PADRÃO
  // --------------------------------------

  document.getElementById("imagemJogo").src = "imagens/sem-imagem.jpg";

  document.getElementById("imagemSerie").src = "imagens/sem-imagem.jpg";

  document.getElementById("imagemAnime").src = "imagens/sem-imagem.jpg";

  // --------------------------------------
  // DESMARCAR CHECKBOXES
  // --------------------------------------

  let checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  // --------------------------------------
  // LIMPAR RESULTADO
  // --------------------------------------

  document.getElementById("resultado").style.display = "none";

  // --------------------------------------
  // RESETAR CONTADOR
  // --------------------------------------

  document.getElementById("contador").textContent = "0 / 250";
}

// ==========================================
// CONTADOR DO CAMPO DE TI
// ==========================================

let campoConhecimentos = document.getElementById("conhecimentos");

campoConhecimentos.addEventListener("input", function () {
  let quantidade = campoConhecimentos.value.length;

  document.getElementById("contador").textContent = quantidade + " / 250";
});
