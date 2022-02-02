export default function Header() {
    return (
        <header className="flex items-center my-24  px-4 justify-center">
            <div className="brand flex items-center gap-2">
                <div className="logo">
                    <img width="80" src="./img/logo.svg" alt=""/>
                </div>
                <div className="text-6xl   font-medium">
                    Resourcez
                </div>
            </div>

        </header>
    )
}