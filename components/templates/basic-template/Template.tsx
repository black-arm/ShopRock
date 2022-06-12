import { Navbar } from "../../"


export const Template = ({ children }: any) => {

    return (
    <>
        <div>
            <Navbar />
        </div>
        <div>
            {children}
        </div>
        <div>
            qui andrà il footer
        </div>
    </>
    )

}