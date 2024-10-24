import { useEffect, useState } from "react";

//class component - old version
/*class Times extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 }
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);  /belső változóba mentettük el az intervalt, hogy a componentWillUnmount-ben le tudjuk állítani
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}*/

//pure functional component
/*
Leírás: A Timer függvény egy egyszerű időzítőt valósít meg, ami a komponens mountolásakor elindul és minden másodpercben növeli a seconds változó értékét. A komponens unmountolásakor leállítja az időzítőt.
*/
/*function Timer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const ticker = setInterval(() => setSeconds(seconds => seconds + 1), 1000); // a ticker változóba mentjük az intervalt, hogy a cleanup fázisban le tudjuk állítani
        return () => clearInterval(ticker); //belső óra leállítása
    }, [setSeconds]);

    //ez a render rész, a seconds változó értékét jeleníti meg, ami a state-ben van
    return (
        <div>
            Seconds: {seconds}
        </div>
    ); 
}*/

//Saját hookok használata 
//mindenképpen use-zal kell kezdődnie a függvény nevének, a saját hooknak
//a saját hookot kiszervezhetjük külön fájlba is, és importálhatjuk a fájlt, ahol használni szeretnénk, amelyik komponensben használni szeretnénk
//useTimer függvény: definiálok egy változót/state-t, ami a másodperceket fogja tárolni, majd useEffect segítségével elindítok egy időzítőt, ami minden másodpercben növeli a változó értékét. A cleanup fázisban leállítom az időzítőt, majd visszaadom a másodperceket.
function useTimer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const ticker = setInterval(() => setSeconds(seconds => seconds + 1), 1000); // a ticker változóba mentjük az intervalt, hogy a cleanup fázisban le tudjuk állítani
        return () => clearInterval(ticker); //belső óra leállítása
    }, [setSeconds]);

    return seconds;
}

//innentől tudok egy pure function componentet használni, ami a useTimer hookot használja
function Timer() {
    const seconds = useTimer();
    return (
        <div>
            Seconds: {seconds}
        </div>
    );
}

