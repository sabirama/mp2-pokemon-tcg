import { useEffect, useState } from 'react'
import request from '../../../../../lib/apirequest'
import CardsDisplay from './CardsDisplay'
import CardIndividual from '../CardIndividual'
import './CardSearch.css'

const CardSearch = () => {
    const [cards, setCards] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [params, setParams] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [toShow, setToShow] = useState(0)
    const [fullscreen, setFullscreen] = useState(true)
    const [show, setShow] = useState(false)

    // fullscreen modal
    const handleShow = (e) => {
        setFullscreen(true)
        setToShow(e.target.value)
        setShow(true)
    }

    // search nput value
    function newValue(e) {
        setSearchValue(e.target.value)
    }

    function onClickHandler() {
        setParams(searchValue)
    }

    // api fetch of cards by query
    async function getCardsByQuery() {
        setError(null)
        try {
            const { data } =
                searchValue == ''
                    ? null
                    : await request.get(
                          `/cards${
                              !setSearchValue.length == 0
                                  ? `/?q=name:"*${params}*"`
                                  : ''
                          }`
                      )

            setCards(data.data)
        } catch (error) {
            setError('Error: failed fetch')
        }
        setLoading(false)
    }
    useEffect(() => {
        setLoading(true)
        getCardsByQuery()
    }, [params])

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={newValue}
                    value={searchValue}
                    className="search-bar"
                    placeholder="search for a card eg. pokemon names like charizard and venusaur"
                />
                <div className="search-button-container">
                    <button onClick={onClickHandler} className="search-button">
                        Search
                    </button>
                </div>
            </div>

            {searchValue == '' ? (
                <p className="take-action-text">Please search a Card.</p>
            ) : (
                CardsDisplay(loading, error, cards, handleShow)
            )}

            <CardIndividual
                show={show}
                setShow={setShow}
                toShow={toShow}
                fullscreen={fullscreen}
            />
        </>
    )
}

export default CardSearch
