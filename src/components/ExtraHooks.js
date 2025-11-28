import { useCallback, useMemo, useState } from "react"
import { findNthPrime } from "../utils/helper"

const ExtraHooks = () => {
    const [text, setText] = useState(0)
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const prime = useMemo(() => findNthPrime(text), [text])

    const toggleTheme = useCallback(() => {
        setIsDarkTheme(!isDarkTheme)
    }, [isDarkTheme])

    return (
        <div className={"m-4 p-2 h-100 w-96 border border-black " + (isDarkTheme && "bg-gray-900 text-white")}>
            <div>
                <button onClick={toggleTheme} className="m-10 p-2 bg-green-500">Toggle</button>
            </div>
            <div>
                <input type="number" value={text} onChange={(e) => { setText(e.target.value) }} className={"border border-black w-70 px-2 " + (isDarkTheme && "border border-white")} />
            </div>
            <div>
                <h1 className="font-bold text-3xl">nth prime: {prime}</h1>
            </div>
        </div>
    )
}
export default ExtraHooks