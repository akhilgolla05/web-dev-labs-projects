

document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();
    if (typeof(Storage) !== "undefined") {
      sessionStorage.setItem("productName", document.getElementById("searchForm").productName.value);
      sessionStorage.setItem("warehouseCity", document.getElementById("searchForm").warehouseCity.value);
      sessionStorage.setItem("minQuantity", document.getElementById("searchForm").minQty.value);
      sessionStorage.setItem("maxQuantity", document.getElementById("searchForm").maxQty.value);
      sessionStorage.setItem("minPrice", document.getElementById("searchForm").minPrice.value);
      sessionStorage.setItem("maxPrice", document.getElementById("searchForm").maxPrice.value);
    }
    // Submit the form
    this.submit();
  });

const clearData = ()=>{
    document.getElementById("myform").reset();
}