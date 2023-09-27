import { Container } from 'react-bootstrap'
import data from './data.json'
import './Forums.css'
const Forums = () => {
    const forums = data.data
    return (
        <main className="forums-main">
            {forums.map((item, index) => {
                return (
                    <Container
                        key={index}
                        className="m-3  p-4 border border-secondary rounded forum-container"
                    >
                        <a href={item.link}>
                            <h1 className="forum-header">{item.title}</h1>
                            <p>{item.body}</p>
                        </a>
                    </Container>
                )
            })}
        </main>
    )
}

export default Forums
