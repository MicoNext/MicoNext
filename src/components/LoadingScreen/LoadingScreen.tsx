import "./styles.css"

export default function LoadingScreen({ onClick, isExiting }: { onClick: () => void, isExiting: boolean }) {
    const exStyle = isExiting
      ? 'opacity-0 scale-105 blur-md pointer-events-none'
      : 'opacity-100 scale-100 blur-0'

    return <div className={`fixed w-screen h-screen flex flex-col justify-center items-center bg-[#000] ${exStyle}`}>
    <div className="container" onClick={onClick}>
        <div className="logo-masterpiece">
            <div className="logo-pulse"></div>
            <div className="logo-glow"></div>
            <div className="logo-core">
                <div className="logo-symbol">M</div>
            </div>
        </div>
    </div>
    </div>
}