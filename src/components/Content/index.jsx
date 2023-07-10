import './content.scss'

import { Slider } from "../Slider";
import { Titulo } from "../Titulo";
import { Pillars } from "../Pillars";

export const Content = () => {

    return(
        <main className="layout__main">
            <Slider />
            <Titulo />
            <Pillars />
        </main>
    )

}