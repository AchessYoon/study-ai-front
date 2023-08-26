
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import styles from './dragDrop.module.css'

const fileTypes = ["JPG", "PNG", "GIF"];

export default function DragDrop() {
    const [file, setFile] = useState(null);
    const handleChange = (file: any) => {
        setFile(file);
    };
    useEffect(()=>{
        // console.log(document.getElementsByTagName("label")[0]?.children[2].children[1].innerHTML)
        (document.getElementsByTagName("label")[0]?.children[2].children[1] as any)?.style.setProperty("max-width", "none")
    })
    return (
        <>
        <div className={styles.dragDrop}>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} id={"dragDrop"}/>
        </div>
        </>
    );
}
