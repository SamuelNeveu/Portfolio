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
        maxFontSize: 140,
        onStart,
        onFinish });

    return (
        <div className={"container"}>
            <div className={"box-two"}>
                <div className={"box-two-left"}
                     data-aos={'fade-right'}
                     data-aos-anchor=".container"
                     data-aos-offset="200"
                     data-aos-duration="500">
                    <p ref={ref} style={{fontSize}} className={"box-two-left-text"} >Etudiant en informatique depuis 4 ans, junior développeur. Je me passionne depuis
                        petit pour les nouvelles technologies, le Développement Durable et les avancées techniques de ce
                        secteur.</p>



                </div>
                <div className={"box-two-center"}>

                </div>
                <div className={"box-twp-right"}>
                    <p ref={ref} style={{fontSize}}
                       data-aos={'fade-left'}
                       data-aos-anchor=".box-twp-right"
                       data-aos-offset="100"
                       data-aos-duration="500"
                       className={"box-twp-right-p"} >L'enseignement reçu au cours de mon parcours
                        en Grande Ecole du Numérique, m'a permis
                        d'acquérir une rigeur d'architecture de programmation, une autonomie dans la recherche et la
                        transmission de l'information, un calme et une patience à toute épreuve.</p>
                    <p ref={ref} style={{fontSize, fontFamily: "FlatformLight"}}
                       data-aos={'fade-up-left'}
                       data-aos-anchor=".box-twp-right"
                       data-aos-offset="200"
                       data-aos-duration="700"
                       className={"box-twp-right-p"}> J'y ai aussi pu forger
                        et nourir ma curiosité en m'entourant de personnes
                        passionnées et passionnantes.</p>
                    <p ref={ref} style={{fontSize}}
                       data-aos={'fade-up-left'}
                       data-aos-anchor=".box-twp-right"
                       data-aos-offset="200"
                       data-aos-duration="800"
                       className={"box-twp-right-p"} >J'ai eu l'opportunité d'accomplir, durant ma scolarité
                        et sur mon temps libre, de réaliser de nombreux projets de programmation sur différent supports :
                        Application mobile, logiciel, web, système, réseau.</p>
                </div>
            </div>
        </div>
    );
}
