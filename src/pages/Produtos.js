import styles from '../css/produtos.css'

export function Produtos () {
  return (
    <div className='body'>
      <div className='card'>
      <div className='card_produto'>
      <div className='card_informativo'>
        <div className='titulo'><p className='p_titulo'>Titulo produto</p></div>
        <div className='descricao'><p className='p_descricao'>Descrição do produto</p></div>
      </div>
      <div className='card_imagem'>Imagem do produto</div>
      </div>
    </div>
    </div>
  );
}

