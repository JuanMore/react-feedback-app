import Card from "../components/shared/Card"
import { Link } from "react-router-dom"
function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis asperiores eligendi distinctio vel magni amet magnam numquam explicabo consequatur illum!</p>
            </div>
            <p>Version: 1.0.0</p>
            <p>
                <Link to="/">Back</Link>
            </p>
        </Card>
    )
}

export default AboutPage
