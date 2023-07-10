import './slider.scss'
import imagen1 from './imgs/imagen_1.jpg';
import imagen2 from './imgs/imagen_2.jpg';
import imagen3 from './imgs/imagen_3.jpg';
import imagen4 from './imgs/imagen_4.jpg';

export const Slider = () => {

    return(

        <section className="layout__slider">
            <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Imagen 1"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Imagen 2"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Imagen 3"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Imagen 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className="d-block w-100 imagen-carousel" alt="Equipos gaming" width="640px" height="480px" />
                        <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                            <h5>First Image</h5>
                            <p>Gaming Setup 1</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100 imagen-carousel" alt="Equipos gaming" width="640px" height="480px"></img>
                        <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                            <h5>Second Image</h5>
                            <p>Gaming Setup 2</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen3} className="d-block w-100 imagen-carousel" alt="Equipos gaming" width="640px" height="480px"></img>
                        <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                            <h5>Third Image</h5>
                            <p>Gaming Setup 3</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen4} className="d-block w-100 imagen-carousel" alt="Equipos gaming" width="640px" height="480px"></img>
                        <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                            <h5>Fourth Image</h5>
                            <p>Gaming Setup 4</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </section>
            
    )

}