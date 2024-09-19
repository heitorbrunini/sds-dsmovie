import './styles.css';


function Contact() {


    return (
        <div className="container ">

            <h2>Projeto CineNine</h2>


            <div className="col" data-bs-theme="dark">
                <div className="row">

                    <div className="container">
                        <h1>Entre em Contato</h1>

                        <form action="/enviar-contato" method="POST">
                            <label >Nome:</label>
                            <input type="text" id="name" name="name" required/>

                            <label >E-mail:</label>
                            <input type="email" id="email" name="email" required/>

                                <label >Mensagem:</label>
                                <textarea id="message" name="message" required></textarea>

                                <button type="submit">Enviar Mensagem</button>
                        </form>

                        <div className="contact-info">
                            <h2>Informações de Contato</h2>
                            <p><strong>Endereço:</strong> Rua Exemplo, 123 - Centro, Cidade, Estado</p>
                            <p><strong>Telefone:</strong> (83) 99156-1757</p>
                            <p><strong>E-mail:</strong> heitor.brunini@gmail.com.br</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>

    );
}

export default Contact;