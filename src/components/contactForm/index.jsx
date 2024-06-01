import { BiSend } from 'react-icons/bi'
import './contact.css'
import { useForm } from 'react-hook-form'

export const ContactForm = () => {

    const {register, handleSubmit,reset, formState: {errors}} = useForm()

    const OnClick = (data) => {
        console.log(data)
        reset()
    }

    return(
        <section className='inner-container-contact'>
            <div className='content-contact'>

                <form action="" className='form'>
                    <div className='input-groups'>
                        <div className='input-item'>
                            {errors.nome && <i>{errors.nome.message}</i>}
                            <input 
                                className='inputs' 
                                type="text" 
                                placeholder='Nome Completo'
                                id='nome'
                                {
                                    ...register('nome', {required: 'Campo obrigatorio'})
                                } />
                        </div>
                        <div className='input-item'>
                            {errors.email && <i>{errors.email.message}</i>}
                            <input 
                                className='inputs' 
                                type="email" 
                                id='email'
                                placeholder='E-Mail' 
                                {
                                    ...register('email', {required: 'Campo obrigatorio'})
                                }/>
                        </div>

                        <div className='input-items-group'>
                            <div className='input-item'>
                                
                                {errors.phone && <i>{errors.phone.message}</i>}
                                <input 
                                    className='inputs' 
                                    type="number" 
                                    placeholder='Telefone'
                                    id='phone' 
                                    {
                                        ...register('phone', {required: 'Campo obrigatorio'})
                                    }
                                    />
                            </div>

                            <select name='departamento'>
                                <option value="">Selecione o Departamento</option>
                                <option value="comprar">Compras</option>
                                <option value="parceria">Parcerias</option>
                                <option value="parceria">Suporte</option>
                            </select>

                        </div>

                        <div className='input-item'>
                            {errors.subject && <i>{errors.subject.message}</i>}  
                            <input 
                                className='inputs' 
                                type="text" 
                                placeholder='Assunto'
                                id='subject'
                                {
                                    ...register('subject', {required: 'Campo obrigatorio'})
                                }
                                 />
                        </div>

                        <div className='input-item'>
                            {errors.message && <i>{errors.message.message}</i>}
                            <textarea 
                                className='inputs' 
                                type="text" 
                                placeholder='Mensagem'
                                id='message' 
                                {
                                    ...register('message', {required: 'Campo obrigatorio'})
                                }/>
                        </div>
                    </div>

                    <div className='btn-group'>
                        <button type='submit' className='send-btn' onClick={handleSubmit(OnClick)}>
                            <span>Enviar</span>
                            <BiSend/>
                        </button>
                        <h1 className="logo">
                            Rocket<span>Store</span>Contato
                        </h1>
                    </div> 
                </form>
            </div>
        </section>
    )
}