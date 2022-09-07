import UserList from "../components/UserList";
import JsonFormatter from "../components/JsonFormatter";
import ContextExercise from "../components/ContextExercise";

const HomePage = props => {
    return (
        <section className="home-page">
            <main className="home-page__container">
                <h1 className="home-page__title">Brenntag Assessment</h1>
                <UserList />
                <JsonFormatter />
                <ContextExercise />
            </main>
        </section>
    );
};

export default HomePage;
