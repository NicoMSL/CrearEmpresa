import React from "react";
import "./Paginado.css";


export default function Paginado({ EmpresasPorPagina,Empresas,paginado,currentPage,setCurrentPage }){
  const pageNumbers = [];

  for (let i = 1; i<=Math.ceil(Empresas/EmpresasPorPagina) ; i++){
    pageNumbers.push(i);
  }

function handlePaginado(number){
  paginado(number)
}

function handleClick2(e) {
  if (e.target.value === "prev") {
    setCurrentPage(currentPage - 1);
  }
  if (e.target.value === "next") {
    setCurrentPage(currentPage + 1);
  }
}


  return (
    <nav>
      <div className="hplz">
      {currentPage === 1 ? null : (<button id="pn" className="btnpn"  value="prev" onClick={(e) => handleClick2(e)}>
        Atras </button> )}
      </div>
      <ul className="paginado">
        {pageNumbers?.map(number => (
          <li className="number" key={number}>
            <div className="hplz">
            <a onClick={() => handlePaginado(number)} className={number === currentPage 
              ?"numerito"
              :"notnumerito"} id="all" href >{number}</a>
        </div>
            </li>
))}
      </ul>
        <div className="hplz">
        {(currentPage >= Math.ceil(Empresas/EmpresasPorPagina)) 
        ?null 
        : (<button id="pn" className="btnpn" value="next" onClick={(e) => handleClick2(e)}>
          Siguiente </button>
        )}
        </div>
    </nav>
  )
}
