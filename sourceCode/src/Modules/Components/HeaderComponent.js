import React, {useState} from 'react';
import { Button } from "primereact/button";

const HeaderComponent = (props) => {
    const [tableMenuListData, setTableMenuListData] =  React.useState([]);
    const [foodData, setFoodData] =  React.useState({});

       const initialSetter=()=>{
           setTableMenuListData(props.tableMenuListData)
           setFoodData(props.foodData)
       }


       React.useEffect(() => {
		        initialSetter()
       }, [props.tableMenuListData,props.foodData]);

   const GetMenuItemList=(menu_category)=>{
       console.log('menu_category child',menu_category)
       let temp=menu_category
       props.GetMenuItemList(temp)
   }




	return (
        <div>
            <div className="topnav">
                <a className="active" href="#home">{foodData.restaurant_name}</a>
                <div className="topnav-right">
                    <a href="#Order">My Order</a>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart"></Button>
                    <a>{props.cartValue}</a>
                </div>
            </div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        </div>
	)
};

export default HeaderComponent;

