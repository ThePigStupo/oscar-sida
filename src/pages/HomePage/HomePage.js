import React from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent.js';
import oscar from '../../assets/images/oscar.jpg';

class HomePage extends React.Component {
    render() {
        return (
            <>
                <MenuComponent/>
                <div className="container">
                    <h1>Oscars sida</h1>
                    <p><img src={oscar} width="500" alt="Oscar"/></p>
                    Hej! Välkommen till min sida! Här kan du läsa om mina katter: Alfons, Gumzan Och Tage! Och min hund Harry!!
                </div>

            </>
        )
    }
}

export default HomePage;
