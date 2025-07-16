import React from 'react'
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import Header from './components/Header/Index.tsx'
import Material from './components/Material/Index.tsx'
import Setting from './components/Setting/Index.tsx'
import EditArea from './components/EditArea/Index.tsx'

export default function LowcodeEditor() {
  return (
    <div className='h-[100vh] flex flex-col'>
        <div className="h-[60px] items-center border-b-[1px] border-[#000]">
            <Header></Header>
        </div>
        <Allotment>
            <Allotment.Pane preferredSize = {240} maxSize={500} minSize={300}>
                <Material></Material>
            </Allotment.Pane>
            <Allotment.Pane>
                <EditArea></EditArea>
            </Allotment.Pane>
            <Allotment.Pane preferredSize = {300} maxSize={500} minSize={300}>
                <Setting></Setting>
            </Allotment.Pane>
        </Allotment>
    </div>
  )
}
