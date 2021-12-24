import React from "react";

export default function ProductCartv2() {
  return (
    <>
      <div className="bg-orange-500  p-2 m-4">
        <div className="ProductCartWrapper bg-blue-400 w-64 p-2 outline-stone-500 outline-1 hover:outline hover:shadow-sm" data-id="1">
          <div className="Product-children-center flex flex-row relative">
          <button className="heart__button heart__button--minimal absolute top-0 right-0 label z-10 m-2" data-style-name="MISA16"><svg class="heart-icon" width="20px" height="17px" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title"><title>Heart</title><path d="M10.0473476,15.9286957 C9.99170475,15.9286957 9.93606189,15.9113043 9.88856189,15.8765217 L9.16452618,15.3450435 C4.90377618,12.2208696 1.22388332,9.52243478 1.00945475,5.83895652 C0.932776177,4.50817391 1.32363332,3.3346087 2.14063332,2.44626087 C2.96102618,1.55373913 4.20416903,1 5.38624046,1 C7.27538332,1 8.94399046,1.95026087 10.1213119,3.68591304 C10.4164905,3.27686957 10.6682405,2.95478261 10.8975976,2.69321739 C11.8930619,1.55373913 13.1395976,1 14.7077762,1 C15.8898476,1 17.133669,1.55373913 17.9533833,2.44626087 C18.7703833,3.33530435 19.1612405,4.50817391 19.0838833,5.83895652 C18.8701333,9.52243478 15.190919,12.2208696 10.9294905,15.3450435 L10.2054547,15.8765217 C10.1579547,15.9113043 10.1029905,15.9286957 10.0473476,15.9286957"></path></svg><label className="hidden">Add to Hearts</label></button>
            <a href="/product">
              <div className="flex flex-col  w-60 bg-red-600">
                <div className="flex flex-col bg-yellow-600 w-auto relative ">
                  <div className="image-container  flex-none h-fit  bg-amber-500">
                    <img
                      className="p-card-img w-64 h-96"
                      src="https://pc-ap.rtrcdn.com/productimages/nomodel/270x/03/ELZ1.jpg"
                      alt="TRENDYOL MAN Siyah Unisex Oversize Fit Sweatshirt TMNAW22SW1462"
                    />
                  </div>
                  <div className="image-overlay absolute top-0 ">

                    <div className="header">2</div>
                    <div className="body ">3</div>
                    <div className="footer">4</div>
                  </div>
                </div>
                <div className="product description p-2">
                  <div className="product description center ">
                    <div className="desction-text line-clamp-2">
                      <span
                        className="prdct-desc-cntnr-ttl font-semibold text-base mr-1"
                        title="TRENDYOL MAN"
                      >
                        TRENDYOL MAN
                      </span><br/>
                      <span
                        className="prdct-desc-cntnr-name text-sm text-gray-700"
                        title="Siyah Unisex Oversize Fit Sweatshirt TMNAW22SW1462"
                      >
                        Siyah Unisex Oversize Fit Sweatshirt TMNAW22SW1462
                      </span>
                    </div>
                  </div>

                  <div className="ratings ">
                    <div class="star-w flex flex-row" >
                      <div class="empty">
                        <div class="star">*</div>
                      </div>
                      <div class="full">
                        <div class="star">*</div>
                      </div>
                    </div>
                  </div>
                  <div class="price-promotion-container">
                    <div class="prc-cntnr">
                      <div class="prc-box-sllng prc-box-sllng-w-dscntd text-base font-light">
                        149,99 TL
                      </div>
                    </div>
                    <div class="prmtn-cntnr">
                      <div className="prmtn border-2 p-1" title="Sepette %25 İndirim">
                        <div class="prmtn-ttl dscntd">SEPETTE %25 İNDİRİM</div>
                        <div class="prc-box-dscntd">112,49 TL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
