import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/32225403?s=460&u=9c1a04035cc7b4e8749679fd87d0732c26a3dcd4&v=4" alt="Jean Jacques" />
                <div>
                    <strong>Jean Jacques Barros</strong>
                    <span>Python</span>
                </div>
            </header>
            <p>
                Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;