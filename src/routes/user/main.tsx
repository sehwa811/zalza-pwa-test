import { Container, Card } from "react-bootstrap";

const Main = () => {
    return (
        <Container fluid className="mt-5">
            <Container>
                <span>지금 잠에 들면 N시간 잘 수 있어요</span>
            </Container>
            <Card>추천 콘텐츠 1</Card>
            <Card>추천 콘텐츠 2</Card>
        </Container>
    )
}

export default Main;