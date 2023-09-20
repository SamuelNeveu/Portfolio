import useFitText from "use-fit-text";
import {useCallback, useEffect, useState} from "react";

export default function About() {
    const onStart = useCallback(() => {
        console.log("Example 3 resizing started");
    }, []);
    const onFinish = useCallback((fontSize) => {
        console.log("Example 3 resizing finished", fontSize);
    }, []);
    const { fontSize, ref } = useFitText({
        minFontSize: 12,
        maxFontSize: 140,
        onStart,
        onFinish });

    return (
        <div className={"container"} style={{marginTop: 8, marginBottom: 8}}>
            <div className={"box-two"}>
                <div className={"box-two-left"}
                     data-aos={'fade-right'}
                     data-aos-anchor=".container"
                     data-aos-offset="200"
                     data-aos-duration="500">
                    <p ref={ref} style={{fontSize}} className={"box-two-left-text"}>Freelance et alternant depuis deux ans. Passionné d'informatique et autodidacte. depuis
                        petit pour les nouvelles technologies, la programmation, la musique et le Développement Durable.</p>
                </div>

                <div className={"box-two-center"}/>
                
                <div className={"box-two-right"}>
                    <p ref={ref} style={{fontSize}}
                       data-aos={'fade-left'}
                       data-aos-anchor=".box-two-right"
                       data-aos-offset="100"
                       data-aos-duration="500"
                       className={"box-two-right-text"} >L'enseignement reçu au cours de mon parcours
                        en Grandes Ecoles du Numérique, m'a permis
                        d'acquérir une <u>rigeur</u> d'architecture et de programmation, une <u>autonomie</u> dans la recherche et la résolution de problèmes puis la <u>transmission</u> de l'information, un calme et une patience à toute épreuve.</p>

                    <p ref={ref} style={{fontSize}}
                       data-aos={'fade-left'}
                       data-aos-anchor=".box-two-right"
                       data-aos-offset="200"
                       data-aos-duration="700"
                       className={"box-two-right-text"}>L'école 42 m'a permis découvrir un écosystème 'dev' Français passionant et innovateur. Cela m'a donné goût aux évênements et rencontres. J'ai depuis eu la chance d'assister aux AgileTour, BreizhCamp et de participé au hackathon Recycle avec la ville de Rennes. Aussi, lors du Mobilis in Mobile à Nantes, j'ai pu accompagner l'équipe mobile HelloWork présenter notre <u>refonte en natif de l'application.</u></p>
                    
                    <p ref={ref} style={{fontSize}}
                       data-aos={'fade-left'}
                       data-aos-anchor=".box-two-right"
                       data-aos-offset="200"
                       data-aos-duration="800"
                       className={"box-two-right-text"}>J'ai eu l'opportunité durant mes missions, lors de ma scolaritée et sur mon temps libre, de réaliser de nombreux projets de programmation sur différent supports :
                        Application mobile, web frontend, backend, devops.</p>
                </div>
            </div>
        </div>
    );
}
