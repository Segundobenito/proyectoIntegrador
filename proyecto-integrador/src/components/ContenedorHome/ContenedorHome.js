import React, { Component } from 'react'
import HomeCards from '../../components/HomeCards/HomeCards';


 class ContenedorHome extends Component {
    render() {
        return (
            <section>
                <article className = "articleCanciones">
                    <HomeCards />
                    <HomeCards />
                    <HomeCards />
                    <HomeCards />
                    <HomeCards />
                    <HomeCards />
                   
                
                </article>
            </section>
        )
    }
}

export default ContenedorHome;
