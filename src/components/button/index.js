import ButtonStyle from './style'

export default function Button(props){
    return(
        <ButtonStyle href={props.link}>{props.text}</ButtonStyle>
    )
}