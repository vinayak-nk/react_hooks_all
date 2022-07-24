# react_hooks_all

1. useState:   
    const [counter, updateCounter] = useState(0)

2. useEffect

3. useContext

4. useReducer
    const initialState = { count: 0, showText: false }
    reducer = (state, action) => {
        switch(action.type) {
            case INCREMENT: return state
            case DECREMENT: return state
            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    <button onClick={() => {dispatch({ type: 'INCREMENT' })}}>

5. useCallback

6. useMemo

7. useRef

8. useImperativeHandle

9. useLayoutEffect

10. useDebugValue
