import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
    return (
        <div>
            <Header />
            <hr />
            <main>
                <Outlet />
            </main>
            <hr />
            <Footer />
        </div>
    )
}
