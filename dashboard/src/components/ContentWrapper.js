import ProductsInDb from "./ProductsInDb";
import ContentCard from "./ContentCard";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import LastProductInDb from "./LastProductInDb";
import TopNavBar from "./TopBar";
import CategoriesInDb from "./CategoriesInDb";

export default function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <TopNavBar />

                <div class="container-fluid">
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">
                            Hampi Yura Dashboard
                        </h1>
                    </div>

                    <ContentRowTop />

                    <div class="row">
                        <LastProductInDb />

                        <ContentCard title="List of products in Database">
                            <ProductsInDb />
                        </ContentCard>
                                
                        <ContentCard title="List of categories in Database">
                            <CategoriesInDb />
                        </ContentCard>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
