import React from 'react'
import BannerCrumbComponent from '../../../../../components/banner/bannerCrumbComponent'
import CategorieContainer from '../container/filter/categorie.cotainer'
import FilterCategoriesComponent from './filterCategoriesComponent'
import MakeComponent from './filterMakeComponent'
import ShoppingComponent from './shoppingComponent'

const ShopComponent = () => {
    return (
        <>
            <BannerCrumbComponent />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <FilterCategoriesComponent />
                        <CategorieContainer />

                        <div className="sidebar-filter mt-50">
                            
                            <MakeComponent />
                        </div>
                    </div>

                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="colorb-default pt-1 pb-2 pl-2 d-flex justify-content-end">

                            <div className="input-group pt-2 pb-1 col-3 ">
                                {/**Filtro para definir como vai ser a listagem de produtos */}
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option defaultValue>Selecione...</option>
                                    <option value="1">Menor preço</option>
                                    <option value="2">Maior preço</option>
                                    <option value="3">Mais vendidos</option>
                                </select>
                            </div>
                        </div>

                        <section className="lattest-product-area pb-40 category-list">
                            <div className="row">
                                <ShoppingComponent />
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </>
    );
}
export default ShopComponent
