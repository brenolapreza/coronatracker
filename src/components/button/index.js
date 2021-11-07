import ButtonStyle from './style'

import { Link } from 'react-router-dom';

export default function Button(props){
    return(
        <ButtonStyle>
            
            <Link to={props.link}>{props.text}</Link>
        </ButtonStyle>
    )
}