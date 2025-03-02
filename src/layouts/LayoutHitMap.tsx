import { FC } from "react"
import { Outlet } from "react-router"

const LayoutHitMap: FC = () => {
    return (
        <section>
            Marks
            <Outlet />
        </section>
    )
}

export default LayoutHitMap