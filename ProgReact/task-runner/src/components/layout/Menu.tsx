import * as React from 'react';
import Header from './Header'

type Props ={
    children?: React.ReactNode
}
const MenuComponent = ({children}: Props)=> {

return(
    <>
        <Header/> 
    </>
)
}

export default MenuComponent;