import * as React from 'react';
//import PropTypes from 'prop-types'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {
    NavLink
  } from "react-router-dom";

export interface Props {
    /** The user's name */
    title: string;
    /** Should the name be rendered in bold */
    priority: boolean
}
const menu = ['ENTRER UNE FEUILLE DE PRESTATIONS', 'NOTES DE FRAIS', 'SOUMETTRE LA FACTURE', 'HISTORIQUE', 'ENTREPRISE', 'AIDE']

const HeaderComponent = ({ title }: Partial<Props>) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" style={{ borderBottom: "1px solid rgba(0,0,0,.1)", borderTop: "0px solid rgba(0,0,0,.1)" }}>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                   
                            <NavLink className="nav-link" to="/cra">Entree Feuille d'activite</NavLink>
                       
                      
                            <NavLink className="nav-link" to="/frais">Note de Frais</NavLink>
                      
                        
                            <NavLink className="nav-link" to="/factures">
                            Editer Factures
                            </NavLink>
                      
                        <NavDropdown title="Historiques" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Aide</NavDropdown.Item>
                        </NavDropdown>
                      
                            <NavLink className="nav-link"  to="/aides">Entreprise</NavLink>
                        
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}
HeaderComponent.defaultProps = {
    title: 'Task Runner '
}
export default HeaderComponent; 