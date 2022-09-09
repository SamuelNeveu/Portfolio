import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Input from "./inputs/input";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState("Let's Talk !");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('FORM', form.current);
        if (name !== "" && email !== "" && message !== "") {
            emailjs.sendForm('service_t3pjfm8', 'template_yrptplo', form.current, 'RStpDyVXYVv_HSxHd')
                .then((result) => {
                    console.log(result);
                    setTitle("Merci, see you !");

                }, (error) => {
                    setTitle("Ca n'a pas marché :/");
                    console.log(error.text);
                    console.log(email, name, message)

                });
        }
        else {
            console.log(email, name, message)
            console.log('EMPTYYY')
            setTitle("A field is Empty");
        }

    };

    const handleEmailChange = (value) => {
        console.log("EMAIL", value)
        setEmail({ ...email, value });
    };

    const handleNameChange = (value) => {
        console.log("NAME", value)
        setName({ ...name, value });
    };
    const handleMessageChange = (e) => {
        let val = e.target.value
        setMessage({ ...message, val});
    };


    return (
        <div className={"container-footer"}>
            <div className={'talk'}>
                <h1>{title}</h1>
            </div>

            <form className={"ContactUsForm"} ref={form} onSubmit={sendEmail}>
                <div className={"ContactUsForm-box"}
                     data-aos={'zoom-in'}
                     data-aos-anchor=".container-footer"
                     data-aos-offset="100"
                     data-aos-duration="200">
                    <div className={"Input Input-text"}>
                        <Input id={1}
                               label="Full Name"
                               predicted="Thierry Henry"
                               locked={false}
                               active={false}
                               value={name}
                               onChange={handleNameChange}
                               type="text" name="user_name"/>
                    </div>
                    <div className={"Input Input-text"}>
                        <Input id={1}
                               label="Email"
                               predicted="thierryhenry@gmail.com"
                               locked={false}
                               active={false}
                               value={email}
                               type="email" name="user_email"
                               onChange={handleEmailChange}
                        />
                    </div>
                    <div className={"Input Input-textarea"}>
                        <textarea onChange={handleMessageChange} className={"textarea"} name="message" placeholder={"May I help you ?"}/>
                    </div>
                    <div className={"send-ctn"}>
                        <input className={"send"} type="submit" value="Send" />
                    </div>
                </div>
            </form>
        </div>
    );
};

