import { useState, useEffect } from 'react'
import request from '../../../../../lib/apirequest'
import './CardSet.css'
import SetsPage from './sets-page/SetsPage'

const CardSet = () => {
    const [sets, setSets] = useState([])
    const [id, setId] = useState('')

    async function getSets() {
        try {
            const { data } = await request.get('/sets/?orderBy=set')
            setSets(data.data)
        } catch (error) {
            null
        }
    }

    const clickhandler = (e) => {
        setId(e.target.value)
    }

    useEffect(() => {})

    useEffect(() => {
        getSets()
    }, [])

    return (
        <main className="sets-main">
            <div className="sets-display">
                {sets.map((set, index) => {
                    return (
                        <div key={index} className="set-link">
                            <div className="set-image-container">
                                <div>
                                    <img
                                        src={set.images.symbol}
                                        alt=""
                                        className="set-symbol"
                                    />
                                    <img
                                        src={set.images.logo}
                                        alt=""
                                        className="set-logo"
                                    />
                                    <input
                                        type="button"
                                        id={set.id}
                                        defaultValue={set.id}
                                        onClick={clickhandler}
                                        className="set-id"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <SetsPage id={id} />
        </main>
    )
}

export default CardSet
