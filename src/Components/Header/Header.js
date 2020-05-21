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
        <header className="header">
            <div className="conteiner">
                <div className="logo">
                    <div className="logo__img"><img src={headerIcon} style={styles.divIcon} alt="logo"></img></div>
                    <a href="#logo" className="logo">StudyGo</a>
                </div>
                <nav className="menu">
                    <a className="menu__main" href="#home">Главная</a>
                    <a href="menu__contacts">Контакты</a>
                    <a href="menu__about">О нас</a>
                </nav>
            </div>
        </header>
    )
}

export default Header