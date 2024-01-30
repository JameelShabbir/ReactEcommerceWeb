import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from '../products.json';
import ProductCart from './ProductCart';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResults = 'Showing 01 - 12 of 139 Results'

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

    // pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // function to change the current page 
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // filter product based on the category

    const [selectCategory, setSelectCategory] = useState('All');
    const menuItem = [...new Set(Data.map((val) => val.category))]

    const filterItem = (curCat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curCat;
        })
        setSelectCategory(curCat)
        setProducts(newItem)
    }

    return (
        <>
            <PageHeader title='Our Shop Page' currentPage='shop' />
            {/* shop page */}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* layout and title  */}
                                <div className="shop-title d-flex justify-content-between flex-wrap">
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                                        <a className="grid" onClick={() => setGridList(!GridList)}>
                                            <i className="icofont-ghost"></i>
                                        </a>
                                        <a className="list" onClick={() => setGridList(!GridList)}>
                                            <i className="icofont-listine-dots"></i>
                                        </a>
                                    </div>
                                </div>

                                {/* product cart  */}
                                <div>
                                    <ProductCart GridList={GridList} products={currentProducts} />
                                </div>

                                {/* pagination of the cart product */}
                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCategory
                                    filterItem={filterItem}
                                    setItem={setProducts}
                                    menuItem={menuItem}
                                    setProducts={setProducts}
                                    selectCategory={selectCategory}
                                />
                            </aside>

                            <PopularPost />
                            {/* tags  */}
                            <Tags />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop