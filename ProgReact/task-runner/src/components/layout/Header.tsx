import * as React from 'react';
//import PropTypes from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap';

export interface Props {
    /** The user's name */
    title: string;
    /** Should the name be rendered in bold */
    priority: boolean
}

const HeaderComponent = ({ title }: Partial<Props>) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" style={{borderBottom: "1px solid rgba(0,0,0,.1)", borderTop: "1px solid rgba(0,0,0,.1)"}}>
                {['ENTRER UNE FEUILLE DE PRESTATIONS', 'NOTES DE FRAIS', 'SOUMETTRE LA FACTURE', 'HISTORIQUE', 'ENTREPRISE', 'AIDE'].map((el, index) => (
                    <Nav.Link key={index} href="#home">{`${el}`}</Nav.Link>
                ))}
            </Navbar>
        </>
    )
}
HeaderComponent.defaultProps = {
    title: 'Task Runner '
}
export default HeaderComponent; 