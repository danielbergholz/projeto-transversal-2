import React, { useState } from "react";
//import { render } from "react-dom";
import Calendar from "react-calendar";
import Styles from './Datepicker.module.css';

export default function Datepicker() {

    //Construtor
    const [date, setDate] = useState(new Date());
    let formatDate = "";
    let dia = "";
    let mes = ";"

    const onChange = date => {
      setDate(date);
      
    };

    // Formatação da data
    dia = date.getDate().toString();
    if(dia.length == 1){
        dia = ("0" + dia);
    }
    //console.log("DIA: " + dia);

    mes = (date.getMonth() + 1).toString();
    if(mes.length == 1){
        mes = ("0" + mes);
    }
    //console.log("MES: " + mes);

    // Data final formatada para API
    formatDate = (mes + "/" + dia + "/" + date.getFullYear());
    //console.log("Data Formatada: " + formatDate);


    return(
        <div className={Styles.header}>
            <Calendar 
                onChange={onChange} 
                value={date} 
                showNavigation="true"
                
            />
            <h3>Data Selecionada: {formatDate}</h3>
        </div>
    )
}

