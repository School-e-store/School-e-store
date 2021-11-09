import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
function Pagination()
{
   return (<div className="land_pagin">
     <div>  Home&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>&nbsp;&nbsp;Schools in Delhi&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>&nbsp;&nbsp;BBPS</div>
   </div>);
}
export default Pagination;