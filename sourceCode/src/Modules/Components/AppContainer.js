import React, { useState } from 'react';
import axios from 'axios';
import MemoCategoryDishesListComponent from "./CategoryDishesListComponent";
import HeaderComponent from "./HeaderComponent";

const AppContainer = (props) => {
	const [foodData, setFoodData] =  React.useState({});
	const [tableMenuListData, setTableMenuListData] =  React.useState([]);
	const [categoryDishes, setCategoryDishes] =  React.useState([]);
	const [cartValue, setCartValue] =  React.useState(0);



    React.useEffect(() => {
        axios.get(`https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad`)
            .then(res => {
                const apiData = res.data;
                setFoodData(apiData?apiData[0]:{})
                setTableMenuListData(apiData[0].table_menu_list)
            })
    }, []);

    React.useEffect(() => {
        if(typeof tableMenuListData !== 'undefined' && tableMenuListData.length>0){
            GetMenuItemList("Salads and Soup")
		}
    }, [tableMenuListData]);


    const GetMenuItemList=(menu_category)=>{
    	console.log('GetMenuItemList menu_category',menu_category)
    	let tempCat=menu_category || "Salads and Soup";
        let itemFound = tableMenuListData.find(function (element) {
            return element.menu_category === tempCat;
        });
        setCategoryDishes(typeof itemFound.category_dishes !== 'undefined' ?itemFound.category_dishes:[] )
    }


   const renderMainMenu = () => {
        if(typeof tableMenuListData !== 'undefined' && tableMenuListData){
            return  tableMenuListData.map((item) => {
                return(
				<li class="nav-item">
					<a class="nav-link" onClick={()=>GetMenuItemList(item.menu_category)}>{item.menu_category}</a>
				</li>
                )
            })
        }
    };


    const addCartTotal=()=>{
        setCartValue(cartValue+1)
    }
    const removeCartTotal=()=>{
    	if(cartValue>0){
            setCartValue(cartValue-1)
		}
    }


    React.useEffect(() => {
       console.log('categoryDishes',categoryDishes)
    }, [categoryDishes]);



    return (
		<React.Fragment>
			<section>
				<HeaderComponent tableMenuListData={tableMenuListData} cartValue={cartValue} GetMenuItemList={() => GetMenuItemList()} foodData={foodData}/>
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
                                {renderMainMenu()}
							</ul>
						</div>
					</nav>
				</div>
				<div>
					<div className="dataview-demo">
						<MemoCategoryDishesListComponent categoryDishes={categoryDishes} cartValue={cartValue} addCartTotal={addCartTotal} removeCartTotal={removeCartTotal}/>
					</div>
				</div>

			</section>
		</React.Fragment>
	)
};
export default AppContainer