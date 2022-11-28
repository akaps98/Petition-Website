import React from 'react'
// import { Link } from 'react-router-dom';
// import { LoadPages } from "../../middleware/load-data";
import '../Footer/style.css'

function Footer() {
  // const pages = LoadPages();

  return (
    <footer class="footer">
        <div class="footer-container">
            <div class="row">
                <div clas="col-lg-6 h-100 text-center text-lg-start my-auto">
                    <ul class="list-inline mb-1 center">
                        <p class="text-muted small mb-1 mb-lg-0 copyright">Copyright &copy; 2022 NoName. All Rights Reserved.</p>
                    </ul>
                </div> 
            </div>
        </div>
    </footer>
  )
}

export default Footer