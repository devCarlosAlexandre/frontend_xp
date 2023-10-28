import styles from '../css/produtos.css'

export function Produtos () {
  return (
    <div className='body'>
      <div className='card_Produto'>
        <div className='div_texto'>
          <h1 className='nome_produto'>Nome</h1>
          <p className='descricao_produto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was </p>
          <div className='botao'><p>Avaliar produto</p></div>
        </div>
        <div className='imagem_card'>Imagem do produto</div>
      </div>
    </div>
  );
}

