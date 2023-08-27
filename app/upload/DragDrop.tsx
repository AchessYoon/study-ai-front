
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import styles from './dragDrop.module.css'
import {useSetFile} from '../useFileContext'
import { useRouter } from "next/navigation";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function DragDrop() {
    const [file, setFile] = useState<any>(null);
    const [fileType, setFileType] = useState<boolean>(false);
    const setContextFile = useSetFile()
    const router = useRouter()
    const handleChange = useCallback((f: any) => {
        setFile(f);
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setContextFile({fileName: file.name, fileEncodedBase64: reader.result, isText: fileType});
            router.push("/");
        };
    },[file, fileType, router, setContextFile]);
    const handleTypeChange = useCallback((e: any) => {
        setFileType(e.target.checked);
    }, [setFileType])

    useEffect(()=>{
        (document.getElementsByTagName("label")[0]?.children[2].children[1] as any)?.style.setProperty("max-width", "none")
    })

    return (
        <div className={styles.dragDrop}>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={false}/>
            <label>
                <input role="switch" type="checkbox" onChange={e => handleTypeChange(e)}/>
            </label>
        </div>
    );
}
