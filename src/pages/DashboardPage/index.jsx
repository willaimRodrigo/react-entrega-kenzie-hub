import { HeaderDashboard } from "../../components/Header/HeaderDasnboard";
import { BodyUser } from "../../components/bodyUser";

export const DashboardPage = ({user, logout}) => {
    return (
        <>
            <header>
                <HeaderDashboard logout={logout}/>
            </header>
            <main>
                <BodyUser user={user}/>  
            </main> 
        </>
          
    )
}

