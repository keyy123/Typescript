import {useRef, useEffect} from "react"

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
        //cant use focus on null but we can use optional chaining
        //we can't use focus b/c type never b/c ref type  - we need to choose the type of dom element
        //useRef<HTMLInputElement>
        //If you are sure your ref is necer null you can use non-null assertion aka ! (null!) so you dont need the optional chainer (?)
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}