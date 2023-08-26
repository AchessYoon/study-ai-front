"use client"

import { PropsWithChildren, createContext, useContext, useState } from "react";

const FileCtx = createContext([{fileName: "", fileEncodedBase64: null}, ()=>{}] as [{fileName: string, fileEncodedBase64: string | ArrayBuffer | null}, (p:{fileName: string, fileEncodedBase64: string | ArrayBuffer | null})=>void])

export function useSetFile() {
    const [, s] = useContext(FileCtx)
    return  ({fileName, fileEncodedBase64}:{fileName: string, fileEncodedBase64: string | ArrayBuffer | null})=>{s({fileName, fileEncodedBase64})}
}

export function useGetFile() {
    const [c, ] = useContext(FileCtx)
    return  c
}

export default function Ctx({children}: PropsWithChildren) {
    const [t, setT] = useState<{fileName: string, fileEncodedBase64: string | ArrayBuffer | null}>({fileName: "", fileEncodedBase64: null})
    return <FileCtx.Provider value={[t, setT]}>
        {children}
    </FileCtx.Provider>
}