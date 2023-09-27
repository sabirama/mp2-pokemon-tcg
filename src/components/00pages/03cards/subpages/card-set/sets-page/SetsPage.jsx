/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import request from '../../../../../../lib/request'
import { Button } from 'react-bootstrap'
import CardIndividual from '../../CardIndividual'
import splash from '../../../../../../assets/images/splash.gif'
import './SetsPage.css'

const SetsPage = (props) => {
    const [cards, setCards] = useState([])
    const [setId, setSetId] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [toShow, setToShow] = useState(0)
    const [fullscreen, setFullscreen] = useState(true)
    const [show, setShow] = useState(false)

    const handleShow = (e) => {
        setFullscreen(true)
        setToShow(e.target.value)
        setShow(true)
    }

    async function getCards() {
        setLoading(true)
        setError(null)
        try {
            const { data } = await request.get(`/cards/?q=set.id:${setId}`)
            setCards(data.data)
            setLoading(false)
        } catch {
            setError('Error: failed to retrieve cards')
            setLoading(false)
        }
    }

    useEffect(() => {
        setSetId(props.id)
    }, [props.id])

    useEffect(() => {
        getCards()
    }, [setId])

    return (
        <div className="sets-cards-display">
            {cards.length > 0 ? (
                <div className="cards-display-header">
                    <img src={cards[0].set.images.logo} alt="" />
                </div>
            ) : (
                <h1>Select a set</h1>
            )}

            <div>
                {loading ? (
                    <div className="sets-loading-container">
                        <img src={splash} alt="" className="loading-img" />
                        <p className="sets-loading-text">
                            Fetching data. Please wait for a little while.
                        </p>
                    </div>
                ) : error ? (
                    cards.length == 0 ? (
                        ''
                    ) : (
                        <p>Error: {error.message}</p>
                    )
                ) : cards ? (
                    <div className="card-display">
                        <div className="card-container">
                            {cards.map((card, index) => {
                                return (
                                    <span key={index} className="card-item">
                                        <div className="card-text">
                                            <p className="card-page-number">
                                                {index + 1}
                                            </p>
                                            <p className="card-name">
                                                {card.name}
                                            </p>
                                        </div>
                                        <div className="individual-card-container">
                                            <img
                                                src={card.images.small}
                                                className="card-image"
                                            />
                                            <Button
                                                variant="primary"
                                                onClick={handleShow}
                                                value={card.id}
                                            >
                                                Card Details
                                            </Button>
                                        </div>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                ) : null}
            </div>

            <CardIndividual
                show={show}
                setShow={setShow}
                toShow={toShow}
                fullscreen={fullscreen}
            />
        </div>
    )
}

export default SetsPage
