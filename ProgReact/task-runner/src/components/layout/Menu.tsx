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
                {/* <header>
                    <div style={{ height: "60px" }} className={MenuStyle.Logo}>
                        <Row>
                            <Col xs={6} md={4}>
                                <table style={{ width: "100%" }}>
                                    <tr>
                                        <td style={{ paddingLeft: "60px", width: "28%" }}>
                                            <img src={logo} alt="Logo" width={60} height={60} />
                                        </td>
                                        <td>
                                            <div style={{ borderLeft: "1px solid rgba(0,0,0,.2)", height: "50px"}}>
                                                <div style={{marginTop:"-10px", marginLeft: "5px"}} className={MenuStyle.FontLogoTitle}>
                                                    <h5>WORKFLOW</h5>
                                                    <p>Declaration sheet</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </Col>
                            <Col xs={6} md={8}>

                            </Col>
                        </Row>
                    </div>
                </header> */}
                <header className={MenuStyle.Logo}>
                    <Header />
                </header>
            </div>
        </>
    )
}

export default MenuComponent;