import profile from "../../assets/img/home-profil.jpg"
import {useEffect, useCallback} from "react";
import AOS from "aos";
import useFitText from "use-fit-text";

export default function Hi() {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1200,
    //     });
    // }, []);
    const onStart = useCallback(() => {
        console.log("Example 3 resizing started");
    }, []);
    const onFinish = useCallback((fontSize) => {
        console.log("Example 3 resizing finished", fontSize);
    }, []);
    const { fontSize, ref } = useFitText({ maxFontSize: 2000, onStart, onFinish });


    return (<div className={"container-one"}>
        <div className={"article"}>
            <div ref={ref} className="text-overlay ttop"
                 data-aos="fade-right"
                 data-aos-anchor=".article"
                 data-aos-offset="5"
                 data-aos-duration="500"
                 style={{fontSize}}>Hi !</div>
            <div ref={ref} className="text-overlay tbottom"
                 data-aos="fade-left"
                 data-aos-anchor=".article"
                 data-aos-offset="5"
                 data-aos-duration="500"
                 style={{fontSize}}>Bonjour</div>

            <img src={profile} className="profile-image" alt="oups" />
        </div>
        </div>
    )
}
