import { Route, Routes } from "react-router-dom"
import Home from '../pages/home/Home'
import Projeto from '../pages/Projeto/Projeto'

export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scrum" element={<Projeto />} />
        </Routes>
    );
}