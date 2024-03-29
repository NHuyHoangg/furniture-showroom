import React, { useState } from "react";
import "../../styles/admin.css";
import SupplierModal from "./modalSupplier";

export default function Supplier() {
    const [openModal, setOpenModal] = useState(false);

    const [statusArr, setStatusArr] = useState([true, true, true, true, true, true, true]);

    const RenderColumn =()=>{
        let list = []
        for(let i=0; i<7; i++)
            list.push(
            <div className={"table_row " + (i%2 ? "odd_row" : "even_row ") + (i===6 ? "last-row_shadow" : "")}>
                <div className="table_ele admin_fix-size-3">
                    <p>Item 1</p>
                </div>
                <div className="table_ele">
                    <p className="left_align">000000000000</p>
                </div>
                <div className="table_ele">
                    <p className="left_align">098xxxxxxxxx</p>
                </div>
                <div className="table_ele">
                    <p className="left_align">Abc_123</p>
                </div>
                <div className="table_ele admin_fix-size-1">
                    <button onClick={() => setOpenModal(true) }>Detail</button>
                </div>
                <div className="table_ele admin_fix-size-1">
                    <button 
                    className= {statusArr[i] ? "admin_active-btn": "admin_locked-btn"}
                    onClick={() => {
                        let tmpArr = [...statusArr];
                        tmpArr[i] = !tmpArr[i];
                        setStatusArr(tmpArr);
                    }}>
                    {statusArr[i] ? "Active" : "Locked"}
                    </button>
                </div>
            </div>)
        return list;
    }

    return (
        <div className="history_container">
            <SupplierModal trigger={openModal} setTrigger={setOpenModal} />
            <div className="history_content">
                <div className="search_container">
                    <input 
                    type="text" 
                    placeholder="Search..." />
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1em" 
                    height="1em">
                        <path 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-linecap="round" 
                        stroke-width="2" 
                        d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"/>
                    </svg>
                </div>
                <div className="table_ctn">
                    <div className="history_table admin_user-scroll">
                        <div className="table_row first_row">
                            <div className="table_ele admin_fix-size-3">
                                <p>Name</p>
                            </div>
                            <div className="table_ele">
                                <p className="left_align">Tax</p>
                            </div>
                            <div className="table_ele">
                                <p className="left_align">Phone</p>
                            </div>
                            <div className="table_ele">
                                <p className="left_align">PIC</p>
                            </div>
                            <div className="table_ele admin_fix-size-1">
                                <p>Detail</p>
                            </div>
                            <div className="table_ele admin_fix-size-1">
                                <p>Status</p>
                            </div>
                        </div>
                        <RenderColumn />
                    </div>
                </div>
                <div className="history_pagination">
                    <p className="text_pagination">
                        <button>Previous</button>
                    </p>
                    <p className="pagination_focus">
                        <button>1</button>
                    </p>
                    <p>
                        <button>2</button>
                    </p>
                    <p>
                        <button>3</button>
                    </p>
                    <p className="text_pagination">
                        <button>Next</button>
                    </p>
                </div>
            </div>
        </div>
    )
}