"use client"
import { useEffect, useState } from "react"

function Body() {
    const [click, setClick] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(count + 1)
    }, [click])
    return (
        <>
            <button onClick={() => setClick(click + 1)}>count: {count}</button>
        </>
    )
}

export default Body