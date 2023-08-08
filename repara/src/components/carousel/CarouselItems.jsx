import Button from '../button'

function CarouselItems() {

    const carouselItems = [
        {title: 'Seu aparelho está com problemas?', text: 'Fique tranquilo. Traga seu aparelho até nós, receba um orçamento na hora e tenha seu aparelho recuperado em até 24horas.', active: 'active'},
        {title: 'Troca de telas e de bateria:', text: 'Se sua tela quebrou ou se sua bateria está com problema, traga seu aparelho até nós. Iremos substituir por outro original.', active: ''},
        {title: 'Danos causados por vírus?', text: 'Não se preocupe, iremos fazer uma verificação completa no seu aparelho e restaurar os dados corrompidos, logo você terá seus arquivos de volta!', active: ''},
    ]

  return (
    <article className="carousel_container carousel-inner mt-auto">
        {carouselItems && carouselItems.map((item, index) => (
            <div key={index} className={`carousel-item container ${item.active}`}>
                <div className="carousel-caption row">
                    <div className="col-lg-8 carousel_item__content">
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <Button destiny="#" text="Entrar em contato" />
                    </div>
                </div>
            </div>
        ))}
    </article>
  )
}

export default CarouselItems