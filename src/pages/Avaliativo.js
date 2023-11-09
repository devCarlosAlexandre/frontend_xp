import styles from "../css/avaliativo.css";

export function Avaliativo() {
  return (
    <div>
      <div className="body_avaliativo">
        <div className="imagem">Imagem do produto</div>
        <div className="card_avaliativo">
          <div className="nome">
            <p className="p_nome">Nome</p>
          </div>
          <div className="informativo">
            <p className="p_informativo">Informativoo</p>
          </div>
          <div className="descricaoAv">
            <p className="p_descricaoAv">Descrição</p>
          </div>
        </div>
      </div>

      <div className="novaAv">
        <p>Campo de inserir nova avaliação do produto</p>
      </div>
      <div className="botaoAdicionar">
        <p>Adicionar</p>
      </div>

      <div>Outras avaliações</div>
    </div>
  );
}
