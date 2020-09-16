import React from 'react';


const Curso = () => (
    
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://edteam-media.s3.amazonaws.com/courses/medium/f0b3c8c9-c922-4839-ae4e-4152b8b43c44.png" alt="Poster del curso"/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
        Programación orientada a objetos con Go
        </h3>
        <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
            <div className="circle img-container">
                <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/66f015b2-0dfb-4ba9-bd0d-f7a7e1855275.jpeg" alt="Tio alexis"/>
            </div>
            </div>
            <span className="small">Alexys Lozada</span>
        </div>
        </div>
        <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://google.com">$ 20USD</a>
        </div>
    </div>
    </article>

)


export default Curso;