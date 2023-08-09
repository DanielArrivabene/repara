import  '../../styles/components/ContactForm.scss'

function ContactForm() {
  return (
    <section id="contact_form">
        <div className="container">
            <h2 className="text-center">Entre em Contato</h2>
            <article className="row">
                <div className="col-md-9 form-container mx-auto">
                        <form method="POST" className="text-center">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Nome" name="Nome" />
                                </div>
                                <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Sobrenome" name="Sobrenome" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" placeholder="Email" name="Email" />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Telefone" name="Telefone" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <input type="text" className="description form-control" placeholder="Descrição" name="Descrição" />
                            </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </article>
        </div>
    </section>
  )
}

export default ContactForm