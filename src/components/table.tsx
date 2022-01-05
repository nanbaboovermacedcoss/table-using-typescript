import { FC } from "react";
import './style.css';
interface TableProps {
    columns: string[];
    rows: (string | number)[][]
}

const Tabledata:FC<TableProps>=({columns, rows})=>{
    return<>
    <h1>Table Data</h1>
    <table>
        <tr>
            {columns.map((item, index) => <th key={index}>{item}</th>)}
        </tr>

        {rows.map((value) =>
         <tr>
            {value.map((value) =><td>{value}</td>)}
        </tr>)}

    </table>
    
    </>
}
export default Tabledata;