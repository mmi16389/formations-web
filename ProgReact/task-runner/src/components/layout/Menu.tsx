import * as React from 'react'
import Header from './Header'

import MenuStyle from '../../styles/Menu.module.scss'
import logo from '../../assets/logo.png'

import { Row, Col } from 'react-bootstrap'


type Props = {
    children?: React.ReactNode
}
const MenuComponent = ({ children }: Props) => {

    return (
        <>
            <div style={{ position: "fixed", left: "0", right: "0", top: "0" }}>
                <header>
                    <div style={{ height: "80px" }} className={MenuStyle.Logo}>
                        <Row>
                            <Col xs={6} md={4}>
                                <div style={{ color: "rgba(0,0,0,.3)", paddingLeft: "60px" }}>
                                    <img src={logo} alt="Logo" width={100} height={80} /> 
                                </div>
                            </Col>
                            <Col xs={6} md={8}>

                            </Col>
                        </Row>
                    </div>
                </header>
                <header>
                    <Header />
                </header>
            </div>
        </>
    )
}

export default MenuComponent;