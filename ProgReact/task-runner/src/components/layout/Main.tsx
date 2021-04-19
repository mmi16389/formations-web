import Footer from './Footer'
type Props = {
    children?: React.ReactNode
}
const Main = ({children}: Props) => {
    return (
        <>
            <div style={{ minHeight: "500px"}}>
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>)
}
export default Main;