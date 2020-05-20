import React from 'react'
import headerIcon from './headerIcon2.png'
// import PropTypes from 'prop-types'

const styles = {
    div: {
        padding: "0",
        width: "100%",
        height: "65px",
        // backgroundColor: "#212121",
        backgroundColor: "darkblue",
        color: "white",
        },
    divHeader: {
        display: 'flex',
        alignItems: 'center',
        width: "70%",
        margin: "0 auto"
    },
    divIcon: {
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '35px'
    }
}

function Header() {
    return (
        // <div style={styles.div}>
        //     < style={styles.divHeader}>
        //       <img src={headerIcon} style={styles.divIcon} alt="logo"></img>
        //       <span>StudyGo</span>
        //     </div>
        // </div>

        <header className="header">
            <div className="conteiner">
                <div className="wrap-logo">
                    <a href="#logo" className="logo"><img src={headerIcon} style={styles.divIcon} alt="logo"></img>StudyGo</a>
                </div>
                <nav>
                    <a className="active" href="#home">Главная</a>
                    <a href="#contact">Контакты</a>
                    <a href="#about">О нас</a>
                </nav>
            </div>
        </header>
    )
}

export default Header