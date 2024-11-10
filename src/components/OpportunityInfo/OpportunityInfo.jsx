import OpportunityInfoTop from "./OpportunityInfoTop";
import OpportunityDescription from "./OpportunityDescription";
import ContactInfoFooter from "../ContactInfoFooter/ContactInfoFooter";
import { useParams } from 'react-router-dom';


const  OpportunityInfo =()=>{
    const { id } = useParams();
    return(
        <div>
            <OpportunityInfoTop id1={id}/>
            <OpportunityDescription/>
            <ContactInfoFooter/>
        </div>
    )

}
export default OpportunityInfo;