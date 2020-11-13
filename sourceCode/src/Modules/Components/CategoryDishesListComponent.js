import React from 'react';

const CategoryDishesListComponent = (props) => {
    const [categoryDishes, setCategoryDishes] =  React.useState([]);


       const initialSetter=()=>{
           console.log(categoryDishes,'categoryDishes')
           setCategoryDishes(props.categoryDishes)
       }


       React.useEffect(() => {
		        initialSetter()
       }, [props.categoryDishes]);


    const renderCategoryDishes = () => {
        if(typeof categoryDishes !== 'undefined' && categoryDishes){
            return  categoryDishes.map((data,index) => {
                return(
                    <div className="p-col-12">
                        <div className="product-list-item">

                            <img src={`${data.dish_image}`} alt={data.dish_name} />
                            <div className="product-list-detail">
                                <div className="product-name">{data.dish_name}</div>
                                <div className="product-description">{data.dish_description}</div>
                                <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.dish_Type}</span>
                                {data.addonCat.length>1 && <p className="product-description red-text">Customizations available</p> }

                            </div>
                            <div className="product-list-action">
                                <span className="product-price">{data.dish_currency}{' '}{data.dish_price}</span>

                                <div className="input-group plus-minus-input">
                                    <div className="input-group-button">
                                        <button type="button" className="button hollow circle" data-quantity="minus" data-field="quantity" onClick={()=>props.addCartTotal()}>
                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    <input className="input-group-field" type="number" name="quantity" readOnly value={props.cartValue}/>
                                    <div className="input-group-button">
                                        <button type="button" className="button hollow circle" data-quantity="plus" data-field="quantity" onClick={()=>props.removeCartTotal()}>
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    };

	return (
	    <div>
            <div className="card">
                <div>{categoryDishes && renderCategoryDishes()}</div>
            </div>
        </div>
	)
};

export default CategoryDishesListComponent;

