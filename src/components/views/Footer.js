export default function Footer() {
    return (
        <div className={"footer-container"}>
            <div className={"footer-contact"}>
                <h1>Contacts</h1>
                <p>samuel.neveu@epitech.eu</p>
                <p>07 81 21 67 79</p>
            </div>
            <div className={'footer-cv-ctn'}>
                <div className={"footer-button"}>
                    <div onClick={()=>window.open(`https://samuelneveu.github.io/CV/srt-resume.html`, '_blank')} className=" send-btn" ><div className={'send-span'}>CV</div></div>
                </div>
            </div>
            <div className={"footer-contact"}>
                <h1>Réseaux</h1>
                <p className={"contact-link"} onClick={()=>window.open(`https://github.com/SamuelNeveu`, '_blank')}>github.com/SamuelNeveu</p>
                <p className={"contact-link"} onClick={()=>window.open(`https://github.com/FindTheFox`, '_blank')}>github.com/FindTheFox</p>
                <p className={"contact-link"} onClick={()=>window.open(`https://linkedin.com/in/samuel-neveu-29b7b0217`, '_blank')}>linkedin.com/in/samuel-neveu-29b7b0217</p>
            </div>
        </div>
    )
}
