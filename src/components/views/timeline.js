import {useCallback} from "react";
import useFitText from "use-fit-text";

export default function Timeline() {
    const onStart = useCallback(() => {
        console.log("Example 3 resizing started");
    }, []);
    const onFinish = useCallback((fontSize) => {
        console.log("Example 3 resizing finished", fontSize);
    }, []);
    const { fontSize, ref } = useFitText({
        maxFontSize: 80,
        onStart,
        onFinish });

    return (
        <div className={"container-three"}>
            <div className={"box-three"}>
                <div className={"box-three-left"}>

                    <div className="card-timeline card-left"
                         data-aos={'fade-down-right'}
                         data-aos-anchor=".container-three"
                         data-aos-offset="100"
                         data-aos-duration="200">
                        <div className="card-body">

                            <h1 className="card-title">2022</h1>
                            <p ref={ref} style={{fontSize}} className="card-detail"><strong>HelloWork</strong><br/><br/>Réalisation d'un projet d'alternance dans le cadre de ma
                                deuxième année.</p>
                        </div>
                    </div>
                    <div className="card-timeline card-left"
                         data-aos={'fade-right'}
                         data-aos-anchor=".container-three"
                         data-aos-offset="300"
                         data-aos-duration="300">
                        <div className="card-body">

                            <h1 className="card-title">2021</h1>
                            <p ref={ref} style={{fontSize}} className="card-detail"><strong> - Rennes - </strong><br/><br/>Technicien système et réseau - FranceTv, RadioFrance</p>
                        </div>
                    </div>
                    <div className="card-timeline card-left"
                         data-aos={'fade-up-right'}
                         data-aos-anchor=".container-three  "
                         data-aos-offset="500"
                         data-aos-duration="500">

                        <div className="card-body">

                            <h1 className="card-title">2018</h1>
                            <p ref={ref} style={{fontSize}} className="card-detail"><strong> - lycée bréquigny - </strong><br/><br/>Terminale STI2D<br/>Piscine
                                Ecole 42 Paris</p>

                        </div>
                    </div>
                </div>
                <div className={"box-three-right"}>
                    <div className="card-timeline card-right"
                         data-aos={'fade-down-left'}
                         data-aos-anchor=".container-three"
                         data-aos-offset="200"
                         data-aos-duration="4°0">
                        <div className="card-body">

                            <h1 className="card-title">Novembre 2021 - aujourd'hui</h1>
                            <p ref={ref} style={{fontSize}} className="card-detail"><strong> - Epitech Rennes - </strong><br/><br/>Cursus en 2
                                années<br/>Intégrateur web et mobile</p>
                        </div>
                    </div>
                    <div className="card-timeline card-right"
                         data-aos={'fade-up-left'}
                         data-aos-anchor=".container-three  "
                         data-aos-offset="600"
                         data-aos-duration="500">
                        <div className="card-body">

                            <h1 className="card-title">2018-2020</h1>
                            <p className="card-detail"><strong> - Ecole 42 Paris - </strong><br/><br/>Scolarité cursus
                                Architecte en technologie du numérique</p>
                        </div>
                    </div>

                </div>
                {/*    <div className="card">*/}
                {/*        <div className="card-body">*/}
                {/*            <h1 className="card-title">2018-2020</h1>*/}
                {/*            <p className="card-detail"><strong> - Ecole 42 Paris - </strong><br/>Scolarité cursus*/}
                {/*                Architecte en technologie du numérique</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="card">*/}
                {/*        <div className="card-body">*/}
                {/*            <h1 className="card-title">2021</h1>*/}
                {/*            <p className="card-detail"><strong> - Rennes - </strong><br/>Technicien système et réseau*/}
                {/*                - FranceTv, RadioFrance</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="card">*/}
                {/*        <div className="card-body">*/}
                {/*            <h1 className="card-title">Novembre 2021 - aujourd'hui</h1>*/}
                {/*            <p className="card-detail"><strong> - Epitech Rennes - </strong><br/>Cursus en 2*/}
                {/*                années<br/>Intégrateur web et mobile</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="card">*/}
                {/*        <div className="card-body">*/}
                {/*            <h1 className="card-title">2022</h1>*/}
                {/*            <p className="card-detail">Réalisation d'un projet d'alternance dans le cadre de ma*/}
                {/*                deuxième année.<br/><strong>Ceci validera ma derniere année et me permettra de*/}
                {/*                    commencer une vie professionelle.</strong></p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
