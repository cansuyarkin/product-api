import { Placeholder } from "react-bootstrap"

export const LoadingComponent = () => (  
        <>
            <h1>Yukleniyor...</h1>
            <>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="wave">
                    <Placeholder xs={12} />
                </Placeholder>
            </>
        </>
)

