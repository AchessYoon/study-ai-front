"use client"

import { PropsWithChildren, createContext, useContext, useState } from "react";

const FileCtx = createContext([{fileName: "", fileEncodedBase64: null, isText: false}, ()=>{}] as [{fileName: string, fileEncodedBase64: string | ArrayBuffer | null, isText:boolean}, (p:{fileName: string, fileEncodedBase64: string | ArrayBuffer | null, isText: boolean})=>void])

export function useSetFile() {
    const [, s] = useContext(FileCtx)
    return  ({fileName, fileEncodedBase64, isText}:{fileName: string, fileEncodedBase64: string | ArrayBuffer | null, isText: boolean})=>{s({fileName, fileEncodedBase64, isText})}
}

export function useGetFile() {
    const [c, ] = useContext(FileCtx)
    return  c
}

export default function Ctx({children}: PropsWithChildren) {
    const [t, setT] = useState<{fileName: string, fileEncodedBase64: string | ArrayBuffer | null, isText: boolean}>({fileName: "", fileEncodedBase64: null, isText: false})
    return <FileCtx.Provider value={[t, setT]}>
        {children}
    </FileCtx.Provider>
}