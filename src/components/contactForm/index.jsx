 import { BiSend } from 'react-icons/bi'
import './contact.css'

export const ContactForm = () => {
    return(
        <section className='inner-container-contact'>
            <div className='content-contact'>
                <form action="" className='form'>
                    <div className='input-groups'>
                        <div className='input-item'>
                            <span className='alert'>Campo Obrigatorio</span>
                            <input className='inputs' type="text" placeholder='Nome Completo' />
                        </div>
                        <div className='input-item'>
                            <span className='alert'>Campo Obrigatorio</span>
                            <input className='inputs' type="email" placeholder='E-Mail' />
                        </div>

                        <div className='input-items-group'>
                            <div className='input-item'>
                                <span className='alert'>Campo Obrigatorio</span>
                                <input className='inputs' type="number" placeholder='Telefone' />
                            </div>

                            <select name='departamento'>
                                <option value="">Selecione o Departamento</option>
                                <option value="comprar">Compras</option>
                                <option value="parceria">Parcerias</option>
                                <option value="parceria">Suporte</option>
                            </select>

                        </div>

                        <div className='input-item'>
                            <span className='alert'>Campo Obrigatorio</span>
                            <input className='inputs' type="text" placeholder='Assunto' />
                        </div>

                        <div className='input-item'>
                            <span className='alert'>Campo Obrigatorio</span>
                            <textarea className='inputs' type="text" placeholder='Mensagem' />
                        </div>
                    </div>

                    <div className='btn-group'>
                        <button className='send-btn'>
                            <span>Enviar</span>
                            <BiSend/>
                        </button>
                    </div> 
                </form>
            </div>
        </section>
    )
}