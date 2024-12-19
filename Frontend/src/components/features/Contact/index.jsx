import styled from "styled-components";
import { Loader } from "../../ui/Loader";

const ContactWrapper = styled.p`
    text-align: center;
    margin: 120px 0;
`

const StyledLoader = styled(Loader)`
    padding: 100px;
    border-radius: 100%;
`

const ContactForm = () => {

    return (
        <>
            <ContactWrapper>
                En construction, revenez bientôt ..
            </ContactWrapper>
            <StyledLoader />
        </>
    )
}

export default ContactForm;