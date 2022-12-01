import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    logo: string  //Whatsapp.png
    phone: string //3203333333
    message: string //Estas cominicandote con nosotros Prro
    width: number //80px
    height: number //80px
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")

    return (
        <>

            <div className='fixed bottom-2 right-2 flex flexColum'>
                <a href={` https://wa.me/${phone}?text=${formattedMessage}`}
                    target="_blank"
                    rel='noreferrer noopener'
                >
                    <img src={logo}
                        width={width}
                        height={height}
                        alt="Logo de Whatsapp" />
                </a>

            </div>

        </>
    )

}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3165380823",
    message: "Rooster Al Horno",
    width: 60,
    height: 60
}

WhatsappButton.schema = {
    title: "Boton de Whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de Whatsapp relacionado ala marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Telefono",
            description: "Agrega  por favor el numero de telefono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "Agrega  por favor el mensaje que se vera",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Telefono",
            description: "Agrega  por favor el numero de telefono",
            type: "number"
        },
        height: {
            title: "Telefono",
            description: "Agrega  por favor el numero de telefono",
            type: "number"
        }
    }
}


export default WhatsappButton