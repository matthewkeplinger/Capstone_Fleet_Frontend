import React from 'react';
import './TechTips.css'

function TechTips (){
    return(
        <div class = "wrapperTechTips">
        <div class="card text-white bg-secondary mb-3" style= {{maxWidth: 270}}>
        <div class="card-header"><h4 class = "card-title">5 Critical Maintenance Items</h4></div>
          <div class="card-body">
              <ul class="list-group">
                  <ul><h3>Oil</h3></ul>
                  <ul><h3>Air Filter</h3></ul>
                  <ul><h3>Brakes</h3></ul>
                  <ul><h3>Tires</h3></ul>
                  <ul><h3>Safety Equipment</h3></ul>
            </ul>
        </div>
        </div>
        </div>
    );
}
 
export default TechTips;