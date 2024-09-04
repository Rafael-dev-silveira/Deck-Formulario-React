import { useState } from "react"
import "./form.css"

const Form = (props) => {

    const [inputs, setInputs] = useState({
        image: "",
        value: "",
        suit: ""
    })

    const handleInputChange = (event) => {
        const { target } = event
        const { name } = target
        const { value } = target

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addCard(inputs)
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="image">Endereço da imagem da carta </label>
                <input type="text" id="image" name="image" onChange={handleInputChange}
                value={inputs.image} />
                <p>Coloque este endereço: https://deckofcardsapi.com/static/img/KC.png</p>
                <p>Outra carta : https://deckofcardsapi.com/static/img/2H.png</p>
                <p>Atualize a página para trocar de carta</p>
            </div>
            <div>
                <label htmlFor="value">Nome da carta </label>
                <input type="text" id="value" name="value" onChange={handleInputChange}
                value={inputs.value} />
            </div>
            <div>
                <label htmlFor="suit">Naipe da carta </label>
                <input type="text" id="suit" name="suit" onChange={handleInputChange}
                value={inputs.suit} />
            </div>
            <input className="botao" type="submit" />
        </form>       
        </>
    )
}

export default Form